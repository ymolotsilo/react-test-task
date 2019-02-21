import React from 'react'
import styles from './Employee.module.scss'

const Employee = props => (
  <div className={styles.Employee}>
    {props.title}
  </div>
);

export default Employee