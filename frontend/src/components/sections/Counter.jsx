import dynamic from "next/dynamic";
import { Link } from "react-router-dom";
const CounterUp = dynamic(() => import("../elements/CounterUp"), {
  ssr: false,
});

export default function Counter() {
  return (
    <>
      <div className="tf-section counter">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-12">
              <div className="counter__body">
                <div className="counter">
                  <div className="number-counter">
                    <span
                      className="number"
                      data-speed={1000}
                      data-to={15}
                      data-inviewport="yes"
                    >
                      <CounterUp count={15} time={1} />
                    </span>
                    K+
                  </div>
                  <h6 className="title">Collections</h6>
                </div>
                <div className="counter">
                  <div className="number-counter">
                    <span
                      className="number"
                      data-speed={1000}
                      data-to={217}
                      data-inviewport="yes"
                    >
                      <CounterUp count={217} time={1} />
                    </span>
                    K+
                  </div>
                  <h6 className="title">Artworks</h6>
                </div>
                <div className="counter">
                  <div className="number-counter">
                    <span
                      className="number"
                      data-speed={1000}
                      data-to={37}
                      data-inviewport="yes"
                    >
                      <CounterUp count={37} time={1} />
                    </span>
                    K+
                  </div>
                  <h6 className="title">Artists</h6>
                </div>
              </div>
              <div className="box-icon-wrap">
                <div className="tf-box-icon style-1 relative m-0">
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
                <div className="tf-box-icon style-1 relative m-0">
                  <div className="image">
                    <img src="/assets/images/box-icon/icon-02.png" alt="" />
                    <p>Step 2</p>
                  </div>
                  <h4 className="heading">
                    <Link href="/contact-us">Create collection</Link>
                  </h4>
                  <p className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
                <div className="tf-box-icon style-1 relative m-0">
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
                <div className="tf-box-icon style-1 relative m-0">
                  <div className="image">
                    <img src="/assets/images/box-icon/icon-04.png" alt="" />
                    <p>Step 4</p>
                  </div>
                  <h4 className="heading">
                    <Link href="/contact-us">Sell your NFTs</Link>
                  </h4>
                  <p className="content">
                    Maecenas non semper quam. Vivamus et arcu condimentum ipsum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
