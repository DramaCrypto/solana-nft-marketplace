import { Link } from "react-router-dom";
import FeaturedSlider3 from "../slider/FeaturedSlider3";
export default function FeaturedItem3() {
  return (
    <>
      <div className="tf-section featured-item style-bottom">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-section pb-20">
                <h2 className="tf-title ">Trending nFTs</h2>
                <Link href="/explore-3">
                  View all bids <i className="icon-arrow-right2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <FeaturedSlider3 />
      </div>
    </>
  );
}
