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
      data: [],
      xVals: [],
      yVals: [],
    }
  }

///////////////////////////////////////////////////////////////////////////////////////////////////
  componentDidMount() {
  //query store data for services and metrics for this specific card... also start time, end time, timestep
    //but only query for those services and metrics, not extra stuff


    //whichService is a prop
    //whichGraph is a prop
    //dataScreen graph index is/should be a prop
    //metric (prop) comes with default query params
    //metrics in query shoule be props too... select by card? probs
    //services in query should be props too... select by card? probs
    const xVals = this.props.data.map((obj, i) => obj.timebenchmark + obj.timebenchmark * i);
    const yVals = this.props.data.map(obj => obj.avgReqsServedPct);
    this.setState({
      xVals, 
      yVals
    })
  }
///////////////////////////////////////////////////////////////////////////////////////////////////


  //parse out which type of graph
  //use whichService
  //depending on type of graph, parse out other info (xVals, yVals, etc.)

  // componentWillReceiveProps(nextProps) {
   
  // }

  //parse props (whichservice, whichmetric) to query state for data
  //if not in state, query data from backend
  //use this.props.modifyData() to update data in state

  render() {
    return (
      <div id='card-metric-display'>
        {this.props.whichGraph ? 
        <Plot 
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
          layout={ {width: 700, height: 500, title: 'A Fancy Plot'} }
        />  
        : ''}   
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