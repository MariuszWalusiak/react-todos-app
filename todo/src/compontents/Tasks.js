import React from "react";
import { useState } from "react";
import styles from "./styles/Tasks.module.css";
import { nanoid } from "nanoid";

const TASK_LIST = ["read", "sleep", "eat", "drink alcohol", "dont take drugs"];

const Task = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <li className={styles.li} key={props.key}>
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

export const Tasks = () => {
  return TASK_LIST.map((task) => {
    return <Task key={nanoid()} id={nanoid()} name={task} />;
  });
};
