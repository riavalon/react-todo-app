import React from 'react'
import styles from '../Styles/Input.module.css'

const Input = props => {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      className={styles.input}
    />
  )
}
export default Input