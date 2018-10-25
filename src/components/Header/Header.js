import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div id='space-filler'></div>
        <div id='title'>
          <p>
            Pilot
          </p>
        </div>
        <button onClick={this.props.switchScreen}>Switch Screen</button>
        {/* onClick={this.props.switchScreen} (fxn) */}
        {/* do i need a button or can it just be a div w/ onclick? */}
      </header>
    )
  }
}

export default Header;