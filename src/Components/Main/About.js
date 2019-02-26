import React from 'react'
import styles from './About.module.scss'
import EditItem from './EditItem'
import Item from './Item'


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

  let employees = props.employees.filter(employee => employee.departmentId === props.primaryId).map(employee => (
    <Item title={employee.name}
          key={employee.id}
          id={employee.id}
          itemType={employee.itemType}
          onClickHandler={e => e.preventDefault}
    />
  ));

    return (
      <div>
        <div className={styles.About}>
          {itemHeader}
          <div className={styles.edit}
               onClick={!props.editEnabled ? props.editHandler : props.enableNewName}
               title="Изменить название отдела"
          >{!props.editEnabled ? '🖉' : '✔'}
          </div>
          <div className={styles.delete}
               onClick={props.deleteItem}
               title='Удалить отдел'
          >🞭
          </div>
        </div>

        {employees}
        <p className={styles.Quantity}>
          <strong>Всего сотрудников:</strong> {employees.length}
        </p>
      </div>
    )
  }

;

export default About