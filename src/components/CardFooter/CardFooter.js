import React, { Component } from 'react';
import './CardFooter.css';
import CardModifiers from '../CardModifiers/CardModifiers';

class CardFooter extends Component {
  render() {
    return (
      <div id='card-footer'>
        <CardModifiers 
          {...this.props} 
          graphs={this.props.whichMetric.supportedGraphs ? this.props.whichMetric.supportedGraphs : ''} 
          modifiers={this.props.whichMetric.modifiers ? this.props.whichMetric.modifiers : ''}
        />
      </div>
    )
  }
}

export default CardFooter;