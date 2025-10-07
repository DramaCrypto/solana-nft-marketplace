import { RouterProvider } from "react-router-dom";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { ToastContainer } from "react-toastify";

// providers
import WalletContextProvider from "./providers/Providers";
import AuthProvider from "./providers/AuthProvider";

// router
import router from "./router";

// config
import "./config/i18n";

// styles
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <WalletContextProvider>
      <WalletModalProvider>
        <AuthProvider>
          <RouterProvider router={router} />
          <ToastContainer />
        </AuthProvider>
      </WalletModalProvider>
    </WalletContextProvider>
  );
}

export default App;
