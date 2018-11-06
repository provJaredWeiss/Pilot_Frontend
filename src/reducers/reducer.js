import * as types from '../actions/actionTypes';

const initialState = {
  whichScreen: 'service', //switch to 'main' when app is launched
  selectedCardIndex: 0,
  editCardMode: false,
  whichTeams: [0, 1, 2, 3, 4, 5, 6, 7], //<-- teamID ('all teams')
  whichClusters: [0, 1], //represents 'all clusters' (i've only put in 2 so far)
  whichRole: 0, //<-- roleID (to be added eventually)
  dataScreenIndex: '0',
  whichMetric: '',
  editMetricMode: false,
  mainIndex: '0', //need a better name, this is for the nav on the main screen 
  metricInfo: {
    0: {
      id: 0,
      name: 'Metric 1',
      description: '....', // 2 choices: either have all Metric info in state for all Metrics, or just one prop of state that has the props of the spec Metric we're looking at (prbly the latter)
      sampleImg: '',       // ^ for option 2, using the name of the Metric and service, we will look up necessary data...
      query: {
        startTime: 0,
        endTime: 6000,     //these params here are generic (default), not to be tampered with
        timeStep: 1000
        // api: ''
      },
      supportedGraphs: ['scatter', 'bar'],
      graphIndex: 0, //metricInfo shouldn't be tampered with, but I'm considering allowing this prop to be changed, otherwise could be complicated to rep the change in graph type elsewhere
      renderer: ''
    },
    1: {
      id: 1,
      name: 'Metric 2',
      supportedGraphs: ['bar', 'scatter'],
      graphIndex: 0
    },
    2: {
      id: 2,
      name: 'Metric 3',
      supportedGraphs: ['bar', 'scatter'],
      graphIndex: 0
    },
    3: {
      id: 3,
      name: 'Metric 4'
    },
    4: {
      id: 4,
      name: 'Metric 5'
    },
  },
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
  clusterInfo: {
    0: {
      id: 0,
      name: 'Sandbox',
      services: {
        0: true,
        1: true,
      }
    },
    1: {
      id: 1,
      name: 'Sandbox Lab',
      services: {
        2: true,
        3: true,
      }
    },
    2: {
      id: 2,
      name: 'NonProd',
      services: {
        4: true,
        5: true,
      }
    },
    3: {
      id: 3,
      name: 'Prod',
      services: {
        6: true,
        7: true,
      }
    },
  },
  teamInfo: {
    0: {
      id: 0,
      name: 'Lionel',
      services: {
        0: true,
        1: true,
      }
    },
    1: {
      id: 1,
      name: 'Watchtower',
      services: {
        1: true,
        2: true,
      }
    },
    2: {
      id: 2,
      name: 'Reliability',
      services: {
        3: true,
        4: true,
      }
    },
    3: {
      id: 3,
      name: 'DevEx',
      services: {
        5: true,
        6: true,
      }
    },
    4: {
      id: 4,
      name: 'Fuego',
      services: {
        1: true,
        7: true,
      }
    },
    5: {
      id: 5,
      name: 'Hielo',
      services: {
        2: true,
        0: true,
      }
    },
    6: {
      id: 6,
      name: 'Festivus',
      services: {
        0: true,
      }
    },
    7: {
      id: 7,
      name: 'Etc.',
      services: {
        3: true,
      }
    },
  },
  roles: {
    0: {
      id: 0,
      name: 'Manager'
    },
    1: {
      id: 1,
      name: 'Dev'
    },
  },
  serviceInfo: { //svc has metadata about which cluster(s) and team(s) it's a part of  <-- are diff versions in diff clusters? Maybe we call diff version a diff svc altogether in this model?
    0: {
      id: 0,
      name: 'Service 1',
      status: 'ok',
      // clusters: [0], // <-- id, not index
      // teams: [0], // <-- id, not index
    },
    1: {
      id: 1,
      name: 'Service 2',
      status: 'ok',
      // clusters: [0], // <-- id, not index
      // teams: [1], // <-- id, not index
    },
    2: {
      id: 2,
      name: 'Service 3',
      status: 'ok',
      // clusters: [0], // <-- id, not index
      // teams: [0], // <-- id, not index
    },
    3: {
      id: 3,
      name: 'Service 4',
      status: 'ok',
      // clusters: [1], // <-- id, not index
      // teams: [0], // <-- id, not index
    },
    4: {
      id: 4,
      name: 'Service 5',
      status: 'ok',
      // clusters: [1], // <-- id, not index
      // teams: [1], // <-- id, not index
    },
    5: {
      id: 5,
      name: 'Service 6',
      status: 'ok',
      // clusters: [1], // <-- id, not index
      // teams: [1], // <-- id, not index
    },
    6: {
      id: 6,
      name: 'Service 7',
      status: 'ok',
      // clusters: [1], // <-- id, not index
      // teams: [1], // <-- id, not index
    },
    7: {
      id: 7,
      name: 'Service 8',
      status: 'ok',
      // clusters: [1], // <-- id, not index
      // teams: [1], // <-- id, not index
    },
  },
  // serviceIndices: ['0'],
  dataScreens: {
    0: {
      name: 'DataScreen 1',
      cards: {
        0: {
          editCardMode: false,
          metrics: {
            0: { //metricID
              services: {
                0: true //serviceID
              },
            }
          },
          order: 1,
          size: 1,   // maybe call position and do [1,1]
          graphIndex: 0
        },
        1: {
          editCardMode: false,
          metrics: {
            1: {
              services: {
                3: true
              },
            }
          },
          order: 2,
          size: 1,
          graphIndex: 0  
        },
        2: {
          editCardMode: false,
          metrics: {
            2: {
              services: {
                0: true
              },
            }
          },
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
          editCardMode: false,
          metrics: {
            3: {
              services: {
                0: true
              },
            }
          },
          order: 1,
          size: 1,
          graphIndex: 0
        },
        1: {
          editCardMode: false,
          metrics: {
            4: {
              services: {
                0: true
              },
            }
          },
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
          editCardMode: false,
          metrics: {
            0: {
              services: {
                0: true
              },
            }
          },
          order: 1,
          size: 1,
          graphIndex: 0
        }
      }
    }
  },
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
  dataTwo: { 
    "metrics": { 
      "0": { //this key is the metricID
        "id": 0,
        "name": "Metric 1",
        "specs": {
          "type": "timeSeries",
          "startTime": 0,
          "endTime": 6000,
          "timeStep": 1000
        },
        "services": {
          "0": { //this key is the serviceID
            "id": 0,
            "name": "Service 1",
            "cluster": 0,
            "team": 0,
            "buckets": {
              "0": {
                "startTime": 0,
                "endTime": 1000,
                "data": 10
              }, 
              "1": {
                "startTime": 1000,
                "endTime": 2000,
                "data": 20
              }, 
              "2": {
                "startTime": 2000,
                "endTime": 3000,
                "data": 30
              }, 
              "3": {
                "startTime": 3000,
                "endTime": 4000,
                "data": 50
              }, 
              "4": {
                "startTime": 4000,
                "endTime": 5000,
                "data": 40
              }, 
              "5": {
                "startTime": 5000,
                "endTime": 6000,
                "data": 10
              }
            }
          },
          "1": {
            "id": 1,
            "name": "Service 2",
            "cluster": 0,
            "team": 1,
            "specs": {
              "type": "timeSeries",
              "startTime": 0,
              "endTime": 6000,
              "timeStep": 1000
            },
            "buckets": {
              "0": {
                "startTime": 0,
                "endTime": 1000,
                "data": 20
              }, 
              "1": {
                "startTime": 1000,
                "endTime": 2000,
                "data": 20
              }, 
              "2": {
                "startTime": 2000,
                "endTime": 3000,
                "data": 20
              }, 
              "3": {
                "startTime": 3000,
                "endTime": 4000,
                "data": 20
              }, 
              "4": {
                "startTime": 4000,
                "endTime": 5000,
                "data": 20
              }, 
              "5": {
                "startTime": 5000,
                "endTime": 6000,
                "data": 20
              }
            }
          }
        }
      },
      "1": { //this key is the metricID
        "id": 1,
        "name": "Metric 2",
        "specs": {
          "type": "timeSeries",
          "startTime": 0,
          "endTime": 6000,
          "timeStep": 1000
        },
        "services": {
          "1": { //this key is the serviceID
            "id": 1,
            "name": "Service 2",
            "cluster": 0,
            "team": 0,
            "buckets": {
              "0": {
                "startTime": 0,
                "endTime": 1000,
                "data": 10
              }, 
              "1": {
                "startTime": 1000,
                "endTime": 2000,
                "data": 20
              }, 
              "2": {
                "startTime": 2000,
                "endTime": 3000,
                "data": 30
              }, 
              "3": {
                "startTime": 3000,
                "endTime": 4000,
                "data": 50
              }, 
              "4": {
                "startTime": 4000,
                "endTime": 5000,
                "data": 40
              }, 
              "5": {
                "startTime": 5000,
                "endTime": 6000,
                "data": 10
              }
            }
          },
          "2": {
            "id": 2,
            "name": "Service 3",
            "cluster": 0,
            "team": 1,
            "specs": {
              "type": "timeSeries",
              "startTime": 0,
              "endTime": 6000,
              "timeStep": 1000
            },
            "buckets": {
              "0": {
                "startTime": 0,
                "endTime": 1000,
                "data": 20
              }, 
              "1": {
                "startTime": 0,
                "endTime": 1000,
                "data": 20
              }, 
              "2": {
                "startTime": 0,
                "endTime": 1000,
                "data": 20
              }, 
              "3": {
                "startTime": 0,
                "endTime": 1000,
                "data": 20
              }, 
              "4": {
                "startTime": 0,
                "endTime": 1000,
                "data": 20
              }, 
              "5": {
                "startTime": 0,
                "endTime": 1000,
                "data": 20
              }
            }
          },
          "3": {
            "id": 3,
            "name": "Service 4",
            "cluster": 0,
            "team": 1,
            "specs": {
              "type": "timeSeries",
              "startTime": 0,
              "endTime": 6000,
              "timeStep": 1000
            },
            "buckets": {
              "0": {
                "startTime": 0,
                "endTime": 1000,
                "data": 20
              }, 
              "1": {
                "startTime": 0,
                "endTime": 1000,
                "data": 20
              }, 
              "2": {
                "startTime": 0,
                "endTime": 1000,
                "data": 20
              }, 
              "3": {
                "startTime": 0,
                "endTime": 1000,
                "data": 20
              }, 
              "4": {
                "startTime": 0,
                "endTime": 1000,
                "data": 20
              }, 
              "5": {
                "startTime": 0,
                "endTime": 1000,
                "data": 20
              }
            }
          }
        }
      },
      "2": { //this key is the metricID
        "id": 2,
        "name": "Metric 3",
        "specs": {
          "type": "timeSeries",
          "startTime": 0,
          "endTime": 6000,
          "timeStep": 1000
        },
        "services": {
          "0": { //this key is the serviceID
            "id": 0,
            "name": "Service 1",
            "cluster": 0,
            "team": 0,
            "buckets": {
              "0": {
                "startTime": 0,
                "endTime": 1000,
                "data": 10
              }, 
              "1": {
                "startTime": 1000,
                "endTime": 2000,
                "data": 60
              }, 
              "2": {
                "startTime": 2000,
                "endTime": 3000,
                "data": 30
              }, 
              "3": {
                "startTime": 3000,
                "endTime": 4000,
                "data": 100
              }, 
              "4": {
                "startTime": 4000,
                "endTime": 5000,
                "data": 40
              }, 
              "5": {
                "startTime": 5000,
                "endTime": 6000,
                "data": 50
              }
            }
          },
        }
      }
    }
  }
};


