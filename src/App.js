import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Aplikacja Licznika w ReactJS</h1>
          <h2>Zadanie Domowe</h2>
        </header>
        <Counter initValue='23'/>
      </div>
    );
  }
}

export default App;