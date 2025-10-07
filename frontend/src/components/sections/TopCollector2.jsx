import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  loop: false,
  spaceBetween: 28,
  slidesPerView: "auto",
  centeredSlides: false,
  observer: true,
  observeParents: true,
  grabCursor: true,
  breakpoints: {
    0: {
      spaceBetween: 20,
    },
    480: {
      spaceBetween: 20,
    },
    767: {
      spaceBetween: 28,
    },
    992: {
      spaceBetween: 28,
    },
  },
};
const swiperOptions2 = {
  modules: [Autoplay, Pagination, Navigation],
  loop: false,
  spaceBetween: 28,
  slidesPerView: "auto",
  centeredSlides: false,
  observer: true,
  observeParents: true,
  grabCursor: true,
  breakpoints: {
    0: {
      spaceBetween: 20,
    },
    480: {
      spaceBetween: 20,
    },
    767: {
      spaceBetween: 28,
    },
    992: {
      spaceBetween: 28,
    },
  },
};

import { Link } from "react-router-dom";
export default function TopCollector2() {
  return (
    <>
      <div className="tf-section top-collector">
        <div className="top-collector-wrapper">
          <div className="bg-text">
            <h2>Top Collector</h2>
          </div>
          <div className="heading-section ">
            <h2 className="tf-title ">Top Collector Buys Today</h2>
          </div>
          <Swiper
            {...swiperOptions}
            className="featured swiper-container autoslider1"
          >
            <div className="swiper-wrapper">
              <SwiperSlide>
                <div className="tf-author-box style-1 text-center flex">
                  <div className="author-avatar ">
                    <img
                      src="/assets/images/avatar/avatar-small-01.png"
                      alt=""
                      className="avatar"
                    />
                  </div>
                  <div className="author-infor ">
                    <h5>
                      <Link href="/author-2">EHT senders</Link>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tf-author-box style-1 text-center flex">
                  <div className="author-avatar ">
                    <img
                      src="/assets/images/avatar/avatar-small-02.png"
                      alt=""
                      className="avatar"
                    />
                  </div>
                  <div className="author-infor ">
                    <h5>
                      <Link href="/author-2">Girls riding things</Link>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tf-author-box style-1 text-center flex">
                  <div className="author-avatar ">
                    <img
                      src="/assets/images/avatar/avatar-small-03.png"
                      alt=""
                      className="avatar"
                    />
                  </div>
                  <div className="author-infor ">
                    <h5>
                      <Link href="/author-2">The lobstars</Link>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tf-author-box style-1 text-center flex">
                  <div className="author-avatar ">
                    <img
                      src="/assets/images/avatar/avatar-small-04.png"
                      alt=""
                      className="avatar"
                    />
                  </div>
                  <div className="author-infor ">
                    <h5>
                      <Link href="/author-2">Nakamigos</Link>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tf-author-box style-1 text-center flex">
                  <div className="author-avatar ">
                    <img
                      src="/assets/images/avatar/avatar-small-01.png"
                      alt=""
                      className="avatar"
                    />
                  </div>
                  <div className="author-infor ">
                    <h5>
                      <Link href="/author-2">Beanz office</Link>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tf-author-box style-1 text-center flex">
                  <div className="author-avatar ">
                    <img
                      src="/assets/images/avatar/avatar-small-02.png"
                      alt=""
                      className="avatar"
                    />
                  </div>
                  <div className="author-infor ">
                    <h5>
                      <Link href="/author-2">Sproto gremilins</Link>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tf-author-box style-1 text-center flex">
                  <div className="author-avatar ">
                    <img
                      src="/assets/images/avatar/avatar-small-03.png"
                      alt=""
                      className="avatar"
                    />
                  </div>
                  <div className="author-infor ">
                    <h5>
                      <Link href="/author-2">Psyop gang</Link>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tf-author-box style-1 text-center flex">
                  <div className="author-avatar ">
                    <img
                      src="/assets/images/avatar/avatar-small-04.png"
                      alt=""
                      className="avatar"
                    />
                  </div>
                  <div className="author-infor ">
                    <h5>
                      <Link href="/author-2">EHT senders</Link>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tf-author-box style-1 text-center flex">
                  <div className="author-avatar ">
                    <img
                      src="/assets/images/avatar/avatar-small-01.png"
                      alt=""
                      className="avatar"
                    />
                  </div>
                  <div className="author-infor ">
                    <h5>
                      <Link href="/author-2">Girls riding things</Link>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tf-author-box style-1 text-center flex">
                  <div className="author-avatar ">
                    <img
                      src="/assets/images/avatar/avatar-small-02.png"
                      alt=""
                      className="avatar"
                    />
                  </div>
                  <div className="author-infor ">
                    <h5>
                      <Link href="/author-2">The lobstars</Link>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tf-author-box style-1 text-center flex">
                  <div className="author-avatar ">
                    <img
                      src="/assets/images/avatar/avatar-small-03.png"
                      alt=""
                      className="avatar"
                    />
                  </div>
                  <div className="author-infor ">
                    <h5>
                      <Link href="/author-2">Nakamigos</Link>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tf-author-box style-1 text-center flex">
                  <div className="author-avatar ">
                    <img
                      src="/assets/images/avatar/avatar-small-04.png"
                      alt=""
                      className="avatar"
                    />
                  </div>
                  <div className="author-infor ">
                    <h5>
                      <Link href="/author-2">Beanz office</Link>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
          <Swiper
            {...swiperOptions2}
            className="featured mt-17 swiper-container autoslider2"
          >
            <div className="swiper-wrapper">
              <SwiperSlide>
                <div className="tf-author-box style-1 text-center flex">
                  <div className="author-avatar ">
                    <img
                      src="/assets/images/avatar/avatar-small-01.png"
                      alt=""
                      className="avatar"
                    />
                  </div>
                  <div className="author-infor ">
                    <h5>
                      <Link href="/author-2">Psyop gang</Link>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tf-author-box style-1 text-center flex">
                  <div className="author-avatar ">
                    <img
                      src="/assets/images/avatar/avatar-small-02.png"
                      alt=""
                      className="avatar"
                    />
                  </div>
                  <div className="author-infor ">
                    <h5>
                      <Link href="/author-2">EHT</Link>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tf-author-box style-1 text-center flex">
                  <div className="author-avatar ">
                    <img
                      src="/assets/images/avatar/avatar-small-03.png"
                      alt=""
                      className="avatar"
                    />
                  </div>
                  <div className="author-infor ">
                    <h5>
                      <Link href="/author-2">EHT senders</Link>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tf-author-box style-1 text-center flex">
                  <div className="author-avatar ">
                    <img
                      src="/assets/images/avatar/avatar-small-04.png"
                      alt=""
                      className="avatar"
                    />
                  </div>
                  <div className="author-infor ">
                    <h5>
                      <Link href="/author-2">Sproto gremilins</Link>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tf-author-box style-1 text-center flex">
                  <div className="author-avatar ">
                    <img
                      src="/assets/images/avatar/avatar-small-01.png"
                      alt=""
                      className="avatar"
                    />
                  </div>
                  <div className="author-infor ">
                    <h5>
                      <Link href="/author-2">Beanz office</Link>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tf-author-box style-1 text-center flex">
                  <div className="author-avatar ">
                    <img
                      src="/assets/images/avatar/avatar-small-02.png"
                      alt=""
                      className="avatar"
                    />
                  </div>
                  <div className="author-infor ">
                    <h5>
                      <Link href="/author-2">Nakamigos</Link>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tf-author-box style-1 text-center flex">
                  <div className="author-avatar ">
                    <img
                      src="/assets/images/avatar/avatar-small-03.png"
                      alt=""
                      className="avatar"
                    />
                  </div>
                  <div className="author-infor ">
                    <h5>
                      <Link href="/author-2">The lobstars</Link>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tf-author-box style-1 text-center flex">
                  <div className="author-avatar ">
                    <img
                      src="/assets/images/avatar/avatar-small-04.png"
                      alt=""
                      className="avatar"
                    />
                  </div>
                  <div className="author-infor ">
                    <h5>
                      <Link href="/author-2">Girls riding things</Link>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tf-author-box style-1 text-center flex">
                  <div className="author-avatar ">
                    <img
                      src="/assets/images/avatar/avatar-small-01.png"
                      alt=""
                      className="avatar"
                    />
                  </div>
                  <div className="author-infor ">
                    <h5>
                      <Link href="/author-2">Nakamigos</Link>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tf-author-box style-1 text-center flex">
                  <div className="author-avatar ">
                    <img
                      src="/assets/images/avatar/avatar-small-02.png"
                      alt=""
                      className="avatar"
                    />
                  </div>
                  <div className="author-infor ">
                    <h5>
                      <Link href="/author-2">EHT senders</Link>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tf-author-box style-1 text-center flex">
                  <div className="author-avatar ">
                    <img
                      src="/assets/images/avatar/avatar-small-03.png"
                      alt=""
                      className="avatar"
                    />
                  </div>
                  <div className="author-infor ">
                    <h5>
                      <Link href="/author-2">Sproto gremilins</Link>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="tf-author-box style-1 text-center flex">
                  <div className="author-avatar ">
                    <img
                      src="/assets/images/avatar/avatar-small-04.png"
                      alt=""
                      className="avatar"
                    />
                  </div>
                  <div className="author-infor ">
                    <h5>
                      <Link href="/author-2">Girls riding things</Link>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
}
