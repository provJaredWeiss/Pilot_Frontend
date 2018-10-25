import React, { Component } from 'react';
import Nav from '../LeftNav/LeftNav';
import MainDisplay from '../MainDisplay/MainDisplay';
import './ScreenBelowHeader.css'

class ScreenBelowHeader extends Component {
  render() {
    return (
      <div id='screen-below-header'>
        <Nav {...this.props}/>
        <MainDisplay {...this.props}/>
      </div>
    )
  }
}

export default ScreenBelowHeader;