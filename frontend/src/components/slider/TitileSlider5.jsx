import { Link } from "react-router-dom";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BidModal from "../elements/BidModal";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation, FreeMode],
  loop: true,
  spaceBetween: 53,
  slidesPerView: 1,
  centeredSlides: true,
  freeMode: true,
  watchSlidesProgress: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  observer: true,
  observeParents: true,
  breakpoints: {
    500: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
};

import { useState } from "react";
export default function TitileSlider5() {
  const [isBidModal, setBidModal] = useState(false);
  const handleBidModal = () => setBidModal(!isBidModal);
  return (
    <>
      <Swiper {...swiperOptions} className="swiper-container swiper-rotate-3">
        <SwiperSlide>
          <div className="tf-card-box style-2 type-1">
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/banner-16.jpg" alt="" />
              </Link>
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
            <div className="featured-countdown">
              <span
                className="js-countdown"
                data-timer={7500}
                data-labels="d,h,m,s"
              >
                <div aria-hidden="true" className="countdown__timer">
                  <span className="countdown__item" style={{ display: "none" }}>
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
                      28
                    </span>
                    <span className="countdown__label">s</span>
                  </span>
                </div>
              </span>
            </div>
            <span className="wishlist-button icon-heart" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tf-card-box style-2 type-1">
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/banner-17.jpg" alt="" />
              </Link>
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
            <div className="featured-countdown">
              <span
                className="js-countdown"
                data-timer={7500}
                data-labels="d,h,m,s"
              >
                <div aria-hidden="true" className="countdown__timer">
                  <span className="countdown__item" style={{ display: "none" }}>
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
                      28
                    </span>
                    <span className="countdown__label">s</span>
                  </span>
                </div>
              </span>
            </div>
            <span className="wishlist-button icon-heart" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tf-card-box style-2 type-1">
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/banner-18.jpg" alt="" />
              </Link>
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
            <div className="featured-countdown">
              <span
                className="js-countdown"
                data-timer={7500}
                data-labels="d,h,m,s"
              >
                <div aria-hidden="true" className="countdown__timer">
                  <span className="countdown__item" style={{ display: "none" }}>
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
                      28
                    </span>
                    <span className="countdown__label">s</span>
                  </span>
                </div>
              </span>
            </div>
            <span className="wishlist-button icon-heart" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tf-card-box style-2 type-1">
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/banner-16.jpg" alt="" />
              </Link>
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
            <div className="featured-countdown">
              <span
                className="js-countdown"
                data-timer={7500}
                data-labels="d,h,m,s"
              >
                <div aria-hidden="true" className="countdown__timer">
                  <span className="countdown__item" style={{ display: "none" }}>
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
                      28
                    </span>
                    <span className="countdown__label">s</span>
                  </span>
                </div>
              </span>
            </div>
            <span className="wishlist-button icon-heart" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tf-card-box style-2 type-1">
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/banner-17.jpg" alt="" />
              </Link>
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
            <div className="featured-countdown">
              <span
                className="js-countdown"
                data-timer={7500}
                data-labels="d,h,m,s"
              >
                <div aria-hidden="true" className="countdown__timer">
                  <span className="countdown__item" style={{ display: "none" }}>
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
                      28
                    </span>
                    <span className="countdown__label">s</span>
                  </span>
                </div>
              </span>
            </div>
            <span className="wishlist-button icon-heart" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tf-card-box style-2 type-1">
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/banner-18.jpg" alt="" />
              </Link>
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
            <div className="featured-countdown">
              <span
                className="js-countdown"
                data-timer={7500}
                data-labels="d,h,m,s"
              >
                <div aria-hidden="true" className="countdown__timer">
                  <span className="countdown__item" style={{ display: "none" }}>
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
                      28
                    </span>
                    <span className="countdown__label">s</span>
                  </span>
                </div>
              </span>
            </div>
            <span className="wishlist-button icon-heart" />
          </div>
        </SwiperSlide>
      </Swiper>
      <BidModal handleBidModal={handleBidModal} isBidModal={isBidModal} />
    </>
  );
}
