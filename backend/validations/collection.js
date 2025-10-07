const path = require("path");
const i18next = require("i18next");

// helpers
const { isEmpty } = require(path.resolve("helpers/utils"));

module.exports = (data = {}) => {
  const errors = [];
  if (isEmpty(data.name)) {
    errors.push(i18next.t("errors.validation.required", { name: "Name" }));
  }
  if (isEmpty(data.image)) {
    errors.push(i18next.t("errors.validation.required", { name: "Image" }));
  }
  if (isEmpty(data.wallet_address)) {
    errors.push(
      i18next.t("errors.validation.required", { name: "Wallet Address" })
    );
  }
  return errors;
};
