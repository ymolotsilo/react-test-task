import React from 'react'
import Item from './Item'
import AddNewItem from './AddNewItem'
import styles from './Main.module.scss'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: null,
      currentId: 4,
      departments: [
        {title: 'Отдел 1', itemType: 'department', id: 1},
        {title: 'Отдел 2', itemType: 'department', id: 2},
        {title: 'Отдел 3', itemType: 'department', id: 3},
      ],
      inputValue: '',
    };

    this.changeInputValue = this.changeInputValue.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onItemClickHandler = this.onItemClickHandler.bind(this);
  }

  changeInputValue(event) {
    this.setState({inputValue: event.target.value})
  }

  onItemClickHandler(id) {
    this.setState({activeItem: id})
  }

  addItem = (e) => {
    e.preventDefault();
    const newDepartment = this.state.inputValue.trim();
    if (newDepartment) {
      const newDepartments = this.state.departments;
      let id = this.state.currentId;
      newDepartments.push({title: newDepartment, itemType: 'department', id});
      this.setState({departments: newDepartments, inputValue: '', currentId: ++id})
    } else {
      this.setState({inputValue: ''})
    }
  };


  render() {

    const departments = this.state.departments.map(department => (
      <Item
        title={department.title}
        key={department.id}
        id={department.id}
        itemType={department.itemType}
        onClickHandler={this.onItemClickHandler}
      />
    ));

    let secondary = null;

    if (this.state.activeItem) {
      let secondaryProps = this.state.departments[this.state.activeItem - 1];
      secondary = <Item
        title={secondaryProps.title}
        key={secondaryProps.title}
        id={secondaryProps.id}
        itemType={secondaryProps.itemType}
      />
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
        <div className={styles.primary}>
          {secondary}
        </div>
      </main>
    )
  }
}

export default Main