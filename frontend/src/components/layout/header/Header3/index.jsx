import { useCallback, useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import Blockies from "react-blockies";

// components
import MobileMenu from "../../MobileMenu";

// providers
import { useAuth } from "@/providers/AuthProvider";
// hooks
import useDevice from "@/hooks/useDevice";

// stores
import useAuthStore from "@/stores/authStore";
import useItemsStore from "@/stores/itemsStore";

// helpers
import { simplifyWalletAddress, toFixed } from "@/helpers/utils";

// styles
import styles from "./style.module.css";

export default function ({ scroll, isMobileMenu, handleMobileMenu }) {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showSearchResult, setShowSearchResult] = useState(false);

  const device = useDevice();

  const location = useLocation();
  const { disconnect, connecting } = useWallet();
  const { setVisible } = useWalletModal();

  const { isAuth, signout } = useAuth();

  const user = useAuthStore();
  const { getItems } = useItemsStore();

  const onLogout = useCallback(() => {
    setShowUserMenu(false);
    disconnect();
  }, []);

  const onSearch = useCallback(
    async (e) => {
      e.preventDefault();
      if (searchValue === 0) return;
      const { status, data, error } = await getItems({
        name: searchValue,
      });
      if (!status) {
        alert(error);
        return;
      }
      setSearchResult(data.slice(0, 5));
      setShowSearchResult(true);
    },
    [searchValue]
  );

  return (
    <>
      <header
        id="header_main"
        className={`header_1 header-fixed header-full ${
          scroll ? "is-fixed is-small" : ""
        }`}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div id="site-header-inner">
                <div className="wrap-box flex">
                  <div id="site-logo">
                    <div id="site-logo-inner">
                      <Link to="/home" rel="home" className="main-logo">
                        <img
                          id="logo_header"
                          src="/assets/images/logo/logo.png"
                          data-retina="assets/images/logo/logo@2x.png"
                        />
                      </Link>
                    </div>
                  </div>
                  {/* logo */}
                  <div className="mobile-button" onClick={handleMobileMenu}>
                    <span />
                  </div>
                  {/* /.mobile-button */}
                  <nav id="main-nav" className="main-nav">
                    <ul id="menu-primary-menu" className="menu">
                      <li
                        className={classNames([
                          "menu-item",
                          {
                            "current-menu-item":
                              location.pathname === "/explore/collections",
                          },
                        ])}
                      >
                        <Link to="/explore/collections">Explore</Link>
                      </li>
                      <li
                        className={classNames([
                          "menu-item",
                          {
                            "current-menu-item": location.pathname === "/about",
                          },
                        ])}
                      >
                        <Link to="/about">About us</Link>
                      </li>
                      <li
                        className={classNames([
                          "menu-item",
                          {
                            "current-menu-item":
                              location.pathname === "/contact",
                          },
                        ])}
                      >
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                  {/* /#main-nav */}
                  <div className="flat-wallet flex">
                    <div
                      className={classNames(
                        "widget-search",
                        styles["widget-search"]
                      )}
                    >
                      <form
                        action="#"
                        method="get"
                        role="search"
                        className="search-form relative"
                        onSubmit={onSearch}
                      >
                        <input
                          type="search"
                          id="search"
                          className="search-field"
                          placeholder="Search By Keywork..."
                          name="s"
                          title="Search for"
                          required
                          value={searchValue}
                          onChange={(e) => {
                            if (e.target.value === "") {
                              setShowSearchResult(false);
                            }
                            setSearchValue(e.target.value);
                          }}
                        />
                        <button
                          className="search search-submit"
                          type="submit"
                          title="Search"
                        >
                          <i className="icon-search" />
                        </button>
                      </form>
                      {showSearchResult && (
                        <div className={styles["search-result"]}>
                          {searchResult.length > 0 && (
                            <div className="widget-history">
                              {searchResult.map((item) => (
                                <div className="widget-creators-item flex items-center mt-3 mb-3">
                                  <div className="author flex items-center flex-grow">
                                    <img
                                      src={
                                        item.image
                                          ? item.image
                                          : "assets/images/avatar/avatar-small-01.png"
                                      }
                                      alt=""
                                    />
                                    <div className="info">
                                      <h6>
                                        <Link to={"/item/" + item.id}>
                                          {item.name}
                                        </Link>
                                      </h6>
                                      <span>Price: {item.price} SOL</span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                          {searchResult.length === 0 && (
                            <h5 className="mt-5 mb-5 text-center">
                              No Results
                            </h5>
                          )}
                        </div>
                      )}
                    </div>
                    {!isAuth && (
                      <div id="wallet-header">
                        <a
                          href="javascript:void(0)"
                          id="connectbtn"
                          className="tf-button style-1"
                          onClick={() => {
                            setVisible(true);
                          }}
                        >
                          <span>
                            {!connecting ? "Wallet connect" : "Connecting..."}
                          </span>
                          <i className="icon-wa" />
                        </a>
                      </div>
                    )}
                    {device.isBreakpoint("LG") && isAuth && (
                      <div className="admin_active" id="header_admin">
                        <div className="popup-user relative">
                          <div
                            className="user"
                            onClick={() => setShowUserMenu((state) => !state)}
                          >
                            {/* <img src={user.avatar} alt="" /> */}
                            {user.avatar && <img src={user.avatar} alt="" />}
                            {!user.avatar && (
                              <Blockies
                                seed={user.wallet_address}
                                size={10}
                                className={styles["blockies-image"]}
                              />
                            )}
                            <span>
                              {user.name ||
                                simplifyWalletAddress(user.wallet_address)}
                              <i className="icon-keyboard_arrow_down" />
                            </span>
                          </div>
                          <div
                            className={`avatar_popup2 ${
                              showUserMenu ? "visible" : ""
                            }`}
                          >
                            <div>
                              <div className="links">
                                <p className="h3">
                                  Balance:
                                  <span className="ml-3 mr-2">
                                    {/* {balance ? toFixed(balance, 2) : 0} */}
                                  </span>
                                  SOL
                                </p>
                                <div className="divider mt-20px mb-20px"></div>
                                <Link className="block mb-30" to="/setting">
                                  <span>My Profile</span>
                                </Link>
                                <Link className="block mb-30" to="/me">
                                  <span>My Items</span>
                                </Link>
                                <a
                                  className="block"
                                  href="javascript:void(0)"
                                  id="logout"
                                  onClick={onLogout}
                                >
                                  <span>Log out</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`mobile-nav-wrap ${isMobileMenu ? "active" : ""}`}>
          <div className="overlay-mobile-nav" onClick={handleMobileMenu} />
          <div className="inner-mobile-nav">
            <Link to="/" rel="home" className="main-logo">
              <img
                id="mobile-logo_header"
                src="/assets/images/logo/logo.png"
                data-retina="/assets/images/logo/logo-dark@2x.png"
              />
            </Link>
            <div className="mobile-nav-close" onClick={handleMobileMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="white"
                x="0px"
                y="0px"
                width="20px"
                height="20px"
                viewBox="0 0 122.878 122.88"
                enableBackground="new 0 0 122.878 122.88"
                xmlSpace="preserve"
              >
                <g>
                  <path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z" />
                </g>
              </svg>
            </div>
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
}
