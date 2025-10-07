import { Link } from "react-router-dom";
import FeaturedSlider1 from "../slider/FeaturedSlider1";
export default function FeaturedItem1() {
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
              <FeaturedSlider1 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
