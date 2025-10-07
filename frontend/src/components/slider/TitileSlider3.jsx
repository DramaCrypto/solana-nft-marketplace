import { Link } from "react-router-dom";
import {
  Autoplay,
  EffectCoverflow,
  FreeMode,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BidModal from "../elements/BidModal";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation, FreeMode, EffectCoverflow],
  loop: false,
  spaceBetween: 0,
  slidesPerView: 1,
  centeredSlides: false,
  freeMode: false,
  watchSlidesProgress: true,
  effect: "coverflow",
  grabCursor: true,
  coverflowEffect: {
    rotate: 0,
    stretch: -20,
    depth: 0,
    modifier: 1,
    scale: 0.9,
    slideShadows: false,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    prevEl: ".prev-3d",
    nextEl: ".next-3d",
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
};

import { useState } from "react";
export default function TitileSlider3() {
  const [isBidModal, setBidModal] = useState(false);
  const handleBidModal = () => setBidModal(!isBidModal);
  return (
    <>
      <Swiper
        {...swiperOptions}
        className="swiper-container swiper-3d-3cardfull"
      >
        <SwiperSlide>
          <div className="tf-card-box style-3">
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/banner-11.jpg" alt="" />
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
            <div className="card-bottom">
              <div className="author flex items-center">
                <div className="avatar">
                  <img
                    src="/assets/images/avatar/avatar-box-02.jpg"
                    alt="Image"
                  />
                </div>
                <div className="info">
                  <span>Posted by:</span>
                  <h6>
                    <Link href="/author-2">Cody Fisher</Link>{" "}
                  </h6>
                </div>
              </div>
              <div className="bottom-right">
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
                          28
                        </span>
                        <span className="countdown__label">s</span>
                      </span>
                    </div>
                  </span>
                </div>
                <span className="wishlist-button icon-heart" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tf-card-box style-3">
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/banner-12.jpg" alt="" />
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
            <div className="card-bottom">
              <div className="author flex items-center">
                <div className="avatar">
                  <img
                    src="/assets/images/avatar/avatar-box-02.jpg"
                    alt="Image"
                  />
                </div>
                <div className="info">
                  <span>Posted by:</span>
                  <h6>
                    <Link href="/author-2">Cody Fisher</Link>{" "}
                  </h6>
                </div>
              </div>
              <div className="bottom-right">
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
                          28
                        </span>
                        <span className="countdown__label">s</span>
                      </span>
                    </div>
                  </span>
                </div>
                <span className="wishlist-button icon-heart" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tf-card-box style-3">
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/banner-13.jpg" alt="" />
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
            <div className="card-bottom">
              <div className="author flex items-center">
                <div className="avatar">
                  <img
                    src="/assets/images/avatar/avatar-box-02.jpg"
                    alt="Image"
                  />
                </div>
                <div className="info">
                  <span>Posted by:</span>
                  <h6>
                    <Link href="/author-2">Cody Fisher</Link>{" "}
                  </h6>
                </div>
              </div>
              <div className="bottom-right">
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
                          28
                        </span>
                        <span className="countdown__label">s</span>
                      </span>
                    </div>
                  </span>
                </div>
                <span className="wishlist-button icon-heart" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tf-card-box style-3">
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/banner-11.jpg" alt="" />
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
            <div className="card-bottom">
              <div className="author flex items-center">
                <div className="avatar">
                  <img
                    src="/assets/images/avatar/avatar-box-02.jpg"
                    alt="Image"
                  />
                </div>
                <div className="info">
                  <span>Posted by:</span>
                  <h6>
                    <Link href="/author-2">Cody Fisher</Link>{" "}
                  </h6>
                </div>
              </div>
              <div className="bottom-right">
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
                          28
                        </span>
                        <span className="countdown__label">s</span>
                      </span>
                    </div>
                  </span>
                </div>
                <span className="wishlist-button icon-heart" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tf-card-box style-3">
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/banner-12.jpg" alt="" />
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
            <div className="card-bottom">
              <div className="author flex items-center">
                <div className="avatar">
                  <img
                    src="/assets/images/avatar/avatar-box-02.jpg"
                    alt="Image"
                  />
                </div>
                <div className="info">
                  <span>Posted by:</span>
                  <h6>
                    <Link href="/author-2">Cody Fisher</Link>{" "}
                  </h6>
                </div>
              </div>
              <div className="bottom-right">
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
                          28
                        </span>
                        <span className="countdown__label">s</span>
                      </span>
                    </div>
                  </span>
                </div>
                <span className="wishlist-button icon-heart" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tf-card-box style-3">
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/banner-13.jpg" alt="" />
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
            <div className="card-bottom">
              <div className="author flex items-center">
                <div className="avatar">
                  <img
                    src="/assets/images/avatar/avatar-box-02.jpg"
                    alt="Image"
                  />
                </div>
                <div className="info">
                  <span>Posted by:</span>
                  <h6>
                    <Link href="/author-2">Cody Fisher</Link>{" "}
                  </h6>
                </div>
              </div>
              <div className="bottom-right">
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
                          28
                        </span>
                        <span className="countdown__label">s</span>
                      </span>
                    </div>
                  </span>
                </div>
                <span className="wishlist-button icon-heart" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button-next next-3d over" />
      <div className="swiper-button-prev prev-3d over" />
      <BidModal handleBidModal={handleBidModal} isBidModal={isBidModal} />
    </>
  );
}
