import classNames from "classnames";

// components
import Layout from "@/components/layout/Layout";
import Settings from "@/components/sections/Setting";

// stores
import useAuthStore from "@/stores/authStore";

// styles
import styles from "./style.module.css";

export default function Home() {
  const { createOrUpdateProfile, updateInfo } = useAuthStore();

  return (
    <Layout headerStyle={3} footerStyle={1} pageCls="home-7 pt-0">
      <div
        className={classNames([
          "themesflat-container",
          styles["settings-container"],
        ])}
      >
        <Settings
          onSubmit={async (values) => {
            const formData = new FormData();
            for (const key in values) {
              formData.append(key, values[key]);
            }
            const { status, data, error } = await createOrUpdateProfile(
              formData
            );
            if (!status) {
              alert(error);
              return;
            }
            updateInfo(data);
          }}
        />
      </div>
    </Layout>
  );
}
