const { createLogger, format } = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");

const { combine, timestamp, label, printf } = format;

const logger = createLogger({
  level: "debug",
  format: combine(
    timestamp(),
    printf(({ message, timestamp }) => {
      return `${timestamp} ${message}`;
    })
  ),
  transports: [
    new DailyRotateFile({
      filename: "logs/%DATE%.log",
      datePattern: "YYYYMMDD",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "14d",
    }),
  ],
});

module.exports = logger;
