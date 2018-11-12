import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentNav from '../components/ContentNav/ContentNav';
import ContentSection from '../components/ContentSection/ContentSection';
import './ContentContainer.css';
import { switchScreen, switchDataScreen, switchMainTab, switchService } from '../actions/actions';

const mapStateToProps = state => ({
  whichScreen: state.whichScreen,
  metrics: state.metrics,
  // metricIndex: state.metricIndex,
  mainTabs: state.mainTabs,
  mainIndex: state.mainIndex,
  services: state.services,
  serviceIndex: state.serviceIndex,
  data: state.data,
  attributes: state.attributes, 
  dataScreens: state.dataScreens,
  dataScreenIndex: state.dataScreenIndex,
  // modifiers: state.modifiers
});

const mapDispatchToProps = dispatch => ({
  switchScreen: () => dispatch(switchScreen()),
  // switchMetric: (newMetricIndex) => dispatch(switchMetric(newMetricIndex)),
  switchDataScreen: (newDataScreenIndex) => dispatch(switchDataScreen(newDataScreenIndex)),
  switchMainTab: (newMainIndex) => dispatch(switchMainTab(newMainIndex)),
  switchService: (newServiceIndex) => dispatch(switchService(newServiceIndex)),
});

class ContentContainer extends Component {
  render() {
    return (
      <div id='card-container'>
        <ContentNav {...this.props}/>
        <ContentSection {...this.props}/>
      </div>
    );
  } 
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);
