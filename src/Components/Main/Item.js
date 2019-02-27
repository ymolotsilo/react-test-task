import React from 'react'
import styles from './Item.module.scss'


const Item = props => {
  let classes = props.isActive ? styles['Item--active'] : styles.Item;
  if (props.noHover) {
    classes = styles['Item--nohover']
  }

  return (
    <div className={classes}
       onClick={() => props.onClickHandler(props.id)}>
    {props.title}
  </div>
  )
};

export default Item;