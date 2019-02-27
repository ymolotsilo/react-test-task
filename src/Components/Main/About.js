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
    <div className={styles.Item}>
      <Item title={employee.name}
            key={employee.id}
            id={employee.id}
            itemType={employee.itemType}
            onClickHandler={e => e.preventDefault}
      />

      <div className={styles.delete}
           onClick={props.deleteItem}
           title='Убрать сотрудника из отдела'
      ><i className="fas fa-trash-alt"></i>
      </div>
    </div>
  ));

    return (
      <div>
        <div className={styles.About}>
          {itemHeader}
          <div className={styles.edit}
               onClick={!props.editEnabled ? props.editHandler : props.enableNewName}
               title="Изменить название отдела"
          >{!props.editEnabled ? <i className="fas fa-pen"></i> : <i class="fas fa-check"></i>}
          </div>
          <div className={styles.add}
               title='Добавить работника в отдел'
          >
            <i className="fas fa-plus"></i>
          </div>
          <div className={styles.delete}
               onClick={props.deleteItem}
               title='Удалить отдел'
          ><i className="fas fa-trash-alt"></i>
          </div>
        </div>

        {employees}
        <div className={styles.Quantity}>
          <strong>Всего сотрудников:</strong> {employees.length}
        </div>
      </div>
    )
  }

;

export default About