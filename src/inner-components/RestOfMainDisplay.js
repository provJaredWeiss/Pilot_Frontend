import React, { Component } from 'react';
import './RestOfMainDisplay.css';

class RestOfMainDisplay extends Component {
  render() {
    return (
      <div id='rest-of-main-display'>
        <p>Rest of Main Display</p>
        <button onClick={this.props.auth.logout}>Log Out</button>
      </div>
    )
  }
}

export default RestOfMainDisplay;