import { useCallback, useEffect, useState } from "react";
import classNames from "classnames";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import Blockies from "react-blockies";

// stores
import useAuthStore from "@/stores/authStore";

// styles
import styles from "./style.module.css";

export default function Settings({ className, onSubmit }) {
  const [userAvatar, setUserAvatar] = useState();

  const user = useAuthStore();

  const { t } = useTranslation();

  const onAvatarInputChanged = useCallback((e) => {
    // setUserAvatar(URL.createObjectURL(e.target.files[0]));
    onSubmit({ avatar: e.target.files[0] });
  }, []);

  useEffect(() => {
    setUserAvatar(user.avatar);
  }, [user]);

  return (
    <>
      <div className={classNames(["wrapper-content", className])}>
        <div className="inner-content">
          <div className="heading-section">
            <h2 className="tf-title pb-30">Setting</h2>
          </div>
          <div className="widget-edit mb-30 avatar">
            <div className="title">
              <h4>Edit your avatar</h4>
            </div>
            <form action="#">
              <div className="uploadfile flex">
                {userAvatar && (
                  <img
                    src={userAvatar || "assets/images/avatar/avatar-07.png"}
                    alt=""
                    width="128px"
                    height="128px"
                  />
                )}
                {!userAvatar && (
                  <Blockies
                    seed={user.wallet_address}
                    size={10}
                    className={styles["blockies-image"]}
                  />
                )}
                <div>
                  <h6>Upload a new avatar”</h6>
                  <label>
                    <input
                      type="file"
                      name="file"
                      onChange={onAvatarInputChanged}
                    />
                    <span className="text filename">No files selected</span>
                  </label>
                  <p className="text">JPEG 100x100</p>
                </div>
              </div>
            </form>
          </div>
          <div className="widget-edit mb-30 profile">
            <div className="title">
              <h4>Edit your profile</h4>
            </div>
            <Formik
              initialValues={{
                name: user.name || "",
                email: user.email || "",
                phone_number: user.phone_number || "",
                bio: user.bio || "",
              }}
              validationSchema={Yup.object().shape({
                // name: Yup.string().required(
                //   t("errors.form.required", { name: "Name" })
                // ),
                // email: Yup.string().required(
                //   t("errors.form.required", { name: "Email" })
                // ),
                // phone_number: Yup.string().required(
                //   t("errors.form.required", { name: "Phone Number" })
                // ),
                // bio: Yup.string().required(
                //   t("errors.form.required", { name: "Bio" })
                // ),
              })}
              onSubmit={onSubmit}
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
                      <label>Your name*</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        name="name"
                        tabIndex={2}
                        aria-required="true"
                        required
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage name="name">
                        {(msg) => (
                          <div className="mt-5px">
                            <span className="text-danger fs-14px">{msg}</span>
                          </div>
                        )}
                      </ErrorMessage>
                    </fieldset>
                    <fieldset className="email">
                      <label>Email address*</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Your email"
                        name="email"
                        tabIndex={2}
                        aria-required="true"
                        required
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage name="email">
                        {(msg) => (
                          <div className="mt-5px">
                            <span className="text-danger fs-14px">{msg}</span>
                          </div>
                        )}
                      </ErrorMessage>
                    </fieldset>
                    <fieldset className="tel">
                      <label>Phone number</label>
                      <input
                        type="tel"
                        id="tel"
                        placeholder="Your phone"
                        name="phone_number"
                        tabIndex={2}
                        aria-required="true"
                        required
                        value={values.phone_number}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage name="phone_number">
                        {(msg) => (
                          <div className="mt-5px">
                            <span className="text-danger fs-14px">{msg}</span>
                          </div>
                        )}
                      </ErrorMessage>
                    </fieldset>
                  </div>
                  <fieldset className="message">
                    <label>Your Bio</label>
                    <textarea
                      id="message"
                      name="bio"
                      rows={4}
                      placeholder="Say something about yourself"
                      tabIndex={4}
                      aria-required="true"
                      required
                      value={values.bio}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage name="bio">
                      {(msg) => (
                        <div className="mt-5px">
                          <span className="text-danger fs-14px">{msg}</span>
                        </div>
                      )}
                    </ErrorMessage>
                  </fieldset>
                  <div className="btn-submit">
                    <button className="tf-button style-1 w242" type="submit">
                      Save
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}
