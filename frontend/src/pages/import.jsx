import React, { useCallback, useState } from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import axios from "axios";

// components
import ButtonLoader from "@/components/elements/ButtonLoader";

// helpers
import { errorAlert, successAlert } from "@/helpers/toastGroup";

export default function () {
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();

  const onImportCollectionFormSubmitted = useCallback(async (values) => {
    if (loading) {
      return;
    }
    setLoading(true);
    const response = await axios.post("/admin/collections", values);
    setLoading(false);
    const { status, data, error } = response.data;
    if (!status) {
      errorAlert(error);
      return;
    }
    successAlert(t("submitted"));
  }, []);

  const onImportItemsFormSubmitted = useCallback(async (values) => {
    if (loading) {
      return;
    }
    setLoading(true);
    const response = await axios.post("/admin/items", values);
    setLoading(false);
    const { status, data, error } = response.data;
    if (!status) {
      errorAlert(error);
      return;
    }
    successAlert(t("submitted"));
  }, []);

  return (
    <div className="p-5">
      <div className="widget-edit mb-30 profile">
        <div className="title">
          <h4>Import Collection</h4>
        </div>
        <Formik
          initialValues={{
            mint_key: "",
          }}
          validationSchema={Yup.object().shape({
            mint_key: Yup.string().required(
              t("errors.form.required", { name: "Mint Key" })
            ),
          })}
          onSubmit={onImportCollectionFormSubmitted}
          enableReinitialize={true}
        >
          {({ values, handleSubmit, handleChange, handleBlur }) => (
            <form
              id="commentform"
              className="comment-form"
              noValidate="novalidate"
              onSubmit={handleSubmit}
            >
              <fieldset className="name">
                <label>Mint Key *</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter collection mint key."
                  name="mint_key"
                  tabIndex={2}
                  aria-required="true"
                  required
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="mint_key">
                  {(msg) => (
                    <div className="mt-5px">
                      <span className="text-danger fs-14px">{msg}</span>
                    </div>
                  )}
                </ErrorMessage>
              </fieldset>
              <div className="btn-submit">
                <button className="tf-button style-1 w242" type="submit">
                  <ButtonLoader loading={loading} />
                  {!loading && "Submit"}
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
      <div className="widget-edit mb-30 profile">
        <div className="title">
          <h4>Import Items</h4>
        </div>
        <Formik
          initialValues={{
            collection_key: "",
            mint_keys: "",
          }}
          validationSchema={Yup.object().shape({
            collection_key: Yup.string().required(
              t("errors.form.required", { name: "Mint Key" })
            ),
            mint_keys: Yup.string().required(
              t("errors.form.required", { name: "Mint Key" })
            ),
          })}
          onSubmit={onImportItemsFormSubmitted}
          enableReinitialize={true}
        >
          {({ values, handleSubmit, handleChange, handleBlur }) => (
            <form
              id="commentform"
              className="comment-form"
              noValidate="novalidate"
              onSubmit={handleSubmit}
            >
              <div className="flex gap30">
                <fieldset className="name">
                  <label>Collection Mint Key *</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter collection mint key."
                    name="collection_key"
                    tabIndex={2}
                    aria-required="true"
                    required
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage name="collection_key">
                    {(msg) => (
                      <div className="mt-5px">
                        <span className="text-danger fs-14px">{msg}</span>
                      </div>
                    )}
                  </ErrorMessage>
                </fieldset>
              </div>
              <fieldset className="message">
                <label>Mint Keys *</label>
                <textarea
                  id="message"
                  name="mint_keys"
                  rows={4}
                  placeholder="Enter the item mint keys separated by dots."
                  tabIndex={4}
                  aria-required="true"
                  required
                  value={values.bio}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage name="mint_keys">
                  {(msg) => (
                    <div className="mt-5px">
                      <span className="text-danger fs-14px">{msg}</span>
                    </div>
                  )}
                </ErrorMessage>
              </fieldset>
              <div className="btn-submit">
                <button className="tf-button style-1 w242" type="submit">
                  <ButtonLoader loading={loading} />
                  {!loading && "Submit"}
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
