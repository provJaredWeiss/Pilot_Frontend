import React, { Component } from 'react';
import ContentNav from '../ContentNav/ContentNav';
import ContentSection from '../ContentSection/ContentSection';
import './MainDisplay.css';

class mainDisplay extends Component {
  render() {
    return (
      <div id='main-display'>
        <ContentNav {...this.props}/>
        <ContentSection {...this.props}/>
      </div>
    )
  }
}

export default mainDisplay;