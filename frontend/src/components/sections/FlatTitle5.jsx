import { Link } from "react-router-dom";
import TitileSlider5 from "../slider/TitileSlider5";
export default function FlatTitle5() {
  return (
    <>
      <div className="flat-pages-title-home5 relative has-slider">
        <div className="themesflat-container w1230">
          <div className="row">
            <div className="col-12 pages-title">
              <div className="content">
                <h1 data-wow-delay="0s" className="wow fadeInUp">
                  Discover the NFT <br /> for worldwid creators
                </h1>
                <p data-wow-delay="0.1s" className="wow fadeInUp">
                  Buy and sell NFTs from the world’s top artists
                </p>
                <div
                  data-wow-delay="0.2s"
                  className="wow fadeInUp flat-button flex justify-center"
                >
                  <Link
                    href="javascript:void(0)"
                    className="tf-button style-1 h50 w140 mr-16"
                  >
                    Explore <i className="icon-arrow-up-right2" />
                  </Link>
                  <Link
                    href="javascript:void(0)"
                    className="tf-button style-1 h50 w140 active"
                  >
                    Create <i className="icon-arrow-up-right2" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12">
              <TitileSlider5 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
