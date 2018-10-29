import React, { Component } from 'react';
import './CardModifiers.css';
import CardModifierButton from '../CardModifierButton/CardModifierButton';

class CardModifiers extends Component {
  render() {
    return (
      <div id='card-modifiers'>
        {this.props.graphs ? this.props.graphs.map((graph, i) => <CardModifierButton key={i} graphIndex={i} graphName={this.props.graphs[i]} {...this.props}/>) : ''}
        {this.props.modifiers ? this.props.modifiers.map((modifier, i) => <CardModifierButton key={i} modifierIndex={i} modifierName={modifier} {...this.props}/>) : ''}
      </div>
    )
  }
}

export default CardModifiers;