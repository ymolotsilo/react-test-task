import React from 'react'
import styles from './EditItem.module.scss'

const EditItem = props => (
  <form onSubmit={props.enableName}
        className={styles.EditItem}
  >
    <input type="text"
           className={styles.Input}
           value={props.value}
           onChange={props.onItemNameChanged}
    />
  </form>
);

export default EditItem