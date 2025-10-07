import { useState } from "react";
import { Link } from "react-router-dom";

// components
import Layout from "@/components/layout/Layout";

export default function Home() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      <Layout headerStyle={3} footerStyle={1} pageCls="home-7 pt-0">
        <div>
          <div className="page-title about-us relative">
            <div className="themesflat-container">
              <div className="row">
                <div className="col-12 pages-title">
                  <div className="content">
                    <h1 data-wow-delay="0s" className="wow fadeInUp">
                      This unique story driven nft experience
                    </h1>
                    <p data-wow-delay="0.1s" className="wow fadeInUp">
                      get started with the easiest and most secure platform to
                      buy and trade digital ART and NFTs
                    </p>
                    <div
                      data-wow-delay="0.2s"
                      className="wow fadeInUp flat-button flex justify-center"
                    >
                      <Link to="/" className="tf-button style-1 h50 w190">
                        Get started <i className="icon-arrow-up-right2" />
                      </Link>
                    </div>
                  </div>
                  <div className="icon-background">
                    <img
                      className="absolute item1"
                      src="/assets/images/item-background/item11.png"
                      alt=""
                    />
                    <img
                      className="absolute item2"
                      src="/assets/images/item-background/item10.png"
                      alt=""
                    />
                    <img
                      className="absolute item3"
                      src="/assets/images/item-background/item12.png"
                      alt=""
                    />
                    <img
                      className="absolute item4"
                      src="/assets/images/item-background/item13.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tf-section-2 widget-box-icon">
            <div className="themesflat-container">
              <div className="row">
                <div className="col-md-12">
                  <div className="heading-section-1">
                    <h2 className="tf-title pb-40">Why choose us</h2>
                  </div>
                </div>
                <div data-wow-delay="0s" className="wow fadeInUp col-md-4">
                  <div className="box-icon-item">
                    <img
                      src="/assets/images/item-background/about-01.png"
                      alt=""
                    />
                    <div className="title">
                      <a href="javascript:void(0)">Flexible payment</a>
                    </div>
                    <p>
                      Fusce non dignissim velit, sit amet semper eros. Quisque
                      orci est
                    </p>
                  </div>
                </div>
                <div data-wow-delay="0.1s" className="wow fadeInUp col-md-4">
                  <div className="box-icon-item">
                    <img
                      src="/assets/images/item-background/about-02.png"
                      alt=""
                    />
                    <div className="title">
                      <a href="javascript:void(0)">Huge data warehouse</a>
                    </div>
                    <p>
                      Fusce non dignissim velit, sit amet semper eros. Quisque
                      orci est
                    </p>
                  </div>
                </div>
                <div data-wow-delay="0.2s" className="wow fadeInUp col-md-4">
                  <div className="box-icon-item">
                    <img
                      src="/assets/images/item-background/about-03.png"
                      alt=""
                    />
                    <div className="title">
                      <a href="javascript:void(0)">3 layer security</a>
                    </div>
                    <p>
                      Fusce non dignissim velit, sit amet semper eros. Quisque
                      orci est
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tf-section-2 wrap-accordion pt-80">
            <div className="themesflat-container">
              <div className="row">
                <div className="col-md-12">
                  <div className="heading-section-1">
                    <h2 className="tf-title pb-40">
                      Frequently Asked Questions
                    </h2>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="flat-accordion">
                    <div
                      data-wow-delay="0s"
                      className="wow fadeInUp flat-toggle"
                    >
                      <h6
                        className={
                          isActive.key == 1
                            ? "toggle-title active"
                            : "toggle-title"
                        }
                        onClick={() => handleToggle(1)}
                      >
                        1. Why are NFTs becoming popular?
                      </h6>
                      <div
                        className="toggle-content"
                        style={{
                          display: `${isActive.key == 1 ? "block" : "none"}`,
                        }}
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation.Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod.
                        </p>
                      </div>
                    </div>
                    <div
                      data-wow-delay="0s"
                      className="wow fadeInUp flat-toggle"
                    >
                      <h6
                        className={
                          isActive.key == 2
                            ? "toggle-title active"
                            : "toggle-title"
                        }
                        onClick={() => handleToggle(2)}
                      >
                        2. How do I keep my NFTs safe?
                      </h6>
                      <div
                        className="toggle-content"
                        style={{
                          display: `${isActive.key == 2 ? "block" : "none"}`,
                        }}
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation.Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod.
                        </p>
                      </div>
                    </div>
                    <div
                      data-wow-delay="0s"
                      className="wow fadeInUp flat-toggle"
                    >
                      <h6
                        className={
                          isActive.key == 3
                            ? "toggle-title active"
                            : "toggle-title"
                        }
                        onClick={() => handleToggle(3)}
                      >
                        3. What is blockchain?
                      </h6>
                      <div
                        className="toggle-content"
                        style={{
                          display: `${isActive.key == 3 ? "block" : "none"}`,
                        }}
                      >
                        <p>
                          Blockchain is a shared, immutable ledger that
                          facilitates the process of recording transactions and
                          tracking assets in a business network. An asset can be
                          tangible (a house, car, cash, land) or intangible
                          (intellectual property, patents, copyrights,
                          branding). Virtually anything of value can be tracked
                          and traded on a blockchain network, reducing risk and
                          cutting costs for all involved
                        </p>
                      </div>
                    </div>
                    <div
                      data-wow-delay="0s"
                      className="wow fadeInUp flat-toggle"
                    >
                      <h6
                        className={
                          isActive.key == 4
                            ? "toggle-title active"
                            : "toggle-title"
                        }
                        onClick={() => handleToggle(4)}
                      >
                        4. What is an NFT?
                      </h6>
                      <div
                        className="toggle-content"
                        style={{
                          display: `${isActive.key == 4 ? "block" : "none"}`,
                        }}
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation.Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod.
                        </p>
                      </div>
                    </div>
                    <div
                      data-wow-delay="0s"
                      className="wow fadeInUp flat-toggle"
                    >
                      <h6
                        className={
                          isActive.key == 5
                            ? "toggle-title active"
                            : "toggle-title"
                        }
                        onClick={() => handleToggle(5)}
                      >
                        5. How do I set up my Ledger?
                      </h6>
                      <div
                        className="toggle-content"
                        style={{
                          display: `${isActive.key == 5 ? "block" : "none"}`,
                        }}
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation.Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="flat-accordion2">
                    <div
                      data-wow-delay="0s"
                      className="wow fadeInUp flat-toggle2"
                    >
                      <h6
                        className={
                          isActive.key == 6
                            ? "toggle-title active"
                            : "toggle-title"
                        }
                        onClick={() => handleToggle(6)}
                      >
                        6. Why are NFTs becoming popular?
                      </h6>
                      <div
                        className="toggle-content"
                        style={{
                          display: `${isActive.key == 6 ? "block" : "none"}`,
                        }}
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation.Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod.
                        </p>
                      </div>
                    </div>
                    <div
                      data-wow-delay="0s"
                      className="wow fadeInUp flat-toggle2"
                    >
                      <h6
                        className={
                          isActive.key == 7
                            ? "toggle-title active"
                            : "toggle-title"
                        }
                        onClick={() => handleToggle(7)}
                      >
                        7. How do I keep my NFTs safe?
                      </h6>
                      <div
                        className="toggle-content"
                        style={{
                          display: `${isActive.key == 7 ? "block" : "none"}`,
                        }}
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation.Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod.
                        </p>
                      </div>
                    </div>
                    <div
                      data-wow-delay="0s"
                      className="wow fadeInUp flat-toggle2"
                    >
                      <h6
                        className={
                          isActive.key == 8
                            ? "toggle-title active"
                            : "toggle-title"
                        }
                        onClick={() => handleToggle(8)}
                      >
                        8. What is blockchain?
                      </h6>
                      <div
                        className="toggle-content"
                        style={{
                          display: `${isActive.key == 8 ? "block" : "none"}`,
                        }}
                      >
                        <p>
                          Blockchain is a shared, immutable ledger that
                          facilitates the process of recording transactions and
                          tracking assets in a business network. An asset can be
                          tangible (a house, car, cash, land) or intangible
                          (intellectual property, patents, copyrights,
                          branding). Virtually anything of value can be tracked
                          and traded on a blockchain network, reducing risk and
                          cutting costs for all involved
                        </p>
                      </div>
                    </div>
                    <div
                      data-wow-delay="0s"
                      className="wow fadeInUp flat-toggle2"
                    >
                      <h6
                        className={
                          isActive.key == 9
                            ? "toggle-title active"
                            : "toggle-title"
                        }
                        onClick={() => handleToggle(9)}
                      >
                        9. What is an NFT?
                      </h6>
                      <div
                        className="toggle-content"
                        style={{
                          display: `${isActive.key == 9 ? "block" : "none"}`,
                        }}
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation.Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod.
                        </p>
                      </div>
                    </div>
                    <div
                      data-wow-delay="0s"
                      className="wow fadeInUp flat-toggle2"
                    >
                      <h6
                        className={
                          isActive.key == 10
                            ? "toggle-title active"
                            : "toggle-title"
                        }
                        onClick={() => handleToggle(10)}
                      >
                        10. How do I set up my Ledger?
                      </h6>
                      <div
                        className="toggle-content"
                        style={{
                          display: `${isActive.key == 10 ? "block" : "none"}`,
                        }}
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation.Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="content">
                    <div className="text">Still have question?</div>
                    <p>
                      Can't find what you're looking for? Please{" "}
                      <a href="javascript:void(0)" className="tf-color">
                        chat to our friendly team
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tf-section-2">
            <div className="themesflat-container">
              <div className="row">
                <div className="col-12">
                  <div className="widget-income">
                    <div className="title">
                      Generate passive income with the platform{" "}
                      <span className="tf-color">Open9</span>
                    </div>
                    <p>
                      get started with the easiest and most secure platform to
                      buy and trade digital ART and NFTs
                    </p>
                    <Link to="/" className="tf-button style-1 h50 w190">
                      Get started
                      <i className="icon-arrow-up-right2" />
                    </Link>
                    <div className="image">
                      <img
                        className="icon-1"
                        src="/assets/images/item-background/item11.png"
                        alt=""
                      />
                      <img
                        className="icon-2"
                        src="/assets/images/item-background/item12.png"
                        alt=""
                      />
                      <img
                        className="icon-3"
                        src="/assets/images/item-background/item13.png"
                        alt=""
                      />
                      <img
                        className="icon-4"
                        src="/assets/images/item-background/item14.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
