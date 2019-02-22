import React from 'react'
import Item from './Item'
import AddNewItem from './AddNewItem'
import styles from './Main.module.scss'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: [
        {title: 'Отдел 1'},
        {title: 'Отдел 2'},
        {title: 'Отдел 3'},
      ],
      inputValue: '',
    };

    this.changeInputValue = this.changeInputValue.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  changeInputValue(event) {
    this.setState({inputValue: event.target.value})
  }

  addItem = () => {
    const newDepartments = this.state.departments;
    newDepartments.push({title: this.state.inputValue});
    this.setState({departments: newDepartments, inputValue: ''})

  };


  render() {
    const departments = this.state.departments.map(department => (
      <Item
        title={department.title}
        key={department.title}
      />
    ));
    return (
      <main className={styles.Main}>
        <div className={styles.container}>
          <AddNewItem
            placeholder='Введите название отдела'
            inputValue={this.state.inputValue}
            onInputValueChanged={this.changeInputValue}
            addItem={this.addItem}
          />
          {departments}
        </div>
        <div className={styles.container}>
          Выберите отдел для просмотра и редактирования списка сострудников.
        </div>
      </main>
    )
  }
}

export default Main