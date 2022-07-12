import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, ReactNode, useEffect, useState } from "react";
import { EmptyTaskList } from "./EmptyTaskList";
import { Task } from "./Task";

import styles from "./TaskList.module.css";


export function TaskList() {

    const [newTaskDescription, setNewTaskDescription] = useState('')
    const [tasks, setTasks] = useState([{
        id: "Task1",
        description: "Atualizar servidor",
        isCompleted: true
    },
    {
        id: "Task2",
        description: "Alinhar prioridades com fulana",
        isCompleted: false
    }])
    const [completedTaskCount, setCompletedTaskCount] = useState(tasks.filter(task => task.isCompleted).length)

    const isNewTaskDescriptionEmpty = newTaskDescription.length === 0

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()
        setTasks(state => [...state, {
            id: "Task" + state.length + 1,
            description: newTaskDescription,
            isCompleted: false
        }])
        setNewTaskDescription('')

    }

    function handleNewTaskDescriptionInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Este campo é obrigatório!')
    }

    function handleNewTaskDescriptionChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('')
        setNewTaskDescription(event.target.value);
    }

    function deleteTask(id: string) {
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task.id !== id
        })

        setTasks(tasksWithoutDeletedOne)

    }

    function toggleCompleteTask(id: string) {
        tasks.map(task => {
            if (task.id === id) {
                task.isCompleted = !task.isCompleted

                return task
            }
        })

        setTasks(tasks)
        setCompletedTaskCount(tasks.filter(task => task.isCompleted).length)
    }

    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <form className={styles.newTaskForm} onSubmit={handleCreateNewTask}>
                    <input
                        type='text'
                        placeholder="Adicione uma nova tarefa"
                        value={newTaskDescription}
                        onChange={handleNewTaskDescriptionChange}
                        onInvalid={handleNewTaskDescriptionInvalid}
                        required
                        />
                    <button type="submit" disabled={isNewTaskDescriptionEmpty} >
                        Criar
                        <PlusCircle size={16} />
                    </button>
                </form>
            </header>
            <article className={styles.taskList}>
                <div className={styles.taskListHeader}>
                    <div className={styles.createdTasksInfo}>
                        <p>Tarefas criadas</p>
                        <div>
                            <span>{tasks.length}</span>
                        </div>
                    </div>
                    <div className={styles.completedTasksInfo}>
                        <p>Tarefas concluidas</p>
                        <div>
                            <span>{completedTaskCount} de {tasks.length}</span>
                        </div>
                    </div>
                </div>
                <div className={tasks.length === 0 ? styles.taskListEmptyContent : styles.taskListContent}>
                    {
                        tasks.length === 0
                            ? <EmptyTaskList />
                            : tasks.map(task => {

                                return <Task
                                    key={task.id}
                                    id={task.id}
                                    description={task.description}
                                    isCompleted={task.isCompleted}
                                    onDeleteTask={deleteTask}
                                    onCompleteTask={toggleCompleteTask}
                                />
                            })
                    }
                </div>

            </article>
        </div>
    )
}