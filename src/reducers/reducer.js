import * as types from '../actions/actionTypes';

const initialState = {
  whichScreen: 'main', //as opposed to 'service'
  metrics: {
    0: {
      name: 'Metric 1',
      description: '....', // 2 choices: either have all Metric info in state for all Metrics, or just one prop of state that has the props of the spec Metric we're looking at (prbly the latter)
      sampleImg: '',       // ^ for option 2, using the name of the Metric and service, we will look up necessary data...
      query: {
        startTime: 0,
        endTime: 60,     //can any metric to any dashboard, these params here are generic
        api: ''          //when user modifies params of specific card, redux action updates their specific card params, but not this generic info here
      },
      supportedGraphs: ['scatter', 'bar'],
      graphIndex: 0
    },
    1: {
      name: 'Metric 2',
      supportedGraphs: ['bar', 'scatter'],
      graphIndex: 0
    },
    2: {
      name: 'Metric 3'
    },
    3: {
      name: 'Metric 4'
    },
    4: {
      name: 'Metric 5'
    },
  },
  // metricIndex: 0,
  mainTabs: {
    0: {
      name: 'General Info'
    },
    1: {
      name: 'Service Metrics'
    },
    2: {
      name: 'RCA'
    },
    3: {
      name: 'Create/Migrate'
    },
    4: {
      name: 'Other'
    },
  },
  mainIndex: '0', //need a better name, this is for the nav on the main screen (but the service screen nav i'm calling 'metrics', hence 'metricIndex')
  services: {
    0: {
      name: 'Service 1', 
      status: 'ok'
    },
    1: {
      name: 'Service 2', 
      status: 'ok'
    },
    2: {
      name: 'Service 3', 
      status: 'ok'
    },
    3: {
      name: 'Service 4', 
      status: 'ok'
    },
    4: {
      name: 'Service 5', 
      status: 'ok'
    },
  },
  serviceIndex: '0',
  dataScreens: {
    0: {
      name: 'DataScreen 1',
      cards: {
        0: {
          metric: 'Metric 1',
          order: 1,
          size: 1,   // maybe call position and do [1,1]
          graphIndex: 0
        },
        1: {
          metric: 'Metric 2',
          order: 2,
          size: 1,
          graphIndex: 0  
        },
        2: {
          metric: 'Metric 3',
          order: 3,
          size: 2,
          graphIndex: 0
        }
      }
    },
    1: {
      name: 'DataScreen 2',
      cards: {
        0: {
          metric: 'Metric 4',
          order: 1,
          size: 1,
          graphIndex: 0
        },
        1: {
          metric: 'Metric 5',
          order: 2,
          size: 1,
          graphIndex: 0
        }
      }
    },
    2: {
      name: 'DataScreen 3',
      cards: {
        0: {
          metric: 'Metric 1',
          order: 1,
          size: 1,
          graphIndex: 0
        }
      }
    }
  },
  dataScreenIndex: '0',
  data: [
    {
      timebenchmark: 0.3, //seconds
      avgReqsServedPct: 0.95
    },
    {
      timebenchmark: 0.3, //seconds
      avgReqsServedPct: 0.93
    },
    {
      timebenchmark: 0.3, //seconds
      avgReqsServedPct: 0.97
    },
    {
      timebenchmark: 0.3, //seconds
      avgReqsServedPct: 0.94
    },
    {
      timebenchmark: 0.3, //seconds
      avgReqsServedPct: 0.99
    }
  ],
  // data: [
  //   {
  //     timeframe: '50ms',
  //     p50: 0.95,
  //     p90: 0.04,
  //     p95: 0.01
  //   },
  //   {
  //     timeframe: '50ms',
  //     p50: 0.95,
  //     p90: 0.04,
  //     p95: 0.01
  //   }
  // ]
};

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case types.SWITCH_SCREEN:
      return Object.assign({}, state, {
        whichScreen: state.whichScreen === 'main' ? 'service' : 'main'
      });
    case types.SWITCH_DATASCREEN: 
      let newDataScreenIndex = action.newDataScreenIndex;
      return Object.assign({}, state, {
        dataScreenIndex: newDataScreenIndex
      });
    case types.SWITCH_MAINTAB:
      let newMainIndex = action.newMainIndex;
      return Object.assign({}, state, {
        mainIndex: newMainIndex
      });
    case types.SWITCH_SERVICE:
      let newServiceIndex = action.newServiceIndex;
      return Object.assign({}, state, {
        serviceIndex: newServiceIndex
      });
    case types.MODIFY_DATA:
      let newData = action.newData;
      return Object.assign({}, state, {
        data: newData
    });
    case types.TOGGLE_GRAPH: 
      let newGraphIndex = action.newGraphIndex;
      let dataScreenIndex = action.dataScreenIndex;
      let cardIndex = action.cardIndex;
      return Object.assign({}, state, {
        ...state,
        dataScreens: {
          ...state.dataScreens,
          [dataScreenIndex]: {
            ...state.dataScreens[dataScreenIndex],
            cards: {
              ...state.dataScreens[dataScreenIndex].cards,
              [cardIndex]: {
                ...state.dataScreens[dataScreenIndex].cards[cardIndex],
                graphIndex: newGraphIndex 
              }
            }
          }
        }
      // return Object.assign({}, state, {
      //   ...state,
      //   dataScreens: {
      //     ...state.dataScreens,
      //     [dataScreenIndex]: {
      //       ...state.dataScreens[dataScreenIndex],
      //       cards: {
      //         ...state.dataScreens[dataScreenIndex].cards,
      //         [cardIndex]: {
      //           ...state.dataScreens[dataScreenIndex].cards[cardIndex],
      //           graphIndex: newGraphIndex 
      //         }
      //       }
      //     }
      //   }
      })
    default:
      return state;
  }
};

export default reducer;