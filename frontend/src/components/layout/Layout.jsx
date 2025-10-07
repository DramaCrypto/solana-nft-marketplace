import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// components
import BackToTop from "../elements/BackToTop";
import Breadcrumb from "./Breadcrumb";
import PageHead from "./PageHead";
import Footer1 from "./footer/Footer1";
import Footer2 from "./footer/Footer2";
import Header1 from "./header/Header1";
import Header2 from "./header/Header2";
import Header3 from "./header/Header3";

export default function Layout({
  headerStyle,
  footerStyle,
  headTitle,
  breadcrumbTitle,
  children,
  pageCls,
}) {
  const [scroll, setScroll] = useState(0);
  // Moblile Menu
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => setMobileMenu(!isMobileMenu);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
    // document.querySelector("body").classList.add("body")
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <PageHead headTitle={headTitle} />
      <div id="wrapper">
        <div id="page" className={`pt-40 ${pageCls ? pageCls : ""}`}>
          {!headerStyle && (
            <Header1
              scroll={scroll}
              isMobileMenu={isMobileMenu}
              handleMobileMenu={handleMobileMenu}
            />
          )}
          {headerStyle == 1 ? (
            <Header1
              scroll={scroll}
              isMobileMenu={isMobileMenu}
              handleMobileMenu={handleMobileMenu}
            />
          ) : null}
          {headerStyle == 2 ? (
            <Header2
              scroll={scroll}
              isMobileMenu={isMobileMenu}
              handleMobileMenu={handleMobileMenu}
            />
          ) : null}
          {headerStyle == 3 ? (
            <Header3
              scroll={scroll}
              isMobileMenu={isMobileMenu}
              handleMobileMenu={handleMobileMenu}
            />
          ) : null}

          {/* <MobileMenu /> */}

          {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

          {children}

          {!footerStyle && <Footer1 />}
          {footerStyle == 1 ? <Footer1 /> : null}
          {footerStyle == 2 ? <Footer2 /> : null}
        </div>
      </div>
      <BackToTop />
    </motion.div>
  );
}
