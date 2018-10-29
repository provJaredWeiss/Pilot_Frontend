import React, { Component } from 'react';
import Tab from '../Tab/Tab';
import './ContentNav.css';

class ContentNav extends Component {
  render() {
    // const tabnamesMain = Object.keys(this.props.mainTabs).map((tab) => tab.name);
    // const tabnamesService = Object.keys(this.props.dataScreens).map((dataScreen) => dataScreen.name);
    const whichTabs = this.props.whichScreen === 'main' ? this.props.mainTabs : this.props.dataScreens;

    //maybe in these arrays, at beginning put 'left-arrow' and at end 'right-arrow', and <Tab> renders corresponding arrow imgs (as component w/ fxnality to change visable tabs)

    return (
      <div id='content-nav'>
        {/* tabnames is dependent on WhichScreen (redux) */}
        {Object.values(whichTabs).map((tab, i) => (
          <Tab 
            key={i} 
            index={i} 
            tabName={tab.name} 
            whichScreen={this.props.whichScreen} 
            // switchMetric={this.props.switchMetric} 
            switchDataScreen={this.props.switchDataScreen} 
            switchMainTab={this.props.switchMainTab}
          />
        ))}
      </div>
    )
  }
}

export default ContentNav;