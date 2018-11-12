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

export const clearData = () => ({
  type: types.CLEAR_DATA,
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


const deliverData = (data) => ({
  type: types.DELIVER_DATA,
  data
})

function fetchData(url) {
  return fetch(url)
}

export const requestData = (url) => {
  return (dispatch) => {
    dispatch(clearData()) //remove this once functionality exists to add data to existing data
    return fetchData(url)
      .then(res => res.json())
      .then((data) => dispatch(deliverData(data)))
      .catch(err => {
        console.log('data not found')
      })
  }
}