import React, { Component } from 'react';
import './SelectedMetricDiv.css';

class SelectedMetricDiv extends Component {
  componentDidMount() {
    // console.log(this.props.editCardMode)
  }
  render() {
    return (
      <div className={
        this.props.editCardMode ?
          this.props.alreadyChosen ? 'selected-metric-div' : 'not-selected-metric-div'
        :
          'fill-space'
        }
        onClick={() => this.props.toggleMetric(this.props.metricID, this.props.alreadyChosen, this.props.dataScreenIndex, this.props.selectedCardIndex)}
      >
      </div>
    )
  }
}

export default SelectedMetricDiv;