import React, {Component} from 'react';
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import './App.css';

class App extends Component {
  render() {
    return [
      <Header
        key='Header'/>,
      <Main
        key='Main'
      />
    ];
  }
}

export default App;
