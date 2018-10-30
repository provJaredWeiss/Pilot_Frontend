import React, { Component } from 'react';
import './ServiceModifierButton.css';

class ServiceModifierButton extends Component {  
  render() {
    return (
      <div id='service-modifier-button'>
        <button onClick={() => this.props.modifyServicesMode(this.props.cardIndex)}>Modify Services</button>
      </div>
    )
  }
}

export default ServiceModifierButton;