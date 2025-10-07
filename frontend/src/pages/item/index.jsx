import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import moment from "moment";
import classNames from "classnames";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { SyncLoader } from "react-spinners";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import Blockies from "react-blockies";

// components
import Layout from "@/components/layout/Layout";
import OfferModal from "@/components/elements/OfferModal";
import Square from "@/components/sections/Square";
import BlinkModal from "@/components/elements/BlinkModal";
import ButtonLoader from "@/components/elements/ButtonLoader";

// stores
import useAuthStore from "@/stores/authStore";
import useItemsStore from "@/stores/itemsStore";
import useOffersStore from "@/stores/offersStore";

// hooks
import useIsAuth from "@/hooks/useIsAuth";

// helpers
import {
  delay,
  getSolPrice,
  simplifyWalletAddress,
  toFixed,
} from "@/helpers/utils";
import {
  listNFT,
  unlistNFT,
  offerNFT,
  unofferNFT,
  acceptOfferNFT,
  purchaseNFT,
} from "@/helpers/transactions";
import { errorAlert, successAlert } from "@/helpers/toastGroup";

// styles
import styles from "./style.module.css";

export default function () {
  const [item, setItem] = useState({});
  const [showOfferModal, setShowOfferModal] = useState(false);
  const [solPrice, setSolPrice] = useState(0);
  const [loadingTransaction, setLoadingTransaction] = useState(false);
  const [showBlinkModal, setShowBlinkModal] = useState(false);

  const user = useAuthStore();
  const { createOrUpdateItem, getItem } = useItemsStore();
  const { createOrUpdateOffer } = useOffersStore();

  const params = useParams();
  const { t } = useTranslation();
  const { publicKey } = useWallet();

  const isAuth = useIsAuth();

  const isOffered = useMemo(() => {
    return (
      (item.offers || []).filter(
        (offer) => offer.user?.wallet_address === user.wallet_address
      ).length > 0
    );
  }, [item, user]);

  const getItemData = useCallback(async (id) => {
    const response = await getItem(id);
    if (!response.status) {
      alert(response.error);
      return;
    }
    setItem(response.data);
  }, []);

  const onSell = useCallback(
    async (price) => {
      if (loadingTransaction) return;
      setLoadingTransaction(true);
      const transactionResult = await listNFT(
        item.contract_address,
        publicKey,
        price
      );
      if (transactionResult) {
        if (import.meta.env.MODE === "development") {
          const response = await createOrUpdateItem({
            id: item.id,
            price,
            status: "list",
          });
          if (!response.status) {
            errorAlert(response.error);
          }
        } else {
          await delay(10000);
        }
        successAlert(t("listed"));
      } else {
        errorAlert(t("errors.something_went_wrong"));
      }
      setLoadingTransaction(false);
      getItemData(item.id);
    },
    [item, getItemData, publicKey, loadingTransaction, createOrUpdateItem]
  );

  const onOfferModalSubmitted = useCallback(
    async (values) => {
      setShowOfferModal(false);
      if (loadingTransaction) return;
      setLoadingTransaction(true);
      const transactionResult = await offerNFT(
        item.contract_address,
        publicKey,
        values.price
      );
      if (transactionResult) {
        if (import.meta.env.MODE === "development") {
          const response = await createOrUpdateOffer({
            item_id: item.id,
            from_wallet_address: user.wallet_address,
            price: values.price,
          });
          if (!response.status) {
            errorAlert(response.error);
          }
        } else {
          await delay(10000);
        }
        successAlert(t("offered"));
      } else {
        errorAlert(t("errors.something_went_wrong"));
      }
      setLoadingTransaction(false);
      getItemData(item.id);
    },
    [item, getItemData, publicKey, loadingTransaction, createOrUpdateItem, user]
  );

  const onAcceptButtonClicked = useCallback(
    async (acceptedOffer) => {
      const declinedOffers = (item.offers || [])?.filter(
        (offer) =>
          offer.user?.wallet_address !== acceptedOffer.user?.wallet_address
      );
      if (loadingTransaction) return;
      setLoadingTransaction(true);
      const transactionResult = await acceptOfferNFT(
        item.contract_address,
        publicKey,
        acceptedOffer?.user?.wallet_address,
        declinedOffers.map((offer) => offer.user?.wallet_address)
      );
      if (transactionResult) {
        if (import.meta.env.MODE === "development") {
          const response = await createOrUpdateItem({
            id: item.id,
            collector_id: acceptedOffer.user_id,
            status: "sale",
            offer_id: acceptedOffer.id,
          });
          if (!response.status) {
            errorAlert(response.error);
          }
        } else {
          await delay(10000);
        }
        successAlert(t("accepted"));
      } else {
        errorAlert(t("errors.something_went_wrong"));
      }
      setLoadingTransaction(false);
      getItemData(item.id);
    },
    [item, getItemData, publicKey, loadingTransaction, createOrUpdateItem]
  );

  const onBuyNowButtonClicked = useCallback(async () => {
    if (loadingTransaction) return;
    setLoadingTransaction(true);
    const transactionResult = await await purchaseNFT(
      item.contract_address,
      publicKey,
      item?.collector?.wallet_address,
      (item.offers || []).map((offer) => offer.user?.wallet_address)
    );
    if (transactionResult) {
      if (import.meta.env.MODE === "development") {
        const response = await createOrUpdateItem({
          id: item.id,
          buyer_public_key: user.wallet_address,
          status: "sale",
        });
        if (!response.status) {
          errorAlert(response.error);
        }
        successAlert(t("purchased"));
      } else {
        await delay(10000);
      }
    } else {
      errorAlert(t("errors.something_went_wrong"));
    }
    setLoadingTransaction(false);
    getItemData(item.id);
  }, [
    item,
    getItemData,
    publicKey,
    loadingTransaction,
    createOrUpdateItem,
    user,
  ]);

  const onCancelButtonClicked = useCallback(async () => {
    if (loadingTransaction) return;
    setLoadingTransaction(true);
    const transactionResult = await unlistNFT(
      item.contract_address,
      publicKey,
      (item.offers || []).map((offer) => offer.user?.wallet_address)
    );
    if (transactionResult) {
      if (import.meta.env.MODE === "development") {
        const response = await createOrUpdateItem({
          id: item.id,
          status: "cancel",
        });
        if (!response.status) {
          errorAlert(response.error);
        }
      } else {
        await delay(10000);
      }
      successAlert(t("canceled"));
    } else {
      errorAlert(t("errors.something_went_wrong"));
    }
    setLoadingTransaction(false);
    getItemData(item.id);
  }, [item, getItemData, publicKey, loadingTransaction, createOrUpdateItem]);

  const onMakeOfferButtonClicked = useCallback(() => {
    if (loadingTransaction) return;
    setShowOfferModal(true);
  }, []);

  const onCancelOfferButtonClicked = useCallback(
    async (offer) => {
      if (loadingTransaction) return;
      setLoadingTransaction(true);
      const transactionResult = await unofferNFT(
        item.contract_address,
        publicKey
      );
      if (transactionResult) {
        if (import.meta.env.MODE === "development") {
          const response = await createOrUpdateOffer({
            id: offer.id,
            status: "processed",
          });
          if (!response.status) {
            errorAlert(response.error);
          }
        } else {
          await delay(10000);
        }
        successAlert(t("canceled"));
      } else {
        errorAlert(t("errors.something_went_wrong"));
      }
      setLoadingTransaction(false);
      getItemData(item.id);
    },
    [item, getItemData, publicKey, loadingTransaction, createOrUpdateOffer]
  );

  useEffect(() => {
    getItemData(params.id);
  }, [getItemData, params]);

  useEffect(() => {
    (async () => {
      const solPrice = await getSolPrice();
      setSolPrice(solPrice);
    })();
  }, []);

  return (
    <>
      <Layout headerStyle={3} footerStyle={1} pageCls="home-7 pt-0">
        <div>
          <div className="tf-section-2 product-detail">
            <div className="themesflat-container">
              <div className="row mb-20px">
                <div
                  data-wow-delay="0s"
                  className="wow fadeInLeft col-md-6 mb-20px mb-md-0"
                >
                  <Square ratio={1}>
                    <img
                      src={item.image}
                      alt=""
                      className={styles["item-image"]}
                    />
                  </Square>
                </div>
                <div className="col-md-6">
                  <div
                    data-wow-delay="0s"
                    className="wow fadeInRight infor-product mb-5"
                  >
                    {isAuth &&
                      item.collector?.wallet_address === user.wallet_address &&
                      item.status === "list" && (
                        <div className="menu_card">
                          <Menu as="div" className="dropdown">
                            <div className="icon">
                              <MenuButton
                                as="a"
                                className="btn-link"
                                aria-expanded="false"
                              >
                                <i className="icon-link-1" />
                              </MenuButton>
                              <MenuItems
                                as="div"
                                className="dropdown-menu show d-block"
                              >
                                <a
                                  className="dropdown-item mb-0"
                                  href="javascript:void(0)"
                                  onClick={() => setShowBlinkModal(true)}
                                >
                                  <i className="icon-twitter" />
                                  Share on twitter
                                </a>
                              </MenuItems>
                            </div>
                          </Menu>
                        </div>
                      )}
                    <h3 className="mb-2">{item.name}</h3>
                    <p className="mb-3" title={item.description}>
                      {item.description}
                    </p>
                    <div className="author flex items-center">
                      <div className="avatar">
                        {item.collector?.avatar && (
                          <img
                            src={
                              item.collector?.avatar
                                ? item.collector?.avatar
                                : "/assets/images/avatar/avatar-box-05.jpg"
                            }
                            alt="Image"
                          />
                        )}
                        {!item.collector?.avatar && (
                          <Blockies seed={item.collector?.avatar} size={10} />
                        )}
                      </div>
                      <div className="info">
                        <span>Owned by:</span>
                        <h6>
                          <a href="javascript:void(0)">
                            {item.collector?.name ||
                              simplifyWalletAddress(
                                item.collector?.wallet_address
                              )}
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  {(item.status === "list" ||
                    (isAuth &&
                      user.wallet_address ===
                        item.collector?.wallet_address)) && (
                    <div
                      data-wow-delay="0s"
                      className={classNames(
                        "wow",
                        "fadeInRight",
                        "product-item",
                        "time-sales",
                        styles["item-status"]
                      )}
                    >
                      <div className="content">
                        {item.status === "list" && (
                          <div className="text">Listed for</div>
                        )}
                        <div className="flex justify-between">
                          <Formik
                            initialValues={{
                              price: "",
                            }}
                            validationSchema={Yup.object().shape({
                              price: Yup.string().required(
                                t("errors.form.required", { name: "Price" })
                              ),
                            })}
                            onSubmit={(values) => {
                              onSell(values.price);
                            }}
                          >
                            {({
                              values,
                              handleSubmit,
                              handleChange,
                              handleBlur,
                            }) => (
                              <>
                                {item.status === "list" && (
                                  <p>
                                    <img
                                      src="/assets/icon/sol.svg"
                                      alt=""
                                      className="mr-2"
                                    />
                                    {item.price}
                                    <span className="ml-2">
                                      ${toFixed(solPrice * item.price, 2)}
                                    </span>
                                  </p>
                                )}
                                {isAuth &&
                                  item.collector?.wallet_address ===
                                    user.wallet_address &&
                                  item.status !== "list" && (
                                    <fieldset className="mb-0 mr-3">
                                      <input
                                        type="number"
                                        name="price"
                                        placeholder="Price"
                                        value={values.price}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                      />
                                      <ErrorMessage name="price">
                                        {(msg) => (
                                          <div className="mt-5px">
                                            <span className="text-danger fs-14px">
                                              {msg}
                                            </span>
                                          </div>
                                        )}
                                      </ErrorMessage>
                                    </fieldset>
                                  )}
                                {isAuth && (
                                  <>
                                    {user.wallet_address ===
                                      item.collector?.wallet_address && (
                                      <>
                                        {item.status === "list" && (
                                          <a
                                            href="javascript:void(0)"
                                            className="tf-button style-1 h50 w216"
                                            onClick={onCancelButtonClicked}
                                          >
                                            <ButtonLoader
                                              loading={loadingTransaction}
                                            />
                                            {!loadingTransaction && "Cancel"}
                                          </a>
                                        )}
                                        {item.status !== "list" && (
                                          <a
                                            href="javascript:void(0)"
                                            className="tf-button style-1 h50 w216"
                                            onClick={handleSubmit}
                                          >
                                            <ButtonLoader
                                              loading={loadingTransaction}
                                            />
                                            {!loadingTransaction && "Sell"}
                                          </a>
                                        )}
                                      </>
                                    )}
                                    {user.wallet_address !==
                                      item.collector?.wallet_address &&
                                      item.status === "list" && (
                                        <div className="d-flex">
                                          <a
                                            href="javascript:void(0)"
                                            className="tf-button style-1 h50 mr-2"
                                            onClick={onBuyNowButtonClicked}
                                          >
                                            <ButtonLoader
                                              loading={loadingTransaction}
                                            />
                                            {!loadingTransaction && "Buy Now"}
                                          </a>
                                          {!isOffered && (
                                            <a
                                              href="javascript:void(0)"
                                              className="tf-button style-1 h50"
                                              onClick={onMakeOfferButtonClicked}
                                            >
                                              <ButtonLoader
                                                loading={loadingTransaction}
                                              />
                                              {!loadingTransaction &&
                                                "Make Offer"}
                                            </a>
                                          )}
                                        </div>
                                      )}
                                  </>
                                )}
                              </>
                            )}
                          </Formik>
                        </div>
                      </div>
                    </div>
                  )}
                  <div
                    data-wow-delay="0s"
                    className={classNames(
                      "wow",
                      "fadeInUp",
                      "col-12",
                      "mt-20px",
                      "product-item",
                      "details",
                      styles["item-detail"]
                    )}
                  >
                    <h6>
                      <i className="icon-description" />
                      Details
                    </h6>
                    <i className="icon-keyboard_arrow_down" />
                    <div className="content">
                      <div className="details-item">
                        <span>Contract Address</span>
                        <span className="tf-color">
                          {simplifyWalletAddress(item.contract_address)}
                        </span>
                      </div>
                      <div className="details-item">
                        <span>Token ID</span>
                        <span className="tf-color">{item.id}</span>
                      </div>
                      <div className="details-item">
                        <span>Last Updated</span>
                        <span>
                          {moment(item.updatedAt).format("MM/DD HH:mm")}
                        </span>
                      </div>
                      <div className="details-item mb-0">
                        <span>Creator Earnings</span>
                        <span>{item.royatity}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {item.status === "list" && (
                <div className="row mb-20px">
                  <div data-wow-delay="0s" className="wow fadeInUp col-12">
                    <div
                      className={classNames(
                        "product-item",
                        "offers",
                        "mb-0",
                        styles["item-offers"]
                      )}
                    >
                      <h6>
                        <i className="icon-description" />
                        Offers
                      </h6>
                      <i className="icon-keyboard_arrow_down" />
                      <div className="content">
                        <div className="table-heading">
                          <div className="column">Price</div>
                          <div className="column">From</div>
                          <div className="column">Date</div>
                          {isAuth &&
                            (user.wallet_address ===
                              item.collector?.wallet_address ||
                              isOffered) && <div className="column"></div>}
                        </div>
                        {(item.offers || []).map((offer) => (
                          <div className="table-item" key={offer.id}>
                            <div className="column">
                              <h6 className="price gem">
                                <img
                                  src="/assets/icon/sol.svg"
                                  alt=""
                                  className="mr-2"
                                />
                                {offer.price}
                              </h6>
                            </div>
                            <div className="column">
                              <span className="tf-color">
                                {simplifyWalletAddress(
                                  offer.user?.wallet_address
                                )}
                              </span>
                            </div>
                            <div className="column">
                              {moment(offer.createdAt).format("MM/DD HH:mm")}
                            </div>
                            {isAuth && (
                              <>
                                {user.wallet_address ===
                                  item.collector?.wallet_address && (
                                  <div className="column">
                                    <a
                                      href="javascript:void(0)"
                                      className="tf-button style-1 w90"
                                      onClick={() =>
                                        onAcceptButtonClicked(offer)
                                      }
                                    >
                                      <ButtonLoader
                                        loading={loadingTransaction}
                                      />
                                      {!loadingTransaction && "Accept"}
                                    </a>
                                  </div>
                                )}
                                {isOffered &&
                                  (offer.user?.wallet_address ===
                                  user.wallet_address ? (
                                    <div className="column">
                                      <a
                                        href="javascript:void(0)"
                                        className="tf-button style-1 w90"
                                        onClick={() =>
                                          onCancelOfferButtonClicked(offer)
                                        }
                                      >
                                        <ButtonLoader
                                          loading={loadingTransaction}
                                        />
                                        {!loadingTransaction && "Cancel"}
                                      </a>
                                    </div>
                                  ) : (
                                    <div className="column"></div>
                                  ))}
                              </>
                            )}
                          </div>
                        ))}
                        {(item.offers || []).length === 0 && (
                          <p className="text-center">No Offers</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="row">
                <div data-wow-delay="0s" className="wow fadeInUp col-12">
                  <div
                    className={classNames(
                      "product-item",
                      "item-activity",
                      "mb-0",
                      styles["item-activities"]
                    )}
                  >
                    <h6>
                      <i className="icon-two-arrow rotateZ90" />
                      Item activity
                    </h6>
                    <i className="icon-keyboard_arrow_down" />
                    <div className="content">
                      <div className="table-heading">
                        <div className="column">Event</div>
                        <div className="column">From</div>
                        <div className="column">To</div>
                        <div className="column">Price</div>
                        <div className="column">Date</div>
                      </div>
                      {(item.activities || []).map((activity) => (
                        <div className="table-item" key={activity.id}>
                          <div className="column flex items-center">
                            {
                              {
                                import: "Import",
                                list: "List",
                                sale: "Sale",
                                cancel: "Cancel",
                              }[activity.type]
                            }
                          </div>
                          <div className="column">
                            <span className="tf-color">
                              {simplifyWalletAddress(
                                activity.from_user?.wallet_address
                              )}
                            </span>
                          </div>
                          <div className="column">
                            {activity.type === "sale" ? (
                              <span className="tf-color">
                                {simplifyWalletAddress(
                                  activity.to_user?.wallet_address
                                )}
                              </span>
                            ) : (
                              "-/-"
                            )}
                          </div>
                          <div className="column">
                            {activity.type !== "cancel" ? (
                              <>
                                <img
                                  src="/assets/icon/sol.svg"
                                  alt=""
                                  className="mr-2"
                                />
                                {activity.price}
                              </>
                            ) : (
                              "-/-"
                            )}
                          </div>
                          <div className="column">
                            {moment(activity.createdAt).format("MM/DD HH:mm")}
                          </div>
                        </div>
                      ))}
                      {(item.activities || []).length === 0 && (
                        <p className="text-center">No Activities</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      {isAuth &&
        item.collector?.wallet_address !== user.wallet_address &&
        item.status === "list" && (
          <OfferModal
            item={item}
            onClose={() => setShowOfferModal(false)}
            open={showOfferModal}
            onSubmit={onOfferModalSubmitted}
          />
        )}
      {isAuth &&
        item.collector?.wallet_address === user.wallet_address &&
        item.status === "list" && (
          <BlinkModal
            item={item}
            onClose={() => setShowBlinkModal(false)}
            open={showBlinkModal}
          />
        )}
    </>
  );
}
