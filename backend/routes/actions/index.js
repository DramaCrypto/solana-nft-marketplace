const express = require("express");
const router = express.Router();

const itemsRouter = require("./items");

router.use("/items", itemsRouter);

module.exports = router;
