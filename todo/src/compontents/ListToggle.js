
import styles from "./styles/ListToggle.module.css";


export const ListToggle = ({ allChecked, setAllChecked }) => {

  // const handleClick = () {
        
  // }  

  return (
    <div className={styles.container} style={{ zIndex: 1 }}>
      <input
        type="checkbox"
        id="all-checked"
        checked={allChecked}
        onChange={() => setAllChecked((was) => !was)}
      ></input>
      <label htmlFor="all-checked"></label>
    </div>
  );
};
