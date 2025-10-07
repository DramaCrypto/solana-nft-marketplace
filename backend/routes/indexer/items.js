const express = require("express");
const { body, validationResult } = require("express-validator");
const { PrismaClient } = require("@prisma/client");
const { t } = require("i18next");
const path = require("path");
const debug = require("debug")("items");
const BigNumber = require("bignumber.js");

// helpers
const { responseData, responseError, LAMPORTS_PER_SOL } = require(path.resolve(
  "helpers/utils"
));
const logger = require(path.resolve("helpers/logger"));

const router = express.Router();
const prisma = new PrismaClient();

router.post(
  "/",
  [
    body("token_address")
      .isString()
      .withMessage(t("errors.validation.invalid", { name: "token address" })),
    body("status")
      .isString()
      .withMessage(t("errors.validation.invalid", { name: "status" })),
  ],
  async (req, res) => {
    try {
      logger.info(
        "======================= INDEXER(ITEM) ======================="
      );

      const { errors } = validationResult(req);
      if (errors.length > 0) {
        return responseError(res, errors[0].msg);
      }

      const { token_address: tokenAddress, status } = req.body;
      logger.info("TOKEN ADDRESS: " + tokenAddress);
      logger.info("STATUS: " + status);

      // get item
      const item = await prisma.items.findFirst({
        where: {
          contract_address: tokenAddress,
        },
      });
      if (!item) {
        logger.info("NOT FOUND ITEM");
        return responseError(
          res,
          t("errors.validation.invalid", { name: "token address" })
        );
      }
      logger.info("ITEM: " + JSON.stringify(item));

      if (req.body.price) {
        req.body.price = new BigNumber(req.body.price)
          .dividedBy(LAMPORTS_PER_SOL)
          .toNumber();
        logger.info("PRICE: " + req.body.price);
      }

      // list
      if (
        (item.status === "import" ||
          item.status === "sale" ||
          item.status === "cancel") &&
        status === "list"
      ) {
        logger.info("LIST");
        // save activity
        await prisma.activities.create({
          data: {
            item_id: item.id,
            type: "list",
            price: req.body.price,
            from_user_id: item.collector_id,
          },
        });
      }

      // sale
      if (item.status === "list" && status === "sale") {
        const {
          offerer_public_key: offererPublicKey,
          buyer_public_key: buyerPublicKey,
        } = req.body;
        let price = null;

        // buy
        if (buyerPublicKey) {
          logger.info("BUY");
          let buyer = await prisma.users.findFirst({
            where: {
              wallet_address: buyerPublicKey,
            },
          });
          if (!buyer) {
            buyer = await prisma.users.create({
              data: {
                wallet_address: buyerPublicKey,
              },
            });
          }
          req.body.collector_id = buyer.id;
          price = item.price;
        }

        // offer is accepted
        if (offererPublicKey) {
          logger.info("ACCEPTED");
          const offer = await prisma.offers.findFirst({
            where: {
              user: {
                wallet_address: offererPublicKey,
              },
            },
          });
          if (!offer) {
            return responseError(res, t("errors.invalid_request"));
          }
          req.body.collector_id = offer.user_id;
          price = offer.price;
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
        logger.info("CANCEL");
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
      logger.info("VALUES TO UPDATE: " + JSON.stringify(values));

      // update item
      await prisma.items.update({
        where: {
          id: item.id,
        },
        data: values,
      });
      return responseData(res);
    } catch (error) {
      debug(error);
      logger.info("ERROR: " + error);
      return responseError(res, t("errors.internal_error"));
    } finally {
      logger.info(
        "======================= INDEXER(ITEM) ======================="
      );
      logger.info("\n");
      logger.info("\n");
      await prisma.$disconnect();
    }
  }
);

module.exports = router;
