import React from "react";
import classNames from "classnames";

// styles
import styles from "./style.module.css";

export default function ({
  className,
  placeholder,
  value,
  onChange,
  onSearch,
}) {
  return (
    <div className={classNames(["widget-search", className])}>
      <form
        action="#"
        method="get"
        role="search"
        className="search-form relative"
        onSubmit={(e) => {
          e.preventDefault();
          onSearch();
        }}
      >
        <input
          type="search"
          id="search"
          className="search-field"
          placeholder={placeholder}
          name="s"
          title="Search for"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <button
          className={classNames(
            "search",
            "search-submit",
            styles["btn-search"]
          )}
          type="button"
          title="Search"
          onClick={onSearch}
        >
          <i className="icon-search" />
        </button>
      </form>
    </div>
  );
}
