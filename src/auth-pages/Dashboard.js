import React, { Component } from 'react';
import Header from '../components/Header/Header';
import ScreenBelowHeader from '../components/ScreenBelowHeader/ScreenBelowHeader';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div id='dashboard'>
        <Header {...this.props}/>
        <ScreenBelowHeader {...this.props}/>
      </div>
    )
  }
}

export default Dashboard;