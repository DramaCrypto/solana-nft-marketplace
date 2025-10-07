const morgan = require("morgan");

const logger = require("./logger");

morgan.token("request", (req, res) => {
  return req;
});

morgan.token("response[body]", (req, res) => {
  return res.body;
});

module.exports = morgan(
  ":method :url :request[query] :request[body] :status :response-time ms - :response[body]",
  { stream: { write: (log) => logger.info(log) } }
);
