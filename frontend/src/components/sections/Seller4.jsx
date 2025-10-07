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
export default function Seller4() {
  return (
    <>
      <div className="tf-section seller ">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-section pb-30">
                <h2 className="tf-title ">Browse by category</h2>
                <Link href="/explore-3">
                  View all bids <i className="icon-arrow-right2" />
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
                          src="/assets/images/box-item/imgslider1category.jpg"
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
                          src="/assets/images/box-item/imgslider2category.jpg"
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
                          src="/assets/images/box-item/imgslider3category.jpg"
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
                          src="/assets/images/box-item/imgslider4category.jpg"
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
                          src="/assets/images/box-item/imgslider5category.jpg"
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
                          src="/assets/images/box-item/imgslider6category.jpg"
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
                          src="/assets/images/box-item/imgslider1category.jpg"
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
                          src="/assets/images/box-item/imgslider2category.jpg"
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
