import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";

function Button({
  to,
  href,
  onClick,
  blue,
  lightblue,
  white,
  children,
  large = false,
  medium = false,
  textButton,
  lightgreen,
  submit,
}) {
  let Comp = "button";
  const props = {
    onClick,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  } else if (submit) {
    props.type = "submit";
  } else if (!submit) {
    props.type = "button";
  }

  // console.log(styles);
  const classes = clsx(styles.wrapper, {
    [styles.blue]: blue,
    [styles.lightblue]: lightblue,
    [styles.lightgreen]: lightgreen,
    [styles.white]: white,
    [styles.large]: large,
    [styles.medium]: medium,
    [styles.to]: to,
    [styles.textButton]: textButton,
  });
  return (
    <Comp className={classes} {...props}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
