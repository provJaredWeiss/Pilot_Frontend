import React, { Component } from 'react';
import './ChooseMetrics.css';
import MetricInfo from '../MetricInfo/MetricInfo';

class ChooseMetrics extends Component {
  render() {
    return (
      <div id='choose-metrics'>
        {/* <p>choose metrics</p> */}
        {Object.values(this.props.metricInfo).map((metric, i) => 
          <MetricInfo 
            key={i} 
            metricID={metric.id}
            metric={metric}
            alreadyChosen={this.props.dataScreens[this.props.dataScreenIndex].cards[this.props.selectedCardIndex].metrics[metric.id] ? true : false}
            {...this.props}
          />
        )}
      </div>
    )
  }
}

export default ChooseMetrics;