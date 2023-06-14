import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./Layout.module.scss"

function DefaultLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.rightside}>
        <Header />
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;
