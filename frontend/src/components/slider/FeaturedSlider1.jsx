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

import Countdown from "@/components/elements/Countdown";
import { useState } from "react";
import BidModal from "../elements/BidModal";
const currentTime = new Date();
export default function FeaturedSlider1() {
  const [isBidModal, setBidModal] = useState(false);
  const handleBidModal = () => setBidModal(!isBidModal);
  return (
    <>
      {/* <Swiper {...swiperOptions} className="abc">
                <SwiperSlide>Slide 1</SwiperSlide>
            </Swiper> */}

      <div className="featured pt-10 swiper-container carousel">
        <Swiper {...swiperOptions}>
          <SwiperSlide>
            <div className="tf-card-box style-1">
              <div className="card-media">
                <Link href="javascript:void(0)">
                  <img src="/assets/images/box-item/card-item-01.jpg" alt="" />
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
                    <Link href="/author-2">Kathryn Murphy</Link>{" "}
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
                  <img src="/assets/images/box-item/card-item-02.jpg" alt="" />
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
              <h5 className="name">
                <Link href="javascript:void(0)">Dayco serpentine belt</Link>
              </h5>
              <div className="author flex items-center">
                <div className="avatar">
                  <img
                    src="/assets/images/avatar/avatar-box-02.jpg"
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
                  <img src="/assets/images/box-item/card-item-03.jpg" alt="" />
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
                  <img src="/assets/images/box-item/card-item-04.jpg" alt="" />
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
              <h5 className="name">
                <Link href="javascript:void(0)">Dayco serpentine belt</Link>
              </h5>
              <div className="author flex items-center">
                <div className="avatar">
                  <img
                    src="/assets/images/avatar/avatar-box-04.jpg"
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
                  <img src="/assets/images/box-item/card-item-01.jpg" alt="" />
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
              <h5 className="name">
                <Link href="javascript:void(0)">Dayco serpentine belt</Link>
              </h5>
              <div className="author flex items-center">
                <div className="avatar">
                  <img
                    src="/assets/images/avatar/avatar-box-05.jpg"
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
                  <img src="/assets/images/box-item/card-item-02.jpg" alt="" />
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
              <h5 className="name">
                <Link href="javascript:void(0)">Dayco serpentine belt</Link>
              </h5>
              <div className="author flex items-center">
                <div className="avatar">
                  <img
                    src="/assets/images/avatar/avatar-box-06.jpg"
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
                  <img src="/assets/images/box-item/card-item-03.jpg" alt="" />
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
              <h5 className="name">
                <Link href="javascript:void(0)">Dayco serpentine belt</Link>
              </h5>
              <div className="author flex items-center">
                <div className="avatar">
                  <img
                    src="/assets/images/avatar/avatar-box-07.jpg"
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
                  <img src="/assets/images/box-item/card-item-04.jpg" alt="" />
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
              <h5 className="name">
                <Link href="javascript:void(0)">Dayco serpentine belt</Link>
              </h5>
              <div className="author flex items-center">
                <div className="avatar">
                  <img
                    src="/assets/images/avatar/avatar-box-04.jpg"
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
              <div className="meta-info flex items-center justify-between">
                <span className="text-bid">Current Bid</span>
                <h6 className="price gem">
                  <i className="icon-gem" />
                  0,34
                </h6>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination" />
        <div className="slider-next swiper-button-next" />
        <div className="slider-prev swiper-button-prev" />
      </div>
      <BidModal handleBidModal={handleBidModal} isBidModal={isBidModal} />
    </>
  );
}
