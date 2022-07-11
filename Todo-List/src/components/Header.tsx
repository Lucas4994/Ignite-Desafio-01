import styles from './Header.module.css'

import logo from '../assets/todo-logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
           <div>
            <img src={logo} alt="Logotipo to.do" />
           </div>
        </header>
      
    );
}