import React, { Component } from 'react';
import './GraphModifierButton.css';

class GraphModifierButton extends Component { 
  componentDidMount() {
    // console.log('graph button index')
    // console.log(this.props.graphButtonIndex)
  }

  render() {
    return (
      <div id='card-modifier-button'>
        <button  
          onClick={() => {
            this.props.toggleGraph(
              this.props.graphButtonIndex, 
              this.props.dataScreenIndex, 
              this.props.cardIndex
            )}
          }>{this.props.graphName}</button>
      </div>
    )
  }
}

export default GraphModifierButton;