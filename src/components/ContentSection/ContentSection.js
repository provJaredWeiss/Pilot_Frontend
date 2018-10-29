import React, { Component } from 'react';
import './ContentSection.css';
import CardContainer from '../../containers/CardContainer';
import CardList from '../CardList/CardList';

class ContentSection extends Component {

  constructor() {
    super();
    this.state = {
      currentDataScreen: {}
    }
  }

  componentDidMount() {
    //based on props.whichDataScreen, get attributes for that data screen
    //put those attributes in array (array of card names w/ specs)
    //in render, will map the cards as components passing specs as props
    const currentDataScreen = this.props.dataScreens[this.props.dataScreenIndex];
    this.setState({currentDataScreen})
  }

  componentWillReceiveProps(nextProps) {
    //same as above w/ nextProps then setState
    const nextDataScreen = nextProps.dataScreens[nextProps.dataScreenIndex];
    this.setState({currentDataScreen: nextDataScreen})
  }

  componentDidUpdate() {
    // console.log(this.state.currentDataScreen.cards)
  }

  render() {
    // // this.state.currentDataScreen.cards ? console.log(this.state.currentDataScreen.cards.length) : console.log()
    // const metricIndices = this.state.currentDataScreen.cards ? Object.keys(this.state.currentDataScreen.cards).map((card) => this.state.currentDataScreen.cards[card].metric) : []    //should probably change this to get whole metric info so don't have to later
    // const metrics = metricIndices.map((metricIndex) => {
    //   const allMetricIndices = Object.keys(this.props.metrics);
    //   for (let i = 0; i < allMetricIndices.length; i++) {
    //     if (metrics[metricIndex].name === metrics[i].name) return metrics[i];
    //   }
    // })


    //the below fires no matter what, so add condition to only do this if on service page
    const cards = this.state.currentDataScreen.cards ? Object.values(this.state.currentDataScreen.cards) : '';
    const metrics = cards ? 
      cards.map((card) => {
        const allMetrics = Object.values(this.props.metrics);
        for (let i = 0; i < allMetrics.length; i++) {
          if (card.metric === allMetrics[i].name) {
            return allMetrics[i]
          }
        }
        return 'didnt find';
      })
      : [];

    return (
      <div id='content-section'>
        {
          this.props.whichScreen === 'service' 
          ? 
          metrics.length ? metrics.map((metric, i) => 
            <CardContainer 
              key={i} 
              cardIndex={i} 
              whichMetric={metric} 
              whichService={this.props.services[this.props.serviceIndex]} 
              {...this.props}/> ) : ''
          : 
          <div>
            <p>Rest of Main Display</p> 
            {this.props.mainTabs[this.props.mainIndex].name === 'Service Metrics' ? <CardList {...this.props}/> : ''}
            <button onClick={this.props.auth.logout}>Log Out</button>
          </div>
        }
      </div>
    )
  }
}

export default ContentSection;

// import React, { Component } from 'react';
// import './ContentSection.css';
// import Card from '../Card/Card';
// import CardList from '../CardList/CardList';

// class ContentSection extends Component {
//   render() {
//     return (
//       <div id='content-section'>
//         {
//           this.props.whichScreen === 'service' 
//           ? 
//           <Card whichMetric={this.props.metrics[this.props.metricIndex]} whichService={this.props.services[this.props.serviceIndex]} {...this.props}/> 
//           : 
//           <div>
//             <p>Rest of Main Display</p> 
//             {this.props.mainTabs[this.props.mainIndex].name === 'Service Metrics' ? <CardList {...this.props}/> : ''}
//             <button onClick={this.props.auth.logout}>Log Out</button>
//           </div>
//         }
//       </div>
//     )
//   }
// }

// export default ContentSection;