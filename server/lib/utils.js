const path = require("path");

function absolutePath(...args) {
  if (!__dirname) {
    throw new Error("Cannot determine __dirname.");
  }

  if (args.some((arg) => typeof arg !== "string" || arg === "")) {
    throw new Error("All arguments must be non-empty strings.");
  }

  return path.join(__dirname, "..", ...args);
}

module.exports = { absolutePath };
