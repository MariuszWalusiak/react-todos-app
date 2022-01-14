import { useState } from "react";
import styles from "./styles/ListToggle.module.css";

export const ListToggle = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.container} style={{ zIndex: 1 }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => console.log("checked")}
      ></input>
      <label onClick={() => setChecked((was) => !was)}></label>
    </div>
  );
};
