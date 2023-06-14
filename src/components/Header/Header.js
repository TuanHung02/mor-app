import styles from "./Header.module.scss";
import { userAvatar } from "../../assets/imgs";
function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Criteria List</div>
      <div className={styles.profile}>
        <img className={styles.avatar} height={40} width={40} src={userAvatar} alt="" />
        <div className={styles.name}>
          Vũ Văn Tú
           <div className={styles.position}>CEO</div>
        </div>
      </div>
    </div>
  );
}
export default Header;
