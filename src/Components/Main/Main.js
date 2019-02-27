import React from 'react'
import Item from './Item'
import AddNewItem from './AddNewItem'
import About from './About'
import styles from './Main.module.scss'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: null,
      primaryIs: 'departments', //передать из app.js
      aboutIs: 'employees',
      departments: [
        {title: 'Отдел 1', itemType: 'department', id: 1},
        {title: 'Отдел 2', itemType: 'department', id: 2},
        {title: 'Отдел 3', itemType: 'department', id: 3},
      ],
      employees: [
        {name: 'Работник 1', departmentId: 1, itemType: 'employee', id: 1},
        {name: 'Работник 2', departmentId: 2, itemType: 'employee', id: 2},
        {name: 'Работник 3', departmentId: 3, itemType: 'employee', id: 3},
        {name: 'Работник 4', departmentId: 1, itemType: 'employee', id: 4},
        {name: 'Работник 5', departmentId: 2, itemType: 'employee', id: 5},
        {name: 'Работник 6', departmentId: 3, itemType: 'employee', id: 6},
        {name: 'Работник 7', departmentId: 1, itemType: 'employee', id: 7},
        {name: 'Работник 8', departmentId: 2, itemType: 'employee', id: 8},
        {name: 'Работник 9', departmentId: 3, itemType: 'employee', id: 9},
        {name: 'Работник 10', departmentId: 1, itemType: 'employee', id: 10},
        {name: 'Работник 11', departmentId: 2, itemType: 'employee', id: 11},
        {name: 'Работник 12', departmentId: 3, itemType: 'employee', id: 12},
        {name: 'Работник 13', departmentId: undefined, itemType: 'employee', id: 13},
        {name: 'Работник 14', departmentId: undefined, itemType: 'employee', id: 14},
        {name: 'Работник 15', departmentId: undefined, itemType: 'employee', id: 15},
        {name: 'Работник 16', departmentId: undefined, itemType: 'employee', id: 16},
        {name: 'Работник 17', departmentId: undefined, itemType: 'employee', id: 17},
        {name: 'Работник 18', departmentId: undefined, itemType: 'employee', id: 18},
        {name: 'Работник 19', departmentId: undefined, itemType: 'employee', id: 19},
        {name: 'Работник 20', departmentId: undefined, itemType: 'employee', id: 20},
        {name: 'Работник 21', departmentId: undefined, itemType: 'employee', id: 21},
        {name: 'Работник 22', departmentId: undefined, itemType: 'employee', id: 22},
        {name: 'Работник 23', departmentId: undefined, itemType: 'employee', id: 23},
        {name: 'Работник 24', departmentId: undefined, itemType: 'employee', id: 24},
      ],
      inputValue: '',
      editEnabled: false,
    };

    this.changeInputValue = this.changeInputValue.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onItemClickHandler = this.onItemClickHandler.bind(this);
    this.onEditClickHandler = this.onEditClickHandler.bind(this);
    this.changeItemNameHandler = this.changeItemNameHandler.bind(this);
    this.enableNewItemName = this.enableNewItemName.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.onInputLostFocus = this.onInputLostFocus.bind(this);
  }

  changeInputValue(event) {
    this.setState({inputValue: event.target.value})
  }

  onItemClickHandler(id) {
    this.setState({activeItem: id, aboutIs: 'employee', editEnabled: false})
  }

  addItem = (e) => {
    e.preventDefault();
    const newDepartment = this.state.inputValue.trim().slice(0, 13).trim();
    if (newDepartment) {
      const newDepartments = this.state.departments;
      const id = this.state.departments.length + 1;
      newDepartments.push({title: newDepartment, itemType: 'department', id});
      this.setState({departments: newDepartments, inputValue: ''})
    } else {
      this.setState({inputValue: ''})
    }
  };

  onEditClickHandler() {
    const current = this.state.departments[this.state.activeItem - 1].title;
    this.setState({editEnabled: current});
  }

  changeItemNameHandler(e) {
    e.preventDefault();
    this.setState({editEnabled: e.target.value});
  }

  enableNewItemName(e) {
    e.preventDefault();
    if (this.state.editEnabled) {
      const id = this.state.activeItem - 1;
      const newName = this.state.editEnabled.trim().slice(0, 13).trim();

      if (newName === '') {
        this.setState({editEnabled: false});
      } else {
        const newDepartments = this.state.departments;
        newDepartments[id].title = newName;
        this.setState({departments: newDepartments, editEnabled: false});
      }
    }
  }

  deleteItem(id) {
    if (!id) {
      let id = this.state.activeItem;
      const newDepartments = this.state.departments;
      delete newDepartments[id - 1];

      const employees = this.state.employees.map(employee => {
        if (employee.departmentId === id) {
          employee.departmentId = undefined;
        }
        return employee
      });

      this.setState({departments: newDepartments, employees, activeItem: null});
    } else {
      const employees = this.state.employees;
      employees[id - 1].departmentId = undefined;
      this.setState({employees});
    }
  }

  onInputLostFocus() {
    if (this.state.editEnabled.trim() === '') this.setState({editEnabled: false});
  }


  render() {

    const departments = this.state.departments.map(department => (
      <Item
        title={department.title}
        key={department.id}
        id={department.id}
        itemType={department.itemType}
        onClickHandler={this.onItemClickHandler}
        isActive={this.state.activeItem === department.id}
      />
    ));

    let secondary = null;
    if (this.state.activeItem) {
      const secondaryProps = this.state.departments[this.state.activeItem - 1];
      const edit = this.state.editEnabled;
      secondary = (<div className={styles.primary}>
        <About
          title={secondaryProps.title}
          editHandler={this.onEditClickHandler}
          editEnabled={edit}
          changeItemNameHandler={this.changeItemNameHandler}
          enableNewName={this.enableNewItemName}
          deleteItem={this.deleteItem}
          employees={this.state.employees}
          primaryId={this.state.activeItem}
          onBlur={this.onInputLostFocus}
        />
      </div>)
    } else {
      secondary = <div style={{flex: '1 0 340px'}}>&nbsp;</div>;
    }

    return (
      <main className={styles.Main}>

        <div className={styles.primary}>
          <AddNewItem
            inputValue={this.state.inputValue}
            onInputValueChanged={this.changeInputValue}
            addItem={this.addItem}
          />

          {departments}

        </div>

        {secondary}

      </main>
    )
  }
}

export default Main