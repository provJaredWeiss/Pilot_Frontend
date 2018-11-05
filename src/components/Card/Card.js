import React, { Component } from 'react';
import './Card.css';
import CardHeader from '../CardHeader/CardHeader';
import CardMain from '../CardMain/CardMain';
import CardFooter from '../CardFooter/CardFooter';

class Card extends Component {

  //can either change how it is viewed based on whichScreen here or in CardList, make a diff component called <SmallerCard/>
  //^this is regarding that in 'service metric cards' we'll want to see many cards as options, instead of like service view - seeing one detailed card at a time
  //if i do it here, can send diff api request for 'small' vs 'large' card
  //maybe immediately display simple info and just req the complex stuff
  // OR, don't req for small card at all, only when clicked on (just show sample img w/ description) -> can expand description, and if user wants more, can click and see what the card would actually look like (fully functioning)


  //card gets metadata for the metric (and service if each svc will have metadata) and passes as props to subcomponents
    //subcomponent CardMetricDisplay will get necessary data for graph


  //<card> will render <title> <graph> <buttons> <fields> <--(enter timeframe)
  //I think i need another component called <smallerCard> for when user can choose new ones in profile
  //^ don't think so anymore, cards will resize, if we want to display sample img instead of actual data, can have a condition somewhere

  render() {
    return (
      <div className='card'>
        <CardHeader {...this.props}/>
        <CardMain {...this.props}/>
        <CardFooter {...this.props}/>
      </div>
    )
  }
}

export default Card;