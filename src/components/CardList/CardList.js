import React, { Component } from 'react';
import Card from '../Card/Card';
import './CardList.css';

class CardList extends Component {
  render() {
    const allCards = [{name: 'Card 1'}, {name: 'Card 2'}, {name: 'Card 3'}, {name: 'Card 4'}, {name: 'Card 5'}, {name: 'Card 6'}, {name: 'Card 7'}, {name: 'Card 8'}]
    const alreadyChosenCards = this.props.cards;
    const availableCards = allCards.reduce((acc, curr) => {
      for (let i = 0; i < alreadyChosenCards.length; i++) {
        if (alreadyChosenCards[i].name === curr.name) return acc;
      }
      acc.push(curr);
      return acc;
    }, []);
    console.log('avaibable cards')
    console.log(availableCards);

    return (
      <div id='cardlist'>
        {availableCards.map((card, i) => <div key={i}>hello</div>)}
        {/* {availableCards.map((card, i) => <Card key={i} {...this.props}/>)} */}
      </div>
    );
  }
}

export default CardList;