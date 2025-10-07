import { Link } from "react-router-dom";
import TitileSlider3 from "../slider/TitileSlider3";
export default function FlatTitle3() {
  return (
    <>
      <div className="flat-pages-title-home3">
        <div className="bg-grid-line">
          <div className="bg-line" />
        </div>
        <div className="themesflat-container w1346">
          <div className="row">
            <div className="col-12 pages-title">
              <div className="content">
                <h1 data-wow-delay="0s" className="wow fadeInUp">
                  modern concept artist connector
                </h1>
                <p data-wow-delay="0.1s" className="wow fadeInUp">
                  Discover 1000+ digital artwork and collect all of them
                  directly in one platform with sale payment
                </p>
                <div
                  data-wow-delay="0.2s"
                  className="wow fadeInUp flat-button flex justify-center"
                >
                  <Link
                    href="javascript:void(0)"
                    className="tf-button style-1 h50 w190 mr-30"
                  >
                    Discover more <i className="icon-arrow-up-right2" />
                  </Link>
                  <Link
                    href="javascript:void(0)"
                    className="tf-button style-1 h50 w190 active"
                  >
                    All collections <i className="icon-arrow-up-right2" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12">
              <TitileSlider3 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
