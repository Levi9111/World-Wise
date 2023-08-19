import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy;Copyright{new Date().getFullYear()} by Worldwise.inc
      </p>
    </footer>
  );
}

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      {/* <p>List of Cities</p> */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Sidebar;
