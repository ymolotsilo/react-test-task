import React from 'react'
import Item from './Item'
import styles from './Main.module.scss'

const Main = () => (
  <main className={styles.Main}>
    <div className={styles.container}>
      <div style={{width: '100%'}}>
        <input type="text" className={styles.Item} placeholder='Название отдела...'/>
        <button style={{width: '50%', height: '100%', outline: 'none'}}>+</button>

      </div>
      <Item
        title='Отдел 1'
      />
    </div>
    <div className={styles.container}>
      Выберите отдел для просмотра и редактирования списка сострудников.
    </div>
  </main>
);

export default Main