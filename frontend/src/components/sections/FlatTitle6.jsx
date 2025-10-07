import { Link } from "react-router-dom";
import TitileSlider6 from "../slider/TitileSlider6";
import TitileSlider7 from "../slider/TitileSlider7";
export default function FlatTitle6() {
  return (
    <>
      <div className="flat-pages-title-home7 relative">
        <div className="tf-bg-line" />
        <div className="themesflat-container">
          <div className="row">
            <div className="col-12 pages-title">
              <div className="content">
                <h1>Discover Rare &amp; Unique Digital Art</h1>
                <p>
                  Discover, collect and sell extraordinary NFTs on the world’s
                  first &amp; largest NFT marketplace
                </p>
                <div className="flat-button flex">
                  <Link
                    href="javascript:void(0)"
                    className="tf-button style-1 h50 w190 mr-10"
                  >
                    Explore more <i className="icon-arrow-up-right2" />
                  </Link>
                  <Link
                    href="javascript:void(0)"
                    className="tf-button style-1 h50 w190 active"
                  >
                    Wallet connect <i className="icon-wa" />
                  </Link>
                </div>
              </div>
              <div className="icon-background">
                <img
                  className="absolute item1"
                  src="/assets/images/item-background/item8.png"
                  alt=""
                />
                <img
                  className="absolute item2"
                  src="/assets/images/item-background/item1.png"
                  alt=""
                />
                <img
                  className="absolute item3"
                  src="/assets/images/item-background/item1.png"
                  alt=""
                />
                <img
                  className="absolute item4"
                  src="/assets/images/item-background/item7.png"
                  alt=""
                />
                <img
                  className="absolute item5"
                  src="/assets/images/item-background/item2.png"
                  alt=""
                />
                <img
                  className="absolute item6"
                  src="/assets/images/item-background/item1.png"
                  alt=""
                />
                <img
                  className="absolute item7"
                  src="/assets/images/item-background/item9.png"
                  alt=""
                />
                <img
                  className="absolute item8"
                  src="/assets/images/item-background/item1.png"
                  alt=""
                />
                <img
                  className="absolute item9"
                  src="/assets/images/item-background/item1.png"
                  alt=""
                />
                <img
                  className="absolute item10"
                  src="/assets/images/item-background/item2.png"
                  alt=""
                />
              </div>
              <div className="bg-home7">
                <TitileSlider6 />
                <TitileSlider7 />
                <TitileSlider6 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
