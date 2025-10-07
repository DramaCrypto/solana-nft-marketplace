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
  observer: true,
  observeParents: true,
  freeMode: false,
  watchSlidesProgress: true,
  effect: "coverflow",
  grabCursor: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 500,
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
  },
};

import Countdown from "@/components/elements/Countdown";
import { useState } from "react";
const currentTime = new Date();
export default function TitileSlider2() {
  const [isBidModal, setBidModal] = useState(false);
  const handleBidModal = () => setBidModal(!isBidModal);
  return (
    <>
      <Swiper {...swiperOptions} className="swiper-container swiper-3d-3card">
        <SwiperSlide>
          <div className="tf-card-box style-2">
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/banner-08.jpg" alt="" />
              </Link>
              <span className="wishlist-button icon-heart" />
              <div className="featured-countdown">
                <Countdown
                  endDateTime={currentTime.setDate(currentTime.getDate() + 2)}
                />
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
            <div className="author flex items-center justify-between">
              <div className="avatar">
                <img
                  src="/assets/images/avatar/avatar-box-06.jpg"
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
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tf-card-box style-2">
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/banner-09.jpg" alt="" />
              </Link>
              <span className="wishlist-button icon-heart" />
              <div className="featured-countdown">
                <Countdown
                  endDateTime={currentTime.setDate(currentTime.getDate() + 2)}
                />
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
            <div className="author flex items-center justify-between">
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
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tf-card-box style-2">
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/banner-10.jpg" alt="" />
              </Link>
              <span className="wishlist-button icon-heart" />
              <div className="featured-countdown">
                <Countdown
                  endDateTime={currentTime.setDate(currentTime.getDate() + 2)}
                />
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
            <div className="author flex items-center justify-between">
              <div className="avatar">
                <img
                  src="/assets/images/avatar/avatar-box-03.jpg"
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
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tf-card-box style-2">
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/banner-08.jpg" alt="" />
              </Link>
              <span className="wishlist-button icon-heart" />
              <div className="featured-countdown">
                <Countdown
                  endDateTime={currentTime.setDate(currentTime.getDate() + 2)}
                />
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
            <div className="author flex items-center justify-between">
              <div className="avatar">
                <img
                  src="/assets/images/avatar/avatar-box-04.jpg"
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
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tf-card-box style-2">
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/banner-09.jpg" alt="" />
              </Link>
              <span className="wishlist-button icon-heart" />
              <div className="featured-countdown">
                <Countdown
                  endDateTime={currentTime.setDate(currentTime.getDate() + 2)}
                />
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
            <div className="author flex items-center justify-between">
              <div className="avatar">
                <img
                  src="/assets/images/avatar/avatar-box-01.jpg"
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
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button-prev prev-3d over" />
      <BidModal handleBidModal={handleBidModal} isBidModal={isBidModal} />
    </>
  );
}
