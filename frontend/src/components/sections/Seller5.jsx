import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
};

import { Link } from "react-router-dom";
export default function Seller5() {
  return (
    <>
      <div className="tf-section-4 seller-grid ">
        <div className="themesflat-container w1115">
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
            <div data-wow-delay="0s" className="wow fadeInUp col-md-4">
              <div className="tf-author-box style-2 hv-border mb-30">
                <div className="author-avatar ">
                  <img
                    src="/assets/images/avatar/avatar-01.png"
                    alt=""
                    className="avatar"
                  />
                </div>
                <div className="author-infor ">
                  <h5>
                    <Link href="/author-2">Marvin McKinney</Link>
                  </h5>
                  <h6 className="price gem style-1">
                    <i className="icon-gem" />
                    7,080.95
                  </h6>
                </div>
                <div className="order tf-color">#1</div>
              </div>
            </div>
            <div data-wow-delay="0.1s" className="wow fadeInUp col-md-4">
              <div className="tf-author-box style-2 hv-border mb-30">
                <div className="author-avatar ">
                  <img
                    src="/assets/images/avatar/avatar-02.png"
                    alt=""
                    className="avatar"
                  />
                </div>
                <div className="author-infor ">
                  <h5>
                    <Link href="/author-2">Marvin McKinney</Link>
                  </h5>
                  <h6 className="price gem style-1">
                    <i className="icon-gem" />
                    7,080.95
                  </h6>
                </div>
                <div className="order tf-color">#2</div>
              </div>
            </div>
            <div data-wow-delay="0.2s" className="wow fadeInUp col-md-4">
              <div className="tf-author-box style-2 hv-border mb-30">
                <div className="author-avatar ">
                  <img
                    src="/assets/images/avatar/avatar-03.png"
                    alt=""
                    className="avatar"
                  />
                </div>
                <div className="author-infor ">
                  <h5>
                    <Link href="/author-2">Marvin McKinney</Link>
                  </h5>
                  <h6 className="price gem style-1">
                    <i className="icon-gem" />
                    7,080.95
                  </h6>
                </div>
                <div className="order tf-color">#3</div>
              </div>
            </div>
            <div data-wow-delay="0s" className="wow fadeInUp col-md-4">
              <div className="tf-author-box style-2 hv-border mb-30">
                <div className="author-avatar ">
                  <img
                    src="/assets/images/avatar/avatar-04.png"
                    alt=""
                    className="avatar"
                  />
                </div>
                <div className="author-infor ">
                  <h5>
                    <Link href="/author-2">Marvin McKinney</Link>
                  </h5>
                  <h6 className="price gem style-1">
                    <i className="icon-gem" />
                    7,080.95
                  </h6>
                </div>
                <div className="order">#4</div>
              </div>
            </div>
            <div data-wow-delay="0.1s" className="wow fadeInUp col-md-4">
              <div className="tf-author-box style-2 hv-border mb-30">
                <div className="author-avatar ">
                  <img
                    src="/assets/images/avatar/avatar-05.png"
                    alt=""
                    className="avatar"
                  />
                </div>
                <div className="author-infor ">
                  <h5>
                    <Link href="/author-2">Marvin McKinney</Link>
                  </h5>
                  <h6 className="price gem style-1">
                    <i className="icon-gem" />
                    7,080.95
                  </h6>
                </div>
                <div className="order">#5</div>
              </div>
            </div>
            <div data-wow-delay="0.2s" className="wow fadeInUp col-md-4">
              <div className="tf-author-box style-2 hv-border mb-30">
                <div className="author-avatar ">
                  <img
                    src="/assets/images/avatar/avatar-06.png"
                    alt=""
                    className="avatar"
                  />
                </div>
                <div className="author-infor ">
                  <h5>
                    <Link href="/author-2">Marvin McKinney</Link>
                  </h5>
                  <h6 className="price gem style-1">
                    <i className="icon-gem" />
                    7,080.95
                  </h6>
                </div>
                <div className="order">#6</div>
              </div>
            </div>
            <div data-wow-delay="0s" className="wow fadeInUp col-md-4">
              <div className="tf-author-box style-2 hv-border mb-30 no-border-b">
                <div className="author-avatar ">
                  <img
                    src="/assets/images/avatar/avatar-01.png"
                    alt=""
                    className="avatar"
                  />
                </div>
                <div className="author-infor ">
                  <h5>
                    <Link href="/author-2">Marvin McKinney</Link>
                  </h5>
                  <h6 className="price gem style-1">
                    <i className="icon-gem" />
                    7,080.95
                  </h6>
                </div>
                <div className="order">#7</div>
              </div>
            </div>
            <div data-wow-delay="0.1s" className="wow fadeInUp col-md-4">
              <div className="tf-author-box style-2 hv-border mb-30 no-border-b">
                <div className="author-avatar ">
                  <img
                    src="/assets/images/avatar/avatar-03.png"
                    alt=""
                    className="avatar"
                  />
                </div>
                <div className="author-infor ">
                  <h5>
                    <Link href="/author-2">Marvin McKinney</Link>
                  </h5>
                  <h6 className="price gem style-1">
                    <i className="icon-gem" />
                    7,080.95
                  </h6>
                </div>
                <div className="order">#8</div>
              </div>
            </div>
            <div data-wow-delay="0.2s" className="wow fadeInUp col-md-4">
              <div className="tf-author-box style-2 hv-border mb-30 no-border-b">
                <div className="author-avatar ">
                  <img
                    src="/assets/images/avatar/avatar-02.png"
                    alt=""
                    className="avatar"
                  />
                </div>
                <div className="author-infor ">
                  <h5>
                    <Link href="/author-2">Marvin McKinney</Link>
                  </h5>
                  <h6 className="price gem style-1">
                    <i className="icon-gem" />
                    7,080.95
                  </h6>
                </div>
                <div className="order">#9</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
