import { Link } from "react-router-dom";
import TitileSlider2 from "../slider/TitileSlider2";
export default function FlatTitle2() {
  return (
    <>
      <div className="flat-pages-title-home2 relative">
        <div className="themesflat-container w-full">
          <div className="row">
            <div className="col-md-6">
              <div className="content">
                <h1 data-wow-delay="0s" className="wow fadeInUp">
                  Create, Explore&amp; Collect Digital Art NFTs
                </h1>
                <p data-wow-delay="0.1s" className="wow fadeInUp">
                  Buy and sell NFTs from the world’s top artists. More than
                  1.000 premium digital artworks are available to be yours!
                </p>
                <div
                  data-wow-delay="0.2s"
                  className="wow fadeInUp flat-button flex"
                >
                  <Link
                    href="javascript:void(0)"
                    className="tf-button style-1 h50 w190 mr-30"
                  >
                    Start Collecting
                    <i className="icon-arrow-up-right2" />
                  </Link>
                  <Link
                    href="javascript:void(0)"
                    className="tf-button style-1 h50 w190 active"
                  >
                    Create NFT
                    <i className="icon-arrow-up-right2" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="banner__right relative">
                <TitileSlider2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
