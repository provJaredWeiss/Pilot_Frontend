import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../App';
import './AppContainer.css';
import { switchScreen, switchDataScreen, switchMainTab, toggleService, toggleMetric, modifyData } from '../actions/actions';

const mapStateToProps = state => ({
  whichScreen: state.whichScreen,
  metricInfo: state.metricInfo,
  mainTabs: state.mainTabs,
  mainIndex: state.mainIndex,
  serviceInfo: state.serviceInfo,
  serviceIndex: state.serviceIndex,
  data: state.data,
  attributes: state.attributes, 
  dataScreens: state.dataScreens,
  dataScreenIndex: state.dataScreenIndex,
  editCardMode: state.editCardMode,
  selectedCardIndex: state.selectedCardIndex,
  whichClusters: state.whichClusters,
  whichTeams: state.whichTeams,
  teamInfo: state.teamInfo,
  clusterInfo: state.clusterInfo,
  editMetricMode: state.editMetricMode,
  whichMetric: state.whichMetric,
  dataTwo: state.dataTwo
  // modifiers: state.modifiers
});

const mapDispatchToProps = dispatch => ({
  switchScreen: () => dispatch(switchScreen()),
  // switchMetric: (newMetricIndex) => dispatch(switchMetric(newMetricIndex)),
  switchDataScreen: (newDataScreenIndex) => dispatch(switchDataScreen(newDataScreenIndex)),
  switchMainTab: (newMainIndex) => dispatch(switchMainTab(newMainIndex)),
  // switchService: (newServiceIndex) => dispatch(switchService(newServiceIndex)),
  modifyData: (data) => dispatch(modifyData(data)),
  toggleService: (serviceIndex, alreadyChosen, dataScreenIndex, selectedCardIndex, whichMetric) => dispatch(toggleService(serviceIndex, alreadyChosen, dataScreenIndex, selectedCardIndex, whichMetric)),
  toggleMetric: (metricIndex, alreadyChosen, dataScreenIndex, selectedCardIndex) => dispatch(toggleMetric(metricIndex, alreadyChosen, dataScreenIndex, selectedCardIndex)),
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
