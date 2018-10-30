import React, { Component } from 'react';
import './MetricInfo.css';

class MetricInfo extends Component {
  render() {
    return (
      <div className='metric-info' /*onClick={this.props.modifyMetrics}*/>
        <div className='left-half'>
          <h3>{this.props.metric.name ? this.props.metric.name : 'no name'}</h3>
          <h4>{this.props.metric.description ? this.props.metric.description : 'no description'}</h4>
        </div>
        <div className='right-half'>
          <h4>img will go here</h4>
          {/* <img></img> */}
        </div>
      </div>
    )
  }
}

export default MetricInfo;