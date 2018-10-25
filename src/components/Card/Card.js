import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

  //can either change how it is viewed based on whichScreen here or in CardList, make a diff component called <SmallerCard/>
  //^this is regarding that in 'service metric cards' we'll want to see many cards as options, instead of like service view - seeing one detailed card at a time
  //if i do it here, can send diff api request for 'small' vs 'large' card
  //maybe immediately display simple info and just req the complex stuff
  // OR, don't req for small card at all, only when clicked on (just show sample img w/ description) -> can expand description, and if user wants more, can click and see what the card would actually look like (fully functioning)


  componentDidMount() {
    // console.log('card remounted') <-- runs only first time we switch to service view
    const cardName = this.props.whichCard.name;
    const serviceName = this.props.whichService.name;
    // fetch(`/getData/${cardName}/${serviceName}`)
    //   .then(res => res.json())
    //   .then(data => {

    //   })
  }

  componentDidUpdate() {
    // console.log('card updated') <-- runs for card or service change
    const cardName = this.props.whichCard.name;
    const serviceName = this.props.whichService.name;
    // fetch(`/getData/${cardName}/${serviceName}`)
    //   .then(res => res.json())
    //   .then(data => {

    //   })
  }

  //parsingDataFxns...() {

  // }

  render() {
    return (
      <div className='card'>
        I am the card named: {this.props.whichCard.name} for service named: {this.props.whichService.name}
      </div>
    )
  }
}

export default Card;