const express = require("express");
const { body, validationResult } = require("express-validator");
const { PrismaClient } = require("@prisma/client");
const { t } = require("i18next");
const path = require("path");
const debug = require("debug")("collections");
const { PublicKey } = require("@solana/web3.js");

const router = express.Router();
const prisma = new PrismaClient();

// helpers
const logger = require(path.resolve("helpers/logger.js"));
const { responseData, responseError, getAllNFTs } = require(path.resolve(
  "helpers/utils.js"
));

router.post(
  "/",
  body("mint_key")
    .isString()
    .withMessage(t("errors.validation.required", { name: "mint key" })),
  async (req, res) => {
    try {
      const { errors } = validationResult(req);
      if (errors.length > 0) {
        return responseError(res, errors[0].msg);
      }
      logger.info("admin-min_key: " + req.body.mint_key);
      const collection = await prisma.collections.findFirst({
        where: {
          contract_address: req.body.mint_key,
        },
      });
      if (collection) {
        return responseError(res, t("errors.already_exist"));
      }
      const collectionInfo = await getAllNFTs(new PublicKey(req.body.mint_key));
      logger.info("admin-collection: " + JSON.stringify(collectionInfo));
      const { owner: userPubKey, metadata: collectionMetaData } =
        collectionInfo;
      let user = await prisma.users.findFirst({
        where: {
          wallet_address: userPubKey,
        },
      });
      if (!user) {
        user = await prisma.users.create({
          data: {
            wallet_address: userPubKey,
          },
        });
      }
      logger.info("admin-user: " + JSON.stringify(user));
      const newCollection = await prisma.collections.create({
        data: {
          user_id: user.id,
          name: collectionMetaData.name,
          description: collectionMetaData.description,
          image_background: collectionMetaData.image,
          image: collectionMetaData.image,
          contract_address: req.body.mint_key,
        },
      });
      return responseData(res, { id: newCollection.id });
    } catch (error) {
      logger.info("admin-error: " + error);
      return responseError(res, t("errors.internal_error"));
    } finally {
      prisma.$disconnect();
    }
  }
);

module.exports = router;
