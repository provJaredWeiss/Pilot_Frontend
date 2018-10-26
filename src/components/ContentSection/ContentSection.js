import React, { Component } from 'react';
import './ContentSection.css';
import Card from '../Card/Card';
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
    console.log('hi')
    const nextDataScreen = nextProps.dataScreens[nextProps.dataScreenIndex];
    this.setState({currentDataScreen: nextDataScreen})
  }

  componentDidUpdate() {
    console.log(this.state.currentDataScreen.cards)
  }

  render() {
    this.state.currentDataScreen.cards ? console.log(this.state.currentDataScreen.cards.length) : console.log()
    const metrics = this.state.currentDataScreen.cards ? this.state.currentDataScreen.cards.map((card) => card.metric) : []
    return (
      <div id='content-section'>
        {
          this.props.whichScreen === 'service' 
          ? 
          metrics.length ? metrics.map((metric, i) => <Card key={i} whichMetric={metric} whichService={this.props.services[this.props.serviceIndex]} {...this.props}/> ) : ''
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