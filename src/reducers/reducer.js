import * as types from '../actions/actionTypes';

const initialState = {
  whichScreen: 'main', //as opposed to 'service'
  metrics: [
    {
      name: 'Metric 1',
      description: '....', // 2 choices: either have all Metric info in state for all Metrics, or just one prop of state that has the props of the spec Metric we're looking at (prbly the latter)
      sampleImg: '',       // ^ for option 2, using the name of the Metric and service, we will look up necessary data...
      query: {
        startTime: 0,
        endTime: 60,     //can any metric to any dashboard, these params here are generic
        api: ''          //when user modifies params of specific card, redux action updates their specific card params, but not this generic info here
      },
      supportedGraphs: ['scatter', 'bar'],
      graphIndex: 0 //the preferred default graph type
    }, 
    {
      name: 'Metric 2'
    }, 
    {
      name: 'Metric 3'
    }, 
    {
      name: 'Metric 4'
    }, 
    {
      name: 'Metric 5'
    }
  ],
  // metricIndex: 0,
  mainTabs: [{name: 'General Info'}, {name: 'Service Metrics'}, {name: 'RCA'}, {name: 'Create/Migrate'}, {name: 'Other'}], 
  mainIndex: 0, //need a better name, this is for the nav on the main screen (but the service screen nav i'm calling 'metrics', hence 'metricIndex')
  services: [{name: 'Service 1', status: 'ok'}, {name: 'Service 2', status: 'ok'}, {name: 'Service 3', status: 'ok'}, {name: 'Service 4', status: 'ok'}, {name: 'Service 5', status: 'ok'}],
  serviceIndex: 0,
  dataScreens: [
    {
      name: 'DataScreen 1',
      cards: [
        {
          metric: 'Metric 1',
          order: 1,
          size: 1
        },
        {
          metric: 'Metric 2',
          order: 2,
          size: 1
        },
        {
          metric: 'Metric 3',
          order: 3,
          size: 2
        }
      ]
    },
    {
      name: 'DataScreen 2',
      cards: [
        {
          metric: 'Metric 4',
          order: 1,
          size: 1
        },
        {
          metric: 'Metric 5',
          order: 2,
          size: 1
        },
      ]
    }
  ],
  dataScreenIndex: 0,
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
    default:
      return state;
  }
};

export default reducer;