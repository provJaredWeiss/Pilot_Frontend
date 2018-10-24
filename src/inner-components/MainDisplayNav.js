import React, { Component } from 'react';
import Tab from './Tab';
import './MainDisplayNav.css';

class mainDisplayNav extends Component {
  render() {
    const tabnamesMain = ['General Info', 'Service Metric Cards', 'RCA', 'Create/Migrate', 'Other'];
    const tabnamesService = ['Card 1', 'Card 2', 'Card3', 'Card4', 'Card5'];
    const tabNames = this.props.whichScreen ? tabnamesMain : tabnamesService;

    //maybe in these arrays, at beginning put 'left-arrow' and at end 'right-arrow', and <Tab> renders corresponding arrow imgs (as component w/ fxnality to change visable tabs)

    return (
      <div id='main-display-nav'>
        {/* tabnames is dependent on WhichScreen (redux) */}
        {tabNames.map(tabname => (<Tab tabName={tabname}/>))}
      </div>
    )
  }
}

export default mainDisplayNav;