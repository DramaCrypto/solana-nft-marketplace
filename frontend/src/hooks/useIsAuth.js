import { useEffect, useState } from "react";

// stores
import useAuthStore from "@/stores/authStore";

export default function () {
  const [isAuth, setIsAuth] = useState(false);

  const user = useAuthStore();

  useEffect(() => {
    setIsAuth(!!user.wallet_address);
  }, [user]);

  return isAuth;
}
