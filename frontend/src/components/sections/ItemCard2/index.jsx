import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { SyncLoader } from "react-spinners";

// components
import Square from "@/components/sections/Square";
import RectLoader from "@/components/elements/RectLoader";
import ButtonLoader from "@/components/elements/ButtonLoader";

// hooks
import useIsAuth from "@/hooks/useIsAuth";

// stores
import useAuthStore from "@/stores/authStore";

// helpers
import { simplifyWalletAddress } from "@/helpers/utils";

// styles
import styles from "./style.module.css";

export default function ({
  item,
  onImageClicked,
  onMakeOfferButtonClicked,
  onBuyNowButtonClicked,
  loading,
  loadingTransaction,
}) {
  const { setVisible } = useWalletModal();

  const isAuth = useIsAuth();

  const user = useAuthStore();

  return (
    <div
      className={classNames("tf-card-box", "style-1", styles["item-card-1"])}
    >
      <div className="card-media">
        <a href="javascript:void(0)" onClick={onImageClicked}>
          <Square ratio={1}>
            {!loading && (
              <img
                src={item?.image || "/assets/images/box-item/card-item-09.jpg"}
                alt=""
              />
            )}
            {loading && <RectLoader width="100%" height="100%" />}
          </Square>
        </a>
        {!loading && item?.status === "list" && (
          <span className={styles["sale-mark"]}>Sale</span>
        )}
        {!loading &&
          item?.status === "list" &&
          (!isAuth ||
            user.wallet_address !== item?.collector?.wallet_address) && (
            <div className="button-place-bid">
              <a
                href="javascript:void(0)"
                className="tf-button"
                onClick={() => {
                  if (!isAuth) {
                    setVisible(true);
                    return;
                  }
                  onMakeOfferButtonClicked();
                }}
              >
                <ButtonLoader loading={loadingTransaction} />
                {!loadingTransaction && <span>Make Offer</span>}
              </a>
              <a
                href="javascript:void(0)"
                className="tf-button mt-2"
                onClick={() => {
                  if (!isAuth) {
                    setVisible(true);
                    return;
                  }
                  onBuyNowButtonClicked();
                }}
              >
                <ButtonLoader loading={loadingTransaction} />
                {!loadingTransaction && <span>Buy Now</span>}
              </a>
            </div>
          )}
      </div>
      <h6 className="name">
        {!loading && <a href="javascript:void(0)">{item?.name}</a>}
        {loading && <RectLoader width="200px" height="20px" />}
      </h6>
      {!loading && (
        <div className="author flex items-center">
          <div className="info d-flex">
            <span>Owned by</span>
            <h6 className="ml-2">
              <a href="javascript:void(0)">
                {simplifyWalletAddress(item?.collector?.wallet_address)}
              </a>
            </h6>
          </div>
        </div>
      )}
      {loading && <RectLoader width="150px" height="20px" />}
      <div className="divider" />
      <div className="meta-info flex items-center justify-between">
        <span className="text-bid">Recent Price</span>
        {!loading && (
          <h6 className="price gem">
            {item?.status !== "import" ? item?.price + " SOL" : "-/-"}
          </h6>
        )}
        {loading && <RectLoader width="50px" height="20px" />}
      </div>
    </div>
  );
}
