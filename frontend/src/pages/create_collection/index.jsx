import { useNavigate } from "react-router-dom";

// components
import Layout from "@/components/layout/Layout";
import CreateCollection from "@/components/sections/CreateCollection";

// stores
import useAuthStore from "@/stores/authStore";
import useCollectionsStore from "@/stores/collectionsStore";

// styles
import styles from "./style.module.css";

export default function () {
  const user = useAuthStore();
  const { createCollection } = useCollectionsStore();

  return (
    <Layout headerStyle={3} footerStyle={1} pageCls="home-7 pt-0">
      <div className={styles["market-page"]}>
        <div id="create" className="tabcontent container pt-5">
          <CreateCollection
            onSubmit={async (values) => {
              const formData = new FormData();
              for (const key in values) {
                formData.append(key, values[key]);
              }
              formData.append("wallet_address", user.wallet_address);
              const response = await createCollection(formData);
              if (!response.status) {
                alert(response.error);
                return;
              }
            }}
          />
        </div>
      </div>
    </Layout>
  );
}
