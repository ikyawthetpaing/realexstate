const express = require("express");
const router = express.Router();

const { absolutePath } = require("../../../lib/utils");

router.get("/", (req, res) => {
  try {
    const filePath = absolutePath("helpers", "data.json");
    res.setHeader("Content-Type", "application/json").sendFile(filePath);
  } catch (err) {
    res
      .status(500)
      .header("Content-Type", "application/json")
      .send({ error: "Internal server error" });
  }
});

module.exports = router;
