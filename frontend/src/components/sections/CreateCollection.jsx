import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

export default function ({ onSubmit }) {
  const { t } = useTranslation();

  return (
    <div className="wrapper-content-create">
      <div className="heading-section">
        <h2 className="tf-title pb-30">Create New Collection</h2>
      </div>
      <Formik
        initialValues={{
          image: null,
          name: "",
        }}
        validationSchema={Yup.object().shape({
          image: Yup.string().required(
            t("errors.form.required", { name: "Image" })
          ),
          name: Yup.string().required(
            t("errors.form.required", { name: "Name" })
          ),
        })}
        onSubmit={onSubmit}
      >
        {({
          values,
          handleSubmit,
          handleChange,
          handleBlur,
          setFieldValue,
        }) => (
          <div className="widget-content-inner upload">
            <div className="wrap-upload w-full">
              <form action="#">
                <label className="uploadfile">
                  <img
                    src={values.image && URL.createObjectURL(values.image)}
                    alt=""
                  />
                  <h5>Upload file</h5>
                  <p className="text">Drag or choose your file to upload</p>
                  <div className="text filename">
                    PNG, GIF, WEBP, MP4 or MP3.Max 1Gb.
                  </div>
                  <input
                    type="file"
                    name="image"
                    onChange={(e) => setFieldValue("image", e.target.files[0])}
                    onBlur={handleBlur}
                  />
                </label>
              </form>
              <ErrorMessage name="image">
                {(msg) => (
                  <div className="mt-5px">
                    <span className="text-danger fs-14px">{msg}</span>
                  </div>
                )}
              </ErrorMessage>
            </div>
            <div className="wrap-content w-full">
              <form
                id="commentform"
                className="comment-form"
                noValidate="novalidate"
              >
                <fieldset className="name">
                  <label>Collection name *</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Product name"
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
                <div className="btn-submit flex gap30 justify-center">
                  <button
                    className="tf-button style-1 h50 w320"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}
