const winston = require("winston");
require("winston-daily-rotate-file");
const { level } = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
  ),
  // defaultMeta: { service: "nft_market" },
  transports: [
    new winston.transports.DailyRotateFile({
      filename: "./logs/indexer-%DATE%.log",
      datePattern: "YYYY-MM-DD-HH",
      zippedArchive: true,
      maxSize: "40m",
      maxFiles: "30d",
    }),
    new winston.transports.DailyRotateFile({
      filename: "./logs/ERROR_indexer-%DATE%.log",
      datePattern: "YYYY-MM-DD-HH",
      zippedArchive: true,
      maxSize: "40m",
      maxFiles: "120d",
      level: "error",
    }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );
}

module.exports = { logger };
