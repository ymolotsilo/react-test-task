import React from 'react'
import styles from './About.module.scss'
import EditItem from './EditItem'


let itemHeader = null;

const About = props => {
    if (!props.editEnabled) {
      itemHeader =
        <h2 className={styles.h2}>{props.title.toUpperCase()}</h2>
    } else {
      itemHeader = <EditItem title={props.title}
                             onItemNameChanged={props.changeItemNameHandler}
                             value={props.editEnabled}
                             enableName={props.enableNewName}
      />;
    }
    return (
      <div className={styles.About}>
        {itemHeader}
        <div className={styles.edit}
             onClick={!props.editEnabled ? () => props.editHandler(props.id)
               : props.enableNewName}
        >{!props.editEnabled ? '🖉' : '✔'}
        </div>
        <div className={styles.delete}>🞭</div>
      </div>
    )
  }

;

export default About