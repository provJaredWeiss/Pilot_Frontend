import React, { Component } from 'react';
import './ContentSection.css';
import Card from '../Card/Card';
import CardList from '../CardList/CardList';

class ContentSection extends Component {
  render() {
    return (
      <div id='content-section'>
        {
          this.props.whichScreen === 'service' ? 
          <Card whichCard={this.props.cards[this.props.cardIndex]} whichService={this.props.services[this.props.serviceIndex]}/> : 
          <div>
            <p>Rest of Main Display</p> 
            {this.props.mainTabs[this.props.mainIndex].name === 'Service Metric Cards' ? <CardList {...this.props}/> : ''}
            <button onClick={this.props.auth.logout}>Log Out</button>
          </div>
        }
      </div>
    )
  }
}

export default ContentSection;