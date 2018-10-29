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
  type: types.SWITCH_DATASCREEN,
  newDataScreenIndex
});

export const switchService = (newServiceIndex) => ({
  type: types.SWITCH_SERVICE,
  newServiceIndex
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