import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import store from './config/store'
import {Provider} from 'react-redux'

import TodoPage from './containers/TodoPage'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <TodoPage />
        </div>
      </Provider>
    );
  }
}

export default App;
