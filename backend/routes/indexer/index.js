const express = require("express");
const router = express.Router();

const itemsRouter = require("./items");
const offersRouter = require("./offers");

router.use("/items", itemsRouter);
router.use("/offers", offersRouter);

module.exports = router;
