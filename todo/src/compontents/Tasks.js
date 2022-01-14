import React from "react";
import { useState } from "react";
import styles from "./styles/Tasks.module.css";

export const Tasks = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <li className={styles.li}>
      <div className={styles.container}>
        <input type="checkbox" defaultChecked={isChecked}></input>
        <label className={isChecked ? styles.labelOn : styles.labelOff}
          onClick={() => setIsChecked((was) => !was)}
          htmlFor="checkbox"
        ></label>
      </div>
      <span className={isChecked ? styles.contentOff : styles.contentOn}>
        Label
      </span>

      <button className={styles.button}>+</button>
    </li>
  );
};
