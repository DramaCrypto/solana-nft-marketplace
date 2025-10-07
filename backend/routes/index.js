const express = require("express");
const router = express.Router();
const path = require("path");

const apiRouter = require("./api");
const actionsRouter = require("./actions");
const metadataRouter = require("./actions");
const indexerRouter = require("./indexer");
const adminRouter = require("./admin");

router.use("/api", apiRouter);
router.use("/actions", actionsRouter);
router.use("/metadata", metadataRouter);
router.use("/indexer", indexerRouter);
router.use("/admin", adminRouter);
router.use("*", (req, res) => {
  return res.sendFile(path.resolve("views/index.html"));
});

module.exports = router;
