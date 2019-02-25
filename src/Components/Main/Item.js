import React from 'react'
import styles from './Item.module.scss'

const Item = props => (
  <div className={styles.Item} onClick={() => props.onClickHandler(props.id)}>
    {props.title}
  </div>
);

export default Item;