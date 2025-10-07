const express = require("express");
const { PrismaClient } = require("@prisma/client");
const { t } = require("i18next");
const path = require("path");
const debug = require("debug")("offers");

// helpers
const { isEmpty, responseData, responseError } = require(path.resolve(
  "helpers/utils"
));

//validations
const validateOffer = require(path.resolve("validations/offer"));

const router = express.Router();
const prisma = new PrismaClient();

router.post("/", async (req, res) => {
  try {
    if (!req.body.id) {
      const errors = validateOffer(req.body);
      if (errors.length > 0) {
        return responseError(res, errors[0]);
      }
      let user = await prisma.users.findFirst({
        where: {
          wallet_address: req.body.from_wallet_address,
        },
      });
      if (!user) {
        user = await prisma.users.create({
          data: {
            wallet_address: req.body.from_wallet_address,
          },
        });
        debug("New User", user);
      }
      const offer = await prisma.offers.findFirst({
        where: {
          user_id: user.id,
          item_id: req.body.item_id,
          status: "new",
        },
      });
      if (offer) {
        return responseError(res, t("errors.already_made_offer"));
      }
      await prisma.offers.create({
        data: {
          user_id: user.id,
          item_id: req.body.item_id,
          price: req.body.price,
          status: "new",
        },
      });
      return responseData(res);
    } else {
      // get offer
      const offer = await prisma.offers.findUnique({
        where: {
          id: req.body.id,
        },
      });
      if (!offer) {
        return responseError(
          res,
          t("errors.validation.invalid", { name: "offer" })
        );
      }

      const fields = ["status"];
      const values = {};
      fields.forEach((field) => {
        if (req.body[field]) {
          values[field] = req.body[field];
        }
      });

      // update offer
      await prisma.offers.update({
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
});

module.exports = router;
