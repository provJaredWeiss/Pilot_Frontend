import React, { Component } from 'react';
import Header from '../components/Header/Header';
import ScreenBelowHeader from '../components/ScreenBelowHeader/ScreenBelowHeader';
import './Dashboard.css';
import ChooseMetrics from '../components/ChooseMetrics/ChooseMetrics';

class Dashboard extends Component {
  componentDidUpdate() {
    // console.log('')
  }

  render() {
    return (
      <div id='dashboard'>
        <Header {...this.props}/>
        <ScreenBelowHeader {...this.props}/>
        {this.props.editCardMode ? <ChooseMetrics {...this.props} /> : ''}
      </div>
    )
  }
}

export default Dashboard;