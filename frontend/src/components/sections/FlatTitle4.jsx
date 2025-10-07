import { Link } from "react-router-dom";
import TitileSlider4 from "../slider/TitileSlider4";
export default function FlatTitle4() {
  return (
    <>
      <div className="flat-pages-title-home4 relative">
        <div className="themesflat-container w-full">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="content">
                <h1 data-wow-delay="0s" className="wow fadeInUp">
                  Discover, collect, <br /> &amp; sell NFTs
                </h1>
                <p data-wow-delay="0.1s" className="wow fadeInUp">
                  Discover the Most Premium, Unique and Exclusive <br /> NFT
                  Collection
                </p>
                <div
                  data-wow-delay="0.2s"
                  className="wow fadeInUp flat-button flex"
                >
                  <Link
                    href="javascript:void(0)"
                    className="tf-button style-1 h50 w140 mr-16"
                  >
                    Explore
                    <i className="icon-arrow-up-right2" />
                  </Link>
                  <Link
                    href="javascript:void(0)"
                    className="tf-button style-1 h50 w140 active"
                  >
                    Create
                    <i className="icon-arrow-up-right2" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="banner__right relative">
                <div className="logo-rotate">
                  <div className="logoimg">
                    <img
                      src="/assets/images/item-background/item6-img.png"
                      alt=""
                    />
                  </div>
                  <img
                    className="logotext"
                    src="/assets/images/item-background/item6-text.png"
                    alt=""
                  />
                </div>
                <TitileSlider4 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
