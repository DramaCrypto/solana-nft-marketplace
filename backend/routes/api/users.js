const express = require("express");
const { param, validationResult } = require("express-validator");
const { PrismaClient } = require("@prisma/client");
const multer = require("multer");
const { t } = require("i18next");
const path = require("path");
const debug = require("debug")("users");

// helpers
const { isEmpty, responseData, responseError } = require(path.resolve(
  "helpers/utils"
));

// validations
const validateUser = require(path.resolve("validations/user"));

const router = express.Router();
const prisma = new PrismaClient();

router.post(
  "/",
  multer({ dest: "uploads/users" }).single("avatar"),
  async (req, res) => {
    try {
      if (!isEmpty(req.file)) {
        debug(req.file);
        req.body.avatar = req.file.path;
      }
      debug(req.body);
      if (!req.body.id) {
        const errors = validateUser(req.body);
        if (errors.length > 0) {
          return responseError(res, errors[0]);
        }

        // check if wallet address is already exist
        const checkResult = await prisma.users.findFirst({
          where: {
            wallet_address: req.body.wallet_address,
          },
        });
        if (checkResult) {
          return responseError(
            res,
            t("errors.validation.duplicated", { name: "Wallet Address" })
          );
        }

        // save user
        const newUser = await prisma.users.create({
          data: {
            name: req.body.name,
            wallet_address: req.body.wallet_address,
            email: req.body.email,
            phone_number: req.body.phone_number,
            bio: req.body.bio,
          },
        });

        return responseData(res, newUser);
      } else {
        // get user
        const user = await prisma.users.findUnique({
          where: {
            id: parseInt(req.body.id),
          },
        });
        if (!user) {
          return responseError(
            res,
            t("errors.validation.invalid", { name: "User" })
          );
        }

        const fields = ["name", "email", "phone_number", "bio", "avatar"];
        const values = {};
        fields.forEach((field) => {
          if (typeof req.body[field] === "string") {
            values[field] = req.body[field];
          }
        });
        debug("Update User", values);

        // update user
        const updatedUser = await prisma.users.update({
          where: {
            id: parseInt(req.body.id),
          },
          data: values,
        });
        return responseData(res, updatedUser);
      }
    } catch (error) {
      debug(error);
      return res.status(500).send(t("errors.internal_error"));
    } finally {
      prisma.$disconnect();
    }
  }
);

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const user = await prisma.users.findUnique({
      where: {
        id,
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
});

router.get(
  "/:id/collections",
  param("id")
    .isNumeric()
    .withMessage(t("errors.validation.invalid", { name: "User" })),
  async (req, res) => {
    try {
      const { errors } = validationResult(req);
      if (errors.length > 0) {
        return responseError(res, errors[0].msg);
      }

      const { id } = req.params;

      const user = await prisma.users.findUnique({
        where: {
          id: parseInt(id),
        },
      });
      if (!user) {
        debug("Not Found User");
        return responseError(
          res,
          t("errors.validation.invalid", { name: "User" })
        );
      }

      const collections = await prisma.collections.findMany({
        include: {
          items: true,
        },
        where: {
          user_id: user.id,
        },
      });

      return responseData(res, collections);
    } catch (error) {
      debug(error);
      return res.status(500).send(t("errors.internal_error"));
    } finally {
      prisma.$disconnect();
    }
  }
);

router.get(
  "/:id/items",
  param("id")
    .isNumeric()
    .withMessage(t("errors.validation.invalid", { name: "User" })),
  async (req, res) => {
    try {
      const { errors } = validationResult(req);
      if (errors.length > 0) {
        return responseError(res, errors[0].msg);
      }

      const { id } = req.params;

      const user = await prisma.users.findUnique({
        where: {
          id: parseInt(id),
        },
      });
      if (!user) {
        debug("Not Found User");
        return responseError(
          res,
          t("errors.validation.invalid", { name: "User" })
        );
      }

      const items = await prisma.items.findMany({
        include: {
          collector: true,
        },
        where: {
          collector_id: user.id,
        },
      });

      return responseData(res, items);
    } catch (error) {
      debug(error);
      return res.status(500).send(t("errors.internal_error"));
    } finally {
      prisma.$disconnect();
    }
  }
);

router.get(
  "/:id/offers",
  param("id")
    .isNumeric()
    .withMessage(t("errors.validation.invalid", { name: "User" })),
  async (req, res) => {
    try {
      const { errors } = validationResult(req);
      if (errors.length > 0) {
        return responseError(res, errors[0].msg);
      }

      const { id } = req.params;

      const user = await prisma.users.findUnique({
        where: {
          id: parseInt(id),
        },
      });
      if (!user) {
        debug("Not Found User");
        return responseError(
          res,
          t("errors.validation.invalid", { name: "User" })
        );
      }

      const offers = await prisma.offers.findMany({
        include: {
          item: true,
          user: true,
        },
        where: {
          OR: [
            {
              user_id: parseInt(id),
            },
            {
              item: {
                collection_id: parseInt(id),
              },
            },
          ],
        },
      });

      return responseData(res, offers);
    } catch (error) {
      debug(error);
      return res.status(500).send(t("errors.internal_error"));
    } finally {
      prisma.$disconnect();
    }
  }
);

module.exports = router;
