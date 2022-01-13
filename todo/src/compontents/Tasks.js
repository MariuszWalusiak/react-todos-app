import React from 'react';
import styles from "./styles/Tasks.module.css"


export const Tasks = () => {
    return (
        <li className={styles.li}>
                <input type="checkbox" name="task"></input>
                <label htmlFor='task' className={styles.label}>Label...</label>
                <button className={styles.button}>x</button>
        </li>
    )
}