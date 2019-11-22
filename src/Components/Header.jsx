import React from 'react'
import styles from '../Styles/Header.module.css'

const Header = props => {
  return (
    <h2 className={styles.heading}>
      {props.name}'s Super Cool To Do List
    </h2>
  )
}
export default Header