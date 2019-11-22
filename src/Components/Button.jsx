import React from 'react'
import styles from '../Styles/Button.module.css'

const Button = props => {
  return (
    <button type="submit" className={styles.button}>{props.text}</button>
  )
}
export default Button