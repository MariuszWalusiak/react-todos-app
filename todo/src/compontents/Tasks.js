import React from "react";
import { useState } from "react";
import styles from "./styles/Tasks.module.css";


const TASK_LIST = ["read", "sleep", "eat", "drink alcohol", "dont take drugs"];

export const Task = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <li className={styles.li}>
      <div className={styles.container}>
        <input
          type="checkbox"
          checked={isChecked}
          id={props.id}
          onChange={() => setIsChecked((was) => !was)}
        ></input>
        <label
          className={isChecked ? styles.labelOn : styles.labelOff}
          htmlFor={props.id}
        ></label>
      </div>
      <span className={isChecked ? styles.contentOff : styles.contentOn}>
        {props.name}
      </span>
      <button className={styles.button}>+</button>
    </li>
  );
};



