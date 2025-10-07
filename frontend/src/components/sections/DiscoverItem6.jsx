import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
import BidModal from "../elements/BidModal";

import { useState } from "react";
export default function DiscoverItem6() {
  const [isBidModal, setBidModal] = useState(false);
  const handleBidModal = () => setBidModal(!isBidModal);
  return (
    <>
      <div className="tf-section-3 discover-item ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-section pb-30">
                <h2 className="tf-title ">Hot bids</h2>
                <Link href="/explore-3">
                  View all bids <i className="icon-arrow-right2" />
                </Link>
              </div>
            </div>
            <div className="col-md-12 pb-20">
              <div className="tf-soft flex items-center justify-between">
                <div className="soft-left">
                  <Menu as="div" className="dropdown">
                    <Menu.Button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
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
                      <span className="inner">Category</span>
                    </Menu.Button>
                    <Menu.Items
                      as="div"
                      className="dropdown-menu d-block"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item">
                        <div className="sort-filter active">
                          <span>All</span>
                          <span className="icon-tick">
                            <span className="path2" />
                          </span>
                        </div>
                      </a>
                      <a className="dropdown-item">
                        <div className="sort-filter">
                          <span>Art</span>
                          <span className="icon-tick">
                            <span className="path2" />
                          </span>
                        </div>
                      </a>
                      <a className="dropdown-item">
                        <div className="sort-filter">
                          <span>Photography</span>
                          <span className="icon-tick">
                            <span className="path2" />
                          </span>
                        </div>
                      </a>
                      <a className="dropdown-item">
                        <div className="sort-filter">
                          <span>Music</span>
                          <span className="icon-tick">
                            <span className="path2" />
                          </span>
                        </div>
                      </a>
                    </Menu.Items>
                  </Menu>
                  <Menu as="div" className="dropdown">
                    <Menu.Button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton2"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.5 6.25L15.625 5.15583M17.5 6.25V8.125M17.5 6.25L15.625 7.34417M2.5 6.25L4.375 5.15583M2.5 6.25L4.375 7.34417M2.5 6.25V8.125M10 10.625L11.875 9.53083M10 10.625L8.125 9.53083M10 10.625V12.5M10 18.125L11.875 17.0308M10 18.125V16.25M10 18.125L8.125 17.0308M8.125 2.96833L10 1.875L11.875 2.96917M17.5 11.875V13.75L15.625 14.8442M4.375 14.8442L2.5 13.75V11.875"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="inner">Items</span>
                    </Menu.Button>
                    <Menu.Items
                      as="div"
                      className="dropdown-menu d-block"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item">
                        <div className="sort-filter active">
                          <span>All</span>
                          <span className="icon-tick">
                            <span className="path2" />
                          </span>
                        </div>
                      </a>
                      <a className="dropdown-item">
                        <div className="sort-filter">
                          <span>Art</span>
                          <span className="icon-tick">
                            <span className="path2" />
                          </span>
                        </div>
                      </a>
                      <a className="dropdown-item">
                        <div className="sort-filter">
                          <span>Photography</span>
                          <span className="icon-tick">
                            <span className="path2" />
                          </span>
                        </div>
                      </a>
                      <a className="dropdown-item">
                        <div className="sort-filter">
                          <span>Music</span>
                          <span className="icon-tick">
                            <span className="path2" />
                          </span>
                        </div>
                      </a>
                    </Menu.Items>
                  </Menu>
                  <Menu as="div" className="dropdown">
                    <Menu.Button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton3"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.25 14.0625H14.0625M14.0625 14.0625H16.875M14.0625 14.0625V11.25M14.0625 14.0625V16.875M5 8.75H6.875C7.37228 8.75 7.84919 8.55246 8.20082 8.20082C8.55246 7.84919 8.75 7.37228 8.75 6.875V5C8.75 4.50272 8.55246 4.02581 8.20082 3.67417C7.84919 3.32254 7.37228 3.125 6.875 3.125H5C4.50272 3.125 4.02581 3.32254 3.67417 3.67417C3.32254 4.02581 3.125 4.50272 3.125 5V6.875C3.125 7.37228 3.32254 7.84919 3.67417 8.20082C4.02581 8.55246 4.50272 8.75 5 8.75ZM5 16.875H6.875C7.37228 16.875 7.84919 16.6775 8.20082 16.3258C8.55246 15.9742 8.75 15.4973 8.75 15V13.125C8.75 12.6277 8.55246 12.1508 8.20082 11.7992C7.84919 11.4475 7.37228 11.25 6.875 11.25H5C4.50272 11.25 4.02581 11.4475 3.67417 11.7992C3.32254 12.1508 3.125 12.6277 3.125 13.125V15C3.125 15.4973 3.32254 15.9742 3.67417 16.3258C4.02581 16.6775 4.50272 16.875 5 16.875ZM13.125 8.75H15C15.4973 8.75 15.9742 8.55246 16.3258 8.20082C16.6775 7.84919 16.875 7.37228 16.875 6.875V5C16.875 4.50272 16.6775 4.02581 16.3258 3.67417C15.9742 3.32254 15.4973 3.125 15 3.125H13.125C12.6277 3.125 12.1508 3.32254 11.7992 3.67417C11.4475 4.02581 11.25 4.50272 11.25 5V6.875C11.25 7.37228 11.4475 7.84919 11.7992 8.20082C12.1508 8.55246 12.6277 8.75 13.125 8.75Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="inner">Status</span>
                    </Menu.Button>
                    <Menu.Items
                      as="div"
                      className="dropdown-menu d-block"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item">
                        <div className="sort-filter active">
                          <span>All</span>
                          <span className="icon-tick">
                            <span className="path2" />
                          </span>
                        </div>
                      </a>
                      <a className="dropdown-item">
                        <div className="sort-filter">
                          <span>Art</span>
                          <span className="icon-tick">
                            <span className="path2" />
                          </span>
                        </div>
                      </a>
                      <a className="dropdown-item">
                        <div className="sort-filter">
                          <span>Photography</span>
                          <span className="icon-tick">
                            <span className="path2" />
                          </span>
                        </div>
                      </a>
                      <a className="dropdown-item">
                        <div className="sort-filter">
                          <span>Music</span>
                          <span className="icon-tick">
                            <span className="path2" />
                          </span>
                        </div>
                      </a>
                    </Menu.Items>
                  </Menu>
                  <Menu as="div" className="dropdown">
                    <Menu.Button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton4"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 5V15M7.5 12.6517L8.2325 13.2008C9.20833 13.9333 10.7908 13.9333 11.7675 13.2008C12.7442 12.4683 12.7442 11.2817 11.7675 10.5492C11.28 10.1825 10.64 10 10 10C9.39583 10 8.79167 9.81667 8.33083 9.45083C7.40917 8.71833 7.40917 7.53167 8.33083 6.79917C9.2525 6.06667 10.7475 6.06667 11.6692 6.79917L12.015 7.07417M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="inner">Price range</span>
                    </Menu.Button>
                    <Menu.Items
                      as="div"
                      className="dropdown-menu d-block"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item">
                        <div className="sort-filter active">
                          <span> Price: Low to High</span>
                          <span className="icon-tick">
                            <span className="path2" />
                          </span>
                        </div>
                      </a>
                      <a className="dropdown-item">
                        <div className="sort-filter">
                          <span> Price: High to Low</span>
                          <span className="icon-tick">
                            <span className="path2" />
                          </span>
                        </div>
                      </a>
                    </Menu.Items>
                  </Menu>
                </div>
                <div className="soft-right">
                  <Menu as="div" className="dropdown">
                    <Menu.Button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton4"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 5V15M7.5 12.6517L8.2325 13.2008C9.20833 13.9333 10.7908 13.9333 11.7675 13.2008C12.7442 12.4683 12.7442 11.2817 11.7675 10.5492C11.28 10.1825 10.64 10 10 10C9.39583 10 8.79167 9.81667 8.33083 9.45083C7.40917 8.71833 7.40917 7.53167 8.33083 6.79917C9.2525 6.06667 10.7475 6.06667 11.6692 6.79917L12.015 7.07417M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>Sort by: recently added</span>
                    </Menu.Button>
                    <Menu.Items
                      as="div"
                      className="dropdown-menu d-block"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <h6>Sort by</h6>
                      <Link href="javascript:void(0)" className="dropdown-item">
                        <div className="sort-filter" href="javascript:void(0)">
                          <span>Recently added</span>
                          <span className="icon-tick">
                            <span className="path2" />
                          </span>
                        </div>
                      </Link>
                      <Link href="javascript:void(0)" className="dropdown-item">
                        <div
                          className="sort-filter active"
                          href="javascript:void(0)"
                        >
                          <span>Price: Low to High</span>
                          <span className="icon-tick">
                            <span className="path2" />
                          </span>
                        </div>
                      </Link>
                      <Link href="javascript:void(0)" className="dropdown-item">
                        <div className="sort-filter" href="javascript:void(0)">
                          <span>Price: High to Low</span>
                          <span className="icon-tick">
                            <span className="path2" />
                          </span>
                        </div>
                      </Link>
                      <Link href="javascript:void(0)" className="dropdown-item">
                        <div className="sort-filter" href="javascript:void(0)">
                          <span>Auction ending soon</span>
                          <span className="icon-tick">
                            <span className="path2" />
                          </span>
                        </div>
                      </Link>
                      <h6>Options</h6>
                      <Link href="javascript:void(0)" className="dropdown-item">
                        <div className="sort-filter" href="javascript:void(0)">
                          <span>Auction ending soon</span>
                          <input
                            className="check"
                            type="checkbox"
                            name="check"
                            defaultChecked
                          />
                        </div>
                      </Link>
                      <Link href="javascript:void(0)" className="dropdown-item">
                        <div className="sort-filter" href="javascript:void(0)">
                          <span>Show lazy minted</span>
                          <input
                            className="check"
                            type="checkbox"
                            name="check"
                          />
                        </div>
                      </Link>
                    </Menu.Items>
                  </Menu>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="wrap-box-card style-1">
                <div data-wow-delay="0s" className="wow fadeInUp col-item">
                  <div className="tf-card-box style-1">
                    <div className="card-media">
                      <Link href="javascript:void(0)">
                        <img
                          src="/assets/images/box-item/card-item-41.jpg"
                          alt=""
                        />
                      </Link>
                      <span className="wishlist-button icon-heart" />
                      <div className="featured-countdown">
                        <span
                          className="js-countdown"
                          data-timer={7500}
                          data-labels="d,h,m,s"
                        >
                          <div aria-hidden="true" className="countdown__timer">
                            <span
                              className="countdown__item"
                              style={{ display: "none" }}
                            >
                              <span className="countdown__value countdown__value--0 js-countdown__value--0">
                                0
                              </span>
                              <span className="countdown__label">d</span>
                            </span>
                            <span className="countdown__item">
                              <span className="countdown__value countdown__value--1 js-countdown__value--1">
                                02
                              </span>
                              <span className="countdown__label">h</span>
                            </span>
                            <span className="countdown__item">
                              <span className="countdown__value countdown__value--2 js-countdown__value--2">
                                03
                              </span>
                              <span className="countdown__label">m</span>
                            </span>
                            <span className="countdown__item">
                              <span className="countdown__value countdown__value--3 js-countdown__value--3">
                                43
                              </span>
                              <span className="countdown__label">s</span>
                            </span>
                          </div>
                        </span>
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
                </div>
                <div data-wow-delay="0.1s" className="wow fadeInUp col-item">
                  <div className="tf-card-box style-1">
                    <div className="card-media">
                      <Link href="javascript:void(0)">
                        <img
                          src="/assets/images/box-item/card-item-42.jpg"
                          alt=""
                        />
                      </Link>
                      <span className="wishlist-button icon-heart" />
                      <div className="featured-countdown">
                        <span
                          className="js-countdown"
                          data-timer={7500}
                          data-labels="d,h,m,s"
                        >
                          <div aria-hidden="true" className="countdown__timer">
                            <span
                              className="countdown__item"
                              style={{ display: "none" }}
                            >
                              <span className="countdown__value countdown__value--0 js-countdown__value--0">
                                0
                              </span>
                              <span className="countdown__label">d</span>
                            </span>
                            <span className="countdown__item">
                              <span className="countdown__value countdown__value--1 js-countdown__value--1">
                                02
                              </span>
                              <span className="countdown__label">h</span>
                            </span>
                            <span className="countdown__item">
                              <span className="countdown__value countdown__value--2 js-countdown__value--2">
                                03
                              </span>
                              <span className="countdown__label">m</span>
                            </span>
                            <span className="countdown__item">
                              <span className="countdown__value countdown__value--3 js-countdown__value--3">
                                43
                              </span>
                              <span className="countdown__label">s</span>
                            </span>
                          </div>
                        </span>
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
                </div>
                <div data-wow-delay="0.2s" className="wow fadeInUp col-item">
                  <div className="tf-card-box style-1">
                    <div className="card-media">
                      <Link href="javascript:void(0)">
                        <img
                          src="/assets/images/box-item/card-item-43.jpg"
                          alt=""
                        />
                      </Link>
                      <span className="wishlist-button icon-heart" />
                      <div className="featured-countdown">
                        <span
                          className="js-countdown"
                          data-timer={7500}
                          data-labels="d,h,m,s"
                        >
                          <div aria-hidden="true" className="countdown__timer">
                            <span
                              className="countdown__item"
                              style={{ display: "none" }}
                            >
                              <span className="countdown__value countdown__value--0 js-countdown__value--0">
                                0
                              </span>
                              <span className="countdown__label">d</span>
                            </span>
                            <span className="countdown__item">
                              <span className="countdown__value countdown__value--1 js-countdown__value--1">
                                02
                              </span>
                              <span className="countdown__label">h</span>
                            </span>
                            <span className="countdown__item">
                              <span className="countdown__value countdown__value--2 js-countdown__value--2">
                                03
                              </span>
                              <span className="countdown__label">m</span>
                            </span>
                            <span className="countdown__item">
                              <span className="countdown__value countdown__value--3 js-countdown__value--3">
                                43
                              </span>
                              <span className="countdown__label">s</span>
                            </span>
                          </div>
                        </span>
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
                </div>
                <div data-wow-delay="0.3s" className="wow fadeInUp col-item">
                  <div className="tf-card-box style-1">
                    <div className="card-media">
                      <Link href="javascript:void(0)">
                        <img
                          src="/assets/images/box-item/card-item-44.jpg"
                          alt=""
                        />
                      </Link>
                      <span className="wishlist-button icon-heart" />
                      <div className="featured-countdown">
                        <span
                          className="js-countdown"
                          data-timer={7500}
                          data-labels="d,h,m,s"
                        >
                          <div aria-hidden="true" className="countdown__timer">
                            <span
                              className="countdown__item"
                              style={{ display: "none" }}
                            >
                              <span className="countdown__value countdown__value--0 js-countdown__value--0">
                                0
                              </span>
                              <span className="countdown__label">d</span>
                            </span>
                            <span className="countdown__item">
                              <span className="countdown__value countdown__value--1 js-countdown__value--1">
                                02
                              </span>
                              <span className="countdown__label">h</span>
                            </span>
                            <span className="countdown__item">
                              <span className="countdown__value countdown__value--2 js-countdown__value--2">
                                03
                              </span>
                              <span className="countdown__label">m</span>
                            </span>
                            <span className="countdown__item">
                              <span className="countdown__value countdown__value--3 js-countdown__value--3">
                                43
                              </span>
                              <span className="countdown__label">s</span>
                            </span>
                          </div>
                        </span>
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
                </div>
                <div data-wow-delay="0.4s" className="wow fadeInUp col-item">
                  <div className="tf-card-box style-1">
                    <div className="card-media">
                      <Link href="javascript:void(0)">
                        <img
                          src="/assets/images/box-item/card-item-45.jpg"
                          alt=""
                        />
                      </Link>
                      <span className="wishlist-button icon-heart" />
                      <div className="featured-countdown">
                        <span
                          className="js-countdown"
                          data-timer={7500}
                          data-labels="d,h,m,s"
                        >
                          <div aria-hidden="true" className="countdown__timer">
                            <span
                              className="countdown__item"
                              style={{ display: "none" }}
                            >
                              <span className="countdown__value countdown__value--0 js-countdown__value--0">
                                0
                              </span>
                              <span className="countdown__label">d</span>
                            </span>
                            <span className="countdown__item">
                              <span className="countdown__value countdown__value--1 js-countdown__value--1">
                                02
                              </span>
                              <span className="countdown__label">h</span>
                            </span>
                            <span className="countdown__item">
                              <span className="countdown__value countdown__value--2 js-countdown__value--2">
                                03
                              </span>
                              <span className="countdown__label">m</span>
                            </span>
                            <span className="countdown__item">
                              <span className="countdown__value countdown__value--3 js-countdown__value--3">
                                43
                              </span>
                              <span className="countdown__label">s</span>
                            </span>
                          </div>
                        </span>
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
                </div>
                <div data-wow-delay="0s" className="wow fadeInUp col-item">
                  <div className="tf-card-box style-1">
                    <div className="card-media">
                      <Link href="javascript:void(0)">
                        <img
                          src="/assets/images/box-item/card-item-46.jpg"
                          alt=""
                        />
                      </Link>
                      <span className="wishlist-button icon-heart" />
                      <div className="featured-countdown">
                        <span
                          className="js-countdown"
                          data-timer={7500}
                          data-labels="d,h,m,s"
                        >
                          <div aria-hidden="true" className="countdown__timer">
                            <span
                              className="countdown__item"
                              style={{ display: "none" }}
                            >
                              <span className="countdown__value countdown__value--0 js-countdown__value--0">
                                0
                              </span>
                              <span className="countdown__label">d</span>
                            </span>
                            <span className="countdown__item">
                              <span className="countdown__value countdown__value--1 js-countdown__value--1">
                                02
                              </span>
                              <span className="countdown__label">h</span>
                            </span>
                            <span className="countdown__item">
                              <span className="countdown__value countdown__value--2 js-countdown__value--2">
                                03
                              </span>
                              <span className="countdown__label">m</span>
                            </span>
                            <span className="countdown__item">
                              <span className="countdown__value countdown__value--3 js-countdown__value--3">
                                43
                              </span>
                              <span className="countdown__label">s</span>
                            </span>
                          </div>
                        </span>
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
                </div>
                <div data-wow-delay="0.1s" className="wow fadeInUp col-item">
                  <div className="tf-card-box style-1">
                    <div className="card-media">
                      <Link href="javascript:void(0)">
                        <img
                          src="/assets/images/box-item/card-item-47.jpg"
                          alt=""
                        />
                      </Link>
                      <span className="wishlist-button icon-heart" />
                      <div className="featured-countdown">
                        <span
                          className="js-countdown"
                          data-timer={7500}
                          data-labels="d,h,m,s"
                        >
                          <div aria-hidden="true" className="countdown__timer">
                            <span
                              className="countdown__item"
                              style={{ display: "none" }}
                            >
                              <span className="countdown__value countdown__value--0 js-countdown__value--0">
                                0
                              </span>
                              <span className="countdown__label">d</span>
                            </span>
                            <span className="countdown__item">
                              <span className="countdown__value countdown__value--1 js-countdown__value--1">
                                02
                              </span>
                              <span className="countdown__label">h</span>
                            </span>
                            <span className="countdown__item">
                              <span className="countdown__value countdown__value--2 js-countdown__value--2">
                                03
                              </span>
                              <span className="countdown__label">m</span>
                            </span>
                            <span className="countdown__item">
                              <span className="countdown__value countdown__value--3 js-countdown__value--3">
                                43
                              </span>
                              <span className="countdown__label">s</span>
                            </span>
                          </div>
                        </span>
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
                </div>
                <div data-wow-delay="0.2s" className="wow fadeInUp col-item">
                  <div className="tf-card-box style-1">
                    <div className="card-media">
                      <Link href="javascript:void(0)">
                        <img
                          src="/assets/images/box-item/card-item-48.jpg"
                          alt=""
                        />
                      </Link>
                      <span className="wishlist-button icon-heart" />
                      <div className="featured-countdown">
                        <span
                          className="js-countdown"
                          data-timer={7500}
                          data-labels="d,h,m,s"
                        >
                          <div aria-hidden="true" className="countdown__timer">
                            <span
                              className="countdown__item"
                              style={{ display: "none" }}
                            >
                              <span className="countdown__value countdown__value--0 js-countdown__value--0">
                                0
                              </span>
                              <span className="countdown__label">d</span>
                            </span>
                            <span className="countdown__item">
                              <span className="countdown__value countdown__value--1 js-countdown__value--1">
                                02
                              </span>
                              <span className="countdown__label">h</span>
                            </span>
                            <span className="countdown__item">
                              <span className="countdown__value countdown__value--2 js-countdown__value--2">
                                03
                              </span>
                              <span className="countdown__label">m</span>
                            </span>
                            <span className="countdown__item">
                              <span className="countdown__value countdown__value--3 js-countdown__value--3">
                                43
                              </span>
                              <span className="countdown__label">s</span>
                            </span>
                          </div>
                        </span>
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
                </div>
                <div data-wow-delay="0.3s" className="wow fadeInUp col-item">
                  <div className="tf-card-box style-1">
                    <div className="card-media">
                      <Link href="javascript:void(0)">
                        <img
                          src="/assets/images/box-item/card-item-41.jpg"
                          alt=""
                        />
                      </Link>
                      <span className="wishlist-button icon-heart" />
                      <div className="featured-countdown">
                        <span
                          className="js-countdown"
                          data-timer={7500}
                          data-labels="d,h,m,s"
                        >
                          <div aria-hidden="true" className="countdown__timer">
                            <span
                              className="countdown__item"
                              style={{ display: "none" }}
                            >
                              <span className="countdown__value countdown__value--0 js-countdown__value--0">
                                0
                              </span>
                              <span className="countdown__label">d</span>
                            </span>
                            <span className="countdown__item">
                              <span className="countdown__value countdown__value--1 js-countdown__value--1">
                                02
                              </span>
                              <span className="countdown__label">h</span>
                            </span>
                            <span className="countdown__item">
                              <span className="countdown__value countdown__value--2 js-countdown__value--2">
                                03
                              </span>
                              <span className="countdown__label">m</span>
                            </span>
                            <span className="countdown__item">
                              <span className="countdown__value countdown__value--3 js-countdown__value--3">
                                43
                              </span>
                              <span className="countdown__label">s</span>
                            </span>
                          </div>
                        </span>
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
                </div>
                <div data-wow-delay="0.4s" className="wow fadeInUp col-item">
                  <div className="tf-card-box style-1">
                    <div className="card-media">
                      <Link href="javascript:void(0)">
                        <img
                          src="/assets/images/box-item/card-item-42.jpg"
                          alt=""
                        />
                      </Link>
                      <span className="wishlist-button icon-heart" />
                      <div className="featured-countdown">
                        <span
                          className="js-countdown"
                          data-timer={7500}
                          data-labels="d,h,m,s"
                        >
                          <div aria-hidden="true" className="countdown__timer">
                            <span
                              className="countdown__item"
                              style={{ display: "none" }}
                            >
                              <span className="countdown__value countdown__value--0 js-countdown__value--0">
                                0
                              </span>
                              <span className="countdown__label">d</span>
                            </span>
                            <span className="countdown__item">
                              <span className="countdown__value countdown__value--1 js-countdown__value--1">
                                02
                              </span>
                              <span className="countdown__label">h</span>
                            </span>
                            <span className="countdown__item">
                              <span className="countdown__value countdown__value--2 js-countdown__value--2">
                                03
                              </span>
                              <span className="countdown__label">m</span>
                            </span>
                            <span className="countdown__item">
                              <span className="countdown__value countdown__value--3 js-countdown__value--3">
                                43
                              </span>
                              <span className="countdown__label">s</span>
                            </span>
                          </div>
                        </span>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BidModal handleBidModal={handleBidModal} isBidModal={isBidModal} />
    </>
  );
}
