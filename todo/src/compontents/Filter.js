import React from "react"
import styles from './styles/Filter.module.css'



export const Filter = () => {
    return (
        <div className={styles.filter}>
            <span>0 items left</span>
            <div>
                <button >All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
            <button>Clear completed</button>
        </div>
    )
}