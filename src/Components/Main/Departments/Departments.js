import React from 'react'
import styles from './Departments.module.scss'

const Departments = props => (
  <div className={styles.Departments}>
    {props.children}
  </div>
);

export default Departments