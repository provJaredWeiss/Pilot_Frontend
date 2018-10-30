import React, { Component } from 'react';
import './MetricModifierButton.css';

class MetricModifierButton extends Component {  
  render() {
    return (
      <div id='metric-modifier-button'>
        <button onClick={() => this.props.modifyMetricsMode(this.props.cardIndex)}>Modify Metrics</button>
      </div>
    )
  }
}

export default MetricModifierButton;