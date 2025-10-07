import { useState } from "react";
export default function HoverDropdown() {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleMouseOut = () => {
    setIsMouseOver(false);
  };
  return (
    <>
      <span
        className="dropdown"
        id="select-day"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <span className="btn-selector tf-color">
          <span>1 day</span>
        </span>
        <ul className={isMouseOver ? "show" : ""}>
          <li>
            <span>1 day</span>
          </li>
          <li>
            <span>3 day</span>
          </li>
          <li>
            <span>7 day</span>
          </li>
        </ul>
      </span>
    </>
  );
}
