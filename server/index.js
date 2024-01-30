const express = require("express");
const cors = require("cors");
const { corsOptions } = require("./config/cors-options");
const { logger } = require("./middleware/logger");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(logger);
app.use(cors(corsOptions));

app.use("/", require("./routes/index"));
app.use("/api", require("./routes/api/route"));
app.use("*", (req, res) => {
  res
    .status(404)
    .header("Content-Type", "application/json")
    .send({ error: "Page not found" });
});

app.listen(PORT, () => {
  console.log(`server is hosting at http://localhost:${PORT}`);
});
