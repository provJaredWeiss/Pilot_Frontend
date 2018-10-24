import React, { Component } from 'react';
import MainDisplayNav from './MainDisplayNav';
import RestOfMainDisplay from './RestOfMainDisplay';
import './MainDisplay.css';

class mainDisplay extends Component {
  render() {
    return (
      <div id='main-display'>
        <MainDisplayNav {...this.props}/>
        <RestOfMainDisplay {...this.props}/>
      </div>
    )
  }
}

export default mainDisplay;