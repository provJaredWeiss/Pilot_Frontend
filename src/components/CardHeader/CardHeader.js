import React, { Component } from 'react';
import './CardHeader.css';

class CardHeader extends Component {
  render() {
    let str = 'Graphs for: ';
    for (let i = 0; i < this.props.metricInfos.length; i++) {
      str += this.props.metricInfos[i].name;
      str += ' and ';
    }
    str += 'for services named: ';
    for (let i = 0; i < this.props.serviceInfos.length; i++) {
      str += this.props.serviceInfos[i].name;
      if (i < this.props.serviceInfos.length - 1) str += ' and ';
    }
    return (
      <div id='card-header'>
        <h1>{str}</h1>
      </div>
    )
  }
}

export default CardHeader;