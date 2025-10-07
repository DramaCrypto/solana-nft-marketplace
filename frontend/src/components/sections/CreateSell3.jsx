import { Link } from "react-router-dom";
export default function CreateSell3() {
  return (
    <>
      <div className="tf-section create-sell">
        <div className="themesflat-container">
          <div className="row pl-2-5">
            <div className="col-md-12">
              <div className="heading-section">
                <h2 className="tf-title pb-30">
                  Step by step Create and <br /> Sell Your NFTs
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="grid-box-icon">
                <div
                  data-wow-delay="0s"
                  className="wow fadeInUp tf-box-icon style-1 relative mb-0"
                >
                  <div className="image">
                    <img src="/assets/images/box-icon/icon-01.png" alt="" />
                    <p>Step 1</p>
                  </div>
                  <h4 className="heading">
                    <Link href="/contact-us">Set Up Your Wallet</Link>
                  </h4>
                  <p className="content">
                    Fusce non dignissim velit, sit amet semper eros. Quisque
                    orci est
                  </p>
                </div>
                <div
                  data-wow-delay="0.1s"
                  className="wow fadeInUp tf-box-icon style-1 relative mb-0"
                >
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
                </div>
                <div
                  data-wow-delay="0.2s"
                  className="wow fadeInUp tf-box-icon style-1 relative mb-0"
                >
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
                </div>
                <div
                  data-wow-delay="0.3s"
                  className="wow fadeInUp tf-box-icon style-1 relative mb-0"
                >
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
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box-icon-img">
                <img src="/assets/images/backgroup-section/img-02.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
