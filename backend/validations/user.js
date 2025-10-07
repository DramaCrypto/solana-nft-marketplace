const path = require("path");
const i18next = require("i18next");

// helpers
const { isEmpty } = require(path.resolve("helpers/utils"));

module.exports = (data = {}) => {
  const errors = [];
  // if (isEmpty(data.name)) {
  //   errors.push(i18next.t("errors.validation.required", { name: "Name" }));
  // }
  if (isEmpty(data.wallet_address)) {
    errors.push(
      i18next.t("errors.validation.required", { name: "Wallet Address" })
    );
  }
  // if (isEmpty(data.email)) {
  //   errors.push(i18next.t("errors.validation.required", { name: "Email" }));
  // }
  // if (isEmpty(data.phone_number)) {
  //   errors.push(
  //     i18next.t("errors.validation.required", { name: "Phone Number" })
  //   );
  // }
  // if (isEmpty(data.bio)) {
  //   errors.push(i18next.t("errors.validation.required", { name: "Bio" }));
  // }
  // if (isEmpty(data.avatar)) {
  //   errors.push(i18next.t("errors.validation.required", { name: "Bio" }));
  // }
  return errors;
};
