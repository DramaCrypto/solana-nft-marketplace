import { useEffect, useState } from "react";

export default function BackToTop() {
  const [hasScrolled, setHasScrolled] = useState("false");

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  const onScroll = () => {
    if (window.scrollY > 100 && !hasScrolled) {
      setHasScrolled(true);
    } else if (window.scrollY < 100 && hasScrolled) {
      setHasScrolled(false);
    }
  };

  return (
    <>
      {hasScrolled && (
        <a className="progress-wrap active-progress" href="#">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path
              d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
              style={{
                transition: "stroke-dashoffset 10ms linear 0s",
                strokeDasharray: "505.919, 505.919",
                strokeDashoffset: "200.879",
              }}
            />
          </svg>
        </a>
      )}
    </>
  );
}
