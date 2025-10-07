import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

// styles
import styles from "./style.module.css";

export default function ({ item, open, onClose, onSubmit }) {
  const { t } = useTranslation();

  return (
    <>
      <div
        className={`modal fade popup ${open ? "show d-block" : ""} `}
        id="popup_bid"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div
            className={classNames(
              "modal-content",
              "ml-4",
              "mr-4",
              styles["modal-content"]
            )}
          >
            <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">×</span>
            </button>
            <div className="modal-body">
              <div className="d-flex align-items-center mb-5">
                <div style={{ width: 70, height: 70 }}>
                  <img
                    src={item?.image}
                    alt=""
                    style={{
                      borderRadius: "50%",
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div className="ml-4" style={{ flex: 1 }}>
                  <h4 className="mb-2">{item?.name}</h4>
                  <p className="mb-0 text-left">
                    Listed For:{" "}
                    <img src="/assets/icon/sol.svg" alt="" className="mr-1" />
                    {item?.price}
                  </p>
                </div>
              </div>

              <Formik
                initialValues={{
                  price: "",
                }}
                validationSchema={Yup.object().shape({
                  price: Yup.string().required(
                    t("errors.form.required", { name: "Price" })
                  ),
                })}
                onSubmit={onSubmit}
              >
                {({ values, handleSubmit, handleChange, handleBlur }) => (
                  <>
                    <fieldset className="email">
                      <input
                        type="number"
                        className={classNames("style-1", styles["input-price"])}
                        id="price"
                        placeholder="Price*"
                        name="price"
                        tabIndex={2}
                        aria-required="true"
                        required
                        value={values.price}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage name="price">
                        {(msg) => (
                          <div className="mt-5px">
                            <span className="text-danger fs-14px">{msg}</span>
                          </div>
                        )}
                      </ErrorMessage>
                    </fieldset>
                    <p className="mb-5 text-left">
                      You‘re about to place an offer of{" "}
                      <img src="/assets/icon/sol.svg" alt="" className="mr-1" />
                      <span className="font-weight-bold">
                        {values.price}
                      </span>{" "}
                      on <span className="font-weight-bold">{item?.name}</span>,
                      to complete this action click on Place offer, confirm the
                      transaction and wait until the transaction is confirmed.
                    </p>
                    <div className="d-flex gap-1">
                      <a
                        href="javascript:void(0)"
                        className={classNames(
                          "tf-button",
                          "style-3",
                          "h50",
                          "f-1",
                          styles["btn-cancel"]
                        )}
                        onClick={onClose}
                      >
                        Cancel
                      </a>
                      <a
                        href="javascript:void(0)"
                        className={classNames(
                          "tf-button",
                          "style-1",
                          "h50",
                          "f-1",
                          styles["btn-submit"]
                        )}
                        onClick={handleSubmit}
                      >
                        Submit
                      </a>
                    </div>
                  </>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={`modal-backdrop fade  ${open ? "d-block show" : "d-none"}`} onClick={handleBidModal} /> */}
    </>
  );
}
