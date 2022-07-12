import { Trash } from "phosphor-react";
import { ChangeEvent } from "react";

import styles from "./Task.module.css";

interface TaskProps{
    id?: string,
    description?: string,
    isCompleted?: boolean,
    onDeleteTask: (id: string) => void,
    onCompleteTask: (id: string) => void


}

export function Task({id, description, isCompleted, onDeleteTask, onCompleteTask} : TaskProps ) {

    function hadleDeleteTask(){
        onDeleteTask(id!)
    }

    function handleToggleCompleteTask(){
        onCompleteTask(id!)
    }

    return (
        <div className={isCompleted ? styles.taskCompleted : styles.task}>
            <div className={styles.taskStatus}>
                <input type="checkbox" id={id} defaultChecked={isCompleted} onChange={handleToggleCompleteTask}/>
                <label htmlFor={id?.toString()} />
            </div>
            <p className={styles.taskDescription}>
                {description}
            </p>
            <button className={styles.deleteButton}>
                <Trash size={16}  onClick={hadleDeleteTask}/>
            </button>
        </div>
    )
}