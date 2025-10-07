import { Link } from "react-router-dom";
import classNames from "classnames";

// components
import Square from "@/components/sections/Square";
import RectLoader from "@/components/elements/RectLoader";

// styles
import styles from "./style.module.css";

export default function CollectionItem1({
  collection,
  selected,
  className,
  onImageClicked,
  loading,
}) {
  return (
    <div
      className={classNames([
        "tf-card-collection",
        { selected },
        className,
        styles["collection-card"],
      ])}
    >
      <div className={styles["images"]} onClick={onImageClicked}>
        <Square ratio={0.5}>
          {!loading && (
            <img
              src={collection?.image_background}
              alt=""
              className={styles.background}
            />
          )}
          {loading && <RectLoader width="100%" height="100%" />}
        </Square>
        <Square className={styles["base-image-square"]}>
          {!loading && (
            <img
              src={collection?.image}
              alt=""
              className={styles["base-image"]}
            />
          )}
          {loading && (
            <RectLoader
              width="100%"
              height="100%"
              backgroundColor="#212121"
              foregroundColor="#0b0b0b"
            />
          )}
        </Square>
      </div>
      {!loading && (
        <h6 className="text-right mb-3">
          Total {collection?.items?.length} Items
        </h6>
      )}
      {loading && (
        <div className="d-flex justify-end mb-3">
          <RectLoader width="100px" height="17px" />
        </div>
      )}
      <div className={classNames(["card-bottom", styles.bottom])}>
        <div className="author">
          {!loading && (
            <>
              <h6 className="mb-3">
                <a href="javascript:void(0)">{collection?.name}</a>
              </h6>
              <p className={classNames("h5", styles.description)}>
                {collection?.description}
              </p>
            </>
          )}
          {loading && (
            <>
              <RectLoader width="150px" height="17px" className="mb-3" />
              <RectLoader width="200px" height="15px" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
