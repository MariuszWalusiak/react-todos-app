import React from "react";
import styles from './styles/Form.module.css'



export const Form = () => {
    return ( 
        <>
            <form>
                <label htmlFor="add-task">
                    <h1 className={styles.header}>todos</h1>
                    <input className={styles.addTask} type="text" name="add-task" placeholder="What needs to be done?">
                    
                        
                    </input>
                </label>
            </form>
        </>
     );
}
 
