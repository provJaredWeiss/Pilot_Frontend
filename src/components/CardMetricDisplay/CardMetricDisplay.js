import React, { Component } from 'react';
import './CardMetricDisplay.css';
import Plot from 'react-plotly.js';
import moment from 'moment';

//CardMetricDisplay will reach attributes data (in state/in mem data) and get its renderer (spec to the type of metric we want):
  //api to req for data
  //what type of graph to display
  //what timeframe
  //what component
//^ wrote this a while ago, so might not be perfect

class CardMetricDisplay extends Component {

  constructor() {
    super();
    this.state = {
      data: {},
      buttons: [] //this will be for Plotly layout -> buttons (so can toggle each dataset between graph types)
    }
  }
  
  getTimeInterval(timeStepText) {
    switch(timeStepText) {
      case 'second':
        return 1000;
      case 'minute':
        return 60000;
      case 'hour':
        return 3600000;
      case 'day': 
        return 86400000;
      case 'week':
        return 604800000;
      case 'month':
        return 2592000000; //assumes month = 30 days... may need to change?
      default: 
        return 0;
    }
  }

  parseDataVals(bucketsObj, tStart, tEnd, tStep) {
    console.log(bucketsObj)
    let returnObj = {
      xVals: [],
      yVals: [],
    }
    const buckets = Object.values(bucketsObj);

    //****************************************************
    // const timeInterval = this.getTimeInterval(tStep);
    //****************************************************

    //convert tstart and tend from moments to epoch b/c time data will be in epoch
    tStart = tStart.valueOf();  //rename
    tEnd = tEnd.valueOf();  //rename

    let timeIterator = tStart;
    let i = 0;

    while (timeIterator < tEnd) {
      let count = 0;
      let dataTotal = 0;

      if (buckets[i].startTime === timeIterator) {
        count++;
        dataTotal += buckets[i].data;
        returnObj.xVals.push((timeIterator) / count);
        returnObj.yVals.push(dataTotal/count);
        count = 0;
        dataTotal = 0;
        timeIterator = moment(timeIterator).add(1, tStep).valueOf();
      }

      else {
        count++;
        dataTotal += buckets[i].data;
      } 

      i += 1;
    }

    return returnObj;
  }

  servicesExistInState(m, svcs) { //metric, services
    svcs.forEach((svc) => {
      if (!m.services[svc]) return false;
    })
    return true;
  }

  findRelevantServices(metric, services) {
    if (this.servicesExistInState(metric, services)) {
      const dataServices = metric.services;
      const returnArr = services.map((desiredService) => dataServices[desiredService])
      return returnArr;
    }
    return [];
    //if they dont, query for what's missing in diff fxn and that fxn calls setState for data, meanwhile this fxn returns something so graph renders minimally
  }

  metricsExistInState(ad, m) { //allData (obj), metrics (array)
    m.forEach((met) => {
      if (!ad.metrics[met]) return false;
    })
    return true;
  }

  findRelevantMetrics(allData, metrics) {
    if (this.metricsExistInState(allData, metrics)) {
      const dataMetrics = allData.metrics;
      const returnArr = metrics.map((desiredMetric) => dataMetrics[desiredMetric.id]);
      return returnArr;
    }
    //if they dont, query for what's missing in diff fxn and that fxn calls setState for data, meanwhile this fxn returns something so graph renders minimally
    return [];
  }

  isQueryValid(momentStart, momentEnd, int) { //timeStart, timeEnd, interval
    // console.log('hi')
    const ts = momentStart.valueOf()
    const te = momentEnd.valueOf()
   
    if (ts > Date.now()) return false;
    if (te > Date.now()) return false;
    if (te < ts) return false;
    if ((te - te) < int) return false;
    return true;
  }

