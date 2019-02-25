import React from 'react'
import styles from './AddNewItem.module.scss'

const AddNewItem = props => (
  <form className={styles.AddNewItem} onSubmit={props.addItem}>
    <input className={styles.Input}
           placeholder={props.placeholder}
           value={props.inputValue}
           onChange={props.onInputValueChanged}
    />
    <button className={styles.Button}
            onClick={props.addItem}
    >+
    </button>
  </form>
);

export default AddNewItem
