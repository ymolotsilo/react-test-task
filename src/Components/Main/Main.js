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
      primaryIs: 'department', //передать из app.js
      aboutIs: null,
      currentId: 4,
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
  }

  changeInputValue(event) {
    this.setState({inputValue: event.target.value})
  }

  onItemClickHandler(id) {
    this.setState({activeItem: id, aboutIs: 'employee', editEnabled: false})
  }

  addItem = (e) => {
    e.preventDefault();
    const newDepartment = this.state.inputValue.trim().slice(0, 20);
    if (newDepartment) {
      const newDepartments = this.state.departments;
      let id = this.state.currentId;
      newDepartments.push({title: newDepartment, itemType: 'department', id});
      this.setState({departments: newDepartments, inputValue: '', currentId: ++id})
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
      const newName = this.state.editEnabled;
      const newDepartments = this.state.departments;
      newDepartments[id].title = newName;
      this.setState({departments: newDepartments, editEnabled: false});
    }
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
        />
      </div>)
    } else {
      secondary = <div style={{flex: '1 0 340px'}}>&nbsp;</div>;
    }

    return (
      <main className={styles.Main}>

        <div className={styles.primary}>
          <AddNewItem
            placeholder='Введите название отдела'
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