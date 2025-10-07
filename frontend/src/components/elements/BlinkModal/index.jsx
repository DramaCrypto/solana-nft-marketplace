import { useMemo } from "react";
import classNames from "classnames";
import { CopyToClipboard } from "react-copy-to-clipboard";

// styles
import styles from "./style.module.css";
import Square from "@/components/sections/Square";

// helpers
import { successAlert } from "@/helpers/toastGroup";

export default function ({ item, open, onClose }) {
  const blinkUrl = useMemo(() => {
    return import.meta.env.VITE_BLINK_URL.replace(
      "{action_url}",
      import.meta.env.VITE_ACTION_URL.replace("{item_id}", item?.id)
    );
  }, [item]);

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
              {/* <Square ratio={1.5} className="mb-3">
                <iframe
                  src={blinkUrl}
                  className={classNames("w-100", "h-100", styles.iframe)}
                ></iframe>
              </Square> */}
              <div
                className={classNames(
                  "d-flex",
                  "align-items-center",
                  "p-3",
                  styles["url-section"]
                )}
              >
                <div className="f-1">
                  <p className={classNames("mb-0", "mr-2", styles.url)}>
                    {blinkUrl}
                  </p>
                </div>
                <CopyToClipboard
                  text={blinkUrl}
                  onCopy={(text, success) => {
                    if (success) {
                      successAlert("Copied successfully!");
                    }
                  }}
                >
                  <button
                    className={classNames(
                      "tf-button",
                      "style-1",
                      styles["btn-copy"]
                    )}
                  >
                    Copy link
                  </button>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={`modal-backdrop fade  ${open ? "d-block show" : "d-none"}`} onClick={handleBidModal} /> */}
    </>
  );
}
