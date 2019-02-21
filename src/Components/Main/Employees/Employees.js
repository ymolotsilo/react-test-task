import React from 'react'
import styles from './Employees.module.scss'

const Employees = props => (
  <div className={styles.Employees}>
    {props.children}
  </div>
);

export default Employees