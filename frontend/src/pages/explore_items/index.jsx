import { useEffect, useState, useRef, useCallback } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import classNames from "classnames";
import InfiniteScroll from "react-infinite-scroller";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

// components
import Layout from "@/components/layout/Layout";
import ItemCard2 from "@/components/sections/ItemCard2";
import SearchInput1 from "@/components/sections/SearchInput1";
import OfferModal from "@/components/elements/OfferModal";
import Square from "@/components/sections/Square";

// stores
import useItemsStore from "@/stores/itemsStore";
import useCollectionsStore from "@/stores/collectionsStore";
import useOffersStore from "@/stores/offersStore";
import useAuthStore from "@/stores/authStore";

// helpers
import useDevice from "@/hooks/useDevice";
import { delay } from "@/helpers/utils";
import { offerNFT, purchaseNFT } from "@/helpers/transactions";

// styles
import styles from "./style.module.css";

export default function () {
  const [isBidModal, setBidModal] = useState(false);
  const [collection, setCollection] = useState({});
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [statusList, setStatusList] = useState([]);
  const [priceList, setPriceList] = useState([]);
  const [sortKey, setSortKey] = useState(null);
  const [sortArrow, setSortArrow] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showOfferModal, setShowOfferModal] = useState(false);
  const [loadingCollections, setLoadingCollections] = useState([]);
  const [loadingTransaction, setLoadingTransaction] = useState(false);
  const pageIndex = useRef(0);
  const loading = useRef(false);

  const handleBidModal = () => setBidModal(!isBidModal);

  const { id: collectionId } = useParams();
  const navigate = useNavigate();
  const { publicKey } = useWallet();

  const { getItems, createOrUpdateItem } = useItemsStore();
  const { getCollection } = useCollectionsStore();
  const { createOffer } = useOffersStore();
  const user = useAuthStore();

  const device = useDevice();

  const getItemsData = useCallback(async () => {
    const pageSize = 5;
    setLoadingCollections(Array(20).fill(null));
    await delay(150);
    const response = await getItems({
      pageIndex: pageIndex.current,
      pageSize,
      name: searchValue,
      collection_id: collectionId,
      status: statusList.join(),
      sort_key: sortKey,
      sort_arrow: sortArrow,
      min_price: minPrice,
      max_price: maxPrice,
    });
    if (!response.status) {
      alert(response.error);
      return;
    }
    setLoadingCollections([]);
    setItems((items) => [...items, ...response.data]);
    if (response.data.length < pageSize) {
      setHasMore(false);
    }
    loading.current = false;
  }, [
    searchValue,
    collectionId,
    statusList,
    priceList,
    sortKey,
    sortArrow,
    minPrice,
    maxPrice,
  ]);

  const onLoadMore = useCallback(() => {
    if (loading.current) return;
    loading.current = true;
    pageIndex.current += 1;
    getItemsData();
  }, [getItemsData]);

  const onRefreshItems = useCallback(() => {
    pageIndex.current = 0;
    setItems([]);
    setHasMore(true);
  }, []);

  const onStatusCheckBoxChanged = useCallback(
    (e) => {
      if (e.target.checked) {
        if (e.target.value === "all") {
          setStatusList([]);
        } else {
          setStatusList([e.target.value]);
        }
        onRefreshItems();
      } else {
        // setStatusList((statusList) =>
        //   statusList.filter((status) => status != e.target.value)
        // );
      }
    },
    [onRefreshItems]
  );

  const onSortByItemClicked = useCallback(
    (sortKey, sortArrow) => {
      setSortKey(sortKey);
      setSortArrow(sortArrow);
      onRefreshItems();
    },
    [onRefreshItems]
  );

  const onMakeOfferButtonClicked = useCallback((item) => {
    setSelectedItem(item);
    setShowOfferModal(true);
  }, []);

  const onOfferModalSubmitted = useCallback(
    async (values) => {
      setShowOfferModal(false);
      if (loadingTransaction) return;
      setLoadingTransaction(true);
      const transactionResult = await offerNFT(
        selectedItem.contract_address,
        publicKey,
        values.price
      );
      if (transactionResult) {
        if (import.meta.env.MODE === "development") {
          const response = await createOrUpdateOffer({
            item_id: selectedItem.id,
            from_wallet_address: user.wallet_address,
            price: values.price,
          });
          if (!response.status) {
            errorAlert(response.error);
          }
        } else {
          await delay(10000);
        }
        successAlert(t("offered"));
      } else {
        errorAlert(t("errors.something_went_wrong"));
      }
      setLoadingTransaction(false);
      onRefreshItems();
    },
    [
      selectedItem,
      onRefreshItems,
      publicKey,
      loadingTransaction,
      createOrUpdateItem,
      user,
    ]
  );

  const onBuyNowButtonClicked = useCallback(
    async (item) => {
      if (loadingTransaction) return;
      setLoadingTransaction(true);
      const transactionResult = await await purchaseNFT(
        item.contract_address,
        publicKey,
        item.collector?.wallet_address,
        (item.offers || []).map((offer) => offer.user?.wallet_address)
      );
      if (transactionResult) {
        if (import.meta.env.MODE === "development") {
          const response = await createOrUpdateItem({
            id: item.id,
            buyer_public_key: user.wallet_address,
            status: "sale",
          });
          if (!response.status) {
            errorAlert(response.error);
          }
          successAlert(t("purchased"));
        } else {
          await delay(10000);
        }
      } else {
        errorAlert(t("errors.something_went_wrong"));
      }
      setLoadingTransaction(false);
      onRefreshItems();
    },
    [onRefreshItems, publicKey, loadingTransaction, createOrUpdateItem, user]
  );

  useEffect(() => {
    if (!collectionId) return;
    const getCollectionData = async () => {
      const { status, data, error } = await getCollection(collectionId);
      if (!status) {
        alert(error);
        return;
      }
      setCollection(data);
    };
    (async () => {
      await getCollectionData();
    })();
  }, [collectionId, getCollection]);

  return (
    <>
      <Layout headerStyle={3} footerStyle={1} pageCls="home-7 pt-0">
        <div className="tf-section-2 artwork loadmore-12-item-1 pr-3 pl-3 pr-lg-5 pl-lg-5 mt-5">
          <div className="row mb-5">
            <div className="col-12">
              <Square
                ratio={device.isBreakpoint("MD") ? 0.2 : 0.5}
                className={styles.collection}
              >
                <div className={classNames("widget-social", styles.links)}>
                  <ul className="flex">
                    <li>
                      <a href="javascript:void(0)" className="icon-twitter" />
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="icon-vt" />
                    </li>
                  </ul>
                </div>
                <img
                  src={collection?.image_background}
                  alt=""
                  className={classNames("w-100", "h-100", styles.background)}
                />
                <div
                  className={classNames(
                    "d-flex",
                    "align-items-center",
                    styles.info
                  )}
                >
                  <div className={styles["base-image-square"]}>
                    <img
                      src={collection?.image}
                      alt=""
                      className={classNames(
                        "w-100",
                        "h-100",
                        styles["base-image"]
                      )}
                    />
                  </div>
                  <div className="ml-3">
                    <h5 className="mb-2">{collection?.name}</h5>
                    <p
                      className={styles.description}
                      title={collection?.description}
                    >
                      {collection?.description}
                    </p>
                  </div>
                </div>
                <div className={styles.values}>
                  <span className="h3 font-weight-bold">
                    Total {collection?.items?.length} Items
                  </span>
                </div>
              </Square>
            </div>
          </div>
          <div className="row m-0">
            <div className="col-md-4 col-lg-3 col-xl-2 pl-md-0">
              <div className="widget-category-checkbox mb-30">
                <h5>Status</h5>
                <div className="content-wg-category-checkbox">
                  <form action="#">
                    <label>
                      Show All
                      <input
                        type="checkbox"
                        value="all"
                        checked={statusList.length === 0}
                        onChange={onStatusCheckBoxChanged}
                      />
                      <span className="btn-checkbox" />
                    </label>
                    <br />
                    <label>
                      For Sale
                      <input
                        type="checkbox"
                        value="list"
                        checked={statusList.indexOf("list") > -1}
                        onChange={onStatusCheckBoxChanged}
                      />
                      <span className="btn-checkbox" />
                    </label>
                    <br />
                  </form>
                </div>
              </div>
              <div className="widget-category-checkbox mb-30">
                <h5>Price (SOL)</h5>
                <div className="d-flex align-items-center mb-4">
                  <input
                    type="number"
                    placeholder="Min"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                  <span className="fs-15px ml-2 mr-2">to</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                </div>
                <a
                  href="javascript:void(0)"
                  className="tf-button style-1 w-100"
                  onClick={onRefreshItems}
                >
                  Apply
                </a>
              </div>
            </div>
            <div className="col-md-8 col-lg-9 col-xl-10 pl-md-0 pr-md-0">
              <div className="d-flex mb-4 pl-2 pr-2">
                <SearchInput1
                  placeholder="Search By Item Name"
                  className={styles["search-input"]}
                  value={searchValue}
                  onChange={(value) => setSearchValue(value)}
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
                        {sortKey === "price" && sortArrow === "desc" && (
                          <span>Highest Price</span>
                        )}
                        {(!sortKey || !sortArrow) && <span>Sort By</span>}
                        {sortKey === "price" && sortArrow === "asc" && (
                          <span>Lowest Price</span>
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
                          onClick={() => onSortByItemClicked("price", "desc")}
                        >
                          <div
                            className="sort-filter active"
                            href="javascript:void(0)"
                          >
                            <span>Highest Price</span>
                            {sortKey === "price" && sortArrow === "desc" && (
                              <span className="icon-tick">
                                <span className="path2" />
                              </span>
                            )}
                          </div>
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="dropdown-item"
                          onClick={() => onSortByItemClicked("price", "asc")}
                        >
                          <div
                            className="sort-filter active"
                            href="javascript:void(0)"
                          >
                            <span>Lowest Price</span>
                            {sortKey === "price" && sortArrow === "asc" && (
                              <span className="icon-tick">
                                <span className="path2" />
                              </span>
                            )}
                          </div>
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="dropdown-item"
                          onClick={() =>
                            onSortByItemClicked("featured", "desc")
                          }
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
              <InfiniteScroll loadMore={onLoadMore} hasMore={hasMore}>
                <div className="row m-0">
                  {items.map((item) => (
                    <div
                      key={"item_" + item.id}
                      data-wow-delay="0s"
                      className={classNames(
                        "wow",
                        "fadeInUp",
                        "fl-item-1",
                        "col-6",
                        "col-md-4",
                        "col-lg-3",
                        "col-xl-2",
                        "pl-2",
                        "pr-2",
                        styles["item-card"]
                      )}
                    >
                      <ItemCard2
                        item={item}
                        onImageClicked={() => {
                          navigate("/item/" + item.id);
                        }}
                        onMakeOfferButtonClicked={() =>
                          onMakeOfferButtonClicked(item)
                        }
                        onBuyNowButtonClicked={() => {
                          onBuyNowButtonClicked(item);
                        }}
                        loadingTransaction={loadingTransaction}
                      />
                    </div>
                  ))}
                  {loadingCollections.map((_, index) => (
                    <div
                      key={"loading_item_" + index}
                      data-wow-delay="0s"
                      className={classNames(
                        "wow",
                        "fadeInUp",
                        "fl-item-1",
                        "col-6",
                        "col-md-4",
                        "col-lg-3",
                        "col-xl-2",
                        "pl-2",
                        "pr-2",
                        styles["item-card"]
                      )}
                    >
                      <ItemCard2 loading={true} />
                    </div>
                  ))}
                  {items.length === 0 && loadingCollections.length === 0 && (
                    <div className="col-12">
                      <p className="text-center">No Items</p>
                    </div>
                  )}
                </div>
              </InfiniteScroll>
            </div>
          </div>
        </div>
      </Layout>
      <OfferModal
        item={selectedItem}
        onClose={() => setShowOfferModal(false)}
        open={showOfferModal}
        onSubmit={onOfferModalSubmitted}
      />
    </>
  );
}
