import React, { Component } from 'react';
import './LeftNav.css';
import SelectedServiceDiv from '../SelectedServiceDiv/SelectedServiceDiv';

class LeftNav extends Component {
  render() {
    return (
      <nav>
        {Object.values(this.props.services).map((service, i) => 
          <div 
            className='service' 
            key={i} 
            // onClick={() => {this.props.switchService(i)}}
          >
            <div className='fill-space'>
            </div>
            <div>{service.name}</div>
            <SelectedServiceDiv 
              {...this.props}
              serviceIndex={i.toString()}
              alreadyChosen={this.props.dataScreens[this.props.dataScreenIndex].cards[this.props.selectedCardIndex].services[i.toString()] ? true : false}
            />
          </div>)}
      </nav>
    )
  }
}

export default LeftNav;

//check if service is in this selected card's list of services

// this.props.dataScreens[this.props.dataScreenIndex].cards[this.props.selectedCardIndex].services