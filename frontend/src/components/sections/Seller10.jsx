import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  loop: false,
  slidesPerView: 2,
  observer: true,
  grabCursor: true,
  observeParents: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2700,
    disableOnInteraction: false,
  },
  navigation: {
    clickable: true,
    nextEl: ".seller-next",
    prevEl: ".seller-prev",
  },
  breakpoints: {
    500: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 5,
    },
    1070: {
      slidesPerView: 6,
    },
  },
};

import { Link } from "react-router-dom";
export default function Seller10() {
  return (
    <>
      <div className="tf-section seller ">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-section pb-30">
                <h2 className="tf-title ">Browse by category</h2>
                <Link href="/explore-3">
                  Discover more <i className="icon-arrow-right2" />
                </Link>
              </div>
            </div>
            <div className="col-md-12">
              <Swiper
                {...swiperOptions}
                className="swiper-container seller seller-slider2"
              >
                <div className="swiper-wrapper">
                  <SwiperSlide>
                    <div className="tf-category text-center">
                      <div className="card-media">
                        <img
                          src="/assets/images/box-item/iconcategory-01.png"
                          alt=""
                        />
                        <Link href="javascript:void(0)">
                          <i className="icon-arrow-up-right2" />
                        </Link>
                      </div>
                      <h6>Metaverse</h6>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tf-category text-center">
                      <div className="card-media">
                        <img
                          src="/assets/images/box-item/iconcategory-02.png"
                          alt=""
                        />
                        <Link href="javascript:void(0)">
                          <i className="icon-arrow-up-right2" />
                        </Link>
                      </div>
                      <h6>Metaverse</h6>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tf-category text-center">
                      <div className="card-media">
                        <img
                          src="/assets/images/box-item/iconcategory-03.png"
                          alt=""
                        />
                        <Link href="javascript:void(0)">
                          <i className="icon-arrow-up-right2" />
                        </Link>
                      </div>
                      <h6>Sport</h6>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tf-category text-center">
                      <div className="card-media">
                        <img
                          src="/assets/images/box-item/iconcategory-04.png"
                          alt=""
                        />
                        <Link href="javascript:void(0)">
                          <i className="icon-arrow-up-right2" />
                        </Link>
                      </div>
                      <h6>Crypto</h6>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tf-category text-center">
                      <div className="card-media">
                        <img
                          src="/assets/images/box-item/iconcategory-05.png"
                          alt=""
                        />
                        <Link href="javascript:void(0)">
                          <i className="icon-arrow-up-right2" />
                        </Link>
                      </div>
                      <h6>Music</h6>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tf-category text-center">
                      <div className="card-media">
                        <img
                          src="/assets/images/box-item/iconcategory-06.png"
                          alt=""
                        />
                        <Link href="javascript:void(0)">
                          <i className="icon-arrow-up-right2" />
                        </Link>
                      </div>
                      <h6>Digital Art</h6>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tf-category text-center">
                      <div className="card-media">
                        <img
                          src="/assets/images/box-item/iconcategory-01.png"
                          alt=""
                        />
                        <Link href="javascript:void(0)">
                          <i className="icon-arrow-up-right2" />
                        </Link>
                      </div>
                      <h6>Typo</h6>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tf-category text-center">
                      <div className="card-media">
                        <img
                          src="/assets/images/box-item/iconcategory-02.png"
                          alt=""
                        />
                        <Link href="javascript:void(0)">
                          <i className="icon-arrow-up-right2" />
                        </Link>
                      </div>
                      <h6>Typo</h6>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
              <div className="swiper-button-next seller-next over active" />
              <div className="swiper-button-prev seller-prev over " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
