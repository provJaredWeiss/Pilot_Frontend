import React, { Component } from 'react';
import './EditCardButton.css';

class EditCardButton extends Component {  
  render() {
    return (
      <div className='edit-card-button'>
        <button onClick={
          this.props.editCardMode //if we are editing a card
          ?
            this.props.cardIndex === this.props.selectedCardIndex //and we are looking at the card we are editing
            ? 
              !this.props.editMetricMode //and we aren't currently editing the services for a metric
              ? () => this.props.toggleEditCardMode(this.props.dataScreenIndex, this.props.cardIndex) //can click 'edit card' / 'done editing card' button
              : null
            : null
          : () => this.props.toggleEditCardMode(this.props.dataScreenIndex, this.props.cardIndex)}
        >{this.props.editCardMode && this.props.cardIndex === this.props.selectedCardIndex ? 'Done Editing Card' : 'Edit Card'}</button>
      </div>
    )
  }
}

export default EditCardButton;