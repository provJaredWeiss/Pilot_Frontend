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
      data: {},
      buttons: []
    }
  }

  parseDataVals(bucketsObj, tStart, tEnd, tStep) {
    let returnObj = {
      xVals: [],
      yVals: [],
    }
    const buckets = Object.values(bucketsObj)
    
    let timeIterator = tStart;
    let i = 0;
    while (timeIterator <= tEnd) {
      let count = 0;
      let dataTotal = 0;
      if (buckets[i].startTime === timeIterator) {
        count++;
        dataTotal += buckets[i].data;
        returnObj.xVals.push((timeIterator) / count);
        returnObj.yVals.push(dataTotal/count);
        count = 0;
        dataTotal = 0;
        timeIterator += tStep;
      }
      else {
        count++;
        dataTotal += buckets[i].data;
      } 

      i += 1
    }

    return returnObj;
  }

  findRelevantServices(metric, services) {
    const dataServices = metric.services;
    const returnArr = services.map((desiredService) => dataServices[desiredService])
    return returnArr;
  }

  findRelevantMetrics(allData, metrics) {
    const dataMetrics = allData.metrics;
    const returnArr = metrics.map((desiredMetric) => dataMetrics[desiredMetric.id]);
    return returnArr;
  }

  generateNewStateParams(allData, desiredMetrics, timeStart, timeEnd, interval) {
    let returnDataObj = {};
    let returnButtonArr = [];
    
    const relevantMetrics = this.findRelevantMetrics(allData, desiredMetrics); //returns array of metrics
    
    relevantMetrics.forEach((metric, i) => {
      const supportedGraphs = desiredMetrics[i].supportedGraphs
      const initialGraphType = supportedGraphs[desiredMetrics[i].graphIndex];

      const relevantServices = this.findRelevantServices(metric, Object.keys(desiredMetrics[i].services)); //returns array of services 
      
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

        // const buttons = this.generateButtons(dataSetName, supportedGraphs, )
        // returnButtonArr = returnButtonArr.concat(buttons);
      });
    });
    return [returnDataObj, returnButtonArr];
  }

  componentDidMount() {
    const startTime = this.props.text.timeStart || this.props.text.timeStart === 0 ? parseInt(this.props.text.timeStart) : 0
    const endTime = this.props.text.timeEnd ? parseInt(this.props.text.timeEnd) : 0
    const timeStep = this.props.text.timeStep ? parseInt(this.props.text.timeStep) : 0

    // const startTimeTwo = parseInt(this.props.text.timeStart) 
    // const endTimeTwo = parseInt(this.props.text.timeEnd)
    // const timeStepTwo = parseInt(this.props.text.timeStep)

    // if (!endTime) return 
    // const startTime = 0;
    // const endTime = 6000;
    // const timeStep = 2000;
    
    const cardMetrics = this.props.card.metrics;
    const cardMetricIds = Object.keys(cardMetrics);
    const whichMetrics = cardMetricIds.map((cardMetricID) => 
      Object.assign(cardMetrics[cardMetricID], this.props.metricInfo[cardMetricID])
    );

    const dataTwo = this.props.dataTwo;

    const dataForState = this.generateNewStateParams(dataTwo, whichMetrics, startTime, endTime, timeStep)[0];
    this.setState({
      data: dataForState, 
      // cardMetrics: cardMetrics
    });
  }

  componentDidUpdate(prevProps) {
    // console.log('hey')
    console.log(this.props.text)
    console.log(prevProps.text)
    // console.log(this.props.card.metrics)
    // console.log(prevProps.card.metrics)
    console.log(this.props.card.metrics !== prevProps.card.metrics)
    if (this.props.card.metrics !== prevProps.card.metrics || this.props.text !== prevProps.text) {
      console.log('hi')
      const startTime = this.props.text.timeStart ? parseInt(this.props.text.timeStart) : 0
      const endTime = this.props.text.timeEnd ? parseInt(this.props.text.timeEnd) : 0
      const timeStep = this.props.text.timeStep ? parseInt(this.props.text.timeStep) : 0
      // const startTime = 0;
      // const endTime = 6000;
      // const timeStep = 1000;
      // console.log(this.props.text)
      // const startTime = parseInt(this.props.text.startTime)
      // const endTime = parseInt(this.props.text.endTime)
      // const timeStep = parseInt(this.props.text.timeStep)

      const cardMetrics = this.props.card.metrics;
      const cardMetricIds = Object.keys(cardMetrics);
      const whichMetrics = cardMetricIds.map((cardMetricID) => 
        Object.assign(cardMetrics[cardMetricID], this.props.metricInfo[cardMetricID])
      )

      const dataTwo = this.props.dataTwo;
      // console.log('whichMetrics')
      // console.log(whichMetrics)
      const dataForState = this.generateNewStateParams(dataTwo, whichMetrics, startTime, endTime, timeStep)[0];
      
      this.setState({
        data: dataForState, 
      })
    }
    else return null;
  }

  render() {
    console.log(this.state.data)
    const dataForGraph = Object.values(this.state.data);
    // console.log(dataForGraph)
    
    return (
      <div className='card-metric-display'>
        {this.props.whichGraph 
        ? 
          <Plot 
            className='plot'
            data={dataForGraph}
            // responsive={true}
            //^ this might work, or need to grab div for card then get the size of it, then have width & height be equations
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