import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  loop: false,
  slidesPerView: 1,
  observer: true,
  observeParents: true,
  spaceBetween: 16,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 7,
    },
  },
};

export default function FeaturedSlider5() {
  return (
    <>
      <Swiper
        {...swiperOptions}
        className="featured pt-10 swiper-container carouselfull-1"
      >
        <div className="swiper-wrapper">
          <SwiperSlide>
            <div className="tf-category style-1 text-center">
              <div className="card-media">
                <div className="box-top">
                  <img
                    src="/assets/images/box-item/category-tl-01.jpg"
                    alt=""
                  />
                  <img
                    src="/assets/images/box-item/category-tr-01.jpg"
                    alt=""
                  />
                </div>
                <div className="box-bottom">
                  <img src="/assets/images/box-item/category-b-01.jpg" alt="" />
                  <img src="/assets/images/box-item/category-b-02.jpg" alt="" />
                  <img src="/assets/images/box-item/category-b-03.jpg" alt="" />
                </div>
                <Link href="javascript:void(0)">
                  <i className="icon-arrow-up-right2" />
                </Link>
              </div>
              <h6>Digital Art</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tf-category style-1 text-center">
              <div className="card-media">
                <div className="box-top">
                  <img
                    src="/assets/images/box-item/category-tl-02.jpg"
                    alt=""
                  />
                  <img
                    src="/assets/images/box-item/category-tr-02.jpg"
                    alt=""
                  />
                </div>
                <div className="box-bottom">
                  <img src="/assets/images/box-item/category-b-04.jpg" alt="" />
                  <img src="/assets/images/box-item/category-b-05.jpg" alt="" />
                  <img src="/assets/images/box-item/category-b-06.jpg" alt="" />
                </div>
                <Link href="javascript:void(0)">
                  <i className="icon-arrow-up-right2" />
                </Link>
              </div>
              <h6>Music</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tf-category style-1 text-center">
              <div className="card-media">
                <div className="box-top">
                  <img
                    src="/assets/images/box-item/category-tl-03.jpg"
                    alt=""
                  />
                  <img
                    src="/assets/images/box-item/category-tr-03.jpg"
                    alt=""
                  />
                </div>
                <div className="box-bottom">
                  <img src="/assets/images/box-item/category-b-07.jpg" alt="" />
                  <img src="/assets/images/box-item/category-b-08.jpg" alt="" />
                  <img src="/assets/images/box-item/category-b-09.jpg" alt="" />
                </div>
                <Link href="javascript:void(0)">
                  <i className="icon-arrow-up-right2" />
                </Link>
              </div>
              <h6>Photography</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tf-category style-1 text-center">
              <div className="card-media">
                <div className="box-top">
                  <img
                    src="/assets/images/box-item/category-tl-04.jpg"
                    alt=""
                  />
                  <img
                    src="/assets/images/box-item/category-tr-04.jpg"
                    alt=""
                  />
                </div>
                <div className="box-bottom">
                  <img src="/assets/images/box-item/category-b-10.jpg" alt="" />
                  <img src="/assets/images/box-item/category-b-11.jpg" alt="" />
                  <img src="/assets/images/box-item/category-b-12.jpg" alt="" />
                </div>
                <Link href="javascript:void(0)">
                  <i className="icon-arrow-up-right2" />
                </Link>
              </div>
              <h6>Photography</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tf-category style-1 text-center">
              <div className="card-media">
                <div className="box-top">
                  <img
                    src="/assets/images/box-item/category-tl-05.jpg"
                    alt=""
                  />
                  <img
                    src="/assets/images/box-item/category-tr-05.jpg"
                    alt=""
                  />
                </div>
                <div className="box-bottom">
                  <img src="/assets/images/box-item/category-b-13.jpg" alt="" />
                  <img src="/assets/images/box-item/category-b-14.jpg" alt="" />
                  <img src="/assets/images/box-item/category-b-15.jpg" alt="" />
                </div>
                <Link href="javascript:void(0)">
                  <i className="icon-arrow-up-right2" />
                </Link>
              </div>
              <h6>Typo</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tf-category style-1 text-center">
              <div className="card-media">
                <div className="box-top">
                  <img
                    src="/assets/images/box-item/category-tl-05.jpg"
                    alt=""
                  />
                  <img
                    src="/assets/images/box-item/category-tr-05.jpg"
                    alt=""
                  />
                </div>
                <div className="box-bottom">
                  <img src="/assets/images/box-item/category-b-13.jpg" alt="" />
                  <img src="/assets/images/box-item/category-b-14.jpg" alt="" />
                  <img src="/assets/images/box-item/category-b-15.jpg" alt="" />
                </div>
                <Link href="javascript:void(0)">
                  <i className="icon-arrow-up-right2" />
                </Link>
              </div>
              <h6>Photography</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tf-category style-1 text-center">
              <div className="card-media">
                <div className="box-top">
                  <img
                    src="/assets/images/box-item/category-tl-06.jpg"
                    alt=""
                  />
                  <img
                    src="/assets/images/box-item/category-tr-06.jpg"
                    alt=""
                  />
                </div>
                <div className="box-bottom">
                  <img src="/assets/images/box-item/category-b-16.jpg" alt="" />
                  <img src="/assets/images/box-item/category-b-17.jpg" alt="" />
                  <img src="/assets/images/box-item/category-b-18.jpg" alt="" />
                </div>
                <Link href="javascript:void(0)">
                  <i className="icon-arrow-up-right2" />
                </Link>
              </div>
              <h6>Digital Art</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tf-category style-1 text-center">
              <div className="card-media">
                <div className="box-top">
                  <img
                    src="/assets/images/box-item/category-tl-07.jpg"
                    alt=""
                  />
                  <img
                    src="/assets/images/box-item/category-tr-07.jpg"
                    alt=""
                  />
                </div>
                <div className="box-bottom">
                  <img src="/assets/images/box-item/category-b-07.jpg" alt="" />
                  <img src="/assets/images/box-item/category-b-01.jpg" alt="" />
                  <img src="/assets/images/box-item/category-b-13.jpg" alt="" />
                </div>
                <Link href="javascript:void(0)">
                  <i className="icon-arrow-up-right2" />
                </Link>
              </div>
              <h6>Digital Art</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="tf-category style-1 text-center">
              <div className="card-media">
                <div className="box-top">
                  <img
                    src="/assets/images/box-item/category-tl-05.jpg"
                    alt=""
                  />
                  <img
                    src="/assets/images/box-item/category-tr-05.jpg"
                    alt=""
                  />
                </div>
                <div className="box-bottom">
                  <img src="/assets/images/box-item/category-b-13.jpg" alt="" />
                  <img src="/assets/images/box-item/category-b-14.jpg" alt="" />
                  <img src="/assets/images/box-item/category-b-15.jpg" alt="" />
                </div>
                <Link href="javascript:void(0)">
                  <i className="icon-arrow-up-right2" />
                </Link>
              </div>
              <h6>Digital Art</h6>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}
