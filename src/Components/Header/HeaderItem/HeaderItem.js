import React from 'react'
import styles from './HeaderItem.module.scss'

const HeaderItem = props => (
  <div className={styles.HeaderItem}>
    {props.title}
  </div>
);

export default HeaderItem