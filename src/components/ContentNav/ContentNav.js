import React, { Component } from 'react';
import Tab from '../Tab/Tab';
import './ContentNav.css';

class ContentNav extends Component {
  render() {
    const tabnamesMain = this.props.mainTabs.map((tab) => tab.name);
    const tabnamesService = this.props.cards.map((card) => card.name);
    const tabNames = this.props.whichScreen === 'main' ? tabnamesMain : tabnamesService;

    //maybe in these arrays, at beginning put 'left-arrow' and at end 'right-arrow', and <Tab> renders corresponding arrow imgs (as component w/ fxnality to change visable tabs)

    return (
      <div id='content-nav'>
        {/* tabnames is dependent on WhichScreen (redux) */}
        {tabNames.map((tabname, i) => (
          <Tab 
            key={i} 
            index={i} 
            tabName={tabname} 
            whichScreen={this.props.whichScreen} 
            switchCard={this.props.switchCard} 
            switchMainTab={this.props.switchMainTab}
          />
        ))}
      </div>
    )
  }
}

export default ContentNav;