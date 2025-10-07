const express = require("express");
const { PrismaClient } = require("@prisma/client");
const multer = require("multer");
const { t } = require("i18next");
const path = require("path");
const debug = require("debug")("items");

// helpers
const { isEmpty, responseData, responseError } = require(path.resolve(
  "helpers/utils"
));

// validations
const validateItem = require(path.resolve("validations/item"));

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const prismaOptions = {
      include: {
        collector: true,
      },
    };

    // pagination
    let { pageIndex, pageSize } = req.query;
    pageIndex = Number(pageIndex);
    pageSize = Number(pageSize);
    if (isNaN(pageIndex) || pageIndex < 0) {
      pageIndex = null;
    }
    if (isNaN(pageSize) || pageSize < 1) {
      pageSize = null;
    }
    if (pageIndex && pageSize) {
      prismaOptions.skip = (pageIndex - 1) * pageSize;
      prismaOptions.take = pageSize;
    }

    // conditions
    prismaOptions.where = {};

    let {
      featured,
      collection_id: collectionId,
      name,
      status,
      // price,
      sort_key: sortKey,
      sort_arrow: sortArrow,
      min_price: minPrice,
      max_price: maxPrice,
    } = req.query;
    featured = Number(featured);
    if (featured === 0 || featured === 1) {
      prismaOptions.where.featured = Boolean(featured);
    }

    collectionId = Number(collectionId);
    if (collectionId > 0) {
      prismaOptions.where.collection_id = collectionId;
    }

    if (typeof name === "string") {
      prismaOptions.where.name = { contains: name };
    }

    if (typeof status === "string") {
      let statusList = status.split(",");
      if (statusList.indexOf("featured") > -1) {
        prismaOptions.where.featured = true;
      }
      statusList = statusList.filter(
        (status) => ["import", "list", "sale"].indexOf(status) > -1
      );
      if (statusList.length > 0) {
        prismaOptions.where.status = { in: statusList };
      }
    }

    minPrice = Number(minPrice);
    maxPrice = Number(maxPrice);
    if (minPrice > 0) {
      prismaOptions.where.price = {
        gt: minPrice,
      };
    }
    if (maxPrice > 0) {
      prismaOptions.where.price = {
        lt: maxPrice,
      };
    }

    // sort
    if (
      ["price", "featured"].indexOf(sortKey) > -1 &&
      (sortArrow === "desc" || sortArrow === "asc")
    ) {
      prismaOptions.orderBy = {
        [sortKey]: sortArrow,
      };
    }

    const items = await prisma.items.findMany(prismaOptions);
    return responseData(res, items);
  } catch (error) {
    debug(error);
    return res.status(500).send(t("errors.internal_error"));
  } finally {
    prisma.$disconnect();
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const item = await prisma.items.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        creator: true,
        collector: true,
        offers: {
          include: {
            user: true,
          },
          where: {
            status: "new",
          },
        },
        activities: {
          include: {
            from_user: true,
            to_user: true,
          },
        },
      },
    });
    if (!item) {
      debug("Not Found Item");
      return responseError(
        res,
        t("errors.validation.invalid", { name: "Item" })
      );
    }
    return responseData(res, item);
  } catch (error) {
    debug(error);
    return responseError(res, t("errors.internal_error"));
  } finally {
    prisma.$disconnect();
  }
});

router.get("/:id/offers", async (req, res) => {
  const { id } = req.params;
  try {
    const item = await prisma.items.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!item) {
      debug("Not Found Item");
      return responseError(t("errors.validation.invalid", { name: "Item" }));
    }
    if (item.status !== "listed") {
      return responseError(t("errors.item_not_listed"));
    }
    const offers = prisma.offers.findMany({
      where: {
        item_id: item.id,
      },
    });
    return responseData(offers);
  } catch (error) {
    debug(error);
    return res.status(500).send(t("errors.internal_error"));
  } finally {
    prisma.$disconnect();
  }
});

router.get("/:id/activities", async (req, res) => {
  const { id } = req.params;
  try {
    const item = await prisma.items.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!item) {
      debug("Not Found Item");
      return responseError(t("errors.validation.invalid", { name: "Item" }));
    }
    if (item.status !== "listed") {
      return responseError(t("errors.item_not_listed"));
    }
    const offers = prisma.activities.findMany({
      where: {
        item_id: item.id,
      },
    });
    return responseData(offers);
  } catch (error) {
    debug(error);
    return res.status(500).send(t("errors.internal_error"));
  } finally {
    prisma.$disconnect();
  }
});

