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
  [
    body("mint_keys")
      .isString()
      .withMessage(
        t("errors.validation.invalid", { name: "the list of mint keys" })
      ),
    body("collection_key")
      .isString()
      .withMessage(t("errors.validation.invalid", { name: "collection" })),
  ],
  async (req, res) => {
    try {
      logger.info(
        "==================== IMPORT ITEMS ========================="
      );
      const { errors } = validationResult(req);
      if (errors.length > 0) {
        return responseError(res, errors[0].msg);
      }
      let { collection_key: collectionKey, mint_keys: mintKeys } = req.body;
      logger.info("COLLETION KEY: " + collectionKey);
      logger.info("MINT KEYS: " + mintKeys);
      const collection = await prisma.collections.findFirst({
        where: {
          contract_address: collectionKey,
        },
      });
      if (!collection) {
        logger.info("INVALID_COLLECTION");
        return responseError(
          res,
          t("errors.validation.invalid", { name: "collection" })
        );
      }
      mintKeys = mintKeys.split(",");
      for (let i = 0; i < mintKeys.length; i++) {
        // check if already exist
        const item = await prisma.items.findFirst({
          where: {
            contract_address: mintKeys[i],
          },
        });
        if (item) {
          logger.info("ALREADY EXIST: " + mintKeys[i]);
          continue;
        }

        // get item info
        const itemInfo = await getAllNFTs(new PublicKey(mintKeys[i]));
        logger.info("ITEM INFO: " + JSON.stringify(itemInfo));
        let newItem = {};

        // check collection
        if (
          itemInfo.collect &&
          itemInfo.collect !== collection.contract_address
        ) {
          logger.info("DECLINED ITEM: " + mintKeys[i]);
          continue;
        }

        // get item owner
        let itemOwner = await prisma.users.findFirst({
          where: {
            wallet_address: itemInfo.owner,
          },
        });
        if (!itemOwner) {
          itemOwner = await prisma.users.create({
            data: {
              wallet_address: itemInfo.owner,
            },
          });
        }

        newItem["name"] = itemInfo.metadata.name;
        newItem["description"] = itemInfo.metadata.description;
        newItem["image"] = itemInfo.metadata.image;
        newItem["attributes"] = JSON.stringify(itemInfo.metadata.attributes);
        newItem["contract_address"] = mintKeys[i];
        newItem["collection_id"] = collection.id;
        newItem["collector_id"] = itemOwner.id;
        newItem["status"] = "import";

        logger.info("NEW ITEM: " + JSON.stringify(newItem));

        newItem = await prisma.items.create({
          data: newItem,
        });

        // set attributes
        const { attributes } = itemInfo.metadata;
        for (let j = 0; j < attributes.length; j++) {
          logger.info("ATTRIBUTE TYPE: " + attributes[i].trait_type);
          logger.info("ATTRIBUTE VALUE: " + attributes[i].value);
          attribute = await prisma.attributes.findFirst({
            where: {
              collection_id: collection.id,
              type: attributes[i].trait_type,
              value: String(attributes[i].value),
            },
          });
          if (!attribute) {
            attribute = await prisma.attributes.create({
              data: {
                collection_id: collection.id,
                type: attributes[i].trait_type,
                value: String(attributes[i].value),
              },
            });
            logger.info("NEW ATTRIBUTE: " + JSON.stringify(attribute));
          }
        }
      }
      return responseData(res);
    } catch (error) {
      logger.info("ERROR: " + error);
      return responseError(res, t("errors.internal_error"));
    } finally {
      logger.info(
        "==================== IMPORT ITEMS ========================="
      );
      logger.info("\n");
      logger.info("\n");
      prisma.$disconnect();
    }
  }
);

module.exports = router;
