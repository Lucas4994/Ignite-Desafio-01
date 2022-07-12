import styles from './EmptyTaskList.module.css'

import clipboard from '../assets/Clipboard.svg'

export function EmptyTaskList() {
    return (
        <div className={styles.emptyTaskList}>
            <img src={clipboard} alt="clipboard icon" />
            <span>
                <strong>Você ainda não tem tarefas cadastradas</strong>
            </span>
            <span>
                Crie tarefas e organize seus itens a fazer
            </span>
        </div>

    );
}