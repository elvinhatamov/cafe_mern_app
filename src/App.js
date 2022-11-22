
import './App.css'

import React, { Component } from 'react'
import MenuList from './components/MenuList/MenuList';
import OrderDetails from './components/OrderDetails/OrderDetails';
import Nav from './components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">SEI-Cafe</header>
        App
        <Nav />
        <MenuList />
        <OrderDetails />
      </div>
    )
  }
}

export default App;