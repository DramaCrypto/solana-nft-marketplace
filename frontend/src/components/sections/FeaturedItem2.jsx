import { Link } from "react-router-dom";
import FeaturedSlider2 from "../slider/FeaturedSlider2";
export default function FeaturedItem2() {
  return (
    <>
      <div className="tf-section featured-item style-bottom">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-section pb-20">
                <h2 className="tf-title ">Live Bidding</h2>
                <Link href="/explore-3">
                  Discover more <i className="icon-arrow-right2" />
                </Link>
              </div>
            </div>
            <div className="col-md-12">
              <FeaturedSlider2 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
