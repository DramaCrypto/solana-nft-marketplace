import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

// stores
import useAuthStore from "@/stores/authStore";

// helpers
import { delay, LAMPORTS_PER_SOL } from "@/helpers/utils";

const AuthContext = createContext();

export default function ({ children }) {
  const [loading, setLoading] = useState(true);

  const { connection } = useConnection();
  const { wallets, publicKey, disconnect, connecting } = useWallet();

  const {
    user,
    signin: signinUser,
    signout: signoutUser,
    updateInfo: updateUserInfo,
  } = useAuthStore((state) => ({
    user: {
      wallet_address: state.wallet_address,
    },
    signin: state.signin,
    signout: state.signout,
    updateInfo: state.updateInfo,
  }));

  const walletAddress = useMemo(() => {
    return publicKey ? publicKey.toBase58() : "";
  }, [publicKey]);

  useEffect(() => {
    (async () => {
      await delay(1000);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (walletAddress) {
        const { status, data } = await signinUser(walletAddress);
        if (status) {
          updateUserInfo(data);
        }
      } else {
        signoutUser();
      }
    })();
  }, [signinUser, signoutUser, updateUserInfo, walletAddress, connecting]);

  useEffect(() => {
    if (!connection || !publicKey) {
      return;
    }
    connection.onAccountChange(
      publicKey,
      (updatedAccountInfo) => {
        updateUserInfo({
          balance: updatedAccountInfo.lamports / LAMPORTS_PER_SOL,
        });
      },
      "confirmed"
    );
    connection.getAccountInfo(publicKey).then((info) => {
      if (info) {
        updateUserInfo({ balance: info?.lamports / LAMPORTS_PER_SOL });
      }
    });
  }, [publicKey, connection]);

  return (
    <AuthContext.Provider value={{ isAuth: user.wallet_address, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
