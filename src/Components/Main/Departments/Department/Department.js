import React from 'react'
import styles from './Department.module.scss'

const Department = props => (
  <div className={styles.Department}>
    {props.title}
  </div>
);

export default Department
