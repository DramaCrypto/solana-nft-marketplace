const express = require("express");
const router = express.Router();

const itemsRouter = require("./items");
const offersRouter = require("./offers");
const collectionsRouter = require("./collections");
const usersRouter = require("./users");
const authRouter = require("./auth");

router.use("/items", itemsRouter);
router.use("/offers", offersRouter);
router.use("/collections", collectionsRouter);
router.use("/users", usersRouter);
router.use("/auth", authRouter);

module.exports = router;
