import { Link } from "react-router-dom";
export default function Action6() {
  return (
    <>
      <div className="tf-section action top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="action__body style-1">
                <div className="tf-tsparticles">
                  <div
                    id="tsparticles2"
                    data-color="#5e5e5e"
                    data-line="#5e5e5e"
                  />
                </div>
                <h2 data-wow-delay="0s" className="wow fadeInUp">
                  Join the world’s largest nFT community &amp; start collecting
                  NFTS
                </h2>
                <p data-wow-delay="0.1s" className="wow fadeInUp">
                  Discover the Most Premium, Unique and Exclusive <br /> NFT
                  Collection
                </p>
                <div
                  data-wow-delay="0.2s"
                  className="wow fadeInUp flat-button flex"
                >
                  <Link
                    href="javascript:void(0)"
                    className="tf-button style-1 h50 w230 mr-10"
                  >
                    Create your first NFT
                    <i className="icon-arrow-up-right2" />
                  </Link>
                  <Link
                    href="javascript:void(0)"
                    className="tf-button style-1 h50 w190 active "
                  >
                    Explore now
                    <i className="icon-arrow-up-right2" />
                  </Link>
                </div>
                <img src="/assets/images/item-background/bg-home6.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
