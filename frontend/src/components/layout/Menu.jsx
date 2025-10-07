import { Link, useLocation } from "react-router-dom";

export default function Menu() {
  const location = useLocation();

  return (
    <>
      {/* <ul className="sub-menu">
                <Link className={router.pathname == "/home" ? "menu-item current-item" : "menu-item"}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}
      <ul id="menu-primary-menu" className="menu">
        <li className="menu-item menu-item-has-children">
          <a>Home</a>
          <ul className="sub-menu">
            <li
              className={
                location.pathname == "/"
                  ? "menu-item current-item"
                  : "menu-item"
              }
            >
              <Link to="/">Home 1</Link>
            </li>
            <li
              className={
                location.pathname == "/home-2"
                  ? "menu-item current-item"
                  : "menu-item"
              }
            >
              <Link href="/home-2">Home 2</Link>
            </li>
            <li
              className={
                location.pathname == "/home-3"
                  ? "menu-item current-item"
                  : "menu-item"
              }
            >
              <Link href="/home-3">Home 3</Link>
            </li>
            <li
              className={
                location.pathname == "/home-4"
                  ? "menu-item current-item"
                  : "menu-item"
              }
            >
              <Link href="/home-4">Home 4</Link>
            </li>
            <li
              className={
                location.pathname == "/home-5"
                  ? "menu-item current-item"
                  : "menu-item"
              }
            >
              <Link href="/home-5">Home 5</Link>
            </li>
            <li
              className={
                location.pathname == "/home-6"
                  ? "menu-item current-item"
                  : "menu-item"
              }
            >
              <Link href="/home-6">Home 6</Link>
            </li>
            <li
              className={
                location.pathname == "/home-7"
                  ? "menu-item current-item"
                  : "menu-item"
              }
            >
              <Link href="/home-7">Home 7</Link>
            </li>
            <li className="menu-item has-item">
              <Link href="javascript:void(0)">Home Slider Style</Link>
              <ul className="nav-sub-menu">
                <li className="nav-menu-item">
                  <Link href="/slider-3d">Slider 3d</Link>
                </li>
                <li className="nav-menu-item">
                  <Link href="/slider-scroll">Slider Scroll</Link>
                </li>
                <li className="nav-menu-item">
                  <Link href="/slider-animation">Slider Animation</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li
          className={
            location.pathname == "/home"
              ? "menu-item current-item"
              : "menu-item"
          }
        >
          <Link href="/about-us">About us</Link>
        </li>
        <li className="menu-item menu-item-has-children">
          <a>Explore</a>
          <ul className="sub-menu">
            <li
              className={
                location.pathname == "/explore-1"
                  ? "menu-item current-item"
                  : "menu-item"
              }
            >
              <Link href="/explore-1">Explore Style 1</Link>
            </li>
            <li
              className={
                location.pathname == "/explore-2"
                  ? "menu-item current-item"
                  : "menu-item"
              }
            >
              <Link href="/explore-2">Explore Style 2</Link>
            </li>
            <li
              className={
                location.pathname == "/explore-3"
                  ? "menu-item current-item"
                  : "menu-item"
              }
            >
              <Link href="/explore-3">Explore Style 3</Link>
            </li>
            <li
              className={
                location.pathname == "/explore-4"
                  ? "menu-item current-item"
                  : "menu-item"
              }
            >
              <Link href="/explore-4">Explore Style 4</Link>
            </li>
            <li
              className={
                location.pathname == "/product-detail-1"
                  ? "menu-item current-item"
                  : "menu-item"
              }
            >
              <Link href="/product-detail-1">Product Detail 1</Link>
            </li>
            <li
              className={
                location.pathname == "/product-detail-2"
                  ? "menu-item current-item"
                  : "menu-item"
              }
            >
              <Link href="/product-detail-2">Product Detail 2</Link>
            </li>
            <li
              className={
                location.pathname == "/product-detail-3"
                  ? "menu-item current-item"
                  : "menu-item"
              }
            >
              <Link href="/product-detail-3">Product Detail 3</Link>
            </li>
            <li
              className={
                location.pathname == "/ranking"
                  ? "menu-item current-item"
                  : "menu-item"
              }
            >
              <Link href="/ranking">Ranking</Link>
            </li>
            <li
              className={
                location.pathname == "/upcoming"
                  ? "menu-item current-item"
                  : "menu-item"
              }
            >
              <Link href="/upcoming">Upcoming Projects</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item menu-item-has-children">
          <a>Pages</a>
          <ul className="sub-menu">
            <li className="menu-item has-item">
              <Link href="/market">Market</Link>
              <ul className="nav-sub-menu">
                <li className="nav-menu-item">
                  <Link href="/market-create">Create</Link>
                </li>
                <li className="nav-menu-item">
                  <Link href="/market">Market</Link>
                </li>
                <li className="nav-menu-item">
                  <Link href="/market-active-bid">Active Bid</Link>
                </li>
                <li className="nav-menu-item">
                  <Link href="/market-explore">Explore</Link>
                </li>
                <li className="nav-menu-item">
                  <Link href="/market-collection">My collection</Link>
                </li>
                <li className="nav-menu-item">
                  <Link href="/market-favorite">My favorite</Link>
                </li>
                <li className="nav-menu-item">
                  <Link href="/market-wallet">Wallet</Link>
                </li>
                <li className="nav-menu-item">
                  <Link href="/market-history">History</Link>
                </li>
                <li className="nav-menu-item">
                  <Link href="/market">Settings</Link>
                </li>
              </ul>
            </li>
            <li
              className={
                location.pathname == "/author-1"
                  ? "menu-item current-item"
                  : "menu-item"
              }
            >
              <Link href="/author-1">Authors Style 1</Link>
            </li>
            <li
              className={
                location.pathname == "/author-2"
                  ? "menu-item current-item"
                  : "menu-item"
              }
            >
              <Link href="/author-2">Authors Style 2</Link>
            </li>
            <li
              className={
                location.pathname == "/terms-condition"
                  ? "menu-item current-item"
                  : "menu-item"
              }
            >
              <Link href="/terms-condition">Terms &amp; Condition</Link>
            </li>
            <li
              className={
                location.pathname == "/no-result"
                  ? "menu-item current-item"
                  : "menu-item"
              }
            >
              <Link href="/no-result">No Result</Link>
            </li>
            <li
              className={
                location.pathname == "/faq"
                  ? "menu-item current-item"
                  : "menu-item"
              }
            >
              <Link href="/faq">FAQs</Link>
            </li>
            <li
              className={
                location.pathname == "/coming-soon"
                  ? "menu-item current-item"
                  : "menu-item"
              }
            >
              <Link href="/coming-soon">Coming Soon</Link>
            </li>
            <li
              className={
                location.pathname == "/maintenance"
                  ? "menu-item current-item"
                  : "menu-item"
              }
            >
              <Link href="/maintenance">Maintenance</Link>
            </li>
            <li
              className={
                location.pathname == "/404"
                  ? "menu-item current-item"
                  : "menu-item"
              }
            >
              <Link href="/404">404</Link>
            </li>
            <li
              className={
                location.pathname == "/login"
                  ? "menu-item current-item"
                  : "menu-item"
              }
            >
              <Link href="/login">Login</Link>
            </li>
            <li
              className={
                location.pathname == "/sign-up"
                  ? "menu-item current-item"
                  : "menu-item"
              }
            >
              <Link href="/sign-up">Sign up</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item menu-item-has-children">
          <a>Blog</a>
          <ul className="sub-menu">
            <li
              className={
                location.pathname == "/blog-grid"
                  ? "menu-item current-item"
                  : "menu-item"
              }
            >
              <Link href="/blog-grid">Blog Grid</Link>
            </li>
            <li
              className={
                location.pathname == "/blog-grid-1"
                  ? "menu-item current-item"
                  : "menu-item"
              }
            >
              <Link href="/blog-grid-1">Blog Grid 1</Link>
            </li>
            <li
              className={
                location.pathname == "/blog-list"
                  ? "menu-item current-item"
                  : "menu-item"
              }
            >
              <Link href="/blog-list">Blog List</Link>
            </li>
            <li
              className={
                location.pathname == "/blog-list-1"
                  ? "menu-item current-item"
                  : "menu-item"
              }
            >
              <Link href="/blog-list-1">Blog List 1</Link>
            </li>
            <li
              className={
                location.pathname == "/blog-detail"
                  ? "menu-item current-item"
                  : "menu-item"
              }
            >
              <Link href="/blog-detail">Blog Details</Link>
            </li>
          </ul>
        </li>
        <li
          className={
            location.pathname == "/contact-us"
              ? "menu-item current-item"
              : "menu-item"
          }
        >
          <Link href="/contact-us">Contact</Link>
        </li>
      </ul>
    </>
  );
}
