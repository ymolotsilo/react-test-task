import React from 'react'
import HeaderItem from './HeaderItem/HeaderItem'
import styles from './Header.module.scss'

const Header = props => (
  <header className={styles.Header}>
    <HeaderItem
      title='ОТДЕЛЫ'
    />
    <HeaderItem
      title='СОТРУДНИКИ'
    />
  </header>

);

export default Header;