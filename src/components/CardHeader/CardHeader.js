import React, { Component } from 'react';
import './CardHeader.css';

class CardHeader extends Component {
  render() {
    return (
      <div id='card-header'>
        <h1>I am the metric named: {this.props.whichMetric.name} for service named: {this.props.whichService.name}</h1>
      </div>
    )
  }
}

export default CardHeader;