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
export default function Seller2() {
  return (
    <>
      <div className="tf-section seller ">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-section">
                <h2 className="tf-title pb-30">
                  Top seller in
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
                className="swiper-container seller seller-slider2"
              >
                <div className="swiper-wrapper">
                  <SwiperSlide>
                    <div className="tf-author-box style-3 text-center">
                      <div className="author-avatar ">
                        <img
                          src="/assets/images/avatar/avatar-08.png"
                          alt=""
                          className="avatar"
                        />
                        <div className="number">1</div>
                      </div>
                      <div className="author-infor ">
                        <h5>
                          <Link href="/author-2">Jane Cooper</Link>
                        </h5>
                        <h6 className="price gem style-1">
                          <i className="icon-gem" />
                          7,080.95
                        </h6>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tf-author-box style-3 text-center">
                      <div className="author-avatar ">
                        <img
                          src="/assets/images/avatar/avatar-09.png"
                          alt=""
                          className="avatar"
                        />
                        <div className="number">2</div>
                      </div>
                      <div className="author-infor ">
                        <h5>
                          <Link href="/author-2">Darrell Steward</Link>
                        </h5>
                        <h6 className="price gem style-1">
                          <i className="icon-gem" />
                          7,080.95
                        </h6>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tf-author-box style-3 text-center">
                      <div className="author-avatar ">
                        <img
                          src="/assets/images/avatar/avatar-10.png"
                          alt=""
                          className="avatar"
                        />
                        <div className="number">3</div>
                      </div>
                      <div className="author-infor ">
                        <h5>
                          <Link href="/author-2">Arlene McCoy</Link>
                        </h5>
                        <h6 className="price gem style-1">
                          <i className="icon-gem" />
                          7,080.95
                        </h6>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tf-author-box style-3 text-center">
                      <div className="author-avatar ">
                        <img
                          src="/assets/images/avatar/avatar-11.png"
                          alt=""
                          className="avatar"
                        />
                        <div className="number">4</div>
                      </div>
                      <div className="author-infor ">
                        <h5>
                          <Link href="/author-2">Leslie Alexander</Link>
                        </h5>
                        <h6 className="price gem style-1">
                          <i className="icon-gem" />
                          7,080.95
                        </h6>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tf-author-box style-3 text-center">
                      <div className="author-avatar ">
                        <img
                          src="/assets/images/avatar/avatar-12.png"
                          alt=""
                          className="avatar"
                        />
                        <div className="number">5</div>
                      </div>
                      <div className="author-infor ">
                        <h5>
                          <Link href="/author-2">Kathryn Murphy</Link>
                        </h5>
                        <h6 className="price gem style-1">
                          <i className="icon-gem" />
                          7,080.95
                        </h6>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tf-author-box style-3 text-center">
                      <div className="author-avatar ">
                        <img
                          src="/assets/images/avatar/avatar-13.png"
                          alt=""
                          className="avatar"
                        />
                        <div className="number">6</div>
                      </div>
                      <div className="author-infor ">
                        <h5>
                          <Link href="/author-2">Ralph Edwards</Link>
                        </h5>
                        <h6 className="price gem style-1">
                          <i className="icon-gem" />
                          7,080.95
                        </h6>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tf-author-box style-3 text-center">
                      <div className="author-avatar ">
                        <img
                          src="/assets/images/avatar/avatar-09.png"
                          alt=""
                          className="avatar"
                        />
                        <div className="number">7</div>
                      </div>
                      <div className="author-infor ">
                        <h5>
                          <Link href="/author-2">Courtney Henry</Link>
                        </h5>
                        <h6 className="price gem style-1">
                          <i className="icon-gem" />
                          7,080.95
                        </h6>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tf-author-box style-3 text-center">
                      <div className="author-avatar ">
                        <img
                          src="/assets/images/avatar/avatar-10.png"
                          alt=""
                          className="avatar"
                        />
                        <div className="number">8</div>
                      </div>
                      <div className="author-infor ">
                        <h5>
                          <Link href="/author-2">Courtney Henry</Link>
                        </h5>
                        <h6 className="price gem style-1">
                          <i className="icon-gem" />
                          7,080.95
                        </h6>
                      </div>
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
