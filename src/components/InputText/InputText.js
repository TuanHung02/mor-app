import ErrorMessage from "../ErrorMessage/ErrorMessage";
import styles from "./InputText.module.scss";
import clsx from "clsx";

function InputText({
  text,
  textarea,
  children,
  placeholder,
  value,
  onChange = () => {} ,
  error,
  name
}) {
  let Comp = "input";
  const props = {
    placeholder,
    value,
    onChange,
    name
  };

  if (text) {
    Comp = "input";
  } else if (textarea) {
    Comp = "textarea";
  }

  const classes = clsx(styles.wrapper, {
    [styles.text]: text,
    [styles.textarea]: textarea,
  });

  return (
    <div className={styles.container}>
      <label className={styles.title}>{children}</label>
      <Comp className={classes} {...props}></Comp>
      {value === "" && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
}

export default InputText;
