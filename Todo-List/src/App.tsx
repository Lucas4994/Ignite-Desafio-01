import React from 'react'
import { Header } from './components/Header'
import { TaskList } from './components/TaskList';

import styles from './App.module.css'

import './global.css';


export function App() {

  return (
    <div>
      <div>
        <Header />
      </div>
      <main>
        <TaskList />
      </main>
    </div>
  )
}