const reducer = (state=initialState, action) => {
  switch(action.type) {
    case types.SWITCH_SCREEN:
      return Object.assign({}, state, {
        whichScreen: state.whichScreen === 'main' ? 'service' : 'main'
      });
    case types.SWITCH_DATASCREEN: 
      const newDataScreenIndex = action.newDataScreenIndex;
      return Object.assign({}, state, {
        dataScreenIndex: newDataScreenIndex,
        selectedCardIndex: 0
      });
    case types.SWITCH_MAINTAB:
      const newMainIndex = action.newMainIndex;
      return Object.assign({}, state, {
        mainIndex: newMainIndex
      });
    case types.MODIFY_DATA:
      const newData = action.newData;
      return Object.assign({}, state, {
        data: newData
      });
    case types.TOGGLE_EDIT_CARD_MODE:
      const dsindx = action.dataScreenIndex;
      const cardidx = action.cardIndex;
      // return Object.assign({}, state, {
      //   editCardMode: !state.editCardMode,
      //   selectedCardIndex: cardidx
      // });
      return Object.assign({}, state, {
        ...state,
        editCardMode: !state.editCardMode,
        selectedCardIndex: cardidx,
        dataScreens: {
          ...state.dataScreens,
          [dsindx]: {
            ...state.dataScreens[dsindx],
            cards: {
              ...state.dataScreens[dsindx].cards,
              [cardidx]: {
                ...state.dataScreens[dsindx].cards[cardidx],
                editCardMode: !state.dataScreens[dsindx].cards[cardidx].editCardMode
              }
            }
          }
        }
      });
    case types.TOGGLE_EDIT_METRIC_MODE:
      // const dsidx = action.dataScreenIndex;
      // const cardIdx = action.cardIndex;
      const metricIndex = action.metricIndex;
      return Object.assign({}, state, {
        ...state,
        editMetricMode: !state.editMetricMode,
        whichMetric: state.editMetricMode ? '' : metricIndex
      });
    case types.TOGGLE_SERVICE:
      const serviceID = action.serviceID;
      const alreadyChosen = action.alreadyChosen;
      const DSIndex = action.dataScreenIndex;
      const cardIndx = action.selectedCardIndex;
      const whichMetric = action.whichMetric;
      //need to get metric index too
      
      // let dataScreenServices = {};
      // const dataScreenMetricsArray = Object.values(state.dataScreens[DSIndex].cards[cardIndx].metrics[whichMetric]);
      // dataScreenMetricsArray.forEach((metric) => {
      //   dataScreenServices = Object.assign(dataScreenServices, metric.services)
      // });
      const services = state.dataScreens[DSIndex].cards[cardIndx].metrics[whichMetric].services;

      if (alreadyChosen) delete services[serviceID];
      if (!alreadyChosen) services[serviceID] = true;   

      return Object.assign({}, state, {
        ...state,
        dataScreens: {
          ...state.dataScreens,
          [DSIndex]: {
            ...state.dataScreens[DSIndex],
            cards: {
              ...state.dataScreens[DSIndex].cards,
              [cardIndx]: {
                ...state.dataScreens[DSIndex].cards[cardIndx],
                metrics:  {
                  ...state.dataScreens[DSIndex].cards[cardIndx].metrics,
                  [whichMetric]: {
                    ...state.dataScreens[DSIndex].cards[cardIndx].metrics[whichMetric],
                    services
                  }
                }
                // dataScreenServices 
              }
            }
          }
        }
      })
    case types.TOGGLE_METRIC:
      const metricID = action.metricID;
      const alrdyChosen = action.alreadyChosen;
      const DScIndex = action.dataScreenIndex;
      const crdIndex = action.selectedCardIndex;
      const metrics = state.dataScreens[DScIndex].cards[crdIndex].metrics;
      
      if (alrdyChosen) delete metrics[metricID];
      if (!alrdyChosen) metrics[metricID] = {
        services: {}
      };   

      return Object.assign({}, state, {
        ...state,
        dataScreens: {
          ...state.dataScreens,
          [DScIndex]: {
            ...state.dataScreens[DScIndex],
            cards: {
              ...state.dataScreens[DScIndex].cards,
              [crdIndex]: {
                ...state.dataScreens[DScIndex].cards[crdIndex],
                metrics 
              }
            }
          }
        }
      })
    case types.TOGGLE_GRAPH: 
      const newGraphIndex = action.newGraphIndex;
      const dataScreenIndex = action.dataScreenIndex;
      const cardIdx = action.cardIndex;
      return Object.assign({}, state, {
        ...state,
        dataScreens: {
          ...state.dataScreens,
          [dataScreenIndex]: {
            ...state.dataScreens[dataScreenIndex],
            cards: {
              ...state.dataScreens[dataScreenIndex].cards,
              [cardIdx]: {
                ...state.dataScreens[dataScreenIndex].cards[cardIdx],
                graphIndex: newGraphIndex 
              }
            }
          }
        }
      })
    default:
      return state;
  }
};

