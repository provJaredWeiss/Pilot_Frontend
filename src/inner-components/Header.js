import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div id='space-filler'></div>
        <p>
          Pilot
        </p>
        <button >Switch Screen</button>
        {/* onClick={this.props.switchScreen} (fxn) */}
      </header>
    )
  }
}

export default Header;