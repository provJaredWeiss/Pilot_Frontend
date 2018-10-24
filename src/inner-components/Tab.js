import React, { Component } from 'react';
import './Tab.css';

class Tab extends Component {
  render() {
    return (
      <div className='tab'>
       <p>{this.props.tabName}</p>
      </div>
    )
  }
}

export default Tab;