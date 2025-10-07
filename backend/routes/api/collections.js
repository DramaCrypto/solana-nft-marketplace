const express = require("express");
const { param, validationResult } = require("express-validator");
const { PrismaClient } = require("@prisma/client");
const multer = require("multer");
const { t } = require("i18next");
const path = require("path");
const debug = require("debug")("collections");

// helpers
const { isEmpty, responseData, responseError } = require(path.resolve(
  "helpers/utils"
));

// validations
const validateCollection = require(path.resolve("validations/collection"));

const router = express.Router();
const prisma = new PrismaClient();

router.post(
  "/",
  multer({ dest: "uploads/collections" }).single("image"),
  async (req, res) => {
    try {
      if (!isEmpty(req.file)) {
        debug(req.file);
        req.body.image = req.file.path;
      }
      const errors = validateCollection(req.body);
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
      await prisma.collections.create({
        data: {
          name: req.body.name,
          image: req.body.image,
          user_id: user.id,
        },
      });
      return responseData(res);
    } catch (error) {
      debug(error);
      return responseError(res, t("errors.internal_error"));
    } finally {
      await prisma.$disconnect();
    }
  }
);

router.get("/", async (req, res) => {
  try {
    const prismaOptions = {
      include: {
        user: true,
        items: true,
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

    let { name, featured } = req.query;
    if (typeof name === "string") {
      prismaOptions.where.name = { contains: name };
    }

    featured = Number(featured);
    if (featured === 0 || featured === 1) {
      prismaOptions.where.featured = Boolean(featured);
    }

    // sort;
    const { sort_key: sortKey, sort_arrow: sortArrow } = req.query;
    if (sortArrow === "desc" || sortArrow === "asc") {
      if (sortKey === "featured") {
        prismaOptions.orderBy = {
          [sortKey]: sortArrow,
        };
      }
      if (sortKey === "items") {
        prismaOptions.include._count = {
          select: {
            items: true,
          },
        };
        prismaOptions.orderBy = {
          items: {
            _count: sortArrow,
          },
        };
      }
    }

    const collections = await prisma.collections.findMany(prismaOptions);
    return responseData(res, collections);
  } catch (error) {
    debug(error);
    return res.status(500).send(t("errors.internal_error"));
  } finally {
    prisma.$disconnect();
  }
});

router.get(
  "/:id",
  param("id")
    .isNumeric()
    .withMessage(t("errors.validation.invalid", { name: "Collection" })),
  async (req, res) => {
    try {
      const { errors } = validationResult(req);
      if (errors.length > 0) {
        return responseError(res, errors[0].msg);
      }

      const { id } = req.params;

      const collection = await prisma.collections.findUnique({
        include: {
          items: true,
        },
        where: {
          id: parseInt(id),
        },
      });
      if (!collection) {
        return responseError(
          res,
          t("errors.validation.invalid", { name: "Collection" })
        );
      }

      return responseData(res, collection);
    } catch (error) {
      debug(error);
      return res.status(500).send(t("errors.internal_error"));
    } finally {
      prisma.$disconnect();
    }
  }
);

module.exports = router;
