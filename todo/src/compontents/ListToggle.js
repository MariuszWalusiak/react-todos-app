import styles from "./styles/ListToggle.module.css";
import { Task } from "./Task";
import { TaskList } from "./TaskList";
export const ListToggle = ({ allChecked, setAllChecked }) => {
  const handleClick = () => {
    setAllChecked((was) => !was);
    console.log(allChecked);
  };

  return (
    <div className={styles.container} style={{ zIndex: 1 }}>
      <input
        type="checkbox"
        id="all-checked"
        checked={allChecked}
        onChange={handleClick}
      ></input>
      <label htmlFor="all-checked"></label>
    </div>
  );
};
