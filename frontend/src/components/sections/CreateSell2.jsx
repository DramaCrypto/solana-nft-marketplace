import { Link } from "react-router-dom";
export default function CreateSell2() {
  return (
    <>
      <div className="tf-section create-sell">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-section">
                <h2 className="tf-title pb-30">
                  Step by step Create and Sell Your NFTs
                </h2>
              </div>
            </div>
            <div data-wow-delay="0s" className="wow fadeInUp col-lg-3 col-md-6">
              <div className="tf-box-icon style-1 step1 relative">
                <div className="image">
                  <img src="/assets/images/box-icon/icon-01.png" alt="" />
                  <p>Step 1</p>
                </div>
                <h4 className="heading">
                  <Link href="/contact-us">Set Up Your Wallet</Link>
                </h4>
                <p className="content">
                  Fusce non dignissim velit, sit amet semper eros. Quisque orci
                  est
                </p>
                <div className="rainbow" />
              </div>
            </div>
            <div
              data-wow-delay="0.1s"
              className="wow fadeInUp col-lg-3 col-md-6"
            >
              <div className="tf-box-icon style-1 step2 relative">
                <div className="image">
                  <img src="/assets/images/box-icon/icon-02.png" alt="" />
                  <p>Step 2</p>
                </div>
                <h4 className="heading">
                  <Link href="/contact-us">Create collection</Link>
                </h4>
                <p className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque luctus
                </p>
                <div className="rainbow" />
              </div>
            </div>
            <div
              data-wow-delay="0.2s"
              className="wow fadeInUp col-lg-3 col-md-6"
            >
              <div className="tf-box-icon style-1 step3 relative">
                <div className="image">
                  <img src="/assets/images/box-icon/icon-03.png" alt="" />
                  <p>Step 3</p>
                </div>
                <h4 className="heading">
                  <Link href="/contact-us">Add your NFTs</Link>
                </h4>
                <p className="content">
                  Suspendisse porttitor id est non accumsan. Cras vel viverra
                  velit
                </p>
                <div className="rainbow" />
              </div>
            </div>
            <div
              data-wow-delay="0.3s"
              className="wow fadeInUp col-lg-3 col-md-6"
            >
              <div className="tf-box-icon style-1 step4 relative">
                <div className="image">
                  <img src="/assets/images/box-icon/icon-04.png" alt="" />
                  <p>Step 4</p>
                </div>
                <h4 className="heading">
                  <Link href="/contact-us">Sell your NFTs</Link>
                </h4>
                <p className="content">
                  Maecenas non semper quam. Vivamus et arcu condimentum ipsum
                  consectetur
                </p>
                <div className="rainbow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
