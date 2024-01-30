const express = require("express");
const router = express.Router();

router.use("/homes", require("./homes/route"));
module.exports = router;
