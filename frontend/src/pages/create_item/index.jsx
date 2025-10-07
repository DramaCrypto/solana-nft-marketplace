import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// components
import Layout from "@/components/layout/Layout";
import CreateItem from "@/components/sections/CreateItem";

// redux
import useAuthStore from "@/stores/authStore";
import useItemsStore from "@/stores/itemsStore";

// styles
import styles from "./style.module.css";

export default function () {
  const user = useAuthStore();
  const { createOrUpdateItem } = useItemsStore();
  const navigate = useNavigate();

  const sendTransaction = useCallback((values) => {
    return "GkpXEwtTuwgTdBWRDrwu2xNb3jbXWXhoMs5CQzKLrDZs-1"; // contract address
  }, []);

  return (
    <Layout headerStyle={3} footerStyle={1} pageCls="home-7 pt-0">
      <div className={styles["market-page"]}>
        <div id="create" className="tabcontent container pt-5">
          <CreateItem
            onSubmit={async (values) => {
              const contractAddress = sendTransaction(values);
              const formData = new FormData();
              for (const key in values) {
                formData.append(key, values[key]);
              }
              formData.append("wallet_address", user.wallet_address);
              formData.append("contract_address", contractAddress);
              const response = await createOrUpdateItem(formData);
              if (!response.status) {
                alert(response.error);
                return;
              }
              navigate("/item/" + response.data?.id);
            }}
          />
        </div>
      </div>
    </Layout>
  );
}
