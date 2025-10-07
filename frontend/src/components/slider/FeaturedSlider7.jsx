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
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    clickable: true,
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    },
    1500: {
      slidesPerView: 5,
    },
  },
};

import { useState } from "react";
import BidModal from "../elements/BidModal";
export default function FeaturedSlider7() {
  const [isBidModal, setBidModal] = useState(false);
  const handleBidModal = () => setBidModal(!isBidModal);
  return (
    <>
      <Swiper
        {...swiperOptions}
        className="featured pt-10 swiper-container carousel5 swiper-container-horizontal"
      >
        <SwiperSlide>
          <div className="tf-card-box style-1">
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/card-item-46.jpg" alt="" />
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
                        03
                      </span>
                      <span className="countdown__label">m</span>
                    </span>
                    <span className="countdown__item">
                      <span className="countdown__value countdown__value--3 js-countdown__value--3">
                        43
                      </span>
                      <span className="countdown__label">s</span>
                    </span>
                  </div>
                </span>
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
            <h5 className="name">
              <Link href="javascript:void(0)">Dayco serpentine belt</Link>
            </h5>
            <div className="author flex items-center">
              <div className="avatar">
                <img
                  src="/assets/images/avatar/avatar-box-01.jpg"
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
            <div className="meta-info flex items-center justify-between">
              <span className="text-bid">Current Bid</span>
              <h6 className="price gem">
                <i className="icon-gem" />
                0,34
              </h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tf-card-box style-1">
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/card-item-42.jpg" alt="" />
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
                        03
                      </span>
                      <span className="countdown__label">m</span>
                    </span>
                    <span className="countdown__item">
                      <span className="countdown__value countdown__value--3 js-countdown__value--3">
                        43
                      </span>
                      <span className="countdown__label">s</span>
                    </span>
                  </div>
                </span>
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
            <h5 className="name">
              <Link href="javascript:void(0)">Dayco serpentine belt</Link>
            </h5>
            <div className="author flex items-center">
              <div className="avatar">
                <img
                  src="/assets/images/avatar/avatar-box-01.jpg"
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
            <div className="meta-info flex items-center justify-between">
              <span className="text-bid">Current Bid</span>
              <h6 className="price gem">
                <i className="icon-gem" />
                0,34
              </h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tf-card-box style-1">
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/card-item-47.jpg" alt="" />
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
                        03
                      </span>
                      <span className="countdown__label">m</span>
                    </span>
                    <span className="countdown__item">
                      <span className="countdown__value countdown__value--3 js-countdown__value--3">
                        43
                      </span>
                      <span className="countdown__label">s</span>
                    </span>
                  </div>
                </span>
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
            <h5 className="name">
              <Link href="javascript:void(0)">Dayco serpentine belt</Link>
            </h5>
            <div className="author flex items-center">
              <div className="avatar">
                <img
                  src="/assets/images/avatar/avatar-box-01.jpg"
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
            <div className="meta-info flex items-center justify-between">
              <span className="text-bid">Current Bid</span>
              <h6 className="price gem">
                <i className="icon-gem" />
                0,34
              </h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tf-card-box style-1">
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/card-item-44.jpg" alt="" />
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
                        03
                      </span>
                      <span className="countdown__label">m</span>
                    </span>
                    <span className="countdown__item">
                      <span className="countdown__value countdown__value--3 js-countdown__value--3">
                        43
                      </span>
                      <span className="countdown__label">s</span>
                    </span>
                  </div>
                </span>
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
            <h5 className="name">
              <Link href="javascript:void(0)">Dayco serpentine belt</Link>
            </h5>
            <div className="author flex items-center">
              <div className="avatar">
                <img
                  src="/assets/images/avatar/avatar-box-01.jpg"
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
            <div className="meta-info flex items-center justify-between">
              <span className="text-bid">Current Bid</span>
              <h6 className="price gem">
                <i className="icon-gem" />
                0,34
              </h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tf-card-box style-1">
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/card-item-45.jpg" alt="" />
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
                        03
                      </span>
                      <span className="countdown__label">m</span>
                    </span>
                    <span className="countdown__item">
                      <span className="countdown__value countdown__value--3 js-countdown__value--3">
                        43
                      </span>
                      <span className="countdown__label">s</span>
                    </span>
                  </div>
                </span>
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
            <h5 className="name">
              <Link href="javascript:void(0)">Dayco serpentine belt</Link>
            </h5>
            <div className="author flex items-center">
              <div className="avatar">
                <img
                  src="/assets/images/avatar/avatar-box-01.jpg"
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
            <div className="meta-info flex items-center justify-between">
              <span className="text-bid">Current Bid</span>
              <h6 className="price gem">
                <i className="icon-gem" />
                0,34
              </h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tf-card-box style-1">
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/card-item-46.jpg" alt="" />
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
                        03
                      </span>
                      <span className="countdown__label">m</span>
                    </span>
                    <span className="countdown__item">
                      <span className="countdown__value countdown__value--3 js-countdown__value--3">
                        43
                      </span>
                      <span className="countdown__label">s</span>
                    </span>
                  </div>
                </span>
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
            <h5 className="name">
              <Link href="javascript:void(0)">Dayco serpentine belt</Link>
            </h5>
            <div className="author flex items-center">
              <div className="avatar">
                <img
                  src="/assets/images/avatar/avatar-box-01.jpg"
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
            <div className="meta-info flex items-center justify-between">
              <span className="text-bid">Current Bid</span>
              <h6 className="price gem">
                <i className="icon-gem" />
                0,34
              </h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tf-card-box style-1">
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/card-item-47.jpg" alt="" />
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
                        03
                      </span>
                      <span className="countdown__label">m</span>
                    </span>
                    <span className="countdown__item">
                      <span className="countdown__value countdown__value--3 js-countdown__value--3">
                        43
                      </span>
                      <span className="countdown__label">s</span>
                    </span>
                  </div>
                </span>
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
            <h5 className="name">
              <Link href="javascript:void(0)">Dayco serpentine belt</Link>
            </h5>
            <div className="author flex items-center">
              <div className="avatar">
                <img
                  src="/assets/images/avatar/avatar-box-01.jpg"
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
            <div className="meta-info flex items-center justify-between">
              <span className="text-bid">Current Bid</span>
              <h6 className="price gem">
                <i className="icon-gem" />
                0,34
              </h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tf-card-box style-1">
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/card-item-48.jpg" alt="" />
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
                        03
                      </span>
                      <span className="countdown__label">m</span>
                    </span>
                    <span className="countdown__item">
                      <span className="countdown__value countdown__value--3 js-countdown__value--3">
                        43
                      </span>
                      <span className="countdown__label">s</span>
                    </span>
                  </div>
                </span>
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
            <h5 className="name">
              <Link href="javascript:void(0)">Dayco serpentine belt</Link>
            </h5>
            <div className="author flex items-center">
              <div className="avatar">
                <img
                  src="/assets/images/avatar/avatar-box-01.jpg"
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
            <div className="meta-info flex items-center justify-between">
              <span className="text-bid">Current Bid</span>
              <h6 className="price gem">
                <i className="icon-gem" />
                0,34
              </h6>
            </div>
          </div>
        </SwiperSlide>

        <div className="swiper-pagination" />
        <div className="swiper-button-next" />
        <div className="swiper-button-prev" />
      </Swiper>
      <BidModal handleBidModal={handleBidModal} isBidModal={isBidModal} />
    </>
  );
}
