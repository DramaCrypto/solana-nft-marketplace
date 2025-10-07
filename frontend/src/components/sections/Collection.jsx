import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AutoSlider1 from "../slider/AutoSlider1";
import AutoSlider2 from "../slider/AutoSlider2";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  loop: false,
  slidesPerView: 1,
  spaceBetween: 25,
  observer: true,
  observeParents: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    clickable: true,
    nextEl: ".next-type1",
    prevEl: ".prev-type1",
  },
  pagination: {
    el: ".pagination-type1",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 3,
    },
  },
};

export default function Collection() {
  return (
    <>
      <div className="wrapper-content">
        <div className="inner-content">
          <div className="action__body w-full mb-40">
            <div className="tf-tsparticles">
              <div id="tsparticles4" data-color="#161616" data-line="#000" />
            </div>
            <h2>Discover, create and sell your own NFT</h2>
            <div className="flat-button flex">
              <Link
                href="javascript:void(0)"
                className="tf-button style-2 h50 w190 mr-10"
              >
                Explore now
                <i className="icon-arrow-up-right2" />
              </Link>
              <Link
                href="javascript:void(0)"
                className="tf-button style-2 h50 w230"
              >
                Create your first NFT
                <i className="icon-arrow-up-right2" />
              </Link>
            </div>
            <div className="bg-home7">
              <AutoSlider1 />
              <AutoSlider2 />
              <AutoSlider1 />
            </div>
          </div>
          <div className="add-new-collection mb-40">
            <div className="w-full">
              <h6>
                <i className="icon-add" /> Add new collection
              </h6>
              <p>create and store the best collections of NFTs</p>
            </div>
            <Link
              href="javascript:void(0)"
              className="tf-button style-1 w174 h50"
            >
              Create
              <i className="icon-arrow-up-right2" />
            </Link>
          </div>
          <div className="heading-section">
            <h2 className="tf-title pb-20">China collection</h2>
          </div>
          <div className="top-collections style-bottom mb-40">
            <Swiper
              {...swiperOptions}
              className="featured pt-10 swiper-container carousel3-type1"
            >
              <div className="swiper-wrapper">
                <SwiperSlide>
                  <div className="tf-card-collection">
                    <Link href="author-2.html">
                      <div className="media-images-collection">
                        <img
                          src="assets/images/box-item/img-collection-01.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-02.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-03.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-04.jpg"
                          alt=""
                        />
                        <div className="author-poster">
                          <img
                            src="assets/images/avatar/avatar-01.png"
                            alt=""
                            className="w-full"
                          />
                        </div>
                      </div>
                    </Link>
                    <div className="card-bottom">
                      <div className="author">
                        <h5>
                          <Link href="author01.html">Bored ape#21</Link>
                        </h5>
                        <div className="infor">@Themesflat</div>
                      </div>
                      <div className="bottom-right">
                        <div className="shop">
                          <div className="icon">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <p>12 Item</p>
                        </div>
                        <div className="like">
                          <span className="wishlist-button icon-heart" />
                          <p>97 like</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="tf-card-collection">
                    <Link href="author-2.html">
                      <div className="media-images-collection">
                        <img
                          src="assets/images/box-item/img-collection-01.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-02.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-03.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-04.jpg"
                          alt=""
                        />
                        <div className="author-poster">
                          <img
                            src="assets/images/avatar/avatar-01.png"
                            alt=""
                            className="w-full"
                          />
                        </div>
                      </div>
                    </Link>
                    <div className="card-bottom">
                      <div className="author">
                        <h5>
                          <Link href="author01.html">Bored ape#21</Link>
                        </h5>
                        <div className="infor">@Themesflat</div>
                      </div>
                      <div className="bottom-right">
                        <div className="shop">
                          <div className="icon">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <p>12 Item</p>
                        </div>
                        <div className="like">
                          <span className="wishlist-button icon-heart" />
                          <p>97 like</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="tf-card-collection">
                    <Link href="author-2.html">
                      <div className="media-images-collection">
                        <img
                          src="assets/images/box-item/img-collection-01.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-02.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-03.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-04.jpg"
                          alt=""
                        />
                        <div className="author-poster">
                          <img
                            src="assets/images/avatar/avatar-01.png"
                            alt=""
                            className="w-full"
                          />
                        </div>
                      </div>
                    </Link>
                    <div className="card-bottom">
                      <div className="author">
                        <h5>
                          <Link href="author01.html">Bored ape#21</Link>
                        </h5>
                        <div className="infor">@Themesflat</div>
                      </div>
                      <div className="bottom-right">
                        <div className="shop">
                          <div className="icon">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <p>12 Item</p>
                        </div>
                        <div className="like">
                          <span className="wishlist-button icon-heart" />
                          <p>97 like</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="tf-card-collection">
                    <Link href="author-2.html">
                      <div className="media-images-collection">
                        <img
                          src="assets/images/box-item/img-collection-01.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-02.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-03.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-04.jpg"
                          alt=""
                        />
                        <div className="author-poster">
                          <img
                            src="assets/images/avatar/avatar-01.png"
                            alt=""
                            className="w-full"
                          />
                        </div>
                      </div>
                    </Link>
                    <div className="card-bottom">
                      <div className="author">
                        <h5>
                          <Link href="author01.html">Bored ape#21</Link>
                        </h5>
                        <div className="infor">@Themesflat</div>
                      </div>
                      <div className="bottom-right">
                        <div className="shop">
                          <div className="icon">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <p>12 Item</p>
                        </div>
                        <div className="like">
                          <span className="wishlist-button icon-heart" />
                          <p>97 like</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="tf-card-collection">
                    <Link href="author-2.html">
                      <div className="media-images-collection">
                        <img
                          src="assets/images/box-item/img-collection-01.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-02.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-03.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-04.jpg"
                          alt=""
                        />
                        <div className="author-poster">
                          <img
                            src="assets/images/avatar/avatar-01.png"
                            alt=""
                            className="w-full"
                          />
                        </div>
                      </div>
                    </Link>
                    <div className="card-bottom">
                      <div className="author">
                        <h5>
                          <Link href="author01.html">Bored ape#21</Link>
                        </h5>
                        <div className="infor">@Themesflat</div>
                      </div>
                      <div className="bottom-right">
                        <div className="shop">
                          <div className="icon">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <p>12 Item</p>
                        </div>
                        <div className="like">
                          <span className="wishlist-button icon-heart" />
                          <p>97 like</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="tf-card-collection">
                    <Link href="author-2.html">
                      <div className="media-images-collection">
                        <img
                          src="assets/images/box-item/img-collection-01.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-02.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-03.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-04.jpg"
                          alt=""
                        />
                        <div className="author-poster">
                          <img
                            src="assets/images/avatar/avatar-01.png"
                            alt=""
                            className="w-full"
                          />
                        </div>
                      </div>
                    </Link>
                    <div className="card-bottom">
                      <div className="author">
                        <h5>
                          <Link href="author01.html">Bored ape#21</Link>
                        </h5>
                        <div className="infor">@Themesflat</div>
                      </div>
                      <div className="bottom-right">
                        <div className="shop">
                          <div className="icon">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <p>12 Item</p>
                        </div>
                        <div className="like">
                          <span className="wishlist-button icon-heart" />
                          <p>97 like</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
              <div className="swiper-pagination pagination-type1" />
              <div className="swiper-button-next next-type1" />
              <div className="swiper-button-prev prev-type1" />
            </Swiper>
          </div>
          <div className="heading-section">
            <h2 className="tf-title style-1 pb-20">Themesflat collection</h2>
          </div>
          <div className="top-collections style-bottom mb-40">
            <Swiper
              {...swiperOptions}
              className="featured pt-10 swiper-container carousel3-type1"
            >
              <div className="swiper-wrapper">
                <SwiperSlide>
                  <div className="tf-card-collection">
                    <Link href="author-2.html">
                      <div className="media-images-collection">
                        <img
                          src="assets/images/box-item/img-collection-01.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-02.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-03.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-04.jpg"
                          alt=""
                        />
                        <div className="author-poster">
                          <img
                            src="assets/images/avatar/avatar-01.png"
                            alt=""
                            className="w-full"
                          />
                        </div>
                      </div>
                    </Link>
                    <div className="card-bottom">
                      <div className="author">
                        <h5>
                          <Link href="author01.html">Bored ape#21</Link>
                        </h5>
                        <div className="infor">@Themesflat</div>
                      </div>
                      <div className="bottom-right">
                        <div className="shop">
                          <div className="icon">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <p>12 Item</p>
                        </div>
                        <div className="like">
                          <span className="wishlist-button icon-heart" />
                          <p>97 like</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="tf-card-collection">
                    <Link href="author-2.html">
                      <div className="media-images-collection">
                        <img
                          src="assets/images/box-item/img-collection-01.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-02.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-03.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-04.jpg"
                          alt=""
                        />
                        <div className="author-poster">
                          <img
                            src="assets/images/avatar/avatar-01.png"
                            alt=""
                            className="w-full"
                          />
                        </div>
                      </div>
                    </Link>
                    <div className="card-bottom">
                      <div className="author">
                        <h5>
                          <Link href="author01.html">Bored ape#21</Link>
                        </h5>
                        <div className="infor">@Themesflat</div>
                      </div>
                      <div className="bottom-right">
                        <div className="shop">
                          <div className="icon">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <p>12 Item</p>
                        </div>
                        <div className="like">
                          <span className="wishlist-button icon-heart" />
                          <p>97 like</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="tf-card-collection">
                    <Link href="author-2.html">
                      <div className="media-images-collection">
                        <img
                          src="assets/images/box-item/img-collection-01.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-02.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-03.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-04.jpg"
                          alt=""
                        />
                        <div className="author-poster">
                          <img
                            src="assets/images/avatar/avatar-01.png"
                            alt=""
                            className="w-full"
                          />
                        </div>
                      </div>
                    </Link>
                    <div className="card-bottom">
                      <div className="author">
                        <h5>
                          <Link href="author01.html">Bored ape#21</Link>
                        </h5>
                        <div className="infor">@Themesflat</div>
                      </div>
                      <div className="bottom-right">
                        <div className="shop">
                          <div className="icon">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <p>12 Item</p>
                        </div>
                        <div className="like">
                          <span className="wishlist-button icon-heart" />
                          <p>97 like</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="tf-card-collection">
                    <Link href="author-2.html">
                      <div className="media-images-collection">
                        <img
                          src="assets/images/box-item/img-collection-01.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-02.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-03.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-04.jpg"
                          alt=""
                        />
                        <div className="author-poster">
                          <img
                            src="assets/images/avatar/avatar-01.png"
                            alt=""
                            className="w-full"
                          />
                        </div>
                      </div>
                    </Link>
                    <div className="card-bottom">
                      <div className="author">
                        <h5>
                          <Link href="author01.html">Bored ape#21</Link>
                        </h5>
                        <div className="infor">@Themesflat</div>
                      </div>
                      <div className="bottom-right">
                        <div className="shop">
                          <div className="icon">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <p>12 Item</p>
                        </div>
                        <div className="like">
                          <span className="wishlist-button icon-heart" />
                          <p>97 like</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="tf-card-collection">
                    <Link href="author-2.html">
                      <div className="media-images-collection">
                        <img
                          src="assets/images/box-item/img-collection-01.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-02.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-03.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-04.jpg"
                          alt=""
                        />
                        <div className="author-poster">
                          <img
                            src="assets/images/avatar/avatar-01.png"
                            alt=""
                            className="w-full"
                          />
                        </div>
                      </div>
                    </Link>
                    <div className="card-bottom">
                      <div className="author">
                        <h5>
                          <Link href="author01.html">Bored ape#21</Link>
                        </h5>
                        <div className="infor">@Themesflat</div>
                      </div>
                      <div className="bottom-right">
                        <div className="shop">
                          <div className="icon">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <p>12 Item</p>
                        </div>
                        <div className="like">
                          <span className="wishlist-button icon-heart" />
                          <p>97 like</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="tf-card-collection">
                    <Link href="author-2.html">
                      <div className="media-images-collection">
                        <img
                          src="assets/images/box-item/img-collection-01.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-02.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-03.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-04.jpg"
                          alt=""
                        />
                        <div className="author-poster">
                          <img
                            src="assets/images/avatar/avatar-01.png"
                            alt=""
                            className="w-full"
                          />
                        </div>
                      </div>
                    </Link>
                    <div className="card-bottom">
                      <div className="author">
                        <h5>
                          <Link href="author01.html">Bored ape#21</Link>
                        </h5>
                        <div className="infor">@Themesflat</div>
                      </div>
                      <div className="bottom-right">
                        <div className="shop">
                          <div className="icon">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <p>12 Item</p>
                        </div>
                        <div className="like">
                          <span className="wishlist-button icon-heart" />
                          <p>97 like</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
              <div className="swiper-pagination pagination-type1" />
              <div className="swiper-button-next next-type1" />
              <div className="swiper-button-prev prev-type1" />
            </Swiper>
          </div>
          <div className="heading-section">
            <h2 className="tf-title style-1 pb-20">My collection</h2>
          </div>
          <div className="top-collections style-bottom">
            <Swiper
              {...swiperOptions}
              className="featured pt-10 swiper-container carousel3-type1"
            >
              <div className="swiper-wrapper">
                <SwiperSlide>
                  <div className="tf-card-collection">
                    <Link href="author-2.html">
                      <div className="media-images-collection">
                        <img
                          src="assets/images/box-item/img-collection-01.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-02.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-03.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-04.jpg"
                          alt=""
                        />
                        <div className="author-poster">
                          <img
                            src="assets/images/avatar/avatar-01.png"
                            alt=""
                            className="w-full"
                          />
                        </div>
                      </div>
                    </Link>
                    <div className="card-bottom">
                      <div className="author">
                        <h5>
                          <Link href="author01.html">Bored ape#21</Link>
                        </h5>
                        <div className="infor">@Themesflat</div>
                      </div>
                      <div className="bottom-right">
                        <div className="shop">
                          <div className="icon">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <p>12 Item</p>
                        </div>
                        <div className="like">
                          <span className="wishlist-button icon-heart" />
                          <p>97 like</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="tf-card-collection">
                    <Link href="author-2.html">
                      <div className="media-images-collection">
                        <img
                          src="assets/images/box-item/img-collection-01.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-02.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-03.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-04.jpg"
                          alt=""
                        />
                        <div className="author-poster">
                          <img
                            src="assets/images/avatar/avatar-01.png"
                            alt=""
                            className="w-full"
                          />
                        </div>
                      </div>
                    </Link>
                    <div className="card-bottom">
                      <div className="author">
                        <h5>
                          <Link href="author01.html">Bored ape#21</Link>
                        </h5>
                        <div className="infor">@Themesflat</div>
                      </div>
                      <div className="bottom-right">
                        <div className="shop">
                          <div className="icon">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <p>12 Item</p>
                        </div>
                        <div className="like">
                          <span className="wishlist-button icon-heart" />
                          <p>97 like</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="tf-card-collection">
                    <Link href="author-2.html">
                      <div className="media-images-collection">
                        <img
                          src="assets/images/box-item/img-collection-01.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-02.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-03.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-04.jpg"
                          alt=""
                        />
                        <div className="author-poster">
                          <img
                            src="assets/images/avatar/avatar-01.png"
                            alt=""
                            className="w-full"
                          />
                        </div>
                      </div>
                    </Link>
                    <div className="card-bottom">
                      <div className="author">
                        <h5>
                          <Link href="author01.html">Bored ape#21</Link>
                        </h5>
                        <div className="infor">@Themesflat</div>
                      </div>
                      <div className="bottom-right">
                        <div className="shop">
                          <div className="icon">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <p>12 Item</p>
                        </div>
                        <div className="like">
                          <span className="wishlist-button icon-heart" />
                          <p>97 like</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="tf-card-collection">
                    <Link href="author-2.html">
                      <div className="media-images-collection">
                        <img
                          src="assets/images/box-item/img-collection-01.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-02.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-03.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-04.jpg"
                          alt=""
                        />
                        <div className="author-poster">
                          <img
                            src="assets/images/avatar/avatar-01.png"
                            alt=""
                            className="w-full"
                          />
                        </div>
                      </div>
                    </Link>
                    <div className="card-bottom">
                      <div className="author">
                        <h5>
                          <Link href="author01.html">Bored ape#21</Link>
                        </h5>
                        <div className="infor">@Themesflat</div>
                      </div>
                      <div className="bottom-right">
                        <div className="shop">
                          <div className="icon">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <p>12 Item</p>
                        </div>
                        <div className="like">
                          <span className="wishlist-button icon-heart" />
                          <p>97 like</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="tf-card-collection">
                    <Link href="author-2.html">
                      <div className="media-images-collection">
                        <img
                          src="assets/images/box-item/img-collection-01.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-02.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-03.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-04.jpg"
                          alt=""
                        />
                        <div className="author-poster">
                          <img
                            src="assets/images/avatar/avatar-01.png"
                            alt=""
                            className="w-full"
                          />
                        </div>
                      </div>
                    </Link>
                    <div className="card-bottom">
                      <div className="author">
                        <h5>
                          <Link href="author01.html">Bored ape#21</Link>
                        </h5>
                        <div className="infor">@Themesflat</div>
                      </div>
                      <div className="bottom-right">
                        <div className="shop">
                          <div className="icon">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <p>12 Item</p>
                        </div>
                        <div className="like">
                          <span className="wishlist-button icon-heart" />
                          <p>97 like</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="tf-card-collection">
                    <Link href="author-2.html">
                      <div className="media-images-collection">
                        <img
                          src="assets/images/box-item/img-collection-01.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-02.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-03.jpg"
                          alt=""
                        />
                        <img
                          src="assets/images/box-item/img-collection-04.jpg"
                          alt=""
                        />
                        <div className="author-poster">
                          <img
                            src="assets/images/avatar/avatar-01.png"
                            alt=""
                            className="w-full"
                          />
                        </div>
                      </div>
                    </Link>
                    <div className="card-bottom">
                      <div className="author">
                        <h5>
                          <Link href="author01.html">Bored ape#21</Link>
                        </h5>
                        <div className="infor">@Themesflat</div>
                      </div>
                      <div className="bottom-right">
                        <div className="shop">
                          <div className="icon">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <p>12 Item</p>
                        </div>
                        <div className="like">
                          <span className="wishlist-button icon-heart" />
                          <p>97 like</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
              <div className="swiper-pagination pagination-type1" />
              <div className="swiper-button-next next-type1" />
              <div className="swiper-button-prev prev-type1" />
            </Swiper>
          </div>
        </div>
        <div className="side-bar">
          <div className="widget widget-recently">
            <h5 className="title-widget">Recently added</h5>
            <div className="card-small-main">
              <img src="assets/images/blog/sidebar-05.jpg" alt="" />
              <div className="card-bottom">
                <h5>
                  <Link href="javascript:void(0)">Photography</Link>
                </h5>
                <span className="date">16hr ago</span>
              </div>
            </div>
            <div className="card-small">
              <div className="author">
                <img src="assets/images/blog/sidebar-06.jpg" alt="" />
                <div className="info">
                  <h6>
                    <Link href="javascript:void(0)">Propw</Link>
                  </h6>
                  <p>
                    <Link href="javascript:void(0)">@themes</Link>
                  </p>
                </div>
              </div>
              <span className="date">Mon, 08 May </span>
            </div>
            <div className="card-small">
              <div className="author">
                <img src="assets/images/blog/sidebar-07.jpg" alt="" />
                <div className="info">
                  <h6>
                    <Link href="javascript:void(0)">Propw</Link>
                  </h6>
                  <p>
                    <Link href="javascript:void(0)">@themes</Link>
                  </p>
                </div>
              </div>
              <span className="date">Mon, 08 May </span>
            </div>
            <div className="card-small">
              <div className="author">
                <img src="assets/images/blog/sidebar-08.jpg" alt="" />
                <div className="info">
                  <h6>
                    <Link href="javascript:void(0)">Propw</Link>
                  </h6>
                  <p>
                    <Link href="javascript:void(0)">@themes</Link>
                  </p>
                </div>
              </div>
              <span className="date">Mon, 08 May </span>
            </div>
          </div>
          <div className="widget widget-creators">
            <div className="flex items-center justify-between">
              <h5 className="title-widget">Top Creators</h5>
              <Link className="see-all" href="javascript:void(0)">
                See all
              </Link>
            </div>
            <div className="widget-creators-item flex items-center mb-20">
              <div className="order">1. </div>
              <div className="author flex items-center flex-grow">
                <img src="assets/images/avatar/avatar-small-01.png" alt="" />
                <div className="info">
                  <h6>
                    <Link href="javascript:void(0)">Brooklyn Simmons</Link>
                  </h6>
                  <span>
                    <Link href="javascript:void(0)">@themes</Link>
                  </span>
                </div>
              </div>
              <button className="follow">Follow</button>
            </div>
            <div className="widget-creators-item flex items-center mb-20">
              <div className="order">2. </div>
              <div className="author flex items-center flex-grow">
                <img src="assets/images/avatar/avatar-small-02.png" alt="" />
                <div className="info">
                  <h6>
                    <Link href="javascript:void(0)">Brooklyn Simmons</Link>
                  </h6>
                  <span>
                    <Link href="javascript:void(0)">@themes</Link>
                  </span>
                </div>
              </div>
              <button className="follow">Follow</button>
            </div>
            <div className="widget-creators-item flex items-center mb-20">
              <div className="order">3. </div>
              <div className="author flex items-center flex-grow">
                <img src="assets/images/avatar/avatar-small-03.png" alt="" />
                <div className="info">
                  <h6>
                    <Link href="javascript:void(0)">Brooklyn Simmons</Link>
                  </h6>
                  <span>
                    <Link href="javascript:void(0)">@themes</Link>
                  </span>
                </div>
              </div>
              <button className="follow">Follow</button>
            </div>
            <div className="widget-creators-item flex items-center mb-20">
              <div className="order">4. </div>
              <div className="author flex items-center flex-grow">
                <img src="assets/images/avatar/avatar-small-04.png" alt="" />
                <div className="info">
                  <h6>
                    <Link href="javascript:void(0)">Brooklyn Simmons</Link>
                  </h6>
                  <span>
                    <Link href="javascript:void(0)">@themes</Link>
                  </span>
                </div>
              </div>
              <button className="follow">Follow</button>
            </div>
            <div className="widget-creators-item flex items-center">
              <div className="order">5. </div>
              <div className="author flex items-center flex-grow">
                <img src="assets/images/avatar/avatar-small-01.png" alt="" />
                <div className="info">
                  <h6>
                    <Link href="javascript:void(0)">Brooklyn Simmons</Link>
                  </h6>
                  <span>
                    <Link href="javascript:void(0)">@themes</Link>
                  </span>
                </div>
              </div>
              <button className="follow">Follow</button>
            </div>
          </div>
          <div className="widget widget-coins">
            <h5 className="title-widget">Trending coins</h5>
            <div className="widget-coins-item flex items-center mb-20">
              <img src="assets/images/box-icon/coin-01.png" alt="" />
              <p>
                <Link href="javascript:void(0)">Bitcoin</Link>
              </p>
            </div>
            <div className="widget-coins-item flex items-center mb-20">
              <img src="assets/images/box-icon/coin-02.png" alt="" />
              <p>
                <Link href="javascript:void(0)">Ethereum</Link>
              </p>
            </div>
            <div className="widget-coins-item flex items-center mb-20">
              <img src="assets/images/box-icon/coin-03.png" alt="" />
              <p>
                <Link href="javascript:void(0)">Cardano</Link>
              </p>
            </div>
            <div className="widget-coins-item flex items-center mb-20">
              <img src="assets/images/box-icon/coin-04.png" alt="" />
              <p>
                <Link href="javascript:void(0)">Solana</Link>
              </p>
            </div>
            <div className="widget-coins-item flex items-center">
              <img src="assets/images/box-icon/coin-05.png" alt="" />
              <p>
                <Link href="javascript:void(0)">Litecoin</Link>
              </p>
            </div>
          </div>
          <div className="widget widget-history">
            <div className="flex items-center justify-between">
              <h5 className="title-widget">History</h5>
              <Link className="see-all" href="javascript:void(0)">
                See all
              </Link>
            </div>
            <div className="widget-creators-item flex items-center mb-20">
              <div className="author flex items-center flex-grow">
                <img src="assets/images/avatar/avatar-small-01.png" alt="" />
                <div className="info">
                  <h6>
                    <Link href="javascript:void(0)">Lorem NFT sold</Link>
                  </h6>
                  <span>
                    <Link href="javascript:void(0)">Sold at 1.32 ETH</Link>
                  </span>
                </div>
              </div>
              <span className="time">Just now</span>
            </div>
            <div className="widget-creators-item flex items-center mb-20">
              <div className="author flex items-center flex-grow">
                <img src="assets/images/avatar/avatar-small-02.png" alt="" />
                <div className="info">
                  <h6>
                    <Link href="javascript:void(0)">New NFT uploaded</Link>
                  </h6>
                  <span>
                    <Link href="javascript:void(0)">By Marisol Pena</Link>
                  </span>
                </div>
              </div>
              <span className="time">1hr ago</span>
            </div>
            <div className="widget-creators-item flex items-center mb-20">
              <div className="author flex items-center flex-grow">
                <img src="assets/images/avatar/avatar-small-03.png" alt="" />
                <div className="info">
                  <h6>
                    <Link href="javascript:void(0)">
                      You followed a creator
                    </Link>
                  </h6>
                  <span>
                    <Link href="javascript:void(0)">Jane Cooper</Link>
                  </span>
                </div>
              </div>
              <span className="time">2hr ago</span>
            </div>
            <div className="widget-creators-item flex items-center mb-20">
              <div className="author flex items-center flex-grow">
                <img src="assets/images/avatar/avatar-small-04.png" alt="" />
                <div className="info">
                  <h6>
                    <Link href="javascript:void(0)">You placed a bid</Link>
                  </h6>
                  <span>
                    <Link href="javascript:void(0)">Whirl wind NFT</Link>
                  </span>
                </div>
              </div>
              <span className="time">4hr ago</span>
            </div>
            <div className="widget-creators-item flex items-center">
              <div className="author flex items-center flex-grow">
                <img src="assets/images/avatar/avatar-small-01.png" alt="" />
                <div className="info">
                  <h6>
                    <Link href="javascript:void(0)">
                      You followed a creator
                    </Link>
                  </h6>
                  <span>
                    <Link href="javascript:void(0)">Courtney Henry</Link>
                  </span>
                </div>
              </div>
              <span className="time">16hr ago</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
