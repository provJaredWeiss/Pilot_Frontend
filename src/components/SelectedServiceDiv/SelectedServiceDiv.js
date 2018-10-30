import React, { Component } from 'react';
import './SelectedServiceDiv.css';

class SelectedServiceDiv extends Component {
  componentDidMount() {
    // console.log(this.props.alreadyChosen)
  }
  render() {
    return (
      <div className={
        this.props.modifyServicesMode ?
          this.props.alreadyChosen ? 'selected-service-div' : 'not-selected-service-div'
        :
          'fill-space'
        }
        onClick={() => this.props.toggleService(this.props.serviceIndex, this.props.alreadyChosen, this.props.dataScreenIndex, this.props.selectedCardIndex)}
      >
      </div>
    )
  }
}

export default SelectedServiceDiv;