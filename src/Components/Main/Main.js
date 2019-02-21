import React from 'react'
import Departments from './Departments/Departments'
import Department from './Departments/Department/Department'
import Employees from './Employees/Employees'
import Employee from './Employees/Employee/Employee'
import styles from './Main.module.scss'

const Main = props => (
  <main className={styles.Main}>
    <Departments>
      <Department
        title='Отдел 1'
      />
      <Department
        title='Отдел 2'
      />
      <Department
        title='Отдел 3'
      />
      <Department
        title='Отдел 4'
      />
    </Departments>
    <Employees>
      <Employee
        title='Работник 1'
      />
      <Employee
        title='Работник 2'
      />
      <Employee
        title='Работник 3'
      />
      <Employee
        title='Работник 4'
      />
    </Employees>
  </main>
);

export default Main