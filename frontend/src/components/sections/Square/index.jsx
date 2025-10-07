import React from "react";
import classNames from "classnames";

// styles
import styles from "./style.module.css";

export default function ({ ratio, children, style, className }) {
  return (
    <div
      className={classNames(styles.square, className)}
      style={{ paddingTop: 100 * ratio + "%", ...style }}
    >
      <div className={styles["container"]}>{children}</div>
    </div>
  );
}
