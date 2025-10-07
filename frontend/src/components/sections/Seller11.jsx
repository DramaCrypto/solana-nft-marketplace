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

import { Link } from "react-router-dom";
import { useState } from "react";
import BidModal from "../elements/BidModal";
export default function Seller11() {
  const [isBidModal, setBidModal] = useState(false);
  const handleBidModal = () => setBidModal(!isBidModal);
  return (
    <>
      <div className="tf-section-1 seller ">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-section">
                <h2 className="tf-title pb-20">
                  Popular items in last
                  <span className="dropdown" id="select-day">
                    <span className="btn-selector tf-color">
                      <span>1 day</span>
                    </span>
                    <ul>
                      <li>
                        <span>1 day</span>
                      </li>
                      <li>
                        <span>3 day</span>
                      </li>
                      <li>
                        <span>7 day</span>
                      </li>
                    </ul>
                  </span>
                </h2>
              </div>
            </div>
            <div className="col-md-12">
              <Swiper
                {...swiperOptions}
                className="featured pt-10 swiper-container carousel"
              >
                <div className="swiper-wrapper">
                  <SwiperSlide>
                    <div className="tf-card-box style-1">
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="/assets/images/box-item/card-item-54.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
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
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
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
                          <img
                            src="/assets/images/box-item/card-item-52.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
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
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
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
                          <img
                            src="/assets/images/box-item/card-item-56.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
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
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
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
                          <img
                            src="/assets/images/box-item/card-item-53.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
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
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
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
                          <img
                            src="/assets/images/box-item/card-item-56.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
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
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
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
                      <div className="meta-info flex items-center justify-between">
                        <span className="text-bid">Current Bid</span>
                        <h6 className="price gem">
                          <i className="icon-gem" />
                          0,34
                        </h6>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <BidModal handleBidModal={handleBidModal} isBidModal={isBidModal} />
    </>
  );
}
