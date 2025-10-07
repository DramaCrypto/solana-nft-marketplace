import { useCallback } from "react";
import { Link } from "react-router-dom";

// stores
import useAuthStore from "@/stores/authStore";

// hooks
import useIsAuth from "@/hooks/useIsAuth";

export default function MobileMenu() {
  const isAuth = useIsAuth();

  const { signin, updateInfo } = useAuthStore();

  const connectWallect = useCallback(() => {
    return {
      wallet_name: "Phantom",
      wallet_address: "GkpXEwtTuwgTdBWRDrwu2xNb3jbXWXhoMs5CQzKLrDZs",
    };
  }, []);

  const onLogInItemClicked = useCallback(async () => {
    const { wallet_address: walletAddress } = connectWallect();
    const { status, data } = await signin(walletAddress);
    if (status) {
      updateInfo(data);
    }
  }, [signin, updateInfo]);

  return (
    <>
      <nav id="mobile-main-nav" className="mobile-main-nav">
        <ul id="menu-mobile-menu" className="menu">
          <li className="menu-item">
            <Link className="item-menu-mobile" to="/explore/collections">
              Collections
            </Link>
          </li>
          {!isAuth && (
            <>
              <li className="menu-item">
                <a
                  className="item-menu-mobile"
                  href="javascript:void(0)"
                  onClick={onLogInItemClicked}
                >
                  Log in
                </a>
              </li>
            </>
          )}
          {isAuth && (
            <>
              <li className="menu-item">
                <Link className="item-menu-mobile" to="/explore/collections">
                  My Profile
                </Link>
              </li>
              <li className="menu-item">
                <Link className="item-menu-mobile" to="/">
                  My Items
                </Link>
              </li>
              <li className="menu-item">
                <a className="item-menu-mobile" href="javascript:void(0)">
                  Log out
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}
