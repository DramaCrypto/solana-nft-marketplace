import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// components
import Layout from "@/components/layout/Layout";
import FlatTitle1 from "@/components/sections/FlatTitle1";
import CreateSell1 from "@/components/sections/CreateSell1";
import Seller3 from "@/components/sections/Seller3";
import Action4 from "@/components/sections/Action4";

// stores
import useCollectionsStore from "@/stores/collectionsStore";
import useItemsStore from "@/stores/itemsStore";

// helpers
import { delay } from "@/helpers/utils";

export default function () {
  const [featuredCollections, setFeaturedCollections] = useState([]);
  const [featuredItems, setFeaturedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const { getCollections } = useCollectionsStore();
  const { getItems } = useItemsStore();

  useEffect(() => {
    const getCollectionsData = async () => {
      const { status, data, error } = await getCollections({
        featured: 1,
      });
      if (!status) {
        alert(error);
        return;
      }
      setFeaturedCollections(data);
    };
    const getItemsData = async () => {
      const { status, data, error } = await getItems({
        featured: 1,
      });
      if (!status) {
        alert(error);
        return;
      }
      setFeaturedItems(data);
    };
    (async () => {
      await delay(500);
      await getCollectionsData();
      await getItemsData();
      setLoading(false);
    })();
  }, [getCollections, getItems]);

  return (
    <>
      <Layout headerStyle={3} footerStyle={1} pageCls="home-7 pt-0">
        <FlatTitle1
          collections={featuredCollections}
          onAllCollectionsButtonClicked={() => {
            navigate("/explore/collections");
          }}
          loading={loading}
        />
        <CreateSell1 />
        <Seller3 items={featuredItems} loading={loading} />
        <Action4
          onExploreNowButtonClicked={() => {
            navigate("/explore/collections");
          }}
        />
      </Layout>
    </>
  );
}
