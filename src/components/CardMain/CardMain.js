import React, { Component } from 'react';
import './CardMain.css';
import CardMetricDisplay from '../CardMetricDisplay/CardMetricDisplay';
import EditCard from '../EditCard/EditCard';

class CardMain extends Component {
  render() {
    return (
      <div className='card-main'>
        <div className='wrapper'>
          <CardMetricDisplay 
            {...this.props} 
            graphs={this.props.supportedGraphs ? this.props.supportedGraphs : ''} 
            // modifiers={this.props.whichMetric.modifiers ? this.props.whichMetric.modifiers : ''}
          />
          {this.props.editThisCardMode ? <EditCard {...this.props} /> : ''}
        </div>
      </div>
    )
  }
}

export default CardMain;