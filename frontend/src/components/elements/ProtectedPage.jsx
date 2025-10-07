import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// components
import Loader from "@/components/elements/Preloader";

// providers
import { useAuth } from "@/providers/AuthProvider";

export default function ({ children }) {
  const navigate = useNavigate();

  const { isAuth, loading } = useAuth();

  useEffect(() => {
    if (!loading && !isAuth) {
      navigate("/home");
    }
  }, [isAuth, loading]);

  if (loading) {
    return <Loader />;
  }

  return children;
}
