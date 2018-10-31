import React, { Component } from 'react';
import './ChooseMetrics.css';
import MetricInfo from '../MetricInfo/MetricInfo';

class ChooseMetrics extends Component {
  render() {
    return (
      <div id='choose-metrics'>
        {/* <p>choose metrics</p> */}
        {Object.values(this.props.metrics).map((metric, i) => 
          <MetricInfo 
            key={i} 
            metricIndex={i}
            metric={metric}
            alreadyChosen={this.props.dataScreens[this.props.dataScreenIndex].cards[this.props.selectedCardIndex].metrics[i.toString()] ? true : false}
            {...this.props}
          />
        )}
      </div>
    )
  }
}

export default ChooseMetrics;