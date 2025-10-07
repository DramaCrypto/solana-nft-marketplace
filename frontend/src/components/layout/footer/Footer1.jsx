import { Link } from "react-router-dom";

export default function Footer1() {
  return (
    <>
      <footer id="footer">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-12">
              <div className="footer-content flex flex-grow">
                <div className="widget-logo flex-grow">
                  <div className="logo-footer" id="logo-footer">
                    <Link to="/">
                      <img
                        id="logo_footer"
                        src="/assets/images/logo/logo.png"
                        data-retina="assets/images/logo/logo@2x.png"
                      />
                    </Link>
                  </div>
                </div>
                <div className="widget widget-menu style-1">
                  <h5 className="title-widget">Marketplace</h5>
                  <ul>
                    <li>
                      <Link to="/explore/collections">Explore</Link>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-menu style-3">
                  <h5 className="title-widget">Company</h5>
                  <ul>
                    <li>
                      <Link to="/about">About us</Link>
                    </li>
                    <li>
                      <Link to="/about#faq">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="widget-last">
                  <div className="widget-menu style-4">
                    <h5 className="title-widget">Account</h5>
                    <ul>
                      <li>
                        <Link to="/setting">My Profile</Link>
                      </li>
                      <li>
                        <Link to="/me#items">My Items</Link>
                      </li>
                      <li>
                        <Link to="/me#collections">My Collections</Link>
                      </li>
                    </ul>
                  </div>
                  <h5 className="title-widget mt-30">Join the community</h5>
                  <div className="widget-social">
                    <ul className="flex">
                      <li>
                        <Link
                          href="javascript:void(0)"
                          className="icon-facebook"
                        />
                      </li>
                      <li>
                        <Link
                          href="javascript:void(0)"
                          className="icon-twitter"
                        />
                      </li>
                      <li>
                        <Link href="javascript:void(0)" className="icon-vt" />
                      </li>
                      <li>
                        <Link
                          href="javascript:void(0)"
                          className="icon-tiktok"
                        />
                      </li>
                      <li>
                        <Link
                          href="javascript:void(0)"
                          className="icon-youtube"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} NFT Marketplace Combined with Blink
            </p>
            <ul className="flex">
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
