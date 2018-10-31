import React, { Component } from 'react';
import './SelectedMetricDiv.css';

class SelectedMetricDiv extends Component {
  componentDidMount() {
    console.log(this.props.modifyMetricsMode)
  }
  render() {
    return (
      <div className={
        this.props.modifyMetricsMode ?
          this.props.alreadyChosen ? 'selected-metric-div' : 'not-selected-metric-div'
        :
          'fill-space'
        }
        onClick={() => this.props.toggleMetric(this.props.metricIndex, this.props.alreadyChosen, this.props.dataScreenIndex, this.props.selectedCardIndex)}
      >
      </div>
    )
  }
}

export default SelectedMetricDiv;