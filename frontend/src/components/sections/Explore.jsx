import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import BidModal from "../elements/BidModal";
const currentTime = new Date();

import AutoSlider1 from "../slider/AutoSlider1";
import AutoSlider2 from "../slider/AutoSlider2";
export default function Explore() {
  const [isBidModal, setBidModal] = useState(false);
  const handleBidModal = () => setBidModal(!isBidModal);
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="wrapper-content">
        <div className="inner-content">
          <div className="action__body w-full mb-40">
            <div className="tf-tsparticles">
              <div id="tsparticles3" data-color="#161616" data-line="#000" />
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
          <div className="heading-section">
            <h2 className="tf-title pb-30">Explore Product</h2>
          </div>
          <div className="widget-tabs relative">
            <div className="tf-soft">
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
                        <input className="check" type="checkbox" name="check" />
                      </div>
                    </Link>
                  </Menu.Items>
                </Menu>
              </div>
            </div>
            <ul className="widget-menu-tab">
              <li
                className={
                  activeIndex === 1 ? "item-title active" : "item-title"
                }
                onClick={() => handleOnClick(1)}
              >
                <span className="inner">Category</span>
              </li>
              <li
                className={
                  activeIndex === 2 ? "item-title active" : "item-title"
                }
                onClick={() => handleOnClick(2)}
              >
                <span className="inner">Items</span>
              </li>
              <li
                className={
                  activeIndex === 3 ? "item-title active" : "item-title"
                }
                onClick={() => handleOnClick(3)}
              >
                <span className="inner">Status</span>
              </li>
              <li
                className={
                  activeIndex === 4 ? "item-title active" : "item-title"
                }
                onClick={() => handleOnClick(4)}
              >
                <span className="inner">Price range</span>
              </li>
            </ul>
            <div className="widget-content-tab">
              <div
                className="widget-content-inner"
                style={{ display: `${activeIndex === 1 ? "block" : "none"}` }}
              >
                <div className="wrap-box-card">
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-01.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-17.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-02.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-18.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-03.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-19.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-04.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-20.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-01.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-21.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-02.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-22.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-03.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-23.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-04.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-24.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-01.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-17.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-02.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-18.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-03.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-19.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-04.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-20.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-01.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-21.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-02.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-22.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-03.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-23.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-04.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-24.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="widget-content-inner"
                style={{ display: `${activeIndex === 2 ? "block" : "none"}` }}
              >
                <div className="wrap-box-card">
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-01.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-17.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-02.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-18.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-03.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-19.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-04.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-20.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-01.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-21.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-02.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-22.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-03.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-23.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-04.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-24.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-01.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-17.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-02.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-18.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-03.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-19.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-04.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-20.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-01.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-21.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-02.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-22.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-03.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-23.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-04.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-24.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="widget-content-inner"
                style={{ display: `${activeIndex === 3 ? "block" : "none"}` }}
              >
                <div className="wrap-box-card">
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-01.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-17.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-02.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-18.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-03.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-19.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-04.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-20.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-01.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-21.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-02.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-22.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-03.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-23.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-04.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-24.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-01.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-17.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-02.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-18.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-03.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-19.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-04.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-20.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-01.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-21.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-02.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-22.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-03.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-23.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-04.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-24.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="widget-content-inner"
                style={{ display: `${activeIndex === 4 ? "block" : "none"}` }}
              >
                <div className="wrap-box-card">
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-01.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-17.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-02.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-18.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-03.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-19.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-04.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-20.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-01.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-21.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-02.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-22.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-03.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-23.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-04.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-24.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-01.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-17.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-02.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-18.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-03.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-19.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-04.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-20.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-01.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-21.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-02.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-22.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-03.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-23.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                  <div className="col-item">
                    <div className="tf-card-box style-4">
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-04.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Created by:</span>
                          <h6>
                            <Link href="author-2.html">Marvin McKinney</Link>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="card-media">
                        <Link href="javascript:void(0)">
                          <img
                            src="assets/images/box-item/card-item-24.jpg"
                            alt=""
                          />
                        </Link>
                        <span className="wishlist-button icon-heart" />
                      </div>
                      <h5 className="name">
                        <Link href="javascript:void(0)">
                          Dayco serpentine belt
                        </Link>
                      </h5>
                      <div className="meta-info flex items-center justify-between">
                        <div>
                          <span className="text-bid">Current Bid</span>
                          <h6 className="price gem">
                            <i className="icon-gem" />
                            0,34
                          </h6>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
      <BidModal handleBidModal={handleBidModal} isBidModal={isBidModal} />
    </>
  );
}
