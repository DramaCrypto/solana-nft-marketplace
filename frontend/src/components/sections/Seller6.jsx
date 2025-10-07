import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  loop: false,
  slidesPerView: 1,
  observer: true,
  grabCursor: true,
  observeParents: true,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    clickable: true,
    nextEl: ".main-next",
    prevEl: ".main-prev",
  },
};

import { Link } from "react-router-dom";
export default function Seller6() {
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
                className="swiper-container seller seller-slider"
              >
                <div className="swiper-wrapper">
                  <SwiperSlide>
                    <div className="grid-author-box">
                      <div className="tf-author-box style-2 type-1 mb-30">
                        <div className="author-avatar ">
                          <img
                            src="/assets/images/avatar/avatar-01.png"
                            alt=""
                            className="avatar"
                          />
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
                        <div className="order tf-color">#1</div>
                      </div>
                      <div className="tf-author-box style-2 type-1 mb-30">
                        <div className="author-avatar ">
                          <img
                            src="/assets/images/avatar/avatar-02.png"
                            alt=""
                            className="avatar"
                          />
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
                        <div className="order tf-color">#2</div>
                      </div>
                      <div className="tf-author-box style-2 type-1 mb-30">
                        <div className="author-avatar ">
                          <img
                            src="/assets/images/avatar/avatar-03.png"
                            alt=""
                            className="avatar"
                          />
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
                        <div className="order tf-color">#3</div>
                      </div>
                      <div className="tf-author-box style-2 type-1 mb-30">
                        <div className="author-avatar ">
                          <img
                            src="/assets/images/avatar/avatar-04.png"
                            alt=""
                            className="avatar"
                          />
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
                        <div className="order">#4</div>
                      </div>
                      <div className="tf-author-box style-2 type-1 mb-30">
                        <div className="author-avatar ">
                          <img
                            src="/assets/images/avatar/avatar-05.png"
                            alt=""
                            className="avatar"
                          />
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
                        <div className="order">#5</div>
                      </div>
                      <div className="tf-author-box style-2 type-1 mb-30">
                        <div className="author-avatar ">
                          <img
                            src="/assets/images/avatar/avatar-06.png"
                            alt=""
                            className="avatar"
                          />
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
                        <div className="order">#6</div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="grid-author-box">
                      <div className="tf-author-box style-2 type-1 mb-30">
                        <div className="author-avatar ">
                          <img
                            src="/assets/images/avatar/avatar-01.png"
                            alt=""
                            className="avatar"
                          />
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
                        <div className="order tf-color">#1</div>
                      </div>
                      <div className="tf-author-box style-2 type-1 mb-30">
                        <div className="author-avatar ">
                          <img
                            src="/assets/images/avatar/avatar-02.png"
                            alt=""
                            className="avatar"
                          />
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
                        <div className="order tf-color">#2</div>
                      </div>
                      <div className="tf-author-box style-2 type-1 mb-30">
                        <div className="author-avatar ">
                          <img
                            src="/assets/images/avatar/avatar-03.png"
                            alt=""
                            className="avatar"
                          />
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
                        <div className="order tf-color">#3</div>
                      </div>
                      <div className="tf-author-box style-2 type-1 mb-30">
                        <div className="author-avatar ">
                          <img
                            src="/assets/images/avatar/avatar-04.png"
                            alt=""
                            className="avatar"
                          />
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
                        <div className="order">#4</div>
                      </div>
                      <div className="tf-author-box style-2 type-1 mb-30">
                        <div className="author-avatar ">
                          <img
                            src="/assets/images/avatar/avatar-05.png"
                            alt=""
                            className="avatar"
                          />
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
                        <div className="order">#5</div>
                      </div>
                      <div className="tf-author-box style-2 type-1 mb-30">
                        <div className="author-avatar ">
                          <img
                            src="/assets/images/avatar/avatar-06.png"
                            alt=""
                            className="avatar"
                          />
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
                        <div className="order">#6</div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="grid-author-box">
                      <div className="tf-author-box style-2 type-1 mb-30">
                        <div className="author-avatar ">
                          <img
                            src="/assets/images/avatar/avatar-01.png"
                            alt=""
                            className="avatar"
                          />
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
                        <div className="order tf-color">#1</div>
                      </div>
                      <div className="tf-author-box style-2 type-1 mb-30">
                        <div className="author-avatar ">
                          <img
                            src="/assets/images/avatar/avatar-02.png"
                            alt=""
                            className="avatar"
                          />
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
                        <div className="order tf-color">#2</div>
                      </div>
                      <div className="tf-author-box style-2 type-1 mb-30">
                        <div className="author-avatar ">
                          <img
                            src="/assets/images/avatar/avatar-03.png"
                            alt=""
                            className="avatar"
                          />
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
                        <div className="order tf-color">#3</div>
                      </div>
                      <div className="tf-author-box style-2 type-1 mb-30">
                        <div className="author-avatar ">
                          <img
                            src="/assets/images/avatar/avatar-04.png"
                            alt=""
                            className="avatar"
                          />
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
                        <div className="order">#4</div>
                      </div>
                      <div className="tf-author-box style-2 type-1 mb-30">
                        <div className="author-avatar ">
                          <img
                            src="/assets/images/avatar/avatar-05.png"
                            alt=""
                            className="avatar"
                          />
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
                        <div className="order">#5</div>
                      </div>
                      <div className="tf-author-box style-2 type-1 mb-30">
                        <div className="author-avatar ">
                          <img
                            src="/assets/images/avatar/avatar-06.png"
                            alt=""
                            className="avatar"
                          />
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
                        <div className="order">#6</div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
              <div className="swiper-button-next main-next over active" />
              <div className="swiper-button-prev main-prev over " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
