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
export default function FeaturedSlider4() {
  const [isBidModal, setBidModal] = useState(false);
  const handleBidModal = () => setBidModal(!isBidModal);
  return (
    <>
      <Swiper
        {...swiperOptions}
        className="featured pt-10 swiper-container carousel"
      >
        <SwiperSlide>
          <div className="tf-card-box style-4">
            <div className="author flex items-center">
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
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/card-item-29.jpg" alt="" />
              </Link>
              <span className="wishlist-button icon-heart" />
            </div>
            <h5 className="name">
              <Link href="javascript:void(0)">Dayco serpentine belt</Link>
            </h5>
            <div className="meta-info flex items-center justify-between">
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
          <div className="tf-card-box style-4">
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
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/card-item-30.jpg" alt="" />
              </Link>
              <span className="wishlist-button icon-heart" />
            </div>
            <h5 className="name">
              <Link href="javascript:void(0)">Dayco serpentine belt</Link>
            </h5>
            <div className="meta-info flex items-center justify-between">
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
          <div className="tf-card-box style-4">
            <div className="author flex items-center">
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
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/card-item-31.jpg" alt="" />
              </Link>
              <span className="wishlist-button icon-heart" />
            </div>
            <h5 className="name">
              <Link href="javascript:void(0)">Dayco serpentine belt</Link>
            </h5>
            <div className="meta-info flex items-center justify-between">
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
          <div className="tf-card-box style-4">
            <div className="author flex items-center">
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
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/card-item-32.jpg" alt="" />
              </Link>
              <span className="wishlist-button icon-heart" />
            </div>
            <h5 className="name">
              <Link href="javascript:void(0)">Dayco serpentine belt</Link>
            </h5>
            <div className="meta-info flex items-center justify-between">
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
          <div className="tf-card-box style-4">
            <div className="author flex items-center">
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
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/card-item-29.jpg" alt="" />
              </Link>
              <span className="wishlist-button icon-heart" />
            </div>
            <h5 className="name">
              <Link href="javascript:void(0)">Dayco serpentine belt</Link>
            </h5>
            <div className="meta-info flex items-center justify-between">
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
          <div className="tf-card-box style-4">
            <div className="author flex items-center">
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
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/card-item-29.jpg" alt="" />
              </Link>
              <span className="wishlist-button icon-heart" />
            </div>
            <h5 className="name">
              <Link href="javascript:void(0)">Dayco serpentine belt</Link>
            </h5>
            <div className="meta-info flex items-center justify-between">
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
          <div className="tf-card-box style-4">
            <div className="author flex items-center">
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
            <div className="card-media">
              <Link href="javascript:void(0)">
                <img src="/assets/images/box-item/card-item-29.jpg" alt="" />
              </Link>
              <span className="wishlist-button icon-heart" />
            </div>
            <h5 className="name">
              <Link href="javascript:void(0)">Dayco serpentine belt</Link>
            </h5>
            <div className="meta-info flex items-center justify-between">
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

        <div className="swiper-pagination" />
        <div className="slider-next swiper-button-next" />
        <div className="slider-prev swiper-button-prev" />
      </Swiper>
      <BidModal handleBidModal={handleBidModal} isBidModal={isBidModal} />
    </>
  );
}
