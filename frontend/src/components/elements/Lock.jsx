import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sha256 } from "crypto-hash";

export default function ({ children }) {
  const [locked, setLocked] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const code = prompt("Please enter code to unlock");
      const hash = await sha256(code);
      if (
        hash !==
        "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92"
      ) {
        navigate("/");
        return;
      }
      setLocked(false);
    })();
  }, []);

  return <>{!locked && children}</>;
}
