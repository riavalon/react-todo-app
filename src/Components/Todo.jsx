import React from 'react'
import styles from '../Styles/Todo.module.css'

const Todo = props => {
  return (
    <li 
      className={styles.listItem} 
      key={props.id} 
      onClick={() => props.onClick(props.id)}
    >
      {props.text}
    </li>
  )
}
export default Todo