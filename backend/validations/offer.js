const path = require("path");
const i18next = require("i18next");

// helpers
const { isEmpty } = require(path.resolve("helpers/utils"));

module.exports = (data = {}) => {
  const errors = [];
  if (isEmpty(data.from_wallet_address)) {
    errors.push(
      i18next.t("errors.validation.required", {
        name: "Wallet address of offer maker",
      })
    );
  }
  if (isEmpty(data.item_id)) {
    errors.push(i18next.t("errors.validation.required", { name: "Item" }));
  }
  if (isEmpty(data.price)) {
    errors.push(i18next.t("errors.validation.required", { name: "Price" }));
  }
  return errors;
};
