import { useCallback, useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import InfiniteScroll from "react-infinite-scroller";
import classNames from "classnames";

// components
import BidModal from "@/components/elements/BidModal";
import Layout from "@/components/layout/Layout";
import CollectionCard2 from "@/components/sections/CollectionCard2";
import SearchInput1 from "@/components/sections/SearchInput1/index";

// stores
import useCollectionsStore from "@/stores/collectionsStore";

// helpers
import { delay } from "@/helpers/utils";

// styles
import styles from "./style.module.css";

export default function () {
  const [isBidModal, setBidModal] = useState(false);
  const [collections, setCollections] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [loadingCollections, setLoadingCollections] = useState([]);
  const [sortKey, setSortKey] = useState(null);
  const [sortArrow, setSortArrow] = useState(null);
  const pageIndex = useRef(0);
  const loading = useRef(false);

  const navigate = useNavigate();

  const { getCollections } = useCollectionsStore();

  const handleBidModal = () => setBidModal(!isBidModal);

  const getCollectionsData = useCallback(async () => {
    const pageSize = 5;
    setLoadingCollections(Array(20).fill(null));
    await delay(150);
    const { status, data, error } = await getCollections({
      pageIndex: pageIndex.current,
      pageSize,
      name: searchValue,
      sort_key: sortKey,
      sort_arrow: sortArrow,
    });
    if (!status) {
      alert(error);
      return;
    }
    setLoadingCollections([]);
    setCollections((collections) => [...collections, ...data]);
    if (data.length < pageSize) {
      setHasMore(false);
    }
    loading.current = false;
  }, [searchValue, sortKey, sortArrow]);

  const onLoadMore = useCallback(() => {
    if (loading.current) return;
    loading.current = true;
    pageIndex.current += 1;
    getCollectionsData();
  }, [getCollectionsData]);

  const onRefreshItems = useCallback(() => {
    pageIndex.current = 0;
    setCollections([]);
    setHasMore(true);
  }, []);

  const onSortByItemClicked = useCallback(
    (sortKey, sortArrow) => {
      setSortKey(sortKey);
      setSortArrow(sortArrow);
      onRefreshItems();
    },
    [onRefreshItems]
  );

  return (
    <Layout headerStyle={3} footerStyle={1} pageCls="home-7 pt-0">
      <InfiniteScroll loadMore={onLoadMore} hasMore={hasMore}>
        <div className="tf-section-2 discover-item loadmore-12-item p-2 p-md-5">
          <div className="d-flex mb-4 pl-1 pr-1">
            <SearchInput1
              value={searchValue}
              onChange={setSearchValue}
              className={styles["search-input"]}
              placeholder={"Search By Collection Name"}
              onSearch={onRefreshItems}
            />
            <div className="tf-soft">
              <div className="soft-right h-100">
                <Menu as="div" className="dropdown ml-2 h-100">
                  <MenuButton
                    className="btn btn-secondary dropdown-toggle h-100"
                    type="button"
                    id="dropdownMenuButton4"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.125 5.625H16.875M3.125 10H16.875M3.125 14.375H10"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {(!sortKey || !sortArrow) && <span>Sort By</span>}
                    {sortKey === "items" && sortArrow === "desc" && (
                      <span>Highest Total Items</span>
                    )}
                    {sortKey === "items" && sortArrow === "asc" && (
                      <span>Lowest Total Items</span>
                    )}
                    {sortKey === "featured" && sortArrow === "desc" && (
                      <span>Featured</span>
                    )}
                  </MenuButton>
                  <MenuItems
                    className="dropdown-menu d-block show"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <h6>Sort by</h6>
                    <a
                      href="javascript:void(0)"
                      className="dropdown-item"
                      onClick={() => onSortByItemClicked("items", "desc")}
                    >
                      <div
                        className="sort-filter active"
                        href="javascript:void(0)"
                      >
                        <span>Highest Total Items</span>
                        {sortKey === "items" && sortArrow === "desc" && (
                          <span className="icon-tick">
                            <span className="path2" />
                          </span>
                        )}
                      </div>
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="dropdown-item"
                      onClick={() => onSortByItemClicked("items", "asc")}
                    >
                      <div
                        className="sort-filter active"
                        href="javascript:void(0)"
                      >
                        <span>Lowest Total Items</span>
                        {sortKey === "items" && sortArrow === "asc" && (
                          <span className="icon-tick">
                            <span className="path2" />
                          </span>
                        )}
                      </div>
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="dropdown-item"
                      onClick={() => onSortByItemClicked("featured", "desc")}
                    >
                      <div
                        className="sort-filter active"
                        href="javascript:void(0)"
                      >
                        <span>Featured</span>
                        {sortKey === "featured" && sortArrow === "desc" && (
                          <span className="icon-tick">
                            <span className="path2" />
                          </span>
                        )}
                      </div>
                    </a>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>
          <div className="row m-0">
            {collections.map((collection) => (
              <div
                key={"collection_" + collection.id}
                data-wow-delay="0s"
                className="wow fadeInUp fl-item col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6 pl-1 pr-1"
              >
                <CollectionCard2
                  className={styles["collection-card"]}
                  collection={collection}
                  onImageClicked={() => {
                    navigate(
                      "/explore/collections/" + collection.id + "/items"
                    );
                  }}
                />
              </div>
            ))}
            {loadingCollections.map((_, index) => (
              <div
                key={"loading_collection_" + index}
                data-wow-delay="0s"
                className="wow fadeInUp fl-item col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6 pl-1 pr-2"
              >
                <CollectionCard2
                  className={styles["collection-card"]}
                  loading={true}
                />
              </div>
            ))}
            {collections.length === 0 && loadingCollections.length === 0 && (
              <div className="col-12">
                <p className="text-center">No collections</p>
              </div>
            )}
          </div>
        </div>
        <BidModal handleBidModal={handleBidModal} isBidModal={isBidModal} />
      </InfiniteScroll>
    </Layout>
  );
}
