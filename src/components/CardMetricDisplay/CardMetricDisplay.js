import React, { Component } from 'react';
import './CardMetricDisplay.css';
import Plot from 'react-plotly.js';


//CardMetricDisplay will reach attributes data (in state/in mem data) and get its renderer (spec to the type of metric we want):
  //api to req for data
  //what type of graph to display
  //what timeframe
  //what component


class CardMetricDisplay extends Component {

  constructor() {
    super();
    this.state = {
      // metricInfo: {},
      // data: [],
      // xVals: [],
      // yVals: [],
      data: {}
    }
  }

///////////////////////////////////////////////////////////////////////////////////////////////////
  componentDidMount() {
    //const startTime = this.props.startTime
    //const endTime = this.props.endTime
    //const timeStep = this.props.timeStep

    const startTime = 0;
    const endTime = 6000;
    const timeStep = 1000;
    // const whichService = this.props.whichServices;
    const whichServices = [0];
    // const whichService = this.props.whichMetrics;
    const whichMetrics = [{
      id: 0,
      name: 'Metric 1',
      //...
      supportedGraphs: ['bar', 'scatter'],
      graphIndex: 0,
    }];

    const dataTwo = this.props.dataTwo;

    function findRelevantMetrics(allData, metrics) {
      const dataMetrics = allData.metrics;
      const returnArr = metrics.map((desiredMetric) => dataMetrics[desiredMetric.id]);
      return returnArr;
    }

    function findRelevantServices(metric, services) {
      const dataServices = metric.services;
      const returnArr = services.map((desiredService) => dataServices[desiredService])
      return returnArr;
    }

    function parseVals(bucketsObj, tStart, tEnd, tStep) {
      let returnObj = {
        xVals: [],
        yVals: []
      }
      const buckets = Object.values(bucketsObj)
      let timeIterator = tStart;
      buckets.forEach((bucket) => {
        if (bucket.startTime >= timeIterator && bucket.endTime <= tEnd) {
          returnObj.xVals.push(bucket.endTime);
          returnObj.yVals.push(bucket.data);
        }
        timeIterator += tStep;
      })

      return returnObj;
    }

    function updateStateData(allData, desiredMetrics, desiredServices, timeStart, timeEnd, interval) {
      let returnObj = {}

      const relevantMetrics = findRelevantMetrics(allData, desiredMetrics); //returns array of metrics
      relevantMetrics.forEach((metric, i) => {
        const graphType = desiredMetrics[i].supportedGraphs[desiredMetrics[i].graphIndex]
        const relevantServices = findRelevantServices(metric, desiredServices); //returns array of services 
        // console.log(relevantServices)
        relevantServices.forEach((service, j) => {
          const parsedVals = parseVals(service.buckets, timeStart, timeEnd, interval) //returns obj w/ xVals & yVals properties 
          const xVals = parsedVals.xVals;
          const yVals = parsedVals.yVals;

          returnObj = Object.assign(returnObj, {
            ['m' + i.toString() + 's' + j.toString()]: {
              x: xVals,
              y: yVals,
              type: graphType
            }
          })
        })
      })
      return returnObj;
    }

    const dataForState = updateStateData(dataTwo, whichMetrics, whichServices, startTime, endTime, timeStep);
    this.setState({data: dataForState})
  
    //query store data for services and metrics for this specific card... also start time, end time, timestep
      //but only query for those services and metrics, not extra stuff

    //whichService is a prop
    //whichGraph is a prop
    //dataScreen graph index is/should be a prop
    //metric (prop) comes with default query params
    //metrics in query should be props too... select by card? probs
    //services in query should be props too... select by card? probs 

    //OLD SAMPLE DATA
    // const xVals = this.props.data.map((obj, i) => obj.timebenchmark + obj.timebenchmark * i);
    // const yVals = this.props.data.map(obj => obj.avgReqsServedPct);
    // this.setState({
    //   xVals, 
    //   yVals
    // })
  }
///////////////////////////////////////////////////////////////////////////////////////////////////


