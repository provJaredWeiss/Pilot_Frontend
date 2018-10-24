import React, { Component } from 'react';
import Nav from '../inner-components/Nav';
import MainDisplay from './MainDisplay';

class MainScreen extends Component {
  render() {
    return (
      <div>
        <Nav {...this.props}/>
        <MainDisplay {...this.props}/>
      </div>
    )
  }
}

export default MainScreen;