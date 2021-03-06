import React, { Component } from 'react';
import './SelectedServiceDiv.css';

class SelectedServiceDiv extends Component {
  componentDidMount() {
    // console.log(this.props.alreadyChosen)
  }
  render() {
    return (
      <div className={
        this.props.editCardMode ?
          this.props.alreadyChosen && this.props.editMetricMode ? 'selected-service-div' : 'not-selected-service-div'
        :
          'fill-space'
        }
        onClick={this.props.editCardMode && this.props.editMetricMode ? () => this.props.toggleService(this.props.serviceID, this.props.alreadyChosen, this.props.dataScreenIndex, this.props.selectedCardIndex, this.props.whichMetric) : null}
      >
      </div>
    )
  }
}

export default SelectedServiceDiv;