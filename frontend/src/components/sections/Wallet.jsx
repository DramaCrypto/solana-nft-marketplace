import { Link } from "react-router-dom";
import AutoSlider1 from "../slider/AutoSlider1";
import AutoSlider2 from "../slider/AutoSlider2";

export default function Wallet() {
  return (
    <>
      <div className="wrapper-content">
        <div className="inner-content">
          <div className="action__body w-full mb-40">
            <div className="tf-tsparticles">
              <div id="tsparticles6" data-color="#161616" data-line="#000" />
            </div>
            <h2>Discover, create and sell your own NFT</h2>
            <div className="flat-button flex">
              <Link
                href="javascript:void(0)"
                className="tf-button style-2 h50 w190 mr-10"
              >
                Explore now
                <i className="icon-arrow-up-right2" />
              </Link>
              <Link
                href="javascript:void(0)"
                className="tf-button style-2 h50 w230"
              >
                Create your first NFT
                <i className="icon-arrow-up-right2" />
              </Link>
            </div>
            <div className="bg-home7">
              <AutoSlider1 />
              <AutoSlider2 />
              <AutoSlider1 />
            </div>
          </div>
          <div className="heading-section">
            <h2 className="tf-title">Connect your wallet</h2>
          </div>
          <p>
            If you don't have a wallet, you can select a provider and create one
            now.{" "}
            <span className="tf-color button-connect-wallet">Learn more</span>
          </p>
          <div id="connect-wallet-grid">
            <div className="wrap-box-card">
              <div className="col-item">
                <div className="box-wallet">
                  <img src="assets/images/box-icon/wallet-01.png" alt="" />
                  <h6>
                    <Link href="javascript:void(0)">MetaMask</Link>
                  </h6>
                  <p>Throw myself down among the tall</p>
                </div>
              </div>
              <div className="col-item">
                <div className="box-wallet">
                  <img src="assets/images/box-icon/wallet-02.png" alt="" />
                  <h6>
                    <Link href="javascript:void(0)">Coibase Wallet</Link>
                  </h6>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
              </div>
              <div className="col-item">
                <div className="box-wallet">
                  <img src="assets/images/box-icon/wallet-03.png" alt="" />
                  <h6>
                    <Link href="javascript:void(0)">WalletConnect</Link>
                  </h6>
                  <p>Sed euismod ante et leo commodo, ac faucibus</p>
                </div>
              </div>
              <div className="col-item">
                <div className="box-wallet">
                  <img src="assets/images/box-icon/wallet-04.png" alt="" />
                  <h6>
                    <Link href="javascript:void(0)">Ledger</Link>
                  </h6>
                  <p>Proin suscipit sem a nunc eleifend</p>
                </div>
              </div>
              <div className="col-item">
                <div className="box-wallet">
                  <img src="assets/images/box-icon/wallet-05.png" alt="" />
                  <h6>
                    <Link href="javascript:void(0)">Phantom</Link>
                  </h6>
                  <p>Vestibulum malesuada tortor vel erat</p>
                </div>
              </div>
              <div className="col-item">
                <div className="box-wallet">
                  <img src="assets/images/box-icon/wallet-06.png" alt="" />
                  <h6>
                    <Link href="javascript:void(0)">Bitkeep</Link>
                  </h6>
                  <p>Morbi vel eros sit amet quam viverra</p>
                </div>
              </div>
              <div className="col-item">
                <div className="box-wallet">
                  <img src="assets/images/box-icon/wallet-07.png" alt="" />
                  <h6>
                    <Link href="javascript:void(0)">Core</Link>
                  </h6>
                  <p>Mauris nec orci ac urna luctus</p>
                </div>
              </div>
              <div className="col-item">
                <div className="box-wallet">
                  <img src="assets/images/box-icon/wallet-08.png" alt="" />
                  <h6>
                    <Link href="javascript:void(0)">Glow</Link>
                  </h6>
                  <p>Pellentesque pretium felis vitae augue</p>
                </div>
              </div>
              <div className="col-item">
                <div className="box-wallet">
                  <img src="assets/images/box-icon/wallet-09.png" alt="" />
                  <h6>
                    <Link href="javascript:void(0)">Fortmatic</Link>
                  </h6>
                  <p>Nunc eget eros at tellus euismod</p>
                </div>
              </div>
              <div className="col-item">
                <div className="box-wallet">
                  <img src="assets/images/box-icon/wallet-10.png" alt="" />
                  <h6>
                    <Link href="javascript:void(0)">Kaikas</Link>
                  </h6>
                  <p>Aenean quis odio ultricies ex faucibus</p>
                </div>
              </div>
              <div className="col-item">
                <div className="box-wallet">
                  <img src="assets/images/box-icon/wallet-11.png" alt="" />
                  <h6>
                    <Link href="javascript:void(0)">Bitski</Link>
                  </h6>
                  <p>Fusce sed felis non purus pellentesque</p>
                </div>
              </div>
              <div className="col-item">
                <div className="box-wallet">
                  <img src="assets/images/box-icon/wallet-12.png" alt="" />
                  <h6>
                    <Link href="javascript:void(0)">Solflare</Link>
                  </h6>
                  <p>Donec in diam vulputate molestie</p>
                </div>
              </div>
              <div className="col-item">
                <div className="box-wallet">
                  <img src="assets/images/box-icon/wallet-13.png" alt="" />
                  <h6>
                    <Link href="javascript:void(0)">OperaTouch</Link>
                  </h6>
                  <p>Morbi vehicula ante eget cursus posuere</p>
                </div>
              </div>
              <div className="col-item">
                <div className="box-wallet">
                  <img src="assets/images/box-icon/wallet-14.png" alt="" />
                  <h6>
                    <Link href="javascript:void(0)">OperaTouch</Link>
                  </h6>
                  <p>Morbi vehicula ante eget cursus posuere</p>
                </div>
              </div>
            </div>
          </div>
          <div id="connect-wallet-list">
            <div className="box-wallet style-1">
              <img src="assets/images/box-icon/wallet-01.png" alt="" />
              <div className="info">
                <h6>
                  <Link href="javascript:void(0)">Glow</Link>
                </h6>
                <p>Popular</p>
              </div>
              <Link href="javascript:void(0)" className="tf-button style-3">
                Connect <i className="icon-arrow-up-right2" />
              </Link>
            </div>
            <div className="box-wallet style-1">
              <img src="assets/images/box-icon/wallet-02.png" alt="" />
              <div className="info">
                <h6>
                  <Link href="javascript:void(0)">Coibase Wallet</Link>
                </h6>
              </div>
              <Link href="javascript:void(0)" className="tf-button style-3">
                Connect <i className="icon-arrow-up-right2" />
              </Link>
            </div>
            <div className="box-wallet style-1">
              <img src="assets/images/box-icon/wallet-03.png" alt="" />
              <div className="info">
                <h6>
                  <Link href="javascript:void(0)">WalletConnect</Link>
                </h6>
              </div>
              <Link href="javascript:void(0)" className="tf-button style-3">
                Connect <i className="icon-arrow-up-right2" />
              </Link>
            </div>
            <div className="box-wallet style-1">
              <img src="assets/images/box-icon/wallet-04.png" alt="" />
              <div className="info">
                <h6>
                  <Link href="javascript:void(0)">Ledger</Link>
                </h6>
              </div>
              <Link href="javascript:void(0)" className="tf-button style-3">
                Connect <i className="icon-arrow-up-right2" />
              </Link>
            </div>
            <div className="box-wallet style-1">
              <img src="assets/images/box-icon/wallet-05.png" alt="" />
              <div className="info">
                <h6>
                  <Link href="javascript:void(0)">Phantom</Link>
                </h6>
                <p>Solana</p>
              </div>
              <Link href="javascript:void(0)" className="tf-button style-3">
                Connect <i className="icon-arrow-up-right2" />
              </Link>
            </div>
            <div className="box-wallet style-1">
              <img src="assets/images/box-icon/wallet-06.png" alt="" />
              <div className="info">
                <h6>
                  <Link href="javascript:void(0)">Bitkeep</Link>
                </h6>
                <p>BNB Chain</p>
              </div>
              <Link href="javascript:void(0)" className="tf-button style-3">
                Connect <i className="icon-arrow-up-right2" />
              </Link>
            </div>
            <div className="box-wallet style-1">
              <img src="assets/images/box-icon/wallet-07.png" alt="" />
              <div className="info">
                <h6>
                  <Link href="javascript:void(0)">Core</Link>
                </h6>
                <p>Avalanche</p>
              </div>
              <Link href="javascript:void(0)" className="tf-button style-3">
                Connect <i className="icon-arrow-up-right2" />
              </Link>
            </div>
            <div className="box-wallet style-1">
              <img src="assets/images/box-icon/wallet-08.png" alt="" />
              <div className="info">
                <h6>
                  <Link href="javascript:void(0)">Glow</Link>
                </h6>
                <p>Solana</p>
              </div>
              <Link href="javascript:void(0)" className="tf-button style-3">
                Connect <i className="icon-arrow-up-right2" />
              </Link>
            </div>
            <div className="box-wallet style-1">
              <img src="assets/images/box-icon/wallet-09.png" alt="" />
              <div className="info">
                <h6>
                  <Link href="javascript:void(0)">Fortmatic</Link>
                </h6>
              </div>
              <Link href="javascript:void(0)" className="tf-button style-3">
                Connect <i className="icon-arrow-up-right2" />
              </Link>
            </div>
            <div className="box-wallet style-1">
              <img src="assets/images/box-icon/wallet-10.png" alt="" />
              <div className="info">
                <h6>
                  <Link href="javascript:void(0)">Kaikas</Link>
                </h6>
                <p>Klaytn</p>
              </div>
              <Link href="javascript:void(0)" className="tf-button style-3">
                Connect <i className="icon-arrow-up-right2" />
              </Link>
            </div>
            <div className="box-wallet style-1">
              <img src="assets/images/box-icon/wallet-11.png" alt="" />
              <div className="info">
                <h6>
                  <Link href="javascript:void(0)">Bitski</Link>
                </h6>
              </div>
              <Link href="javascript:void(0)" className="tf-button style-3">
                Connect <i className="icon-arrow-up-right2" />
              </Link>
            </div>
            <div className="box-wallet style-1">
              <img src="assets/images/box-icon/wallet-12.png" alt="" />
              <div className="info">
                <h6>
                  <Link href="javascript:void(0)">Solflare</Link>
                </h6>
                <p>Solana</p>
              </div>
              <Link href="javascript:void(0)" className="tf-button style-3">
                Connect <i className="icon-arrow-up-right2" />
              </Link>
            </div>
            <div className="box-wallet style-1">
              <img src="assets/images/box-icon/wallet-13.png" alt="" />
              <div className="info">
                <h6>
                  <Link href="javascript:void(0)">OperaTouch</Link>
                </h6>
                <p>Mobile only</p>
              </div>
              <Link href="javascript:void(0)" className="tf-button style-3">
                Connect <i className="icon-arrow-up-right2" />
              </Link>
            </div>
            <div className="box-wallet style-1">
              <img src="assets/images/box-icon/wallet-14.png" alt="" />
              <div className="info">
                <h6>
                  <Link href="javascript:void(0)">OperaTouch</Link>
                </h6>
                <p>Mobile only</p>
              </div>
              <Link href="javascript:void(0)" className="tf-button style-3">
                Connect <i className="icon-arrow-up-right2" />
              </Link>
            </div>
          </div>
        </div>
        <div className="side-bar">
          <div className="widget widget-recently">
            <h5 className="title-widget">Recently added</h5>
            <div className="card-small-main">
              <img src="assets/images/blog/sidebar-05.jpg" alt="" />
              <div className="card-bottom">
                <h5>
                  <Link href="javascript:void(0)">Photography</Link>
                </h5>
                <span className="date">16hr ago</span>
              </div>
            </div>
            <div className="card-small">
              <div className="author">
                <img src="assets/images/blog/sidebar-06.jpg" alt="" />
                <div className="info">
                  <h6>
                    <Link href="javascript:void(0)">Propw</Link>
                  </h6>
                  <p>
                    <Link href="javascript:void(0)">@themes</Link>
                  </p>
                </div>
              </div>
              <span className="date">Mon, 08 May </span>
            </div>
            <div className="card-small">
              <div className="author">
                <img src="assets/images/blog/sidebar-07.jpg" alt="" />
                <div className="info">
                  <h6>
                    <Link href="javascript:void(0)">Propw</Link>
                  </h6>
                  <p>
                    <Link href="javascript:void(0)">@themes</Link>
                  </p>
                </div>
              </div>
              <span className="date">Mon, 08 May </span>
            </div>
            <div className="card-small">
              <div className="author">
                <img src="assets/images/blog/sidebar-08.jpg" alt="" />
                <div className="info">
                  <h6>
                    <Link href="javascript:void(0)">Propw</Link>
                  </h6>
                  <p>
                    <Link href="javascript:void(0)">@themes</Link>
                  </p>
                </div>
              </div>
              <span className="date">Mon, 08 May </span>
            </div>
          </div>
          <div className="widget widget-creators">
            <div className="flex items-center justify-between">
              <h5 className="title-widget">Top Creators</h5>
              <Link className="see-all" href="javascript:void(0)">
                See all
              </Link>
            </div>
            <div className="widget-creators-item flex items-center mb-20">
              <div className="order">1. </div>
              <div className="author flex items-center flex-grow">
                <img src="assets/images/avatar/avatar-small-01.png" alt="" />
                <div className="info">
                  <h6>
                    <Link href="javascript:void(0)">Brooklyn Simmons</Link>
                  </h6>
                  <span>
                    <Link href="javascript:void(0)">@themes</Link>
                  </span>
                </div>
              </div>
              <button className="follow">Follow</button>
            </div>
            <div className="widget-creators-item flex items-center mb-20">
              <div className="order">2. </div>
              <div className="author flex items-center flex-grow">
                <img src="assets/images/avatar/avatar-small-02.png" alt="" />
                <div className="info">
                  <h6>
                    <Link href="javascript:void(0)">Brooklyn Simmons</Link>
                  </h6>
                  <span>
                    <Link href="javascript:void(0)">@themes</Link>
                  </span>
                </div>
              </div>
              <button className="follow">Follow</button>
            </div>
            <div className="widget-creators-item flex items-center mb-20">
              <div className="order">3. </div>
              <div className="author flex items-center flex-grow">
                <img src="assets/images/avatar/avatar-small-03.png" alt="" />
                <div className="info">
                  <h6>
                    <Link href="javascript:void(0)">Brooklyn Simmons</Link>
                  </h6>
                  <span>
                    <Link href="javascript:void(0)">@themes</Link>
                  </span>
                </div>
              </div>
              <button className="follow">Follow</button>
            </div>
            <div className="widget-creators-item flex items-center mb-20">
              <div className="order">4. </div>
              <div className="author flex items-center flex-grow">
                <img src="assets/images/avatar/avatar-small-04.png" alt="" />
                <div className="info">
                  <h6>
                    <Link href="javascript:void(0)">Brooklyn Simmons</Link>
                  </h6>
                  <span>
                    <Link href="javascript:void(0)">@themes</Link>
                  </span>
                </div>
              </div>
              <button className="follow">Follow</button>
            </div>
            <div className="widget-creators-item flex items-center">
              <div className="order">5. </div>
              <div className="author flex items-center flex-grow">
                <img src="assets/images/avatar/avatar-small-01.png" alt="" />
                <div className="info">
                  <h6>
                    <Link href="javascript:void(0)">Brooklyn Simmons</Link>
                  </h6>
                  <span>
                    <Link href="javascript:void(0)">@themes</Link>
                  </span>
                </div>
              </div>
              <button className="follow">Follow</button>
            </div>
          </div>
          <div className="widget widget-coins">
            <h5 className="title-widget">Trending coins</h5>
            <div className="widget-coins-item flex items-center mb-20">
              <img src="assets/images/box-icon/coin-01.png" alt="" />
              <p>
                <Link href="javascript:void(0)">Bitcoin</Link>
              </p>
            </div>
            <div className="widget-coins-item flex items-center mb-20">
              <img src="assets/images/box-icon/coin-02.png" alt="" />
              <p>
                <Link href="javascript:void(0)">Ethereum</Link>
              </p>
            </div>
            <div className="widget-coins-item flex items-center mb-20">
              <img src="assets/images/box-icon/coin-03.png" alt="" />
              <p>
                <Link href="javascript:void(0)">Cardano</Link>
              </p>
            </div>
            <div className="widget-coins-item flex items-center mb-20">
              <img src="assets/images/box-icon/coin-04.png" alt="" />
              <p>
                <Link href="javascript:void(0)">Solana</Link>
              </p>
            </div>
            <div className="widget-coins-item flex items-center">
              <img src="assets/images/box-icon/coin-05.png" alt="" />
              <p>
                <Link href="javascript:void(0)">Litecoin</Link>
              </p>
            </div>
          </div>
          <div className="widget widget-history">
            <div className="flex items-center justify-between">
              <h5 className="title-widget">History</h5>
              <Link className="see-all" href="javascript:void(0)">
                See all
              </Link>
            </div>
            <div className="widget-creators-item flex items-center mb-20">
              <div className="author flex items-center flex-grow">
                <img src="assets/images/avatar/avatar-small-01.png" alt="" />
                <div className="info">
                  <h6>
                    <Link href="javascript:void(0)">Lorem NFT sold</Link>
                  </h6>
                  <span>
                    <Link href="javascript:void(0)">Sold at 1.32 ETH</Link>
                  </span>
                </div>
              </div>
              <span className="time">Just now</span>
            </div>
            <div className="widget-creators-item flex items-center mb-20">
              <div className="author flex items-center flex-grow">
                <img src="assets/images/avatar/avatar-small-02.png" alt="" />
                <div className="info">
                  <h6>
                    <Link href="javascript:void(0)">New NFT uploaded</Link>
                  </h6>
                  <span>
                    <Link href="javascript:void(0)">By Marisol Pena</Link>
                  </span>
                </div>
              </div>
              <span className="time">1hr ago</span>
            </div>
            <div className="widget-creators-item flex items-center mb-20">
              <div className="author flex items-center flex-grow">
                <img src="assets/images/avatar/avatar-small-03.png" alt="" />
                <div className="info">
                  <h6>
                    <Link href="javascript:void(0)">
                      You followed a creator
                    </Link>
                  </h6>
                  <span>
                    <Link href="javascript:void(0)">Jane Cooper</Link>
                  </span>
                </div>
              </div>
              <span className="time">2hr ago</span>
            </div>
            <div className="widget-creators-item flex items-center mb-20">
              <div className="author flex items-center flex-grow">
                <img src="assets/images/avatar/avatar-small-04.png" alt="" />
                <div className="info">
                  <h6>
                    <Link href="javascript:void(0)">You placed a bid</Link>
                  </h6>
                  <span>
                    <Link href="javascript:void(0)">Whirl wind NFT</Link>
                  </span>
                </div>
              </div>
              <span className="time">4hr ago</span>
            </div>
            <div className="widget-creators-item flex items-center">
              <div className="author flex items-center flex-grow">
                <img src="assets/images/avatar/avatar-small-01.png" alt="" />
                <div className="info">
                  <h6>
                    <Link href="javascript:void(0)">
                      You followed a creator
                    </Link>
                  </h6>
                  <span>
                    <Link href="javascript:void(0)">Courtney Henry</Link>
                  </span>
                </div>
              </div>
              <span className="time">16hr ago</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
