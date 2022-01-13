import React from "react";
import { useState } from "react";
import styles from "./styles/Tasks.module.css";

export const Tasks = () => {
  const [checked, setChecked] = useState(false);

  return (
    <li className={styles.li}>
      <div className={styles.container}>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => console.log("this is change!")}
        ></input>
        <label
          onClick={() => setChecked((was) => !was)}
          htmlFor="checkbox"
        ></label>
      </div>
      <span className={styles.label}>Label</span>

      <button className={styles.button}>x</button>
    </li>
  );
};
