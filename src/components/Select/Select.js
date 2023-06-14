import styles from "./Select.module.scss";
import IconArrowSelect from "../Icons/IconArrowSelect";
import { useState } from "react";
import clsx from "clsx";

function Select({
  oval,
  square,
  smallSquare,
  selectValue,
  options,
  onChange,
  placeholder,  
}) {
  const [dropdown, setDropDown] = useState(false);

  const handleDropDown = () => {
    setDropDown(!dropdown);
  };

  const classes = clsx(styles.wrapper, {
    [styles.oval]: oval,
    [styles.square]: square,
    [styles.smallSquare]: smallSquare,
  });

  return (
    <div className={classes}>
      <div onClick={handleDropDown} className={styles["select-title"]}>
        <div className={styles["title-text"]}>
          {selectValue ? selectValue : placeholder}
        </div>
        <IconArrowSelect />
      </div>
      {dropdown && (
        <div className={styles["dropdown-select"]}>
          {options.map((option) => {
            return (
              <div
                key={option.id}
                onClick={onChange}
                className={styles.dropitem}
              >
                {option.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Select;
