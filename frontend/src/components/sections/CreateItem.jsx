import { useCallback, useEffect, useState } from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

// components
import CreateCollection from "@/components/sections/CreateCollection";
import CollectionCard1 from "@/components/sections/CollectionCard1";

// stores
import useAuthStore from "@/stores/authStore";
import useCollectionsStore from "@/stores/collectionsStore";

export default function ({ onSubmit }) {
  const [collections, setCollections] = useState([]);
  const [showCreateCollectionModal, setShowCreateCollectionModal] =
    useState(false);

  const { t } = useTranslation();

  const { user, getCollections } = useAuthStore((state) => ({
    user: { id: state.id, wallet_address: state.wallet_address },
    getCollections: state.getCollections,
  }));
  const { createCollection } = useCollectionsStore();

  const getCollectionsData = useCallback(() => {
    if (user.id) {
      (async () => {
        const response = await getCollections();
        if (!response.status) {
          alert(response.error);
          return;
        }
        setCollections(response?.data);
      })();
    }
  }, []);

  useEffect(() => {
    getCollectionsData();
  }, [getCollectionsData]);

  return (
    <>
      <div className="wrapper-content-create">
        <div className="heading-section">
          <h2 className="tf-title pb-30">Create New File</h2>
        </div>
        <Formik
          initialValues={{
            image: null,
            name: "",
            description: "",
            price: "",
            collection_id: null,
            royatity: "",
          }}
          validationSchema={Yup.object().shape({
            image: Yup.string().required(
              t("errors.form.required", { name: "Image" })
            ),
            name: Yup.string().required(
              t("errors.form.required", { name: "Name" })
            ),
            description: Yup.string().required(
              t("errors.form.required", { name: "Description" })
            ),
            price: Yup.string().required(
              t("errors.form.required", { name: "Price" })
            ),
            collection_id: Yup.string().required(
              t("errors.form.required", { name: "Collection" })
            ),
            royatity: Yup.string().required(
              t("errors.form.required", { name: "Royatity" })
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
                      onChange={(e) =>
                        setFieldValue("image", e.target.files[0])
                      }
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
                    <label>Product name *</label>
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
                  <fieldset className="message">
                    <label>Description *</label>
                    <textarea
                      id="message"
                      name="description"
                      rows={4}
                      placeholder="Please describe your product*"
                      tabIndex={4}
                      aria-required="true"
                      required
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage name="description">
                      {(msg) => (
                        <div className="mt-5px">
                          <span className="text-danger fs-14px">{msg}</span>
                        </div>
                      )}
                    </ErrorMessage>
                  </fieldset>
                  <div className="flex gap30">
                    <fieldset className="price">
                      <label>Price</label>
                      <input
                        type="text"
                        id="price"
                        placeholder="Price"
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
                    <fieldset className="properties">
                      <label>Properties</label>
                      <input
                        type="text"
                        id="properties"
                        placeholder="Properties"
                        name="properties"
                        tabIndex={2}
                        aria-required="true"
                        requiredvalue={values.properties}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage name="properties">
                        {(msg) => (
                          <div className="mt-5px">
                            <span className="text-danger fs-14px">{msg}</span>
                          </div>
                        )}
                      </ErrorMessage>
                    </fieldset>
                    <fieldset className="size">
                      <label>Size</label>
                      <input
                        type="text"
                        id="size"
                        placeholder="Size"
                        name="size"
                        tabIndex={2}
                        aria-required="true"
                        required
                        requiredvalue={values.size}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <ErrorMessage name="size">
                        {(msg) => (
                          <div className="mt-5px">
                            <span className="text-danger fs-14px">{msg}</span>
                          </div>
                        )}
                      </ErrorMessage>
                    </fieldset>
                  </div>
                  <fieldset className="collection">
                    <div className="d-flex align-items-center mb-3">
                      <label className="mb-0">Collection</label>
                      <a
                        href="javascript:void(0)"
                        className="h1 ml-2"
                        onClick={() => {
                          setShowCreateCollectionModal(true);
                        }}
                      >
                        +
                      </a>
                    </div>

                    <div className="row">
                      <div className="d-flex gap-2">
                        {collections.map((collection) => (
                          <div
                            key={collection.id}
                            className="ml-3"
                            onClick={() =>
                              setFieldValue("collection_id", collection.id)
                            }
                          >
                            <CollectionCard1
                              collection={collection}
                              selected={values.collection_id === collection.id}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <ErrorMessage name="collection">
                      {(msg) => (
                        <div className="mt-5px">
                          <span className="text-danger fs-14px">{msg}</span>
                        </div>
                      )}
                    </ErrorMessage>
                  </fieldset>
                  <fieldset className="royatity">
                    <label>Royatity</label>
                    <input
                      type="text"
                      id="royatity"
                      placeholder="Royatity"
                      name="royatity"
                      tabIndex={2}
                      aria-required="true"
                      required
                      requiredvalue={values.royatity}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage name="royatity">
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
                      Submit item
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </Formik>
      </div>
      <div
        className={`modal fade popup ${
          showCreateCollectionModal ? "show d-block" : ""
        } `}
        id="popup_bid"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              onClick={() => {
                setShowCreateCollectionModal(false);
              }}
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="modal-body">
              <CreateCollection
                onSubmit={async (values) => {
                  const formData = new FormData();
                  for (const key in values) {
                    formData.append(key, values[key]);
                  }
                  formData.append("wallet_address", user.wallet_address);
                  const response = await createCollection(formData);
                  if (!response.status) {
                    alert(response.error);
                    return;
                  }
                  setShowCreateCollectionModal(false);
                  getCollectionsData();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
