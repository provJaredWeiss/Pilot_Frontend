import React, { Component } from 'react';
import Header from '../inner-components/Header';
import MainScreen from '../inner-components/MainScreen';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div id='dashboard'>
        <Header {...this.props}/>
        <MainScreen {...this.props}/>
      </div>
    )
  }
}

export default Dashboard;