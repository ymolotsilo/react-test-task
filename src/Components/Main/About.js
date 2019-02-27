import React from 'react'
import styles from './About.module.scss'
import EditItem from './EditItem'
import Item from './Item'


let itemHeader = null;

const About = props => {
  if (props.editEnabled === false) {
      itemHeader =
        <h2 className={styles.h2}>{props.title.toUpperCase()}</h2>
    } else {
      itemHeader = <EditItem title={props.title}
                             onItemNameChanged={props.changeItemNameHandler}
                             value={props.editEnabled}
                             enableName={props.enableNewName}
                             onBlur={props.onBlur}
      />;
    }

  let employees = props.employees.filter(employee => employee.departmentId === props.primaryId).map(employee => (
    <div className={styles.Items}
         key={employee.id}
    >
      <Item title={employee.name}
            id={employee.id}
            itemType={employee.itemType}
            onClickHandler={e => e.preventDefault}
            noHover={true}
      />

      <div className={styles.delete}
           onClick={() => props.deleteItem(employee.id)}
           title='Убрать сотрудника из отдела'>
        <i className="fas fa-trash-alt"></i>
      </div>
    </div>
  ));

  //Чтобы кнопка изменить название/применить новое не менялась, когда пользователь удалил все символы из названия
  if (props.editEnabled === false) {
  }

    return (
      <div>
        <div className={styles.About}>
          {itemHeader}
          <div className={styles.edit}
               onClick={!props.editEnabled ? props.editHandler : props.enableNewName}
               title="Изменить название отдела"
          >{props.editEnabled === false ? <i className="fas fa-pen"></i> : <i className="fas fa-check"></i>}
          </div>
          <div className={styles.add}
               title='Добавить работника в отдел'
          >
            <i className="fas fa-plus"></i>
          </div>
          <div className={styles.delete}
               onClick={() => props.deleteItem()}
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