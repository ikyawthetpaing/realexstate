const fs = require("fs");
const fsPromises = require("fs/promises");
const { absolutePath } = require("../lib/utils");

const logDirectory = absolutePath("logs");
const eventsLogPath = absolutePath("logs", "events.log");

const logger = (req, res, next) => {
  const timestamp = new Date().toLocaleString();
  const logMessage = `${timestamp} - ${req.method} ${req.url}\n`;

  if (!fs.existsSync(logDirectory)) {
    fsPromises.mkdir(logDirectory);
  }

  fsPromises.appendFile(eventsLogPath, logMessage);

  next();
};

module.exports = { logger };
