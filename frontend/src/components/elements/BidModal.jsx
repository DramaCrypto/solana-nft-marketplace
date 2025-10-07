export default function BidModal({ isBidModal, handleBidModal }) {
  return (
    <>
      <div
        className={`modal fade popup ${isBidModal ? "show d-block" : ""} `}
        id="popup_bid"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <button type="button" className="close" onClick={handleBidModal}>
              <span aria-hidden="true">×</span>
            </button>
            <div className="modal-body">
              <div className="image">
                <img src="assets/images/backgroup-section/popup.png" alt="" />
              </div>
              <div className="logo-rotate">
                <img src="assets/images/item-background/item6-img.png" alt="" />
              </div>
              <h2>Subscribe to our newsletter</h2>
              <p>Subscribe for our newsletter to stay in the loop</p>
              <fieldset className="email">
                <input
                  type="email"
                  className="style-1"
                  id="email"
                  placeholder="Email address*"
                  name="email"
                  tabIndex={2}
                  aria-required="true"
                  required
                />
              </fieldset>
              <a className="tf-button style-1 h50">
                Subscribe
                <i className="icon-arrow-up-right2" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={`modal-backdrop fade  ${isBidModal ? "d-block show" : "d-none"}`} onClick={handleBidModal} /> */}
    </>
  );
}
