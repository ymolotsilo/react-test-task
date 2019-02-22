import React from 'react'
import styles from './AddNewItem.module.scss'

const AddNewItem = props => (
  <div className={styles.AddNewItem}>
    <input className={styles.Input}
           placeholder={props.placeholder}
           value={props.inputValue}
           onChange={props.onInputValueChanged}
    />
    <button className={styles.Button}
            onClick={props.addItem}
    >+
    </button>
  </div>
);

export default AddNewItem
