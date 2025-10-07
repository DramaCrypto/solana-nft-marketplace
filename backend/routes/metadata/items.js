const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/:id", (req, res) => {
  return res.json({});
});

module.exports = router;