export default reducer;




  // serviceInfo: { //services are organized by which team in which cluster 
  //   cluster: {
  //     0: {
  //       name: 'Sandbox',
  //       team: {
  //         0: {
  //           name: 'DevEx',
  //           services: {
  //             0: {
  //               id: 0,
  //               name: 'Service 1', 
  //               status: 'ok'
  //             },
  //             1: {
  //               id: 1,
  //               name: 'Service 2', 
  //               status: 'ok'
  //             },
  //             2: {
  //               id: 2,
  //               name: 'Service 3', 
  //               status: 'ok'
  //             },
  //             3: {
  //               id: 3,
  //               name: 'Service 4', 
  //               status: 'ok'
  //             },
  //             4: {
  //               id: 4,
  //               name: 'Service 5', 
  //               status: 'ok'
  //             },
  //           }
  //         },
  //         1: {
  //           name: 'Reliability',
  //           services: {
  //             0: {
  //               id: 5,
  //               name: 'Service 6', 
  //               status: 'ok'
  //             },
  //             1: {
  //               id: 6,
  //               name: 'Service 7', 
  //               status: 'ok'
  //             },
  //             2: {
  //               id: 7,
  //               name: 'Service 8', 
  //               status: 'ok'
  //             },
  //           }
  //         }
  //       }
  //     },
  //     1: {
  //       name: 'NonProd',
  //       team: {
  //         0: {
  //           name: 'DevEx',
  //           services: {
  //             0: {
  //               id: 8,
  //               name: 'Service 1', 
  //               status: 'ok'
  //             },
  //             1: {
  //               id: 9,
  //               name: 'Service 2', 
  //               status: 'ok'
  //             },
  //             2: {
  //               id: 10,
  //               name: 'Service 3', 
  //               status: 'ok'
  //             },
  //             3: {
  //               id: 11,
  //               name: 'Service 4', 
  //               status: 'ok'
  //             },
  //             4: {
  //               id: 12,
  //               name: 'Service 5', 
  //               status: 'ok'
  //             },
  //           }
  //         },
  //         1: {
  //           name: 'Reliability',
  //           services: {
  //             0: {
  //               id: 13,
  //               name: 'Service 6', 
  //               status: 'ok'
  //             },
  //             1: {
  //               id: 14,
  //               name: 'Service 7', 
  //               status: 'ok'
  //             },
  //             2: {
  //               id: 15,
  //               name: 'Service 8', 
  //               status: 'ok'
  //             },
  //           }
  //         }
  //       }
  //     }
  //   }
  // },