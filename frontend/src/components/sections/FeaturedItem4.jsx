import { Link } from "react-router-dom";
import FeaturedSlider4 from "../slider/FeaturedSlider4";
export default function FeaturedItem4() {
  return (
    <>
      <div className="tf-section featured-item style-bottom">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-section pb-20">
                <h2 className="tf-title ">Featured Item</h2>
                <Link href="/explore-3">
                  Discover more <i className="icon-arrow-right2" />
                </Link>
              </div>
            </div>
            <div className="col-md-12">
              <FeaturedSlider4 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
