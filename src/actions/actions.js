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

export const toggleService = (serviceIndex, alreadyChosen, dataScreenIndex, selectedCardIndex) => ({
  type: types.TOGGLE_SERVICE,
  serviceIndex, 
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

export const modifyServicesMode = (cardIndex) => ({
  type: types.MODIFY_SERVICES_MODE,
  cardIndex
});

export const modifyMetricsMode = (cardIndex) => ({
  type: types.MODIFY_METRICS_MODE,
  cardIndex
});