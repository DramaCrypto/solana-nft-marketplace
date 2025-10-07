import { Link } from "react-router-dom";
import FeaturedSlider8 from "../slider/FeaturedSlider8";
export default function FeaturedItem8() {
  return (
    <>
      <div className="tf-section-1 featured-item">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-section pb-20">
                <h2 className="tf-title ">Limited auction</h2>
                <Link href="/explore-3">
                  Discover more <i className="icon-arrow-right2" />
                </Link>
              </div>
            </div>
            <div className="col-md-12">
              <FeaturedSlider8 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
