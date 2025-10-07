const express = require("express");
const { body, validationResult } = require("express-validator");
const { PrismaClient } = require("@prisma/client");
const { t } = require("i18next");
const path = require("path");
const debug = require("debug")("auth");

// helpers
const { responseData, responseError } = require(path.resolve("helpers/utils"));

const router = express.Router();
const prisma = new PrismaClient();

router.post(
  "/signin",
  body("wallet_address")
    .isString()
    .withMessage(t("errros.validation.required", { name: "Wallet Address" })),
  async (req, res) => {
    try {
      const { errors } = validationResult(req);
      if (errors.length > 0) {
        return responseError(res, errors[0].msg);
      }
      const { wallet_address: walletAddress } = req.body;
      const user = await prisma.users.findFirst({
        where: {
          wallet_address: walletAddress,
        },
      });
      if (!user) {
        return responseError(
          res,
          t("errors.validation.invalid", { name: "User" })
        );
      }
      return responseData(res, user);
    } catch (error) {
      debug(error);
      return res.status(500).send(t("errors.internal_error"));
    } finally {
      prisma.$disconnect();
    }
  }
);

module.exports = router;
