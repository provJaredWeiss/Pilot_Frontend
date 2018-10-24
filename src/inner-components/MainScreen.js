import React, { Component } from 'react';
import Nav from './Nav';
import MainDisplay from './MainDisplay';
import './MainScreen.css';

class MainScreen extends Component {
  render() {
    return (
      <div id='main-screen'>
        <Nav {...this.props}/>
        <MainDisplay {...this.props}/>
      </div>
    )
  }
}

export default MainScreen;