  //parse out which type of graph
  //use whichService
  //depending on type of graph, parse out other info (xVals, yVals, etc.)

  componentWillReceiveProps(nextProps) {
    
  }

  //parse props (whichservice, whichmetric) to query state for data
  //if not in state, query data from backend
  //use this.props.modifyData() to update data in state

  render() {
    console.log(this.state.data)
    // const dataForGraph = [{}, {}]
    const dataForGraph = Object.values(this.state.data);
    console.log(dataForGraph)
    //also need type: 'scatter', mode: 'lines+points', marker: {color: 'red'}
    return (
      <div className='card-metric-display'>
        {this.props.whichGraph ? 
        <Plot 
        className='plot'
        data={dataForGraph}
        // layout={ {title: 'A Fancy Plot'} }
        // responsive={true}
        //^ this doesn't work, probably need to grab div for card then get the size of it, then have width & height be equations
        layout={ {width: 500, height: 300, title: 'A Fancy Plot'} }
      />  
      : ''} 
        {/* <Plot 
          className='plot'
          data={[
            // {
            //   x: [1, 2, 3, 5],
            //   y: [2, 6, 3, 8],
            //   type: 'scatter',
            //   mode: 'lines+points',
            //   marker: {color: 'red'},
            // },
            {type: this.props.whichGraph, x: this.state.xVals, y: this.state.yVals, mode: this.props.whichGraph === 'scatter' ? 'lines+points' : '', marker: this.props.whichGraph === 'scatter' ? {color: 'red'} : {}},
            // {type: 'bar', x: [1, 2, 3, 5], y: [2, 5, 3, 8]},
          ]}
          // layout={ {title: 'A Fancy Plot'} }
          // responsive={true}
          //^ this doesn't work, probably need to grab div for card then get the size of it, then have width & height be equations
          layout={ {width: 500, height: 300, title: 'A Fancy Plot'} }
        />  
        : ''}    */}
      </div>
    )
  }
}

export default CardMetricDisplay;




// import React, { Component } from 'react';
// import './CardMetricDisplay.css';
// import Plot from 'react-plotly.js';


// //CardMetricDisplay will reach attributes data (in state/in mem data) and get its renderer (spec to the type of metric we want):
//   //api to req for data
//   //what type of graph to display
//   //what timeframe


// class CardMetricDisplay extends Component {

//   constructor() {
//     super();
//     this.state = {
//       graphType: ''
//     }
//   }

//   componentDidUpdate() {   <-- will have to change to componentWillReceiveProps
//     console.log('hi')
//     for (let i = 0; i < this.props.attributes.length; i++) {
//       if (this.props.attributes[i].metric === this.props.whichMetric.name) this.setState({graphType: this.props.attributes[i].graph}, () => {console.log(this.state.graphType)})
//     }
//   }

//   //parse props (whichservice, whichmetric) to query state for data
//   //if not in state, query data from backend
//   //use this.props.modifyData() to update data in state

//   render() {
//     const xVals = this.props.data.map((obj, i) => obj.timebenchmark + obj.timebenchmark * i);
//     const yVals = this.props.data.map(obj => obj.avgReqsServedPct);
//     return (
//       <div id='card-metric-display'>
//         <Plot
//           data={[
//             // {
//             //   x: [1, 2, 3, 5],
//             //   y: [2, 6, 3, 8],
//             //   type: 'scatter',
//             //   mode: 'lines+points',
//             //   marker: {color: 'red'},
//             // },
//             {type: this.state.graphType, x: xVals, y: yVals, mode: 'lines+points', marker: {color: 'red'}},
//             // {type: 'bar', x: [1, 2, 3, 5], y: [2, 5, 3, 8]},
//           ]}
//           // layout={ {title: 'A Fancy Plot'} }
//           // responsive={true}
//           //^ this doesn't work, probably need to grab div for card then get the size of it, then have width & height be equations
//           layout={ {width: 700, height: 500, title: 'A Fancy Plot'} }
//         />        
//       </div>
//     )
//   }
// }

// export default CardMetricDisplay;