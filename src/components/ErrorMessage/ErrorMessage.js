import styles from "./ErrorMessage.module.scss";

function ErrorMessage({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default ErrorMessage;
