import React, { Component } from 'react';
import './CardModifierButton.css';

class CardModifierButton extends Component {
  componentDidMount() {
    console.log(this.props.graphIndex)
  }
  render() {
    return (
      <div id='card-modifier-button'>
        <button onClick={() => {this.props.toggleGraph(
          this.props.graphIndex, 
          this.props.dataScreenIndex, 
          this.props.cardIndex)}}>{this.props.graphName}</button>
      </div>
    )
  }
}

export default CardModifierButton;