import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function AddClassBody() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("body").classList.add("body");
    location.pathname === "/home-5"
      ? document.querySelector("body").classList.add("background-white")
      : document.querySelector("body").classList.remove("background-white");
    location.pathname === "/home-6"
      ? document.querySelector("body").classList.add("dashboard")
      : document.querySelector("body").classList.remove("dashboard");
    location.pathname === "/home-7"
      ? document
          .querySelector("body")
          .classList.add("counter-scroll", "sticky-scroll1")
      : document
          .querySelector("body")
          .classList.remove("counter-scroll", "sticky-scroll1");
    location.pathname === "/404"
      ? document
          .querySelector("body")
          .classList.add("header-fixed", "counter-scroll")
      : null;
    location.pathname === "/terms-condition"
      ? document
          .querySelector("body")
          .classList.add("header-fixed", "sticky-scroll")
      : null;
    location.pathname === "/about-us"
      ? document.querySelector("body").classList.add("counter-scroll")
      : null;
    location.pathname === "/author-1"
      ? document.querySelector("body").classList.add("header-fixed")
      : null;
    location.pathname === "/author-2"
      ? document.querySelector("body").classList.add("header-fixed")
      : null;
    location.pathname === "/blog-detail"
      ? document.querySelector("body").classList.add("header-fixed")
      : null;
    location.pathname === "/blog-grid"
      ? document.querySelector("body").classList.add("header-fixed")
      : null;
    location.pathname === "/blog-grid-1"
      ? document.querySelector("body").classList.add("header-fixed")
      : null;
    location.pathname === "/blog-list"
      ? document.querySelector("body").classList.add("header-fixed")
      : null;
    location.pathname === "/blog-list-1"
      ? document.querySelector("body").classList.add("header-fixed")
      : null;
    location.pathname === "/coming-soon"
      ? document
          .querySelector("body")
          .classList.add("header-fixed", "counter-scroll")
      : null;
    location.pathname === "/contact-us"
      ? document.querySelector("body").classList.add("counter-scroll")
      : null;
    location.pathname === "/explore-1"
      ? document.querySelector("body").classList.add("header-fixed")
      : null;
    location.pathname === "/explore-2"
      ? document.querySelector("body").classList.add("header-fixed")
      : null;
    location.pathname === "/explore-3"
      ? document.querySelector("body").classList.add("header-fixed")
      : null;
    location.pathname === "/explore-4"
      ? document.querySelector("body").classList.add("header-fixed")
      : null;
    location.pathname === "/maintenance"
      ? document
          .querySelector("body")
          .classList.add("header-fixed", "counter-scroll")
      : null;
    location.pathname === "/product-detail-1"
      ? document
          .querySelector("body")
          .classList.add("header-fixed", "counter-scroll")
      : null;
    location.pathname === "/product-detail-2"
      ? document
          .querySelector("body")
          .classList.add("header-fixed", "counter-scroll")
      : null;
    location.pathname === "/product-detail-3"
      ? document
          .querySelector("body")
          .classList.add("header-fixed", "counter-scroll")
      : null;
    location.pathname === "/ranking"
      ? document.querySelector("body").classList.add("header-fixed")
      : null;
    location.pathname === "/upcoming"
      ? document.querySelector("body").classList.add("header-fixed")
      : null;
    location.pathname === "/sign-up"
      ? document.querySelector("body").classList.add("counter-scroll")
      : null;
    location.pathname === "/slider-3d"
      ? document.querySelector("body").classList.add("counter-scroll")
      : null;
    location.pathname === "/market-active-bid"
      ? document.querySelector("body").classList.add("dashboard1")
      : null;
    location.pathname === "/market-collection"
      ? document.querySelector("body").classList.add("dashboard1")
      : null;
    location.pathname === "/market-create"
      ? document.querySelector("body").classList.add("dashboard1")
      : null;
    location.pathname === "/market-explore"
      ? document.querySelector("body").classList.add("dashboard1")
      : null;
    location.pathname === "/market-favorite"
      ? document.querySelector("body").classList.add("dashboard1")
      : null;
    location.pathname === "/market-history"
      ? document.querySelector("body").classList.add("dashboard1")
      : null;
    location.pathname === "/market-wallet"
      ? document.querySelector("body").classList.add("dashboard1")
      : null;
    location.pathname === "/market"
      ? document.querySelector("body").classList.add("dashboard1")
      : null;
  });
}
