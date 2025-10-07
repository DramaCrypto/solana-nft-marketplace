import { Link } from "react-router-dom";
import { useState } from "react";
import BidModal from "../elements/BidModal";
export default function DiscoverItem5() {
  const [isBidModal, setBidModal] = useState(false);
  const handleBidModal = () => setBidModal(!isBidModal);
  return (
    <>
      <div className="tf-section-3 discover-item  ">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-section pb-30">
                <h2 className="tf-title ">Trending nFTs</h2>
                <Link href="/explore-3">
                  Discover more <i className="icon-arrow-right2" />
                </Link>
              </div>
            </div>
            <div
              data-wow-delay="0s"
              className="wow fadeInUp col-xl-3 col-lg-4 col-md-6 col-sm-6"
            >
              <div className="tf-card-box style-1 bg-white">
                <div className="card-media">
                  <Link href="javascript:void(0)">
                    <img
                      src="/assets/images/box-item/card-item-33.jpg"
                      alt=""
                    />
                  </Link>
                  <span className="wishlist-button icon-heart" />
                  <div className="featured-countdown">
                    <span
                      className="js-countdown"
                      data-timer={7500}
                      data-labels="d,h,m,s"
                    >
                      <div aria-hidden="true" className="countdown__timer">
                        <span
                          className="countdown__item"
                          style={{ display: "none" }}
                        >
                          <span className="countdown__value countdown__value--0 js-countdown__value--0">
                            0
                          </span>
                          <span className="countdown__label">d</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value countdown__value--1 js-countdown__value--1">
                            02
                          </span>
                          <span className="countdown__label">h</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value countdown__value--2 js-countdown__value--2">
                            04
                          </span>
                          <span className="countdown__label">m</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value countdown__value--3 js-countdown__value--3">
                            10
                          </span>
                          <span className="countdown__label">s</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <h5 className="name">
                  <Link href="javascript:void(0)">Dayco serpentine belt</Link>
                </h5>
                <div className="author flex items-center">
                  <div className="avatar">
                    <img
                      src="/assets/images/avatar/avatar-box-03.jpg"
                      alt="Image"
                    />
                  </div>
                  <div className="info">
                    <span>Created by:</span>
                    <h6>
                      <Link href="/author-2">Cody Fisher</Link>{" "}
                    </h6>
                  </div>
                </div>
                <div className="divider" />
                <div className="meta-info flex items-center justify-between items-center">
                  <div>
                    <span className="text-bid">Current Bid</span>
                    <h6 className="price gem">
                      <i className="icon-gem" />
                      0,34
                    </h6>
                  </div>
                  <div className="button-place-bid">
                    <a
                      onClick={handleBidModal}
                      href="javascript:void(0)"
                      className="tf-button"
                    >
                      <span>Place Bid</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-wow-delay="0.1s"
              className="wow fadeInUp col-xl-3 col-lg-4 col-md-6 col-sm-6"
            >
              <div className="tf-card-box style-1 bg-white">
                <div className="card-media">
                  <Link href="javascript:void(0)">
                    <img
                      src="/assets/images/box-item/card-item-34.jpg"
                      alt=""
                    />
                  </Link>
                  <span className="wishlist-button icon-heart" />
                  <div className="featured-countdown">
                    <span
                      className="js-countdown"
                      data-timer={7500}
                      data-labels="d,h,m,s"
                    >
                      <div aria-hidden="true" className="countdown__timer">
                        <span
                          className="countdown__item"
                          style={{ display: "none" }}
                        >
                          <span className="countdown__value countdown__value--0 js-countdown__value--0">
                            0
                          </span>
                          <span className="countdown__label">d</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value countdown__value--1 js-countdown__value--1">
                            02
                          </span>
                          <span className="countdown__label">h</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value countdown__value--2 js-countdown__value--2">
                            04
                          </span>
                          <span className="countdown__label">m</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value countdown__value--3 js-countdown__value--3">
                            10
                          </span>
                          <span className="countdown__label">s</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <h5 className="name">
                  <Link href="javascript:void(0)">Dayco serpentine belt</Link>
                </h5>
                <div className="author flex items-center">
                  <div className="avatar">
                    <img
                      src="/assets/images/avatar/avatar-box-03.jpg"
                      alt="Image"
                    />
                  </div>
                  <div className="info">
                    <span>Created by:</span>
                    <h6>
                      <Link href="/author-2">Cody Fisher</Link>{" "}
                    </h6>
                  </div>
                </div>
                <div className="divider" />
                <div className="meta-info flex items-center justify-between items-center">
                  <div>
                    <span className="text-bid">Current Bid</span>
                    <h6 className="price gem">
                      <i className="icon-gem" />
                      0,34
                    </h6>
                  </div>
                  <div className="button-place-bid">
                    <a
                      onClick={handleBidModal}
                      href="javascript:void(0)"
                      className="tf-button"
                    >
                      <span>Place Bid</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-wow-delay="0.2s"
              className="wow fadeInUp col-xl-3 col-lg-4 col-md-6 col-sm-6"
            >
              <div className="tf-card-box style-1 bg-white">
                <div className="card-media">
                  <Link href="javascript:void(0)">
                    <img
                      src="/assets/images/box-item/card-item-35.jpg"
                      alt=""
                    />
                  </Link>
                  <span className="wishlist-button icon-heart" />
                  <div className="featured-countdown">
                    <span
                      className="js-countdown"
                      data-timer={7500}
                      data-labels="d,h,m,s"
                    >
                      <div aria-hidden="true" className="countdown__timer">
                        <span
                          className="countdown__item"
                          style={{ display: "none" }}
                        >
                          <span className="countdown__value countdown__value--0 js-countdown__value--0">
                            0
                          </span>
                          <span className="countdown__label">d</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value countdown__value--1 js-countdown__value--1">
                            02
                          </span>
                          <span className="countdown__label">h</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value countdown__value--2 js-countdown__value--2">
                            04
                          </span>
                          <span className="countdown__label">m</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value countdown__value--3 js-countdown__value--3">
                            10
                          </span>
                          <span className="countdown__label">s</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <h5 className="name">
                  <Link href="javascript:void(0)">Dayco serpentine belt</Link>
                </h5>
                <div className="author flex items-center">
                  <div className="avatar">
                    <img
                      src="/assets/images/avatar/avatar-box-03.jpg"
                      alt="Image"
                    />
                  </div>
                  <div className="info">
                    <span>Created by:</span>
                    <h6>
                      <Link href="/author-2">Cody Fisher</Link>{" "}
                    </h6>
                  </div>
                </div>
                <div className="divider" />
                <div className="meta-info flex items-center justify-between items-center">
                  <div>
                    <span className="text-bid">Current Bid</span>
                    <h6 className="price gem">
                      <i className="icon-gem" />
                      0,34
                    </h6>
                  </div>
                  <div className="button-place-bid">
                    <a
                      onClick={handleBidModal}
                      href="javascript:void(0)"
                      className="tf-button"
                    >
                      <span>Place Bid</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-wow-delay="0.3s"
              className="wow fadeInUp col-xl-3 col-lg-4 col-md-6 col-sm-6"
            >
              <div className="tf-card-box style-1 bg-white">
                <div className="card-media">
                  <Link href="javascript:void(0)">
                    <img
                      src="/assets/images/box-item/card-item-36.jpg"
                      alt=""
                    />
                  </Link>
                  <span className="wishlist-button icon-heart" />
                  <div className="featured-countdown">
                    <span
                      className="js-countdown"
                      data-timer={7500}
                      data-labels="d,h,m,s"
                    >
                      <div aria-hidden="true" className="countdown__timer">
                        <span
                          className="countdown__item"
                          style={{ display: "none" }}
                        >
                          <span className="countdown__value countdown__value--0 js-countdown__value--0">
                            0
                          </span>
                          <span className="countdown__label">d</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value countdown__value--1 js-countdown__value--1">
                            02
                          </span>
                          <span className="countdown__label">h</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value countdown__value--2 js-countdown__value--2">
                            04
                          </span>
                          <span className="countdown__label">m</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value countdown__value--3 js-countdown__value--3">
                            10
                          </span>
                          <span className="countdown__label">s</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <h5 className="name">
                  <Link href="javascript:void(0)">Dayco serpentine belt</Link>
                </h5>
                <div className="author flex items-center">
                  <div className="avatar">
                    <img
                      src="/assets/images/avatar/avatar-box-03.jpg"
                      alt="Image"
                    />
                  </div>
                  <div className="info">
                    <span>Created by:</span>
                    <h6>
                      <Link href="/author-2">Cody Fisher</Link>{" "}
                    </h6>
                  </div>
                </div>
                <div className="divider" />
                <div className="meta-info flex items-center justify-between items-center">
                  <div>
                    <span className="text-bid">Current Bid</span>
                    <h6 className="price gem">
                      <i className="icon-gem" />
                      0,34
                    </h6>
                  </div>
                  <div className="button-place-bid">
                    <a
                      onClick={handleBidModal}
                      href="javascript:void(0)"
                      className="tf-button"
                    >
                      <span>Place Bid</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-wow-delay="0s"
              className="wow fadeInUp col-xl-3 col-lg-4 col-md-6 col-sm-6"
            >
              <div className="tf-card-box style-1 bg-white">
                <div className="card-media">
                  <Link href="javascript:void(0)">
                    <img
                      src="/assets/images/box-item/card-item-37.jpg"
                      alt=""
                    />
                  </Link>
                  <span className="wishlist-button icon-heart" />
                  <div className="featured-countdown">
                    <span
                      className="js-countdown"
                      data-timer={7500}
                      data-labels="d,h,m,s"
                    >
                      <div aria-hidden="true" className="countdown__timer">
                        <span
                          className="countdown__item"
                          style={{ display: "none" }}
                        >
                          <span className="countdown__value countdown__value--0 js-countdown__value--0">
                            0
                          </span>
                          <span className="countdown__label">d</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value countdown__value--1 js-countdown__value--1">
                            02
                          </span>
                          <span className="countdown__label">h</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value countdown__value--2 js-countdown__value--2">
                            04
                          </span>
                          <span className="countdown__label">m</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value countdown__value--3 js-countdown__value--3">
                            10
                          </span>
                          <span className="countdown__label">s</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <h5 className="name">
                  <Link href="javascript:void(0)">Dayco serpentine belt</Link>
                </h5>
                <div className="author flex items-center">
                  <div className="avatar">
                    <img
                      src="/assets/images/avatar/avatar-box-03.jpg"
                      alt="Image"
                    />
                  </div>
                  <div className="info">
                    <span>Created by:</span>
                    <h6>
                      <Link href="/author-2">Cody Fisher</Link>{" "}
                    </h6>
                  </div>
                </div>
                <div className="divider" />
                <div className="meta-info flex items-center justify-between items-center">
                  <div>
                    <span className="text-bid">Current Bid</span>
                    <h6 className="price gem">
                      <i className="icon-gem" />
                      0,34
                    </h6>
                  </div>
                  <div className="button-place-bid">
                    <a
                      onClick={handleBidModal}
                      href="javascript:void(0)"
                      className="tf-button"
                    >
                      <span>Place Bid</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-wow-delay="0.1s"
              className="wow fadeInUp col-xl-3 col-lg-4 col-md-6 col-sm-6"
            >
              <div className="tf-card-box style-1 bg-white">
                <div className="card-media">
                  <Link href="javascript:void(0)">
                    <img
                      src="/assets/images/box-item/card-item-38.jpg"
                      alt=""
                    />
                  </Link>
                  <span className="wishlist-button icon-heart" />
                  <div className="featured-countdown">
                    <span
                      className="js-countdown"
                      data-timer={7500}
                      data-labels="d,h,m,s"
                    >
                      <div aria-hidden="true" className="countdown__timer">
                        <span
                          className="countdown__item"
                          style={{ display: "none" }}
                        >
                          <span className="countdown__value countdown__value--0 js-countdown__value--0">
                            0
                          </span>
                          <span className="countdown__label">d</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value countdown__value--1 js-countdown__value--1">
                            02
                          </span>
                          <span className="countdown__label">h</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value countdown__value--2 js-countdown__value--2">
                            04
                          </span>
                          <span className="countdown__label">m</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value countdown__value--3 js-countdown__value--3">
                            10
                          </span>
                          <span className="countdown__label">s</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <h5 className="name">
                  <Link href="javascript:void(0)">Dayco serpentine belt</Link>
                </h5>
                <div className="author flex items-center">
                  <div className="avatar">
                    <img
                      src="/assets/images/avatar/avatar-box-03.jpg"
                      alt="Image"
                    />
                  </div>
                  <div className="info">
                    <span>Created by:</span>
                    <h6>
                      <Link href="/author-2">Cody Fisher</Link>{" "}
                    </h6>
                  </div>
                </div>
                <div className="divider" />
                <div className="meta-info flex items-center justify-between items-center">
                  <div>
                    <span className="text-bid">Current Bid</span>
                    <h6 className="price gem">
                      <i className="icon-gem" />
                      0,34
                    </h6>
                  </div>
                  <div className="button-place-bid">
                    <a
                      onClick={handleBidModal}
                      href="javascript:void(0)"
                      className="tf-button"
                    >
                      <span>Place Bid</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-wow-delay="0.2s"
              className="wow fadeInUp col-xl-3 col-lg-4 col-md-6 col-sm-6"
            >
              <div className="tf-card-box style-1 bg-white">
                <div className="card-media">
                  <Link href="javascript:void(0)">
                    <img
                      src="/assets/images/box-item/card-item-34.jpg"
                      alt=""
                    />
                  </Link>
                  <span className="wishlist-button icon-heart" />
                  <div className="featured-countdown">
                    <span
                      className="js-countdown"
                      data-timer={7500}
                      data-labels="d,h,m,s"
                    >
                      <div aria-hidden="true" className="countdown__timer">
                        <span
                          className="countdown__item"
                          style={{ display: "none" }}
                        >
                          <span className="countdown__value countdown__value--0 js-countdown__value--0">
                            0
                          </span>
                          <span className="countdown__label">d</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value countdown__value--1 js-countdown__value--1">
                            02
                          </span>
                          <span className="countdown__label">h</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value countdown__value--2 js-countdown__value--2">
                            04
                          </span>
                          <span className="countdown__label">m</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value countdown__value--3 js-countdown__value--3">
                            10
                          </span>
                          <span className="countdown__label">s</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <h5 className="name">
                  <Link href="javascript:void(0)">Dayco serpentine belt</Link>
                </h5>
                <div className="author flex items-center">
                  <div className="avatar">
                    <img
                      src="/assets/images/avatar/avatar-box-03.jpg"
                      alt="Image"
                    />
                  </div>
                  <div className="info">
                    <span>Created by:</span>
                    <h6>
                      <Link href="/author-2">Cody Fisher</Link>{" "}
                    </h6>
                  </div>
                </div>
                <div className="divider" />
                <div className="meta-info flex items-center justify-between items-center">
                  <div>
                    <span className="text-bid">Current Bid</span>
                    <h6 className="price gem">
                      <i className="icon-gem" />
                      0,34
                    </h6>
                  </div>
                  <div className="button-place-bid">
                    <a
                      onClick={handleBidModal}
                      href="javascript:void(0)"
                      className="tf-button"
                    >
                      <span>Place Bid</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-wow-delay="0.3s"
              className="wow fadeInUp col-xl-3 col-lg-4 col-md-6 col-sm-6"
            >
              <div className="tf-card-box style-1 bg-white">
                <div className="card-media">
                  <Link href="javascript:void(0)">
                    <img
                      src="/assets/images/box-item/card-item-35.jpg"
                      alt=""
                    />
                  </Link>
                  <span className="wishlist-button icon-heart" />
                  <div className="featured-countdown">
                    <span
                      className="js-countdown"
                      data-timer={7500}
                      data-labels="d,h,m,s"
                    >
                      <div aria-hidden="true" className="countdown__timer">
                        <span
                          className="countdown__item"
                          style={{ display: "none" }}
                        >
                          <span className="countdown__value countdown__value--0 js-countdown__value--0">
                            0
                          </span>
                          <span className="countdown__label">d</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value countdown__value--1 js-countdown__value--1">
                            02
                          </span>
                          <span className="countdown__label">h</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value countdown__value--2 js-countdown__value--2">
                            04
                          </span>
                          <span className="countdown__label">m</span>
                        </span>
                        <span className="countdown__item">
                          <span className="countdown__value countdown__value--3 js-countdown__value--3">
                            10
                          </span>
                          <span className="countdown__label">s</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <h5 className="name">
                  <Link href="javascript:void(0)">Dayco serpentine belt</Link>
                </h5>
                <div className="author flex items-center">
                  <div className="avatar">
                    <img
                      src="/assets/images/avatar/avatar-box-03.jpg"
                      alt="Image"
                    />
                  </div>
                  <div className="info">
                    <span>Created by:</span>
                    <h6>
                      <Link href="/author-2">Cody Fisher</Link>{" "}
                    </h6>
                  </div>
                </div>
                <div className="divider" />
                <div className="meta-info flex items-center justify-between items-center">
                  <div>
                    <span className="text-bid">Current Bid</span>
                    <h6 className="price gem">
                      <i className="icon-gem" />
                      0,34
                    </h6>
                  </div>
                  <div className="button-place-bid">
                    <a
                      onClick={handleBidModal}
                      href="javascript:void(0)"
                      className="tf-button"
                    >
                      <span>Place Bid</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BidModal handleBidModal={handleBidModal} isBidModal={isBidModal} />
    </>
  );
}
