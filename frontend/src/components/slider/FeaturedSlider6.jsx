import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  loop: false,
  slidesPerView: 1,
  observer: true,
  observeParents: true,
  spaceBetween: 30,
  navigation: {
    clickable: true,
    nextEl: ".slider-next",
    prevEl: ".slider-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
};

import { useState } from "react";
import BidModal from "../elements/BidModal";
export default function FeaturedSlider6() {
  const [isBidModal, setBidModal] = useState(false);
  const handleBidModal = () => setBidModal(!isBidModal);
  return (
    <>
      <Swiper
        {...swiperOptions}
        className="featured pt-10 swiper-container carousel"
      >
        <SwiperSlide>
          <div className="tf-card-box style-1 bg-white">
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/card-item-33.jpg" alt="" />
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
                  <Link href="/author-2">Marvin McKinney</Link>{" "}
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="tf-card-box style-1 bg-white">
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/card-item-34.jpg" alt="" />
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
                  <Link href="/author-2">Marvin McKinney</Link>{" "}
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="tf-card-box style-1 bg-white">
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/card-item-35.jpg" alt="" />
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
                  <Link href="/author-2">Marvin McKinney</Link>{" "}
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="tf-card-box style-1 bg-white">
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/card-item-36.jpg" alt="" />
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
                  <Link href="/author-2">Marvin McKinney</Link>{" "}
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="tf-card-box style-1 bg-white">
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/card-item-37.jpg" alt="" />
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
                  <Link href="/author-2">Marvin McKinney</Link>{" "}
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="tf-card-box style-1 bg-white">
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/card-item-38.jpg" alt="" />
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
                  <Link href="/author-2">Marvin McKinney</Link>{" "}
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
        </SwiperSlide>
      </Swiper>
      <BidModal handleBidModal={handleBidModal} isBidModal={isBidModal} />
    </>
  );
}
