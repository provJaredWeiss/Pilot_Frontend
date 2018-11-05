import * as types from './actionTypes';

export const switchScreen = () => ({
  type: types.SWITCH_SCREEN
});

export const switchMainTab = (newMainIndex) => ({ //needs better name
  type: types.SWITCH_MAINTAB,
  newMainIndex
});

// export const switchMetric = (newMetricIndex) => ({
//   type: types.SWITCH_METRIC,
//   newMetricIndex: newMetricIndex
// });

export const switchDataScreen = (newDataScreenIndex) => ({
  //dispatch an action that turns off modifyServices(and/or)MetricsMode
  type: types.SWITCH_DATASCREEN,
  newDataScreenIndex
});

// export const switchService = (newServiceIndex) => ({
//   type: types.SWITCH_SERVICE,
//   newServiceIndex
// });

export const toggleService = (serviceID, alreadyChosen, dataScreenIndex, selectedCardIndex, whichMetric) => ({
  type: types.TOGGLE_SERVICE,
  serviceID, 
  alreadyChosen, 
  dataScreenIndex, 
  selectedCardIndex,
  whichMetric
});

export const toggleMetric = (metricID, alreadyChosen, dataScreenIndex, selectedCardIndex) => ({
  type: types.TOGGLE_METRIC,
  metricID, 
  alreadyChosen, 
  dataScreenIndex, 
  selectedCardIndex
});

export const modifyData = (newData) => ({
  type: types.MODIFY_DATA,
  newData
});

export const toggleGraph = (newGraphIndex, dataScreenIndex, cardIndex) => ({
  type: types.TOGGLE_GRAPH,
  newGraphIndex,
  dataScreenIndex,
  cardIndex
});

export const toggleEditCardMode = (dataScreenIndex, cardIndex) => ({
  type: types.TOGGLE_EDIT_CARD_MODE,
  dataScreenIndex,
  cardIndex
});

export const toggleEditMetricMode = (dataScreenIndex, cardIndex, metricIndex) => ({
  type: types.TOGGLE_EDIT_METRIC_MODE,
  dataScreenIndex,
  cardIndex,
  metricIndex
});