  generateNewStateParams(allData, desiredMetrics, timeStart, timeEnd, interval) { //timeStart & timeEnd are actually moments (moment.js), .valueOf() gets date in epoch format
    if (!this.isQueryValid(timeStart, timeEnd, interval)) {
      alert('invalid query')
      return [{},{}];
    };
    if (timeStart.valueOf() === timeEnd.valueOf()) {
      // console.log('hey');
      return [{},{}];
    }
    let returnDataObj = {};
    let returnButtonArr = [];
    // console.log('ho')
    const relevantMetrics = this.findRelevantMetrics(allData, desiredMetrics); //returns array of metrics
    if (!relevantMetrics.length) return [{},{}];

    relevantMetrics.forEach((metric, i) => {
      const supportedGraphs = desiredMetrics[i].supportedGraphs
      const initialGraphType = supportedGraphs[desiredMetrics[i].graphIndex];

      const relevantServices = this.findRelevantServices(metric, Object.keys(desiredMetrics[i].services)); //returns array of services 
      if (!relevantServices.length) return [{},{}];

      relevantServices.forEach((service, j) => {
        const parsedVals = this.parseDataVals(service.buckets, timeStart, timeEnd, interval) //returns obj w/ xVals & yVals properties 
        const xVals = parsedVals.xVals;
        const yVals = parsedVals.yVals;
        const dataSetName = 'm' + metric.id.toString() + 's' + service.id.toString()

        returnDataObj = Object.assign(returnDataObj, {
          [dataSetName]: {
            x: xVals,
            y: yVals,
            type: initialGraphType,
            name: dataSetName,
          }
        });

        // const buttons = this.generateButtons(dataSetName, supportedGraphs, )      <-- for plot layout params (each dataset can toggle its own graphtype with these buttons)
        // returnButtonArr = returnButtonArr.concat(buttons);
      });
    });
    return [returnDataObj, returnButtonArr];
  }

  componentDidMount() {
    // console.log('timestart')
    // console.log(this.props.timeVals.timeStart)
    // console.log('timeEnd')
    // console.log(this.props.timeVals.timeEnd)
    // console.log('blah')
    const startTime = this.props.timeVals.timeStart ? this.props.timeVals.timeStart : 0;
    const endTime = this.props.timeVals.timeEnd ? this.props.timeVals.timeEnd : 0;
    const timeStep = this.props.timeVals.timeStep ? this.props.timeVals.timeStep : '';
    
    const cardMetrics = this.props.card.metrics;
    const cardMetricIds = Object.keys(cardMetrics);
    const whichMetrics = cardMetricIds.map((cardMetricID) => 
      Object.assign(cardMetrics[cardMetricID], this.props.metricInfo[cardMetricID])
    );

    const dataTwo = this.props.dataTwo;

    const dataForState = this.generateNewStateParams(dataTwo, whichMetrics, startTime, endTime, timeStep)[0];
    console.log('dataforstate')
    console.log(dataForState)
    this.setState({
      data: dataForState, 
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.card.metrics !== prevProps.card.metrics || this.props.timeVals !== prevProps.timeVals) {
      const startTime = this.props.timeVals.timeStart ? this.props.timeVals.timeStart : 0
      const endTime = this.props.timeVals.timeEnd ? this.props.timeVals.timeEnd : 0
      const timeStep = this.props.timeVals.timeStep ? this.props.timeVals.timeStep : ''

      const cardMetrics = this.props.card.metrics;
      const cardMetricIds = Object.keys(cardMetrics);
      const whichMetrics = cardMetricIds.map((cardMetricID) => 
        Object.assign(cardMetrics[cardMetricID], this.props.metricInfo[cardMetricID])
      )

      const dataTwo = this.props.dataTwo;

      const dataForState = this.generateNewStateParams(dataTwo, whichMetrics, startTime, endTime, timeStep)[0];
      
      this.setState({
        data: dataForState, 
      })
    }
    else return null;
  }

  render() {
    const dataForGraph = Object.values(this.state.data).length ? Object.values(this.state.data) : [];
    
    return (
      <div className='card-metric-display'>
        {this.props.whichGraph 
        ? 
          <Plot 
            className='plot'
            data={dataForGraph}
            // responsive={true}      <-- this might work, or need to grab div for card then get the size of it, then have width & height be equations
            layout={{
              width: 500, 
              height: 300, 
              showlegend: true, 
              title: 'A Fancy Plot',
              updatemenus: [
                {
                  visible: true,
                  type: 'buttons',
                  x: 0,
                  xanchor: 'left',
                  y: 0,
                  yanchor: 'top',
                  buttons: [
                    {
                      visible: true,
                      method: 'restyle',
                      args: [{type: 'scatter'}],
                      //   {
                      //     label: 'scatter',
                      //     type: 'scatter'
                      //   },
                      //   {
                      //     label: 'bar',
                      //     type: 'bar'
                      //   }
                      // ],
                      label: 'scatter'
                    },
                    {
                      visible: true,
                      method: 'restyle',
                      args: [{type: 'bar'}],
                      label: 'bar'
                    },
                  ]
                },
              ]
            }}
        />  
      : ''} 
      </div>
    )
  }
}

export default CardMetricDisplay;