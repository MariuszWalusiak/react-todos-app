import React from "react";
import styles from "./styles/Filter.module.css";
import { useEffect, useState } from "react";

export const Filter = ({ taskList, setTaskList, handleFilter, filter }) => {
  const [taskCompleted, setTaskCompleted] = useState(false);

  const remainingTasks = taskList.filter((task) => task.isDone === false);

  useEffect(() => {
    if (taskList.some((task) => task.isDone === true)) {
      setTaskCompleted(true);
    } else {
      setTaskCompleted(false);
    }
  }, [taskList]);

  const clearCompleted = () => {
    setTaskList(remainingTasks);
  };

  return (
    <div className={styles.filter}>
      <span>{remainingTasks.length} items left</span>
      <div>
        <button
          className={`${
            filter === "all" ? styles.filterActive : styles.filterButton
          }`}
          onClick={() => handleFilter("all")}
        >
          All
        </button>
        <button
          className={styles.filter}
          className={`${
            filter === "active" ? styles.filterActive : styles.filterButton
          }`}
          onClick={() => handleFilter("active")}
        >
          Active
        </button>

        <button
          className={`${
            filter === "completed" ? styles.filterActive : styles.filterButton
          }`}
          onClick={() => handleFilter("completed")}
        >
          Completed
        </button>
      </div>
      <button
        style={
          taskCompleted ? { visibility: "visible" } : { visibility: "hidden" }
        }
        className={styles.filterButton}
        onClick={clearCompleted}
      >
        Clear completed
      </button>
    </div>
  );
};
