import React, { Component } from 'react';
import './Tab.css';

class Tab extends Component { 
  render() {
    return (
      this.props.whichScreen === 'main' 
        ? 
        <div className='tab' onClick={() => {this.props.switchMainTab(this.props.index)}}>
          <p>{this.props.tabName}</p>
        </div> 
        : 
        <div className='tab' onClick={() => {this.props.switchCard(this.props.index)}}>
          <p>{this.props.tabName}</p>
        </div>
    )
  }
}

export default Tab;