const express = require("express");
const router = express.Router();

const collectionsRouter = require("./collections");
const itemsRouter = require("./items");

router.use("/collections", collectionsRouter);
router.use("/items", itemsRouter);

module.exports = router;
