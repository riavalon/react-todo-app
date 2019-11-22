import React from 'react'
import Todo from './Todo'
import styles from '../Styles/TodoContainer.module.css'

const TodoContainer = props => {
  return (
    <ul className={styles.list}>
      {props.todos.map(item => {
        return (
          <Todo 
            key={item.key}
            id={item.key}
            text={item.text}
            onClick={() => props.onClick(item.key)}
          />
        )
      })}
      {
        props.todos.length === 0 && (
          <li className={styles.emptyList}>
            <p>No outstanding tasks! <span role="img" className={styles.emojis} aria-label="emojis">🎉🎉</span></p>
          </li>
        )
      }
    </ul>
  )
}
export default TodoContainer