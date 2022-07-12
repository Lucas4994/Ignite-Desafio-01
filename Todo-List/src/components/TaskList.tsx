import { PlusCircle } from "phosphor-react";
import { Task } from "./Task";

import styles from "./TaskList.module.css";


export function TaskList() {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <form className={styles.newTaskForm}>
                    <input type='text' placeholder="Adicione uma nova tarefa" />
                    <button type="submit">
                        Criar
                        <PlusCircle size={16} />
                    </button>
                </form>
            </header>
            <article className={styles.taskList}>
                <div className={styles.taskListHeader}>
                    <p>Tarefas criadas <span>5</span></p>
                    <p>Tarefas concluidas <span>2 de 5</span></p>
                </div>
                <div className={styles.taskListContent}>
                    <Task />
                    <Task />
                    <Task />
                </div>

            </article>
        </div>
    )
}