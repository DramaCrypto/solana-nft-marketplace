export default function Action4({ onExploreNowButtonClicked }) {
  return (
    <>
      <div className="tf-section action">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="action__body m-0">
                <div className="tf-tsparticles">
                  <div
                    id="tsparticles1"
                    data-color="#161616"
                    data-line="#000"
                  />
                </div>
                <h2 className="text-center capitalize mx-auto mw-667">
                  Join the world’s largest nFT community &amp; start collecting
                  NFTS
                </h2>
                <div className="flat-button flex justify-center">
                  <a
                    href="javascript:void(0)"
                    className="tf-button style-2 h50 w190"
                    onClick={onExploreNowButtonClicked}
                  >
                    Explore now
                    <i className="icon-arrow-up-right2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
