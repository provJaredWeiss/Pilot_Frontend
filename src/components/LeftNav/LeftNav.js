import React, { Component } from 'react';
import './LeftNav.css';

class LeftNav extends Component {
  render() {
    return (
      <nav>
        {Object.values(this.props.services).map((service, i) => <div className='service' key={i} onClick={() => {this.props.switchService(i)}}>{service.name}</div>)}
      </nav>
    )
  }
}

export default LeftNav;