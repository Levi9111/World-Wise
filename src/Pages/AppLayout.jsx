import Map from "../Components/Map";
import Sidebar from "../Components/Sidebar";
import styles from "./AppLayout.module.css";

export const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
};