router.post(
  "/",
  multer({ dest: "uploads/items" }).single("image"),
  async (req, res) => {
    try {
      if (!req.body.id) {
        if (!isEmpty(req.file)) {
          debug(req.file);
          req.body.image = req.file.path;
        }
        const errors = validateItem(req.body);
        if (errors.length > 0) {
          return responseError(res, errors[0]);
        }

        // get user with wallet address
        let user = await prisma.users.findFirst({
          where: {
            wallet_address: req.body.wallet_address,
          },
        });
        if (!user) {
          user = await prisma.users.create({
            data: {
              wallet_address: req.body.wallet_address,
            },
          });
          debug("New User", user);
        }

        // save item
        const newItem = await prisma.items.create({
          data: {
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            price: parseFloat(req.body.price),
            creator_id: user.id,
            collector_id: user.id,
            status: "import",
            contract_address: req.body.contract_address,
            royatity: parseFloat(req.body.royatity),
            collection_id: parseFloat(req.body.collection_id),
          },
        });

        // save activity
        await prisma.activities.create({
          data: {
            item_id: newItem.id,
            type: "import",
            price: newItem.price,
            from_user_id: user.id,
          },
        });

        return responseData(res, {
          id: newItem.id,
          blink_url:
            process.env.BLINK_HOST +
            "/?action=solana-action:" +
            req.protocol +
            "://" +
            req.hostname +
            "/actions/items/" +
            newItem.id,
          metadata_url:
            req.protocol +
            "://" +
            req.hostname +
            "/metadata/items/" +
            newItem.id,
        });
      } else {
        // get item
        const item = await prisma.items.findUnique({
          where: {
            id: req.body.id,
          },
        });
        if (!item) {
          return responseError(
            res,
            t("errors.validation.invalid", { name: "Item" })
          );
        }

        const { status, price } = req.body;

        // list
        if (
          (item.status === "import" ||
            item.status === "sale" ||
            item.status === "cancel") &&
          status === "list"
        ) {
          // save activity
          await prisma.activities.create({
            data: {
              item_id: item.id,
              type: "list",
              price,
              from_user_id: item.collector_id,
            },
          });
        }

        // sale
        if (item.status === "list" && status === "sale") {
          let { offer_id: offerId, buyer_public_key: buyerPublicKey } =
            req.body;

          let price = null;

          // buy
          if (buyerPublicKey) {
            let user = await prisma.users.findFirst({
              where: {
                wallet_address: req.body.buyer_public_key,
              },
            });
            if (!user) {
              user = await prisma.users.create({
                data: {
                  wallet_address: req.body.buyer_public_key,
                },
              });
            }
            req.body.collector_id = user.id;
            price = item.price;
          }

          // offer is accepted
          offerId = Number(offerId);
          if (offerId > 0) {
            const offer = await prisma.offers.findUnique({
              where: {
                id: offerId,
              },
            });
            if (offer) {
              req.body.collector_id = offer.user_id;
              price = offer.price;
            }
          }

          // process offers
          await prisma.offers.updateMany({
            where: {
              item_id: item.id,
              status: "new",
            },
            data: {
              status: "processed",
            },
          });

          // save activity
          await prisma.activities.create({
            data: {
              item_id: item.id,
              type: "sale",
              price,
              from_user_id: item.collector_id,
              to_user_id: req.body.collector_id,
            },
          });
        }

        // cancel
        if (item.status === "list" && status === "cancel") {
          // process offers
          await prisma.offers.updateMany({
            where: {
              item_id: item.id,
              status: "new",
            },
            data: {
              status: "processed",
            },
          });

          // save activity
          await prisma.activities.create({
            data: {
              item_id: item.id,
              type: "cancel",
              from_user_id: item.collector_id,
            },
          });
        }

        const fields = ["status", "collector_id", "price"];
        const values = {};
        fields.forEach((field) => {
          if (req.body[field]) {
            values[field] = req.body[field];
          }
        });

        // update item
        await prisma.items.update({
          where: {
            id: req.body.id,
          },
          data: values,
        });
        return responseData(res);
      }
    } catch (error) {
      debug(error);
      return responseError(res, t("errors.internal_error"));
    } finally {
      await prisma.$disconnect();
    }
  }
);

module.exports = router;
