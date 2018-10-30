import React, { Component } from 'react';
import './ChooseMetrics.css';
import MetricInfo from '../MetricInfo/MetricInfo';

class ChooseMetrics extends Component {
  render() {
    return (
      <div id='choose-metrics'>
        {/* <p>choose metrics</p> */}
        {Object.values(this.props.metrics).map((metric) => 
          <MetricInfo metric={metric}/>
        )}
      </div>
    )
  }
}

export default ChooseMetrics;