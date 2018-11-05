import React, { Component } from 'react';
import './EditCardButton.css';

class EditCardButton extends Component {  
  render() {
    return (
      <div id='edit-card-button'>
        <button onClick={() => this.props.toggleEditCardMode(this.props.dataScreenIndex, this.props.cardIndex)}>Edit Card</button>
      </div>
    )
  }
}

export default EditCardButton;