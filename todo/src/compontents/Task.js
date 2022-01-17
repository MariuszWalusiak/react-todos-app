import React from "react";
import { useState, useEffect } from "react";
import styles from "./styles/Tasks.module.css";

const TASK_LIST = ["read", "sleep", "eat", "drink alcohol", "dont take drugs"];

export const Task = ({ setChecked, checked, ...props }) => {
  const [isChecked, setIsChecked] = useState(false);
   
  // props.checked

  // useEffect(() => {
  //   props.setChecked(true);
  // }, [props.allChecked]);

  // if ()

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
