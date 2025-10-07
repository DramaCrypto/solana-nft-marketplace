import { createBrowserRouter, Outlet } from "react-router-dom";

// components
import AddClassBody from "./components/elements/AddClassBody";
import Lock from "./components/elements/Lock";

// pages
import ProtectedPage from "./components/elements/ProtectedPage";
import Login from "./pages/login";
import Home from "./pages/home";
import CreateItem from "./pages/create_item/index";
import CreateCollection from "./pages/create_collection/index";
import ExploreCollections from "./pages/explore_collections";
import ExploreItems from "./pages/explore_items";
import Item from "./pages/item";
import Setting from "./pages/setting";
import MyPage from "./pages/mypage";
import NotFound from "./pages/404";
import About from "./pages/about";
import Contact from "./pages/contact";
// import Privacy from "./pages/privacy";
// import Terms from "./pages/terms";
import Import from "./pages/import";

export default createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <AddClassBody />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/create/item",
        element: (
          <ProtectedPage>
            <CreateItem />
          </ProtectedPage>
        ),
      },
      {
        path: "/create/collection",
        element: (
          <ProtectedPage>
            <CreateCollection />
          </ProtectedPage>
        ),
      },
      {
        path: "/explore/collections",
        element: <ExploreCollections />,
      },
      {
        path: "/explore/collections/:id/items",
        element: <ExploreItems />,
      },
      {
        path: "/explore/items",
        element: <ExploreItems />,
      },
      {
        path: "/item/:id",
        element: <Item />,
      },
      {
        path: "/setting",
        element: (
          <ProtectedPage>
            <Setting />
          </ProtectedPage>
        ),
      },
      {
        path: "/me",
        element: (
          <ProtectedPage>
            <MyPage />
          </ProtectedPage>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/import",
        element: (
          <Lock>
            <Import />
          </Lock>
        ),
      },
      // {
      //   path: "/privacy",
      //   element: <Privacy />,
      // },
      // {
      //   path: "/terms",
      //   element: <Terms />,
      // },
    ],
    // errorElement: <NotFound />,
  },
]);
