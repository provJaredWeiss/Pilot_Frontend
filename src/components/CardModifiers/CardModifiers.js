import React, { Component } from 'react';
import './CardModifiers.css';
import GraphModifierButton from '../GraphModifierButton/GraphModifierButton';
import EditCardButton from '../EditCardButton/EditCardButton';

class CardModifiers extends Component {
  render() {
    return (
      <div id='card-modifiers'>
        {this.props.graphs ? this.props.graphs.map((graph, i) => <GraphModifierButton key={i} graphButtonIndex={i} graphName={graph} {...this.props}/>) : ''}
        {/* {this.props.modifiers ? this.props.modifiers.map((modifier, i) => <GraphModifierButton key={i} modifierIndex={i} modifierName={modifier} {...this.props}/>) : ''} */}
        <EditCardButton {...this.props}/>
      </div>
    )
  }
}

export default CardModifiers;