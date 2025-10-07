import { Link } from "react-router-dom";
import { useState } from "react";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
  const [isSidebar, setSidebar] = useState(false);
  const handleSidebar = () => setSidebar(!isSidebar);
  return (
    <>
      <header
        id="header_main"
        className={`header_1 header-fixed ${scroll ? "is-fixed is-small" : ""}`}
      >
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div id="site-header-inner">
                <div className="wrap-box flex">
                  <div id="site-logo">
                    <div id="site-logo-inner">
                      <Link to="/" rel="home" className="main-logo">
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
                    <Menu />
                  </nav>
                  {/* /#main-nav */}
                  <div className="flat-wallet flex">
                    <div id="wallet-header">
                      <Link
                        href="/market-wallet"
                        id="connectbtn"
                        className="tf-button style-1"
                      >
                        <span>Wallet connect</span>
                        <i className="icon-wa" />
                      </Link>
                    </div>
                    <div className="canvas" onClick={handleSidebar}>
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`canvas-nav-wrap ${isSidebar ? "active" : ""}`}>
          <div className="overlay-canvas-nav" onClick={handleSidebar} />
          <div className="inner-canvas-nav">
            <div className="side-bar">
              <Link to="/" rel="home" className="main-logo">
                <img
                  id="logo_header"
                  src="/assets/images/logo/logo.png"
                  data-retina="assets/images/logo/logo@2x.png"
                />
              </Link>
              <div className="canvas-nav-close" onClick={handleSidebar}>
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
              <div className="widget-search mt-30">
                <form
                  action="#"
                  method="get"
                  role="search"
                  className="search-form relative"
                >
                  <input
                    type="search"
                    id="search"
                    className="search-field style-1"
                    placeholder="Search..."
                    name="s"
                    title="Search for"
                    required
                  />
                  <button
                    className="search search-submit"
                    type="submit"
                    title="Search"
                  >
                    <i className="icon-search" />
                  </button>
                </form>
              </div>
              <div className="widget widget-categories">
                <h5 className="title-widget">Categories</h5>
                <ul>
                  <li>
                    <div className="cate-item">
                      <Link href="javascript:void(0)">NFTs</Link>
                    </div>
                    <div className="number">(1.483)</div>
                  </li>
                  <li>
                    <div className="cate-item">
                      <Link href="javascript:void(0)">Digital Art</Link>
                    </div>
                    <div className="number">(97)</div>
                  </li>
                  <li>
                    <div className="cate-item">
                      <Link href="javascript:void(0)">Crypto</Link>
                    </div>
                    <div className="number">(45)</div>
                  </li>
                  <li>
                    <div className="cate-item">
                      <Link href="javascript:void(0)">Technology</Link>
                    </div>
                    <div className="number">(728)</div>
                  </li>
                </ul>
              </div>
              <div className="widget widget-menu style-4">
                <h5 className="title-widget">Company</h5>
                <ul>
                  <li>
                    <Link href="javascript:void(0)">Help center</Link>
                  </li>
                  <li>
                    <Link href="javascript:void(0)">Platform status</Link>
                  </li>
                </ul>
              </div>
              <div className="widget">
                <h5 className="title-widget">Join the community</h5>
                <div className="widget-social">
                  <ul className="flex">
                    <li>
                      <Link
                        href="javascript:void(0)"
                        className="icon-facebook"
                      />
                    </li>
                    <li>
                      <Link
                        href="javascript:void(0)"
                        className="icon-twitter"
                      />
                    </li>
                    <li>
                      <Link href="javascript:void(0)" className="icon-vt" />
                    </li>
                    <li>
                      <Link href="javascript:void(0)" className="icon-tiktok" />
                    </li>
                    <li>
                      <Link
                        href="javascript:void(0)"
                        className="icon-youtube"
                      />
                    </li>
                  </ul>
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
                data-retina="assets/images/logo/logo@2x.png"
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
