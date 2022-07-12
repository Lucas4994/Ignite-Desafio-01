import { Trash } from "phosphor-react";

import styles from "./Task.module.css";

export function Task() {
    return (
        <div className={styles.task}>
            <div className={styles.taskStatus}>
                <input type="checkbox" id="taskCheckBox" />
                <label htmlFor="taskCheckBox" />
            </div>
            <p className={styles.taskDescription}>
                Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
            </p>
            <button className={styles.deleteButton}>
                <Trash size={16} />
            </button>
        </div>
    )
}