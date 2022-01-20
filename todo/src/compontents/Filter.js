import React from "react";
import styles from "./styles/Filter.module.css";

export const Filter = ({ handleFilter }) => {
  return (
    <div className={styles.filter}>
      <span>0 items left</span>
      <div>
        <button onClick={() => handleFilter("all")}>All</button>
        <button onClick={() => handleFilter("active")}>Active</button>
        <button onClick={() => handleFilter("completed")}>Completed</button>
      </div>
      <button>Clear completed</button>
    </div>
  );
};
