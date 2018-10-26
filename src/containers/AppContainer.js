import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../App';
import './AppContainer.css';
import { switchScreen, switchDataScreen, switchMainTab, switchService, modifyData } from '../actions/actions';

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
  dataScreenIndex: state.dataScreenIndex
});

const mapDispatchToProps = dispatch => ({
  switchScreen: () => dispatch(switchScreen()),
  // switchMetric: (newMetricIndex) => dispatch(switchMetric(newMetricIndex)),
  switchDataScreen: (newDataScreenIndex) => dispatch(switchDataScreen(newDataScreenIndex)),
  switchMainTab: (newMainIndex) => dispatch(switchMainTab(newMainIndex)),
  switchService: (newServiceIndex) => dispatch(switchService(newServiceIndex)),
  modifyData: (data) => dispatch(modifyData(data))
});

class AppContainer extends Component {

  render() {
    return (
      <div id='app-container'>
        <App {...this.props}/>
      </div>
    );
  } 
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
