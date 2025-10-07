import { motion } from "framer-motion";

// components
import TitileSlider1 from "../slider/TitileSlider1";

export default function FlatTitle1({
  onAllCollectionsButtonClicked,
  collections,
  loading,
}) {
  return (
    <>
      <div className="flat-pages-title">
        <div className="widget-bg-line">
          <div className="wraper">
            <div className="bg-grid-line y bottom">
              <div className="bg-line" />
            </div>
          </div>
        </div>
        <div className="themesflat-container w1490">
          <div className="row">
            <div className="col-12 pages-title">
              <motion.div
                className="content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                }}
              >
                <h1>World of top works</h1>
                <p className="wow fadeInUp" data-wow-delay="0.1s">
                  Welcome to the world of rare digital art. Explore the best art
                  from hand-picked digital artist out there and find the hidden
                  gem.
                </p>
                <div
                  data-wow-delay="0.2s"
                  className=" wow fadeInUp flat-button flex justify-center"
                >
                  <a
                    href="javascript:void(0)"
                    className="tf-button style-1 h50 w190 mr-16"
                  >
                    Discover more <i className="icon-arrow-up-right2" />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="tf-button style-1 h50 w190 active"
                    onClick={onAllCollectionsButtonClicked}
                  >
                    All collections <i className="icon-arrow-up-right2" />
                  </a>
                </div>
              </motion.div>
              <div className="icon-background">
                <img
                  className="absolute item1"
                  src="/assets/images/item-background/item1.png"
                  alt=""
                />
                <img
                  className="absolute item2"
                  src="/assets/images/item-background/item2.png"
                  alt=""
                />
                <img
                  className="absolute item3"
                  src="/assets/images/item-background/item3.png"
                  alt=""
                />
                <img
                  className="absolute item4"
                  src="/assets/images/item-background/item1.png"
                  alt=""
                />
                <img
                  className="absolute item5"
                  src="/assets/images/item-background/item1.png"
                  alt=""
                />
                <img
                  className="absolute item6"
                  src="/assets/images/item-background/item4.png"
                  alt=""
                />
                <img
                  className="absolute item7"
                  src="/assets/images/item-background/item5.png"
                  alt=""
                />
                <img
                  className="absolute item8"
                  src="/assets/images/item-background/item5.png"
                  alt=""
                />
              </div>
              <div className="relative">
                <TitileSlider1 collections={collections} loading={loading} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
