import React, { Component } from 'react';
import './LeftNav.css';
import SelectedServiceDiv from '../SelectedServiceDiv/SelectedServiceDiv';

class LeftNav extends Component {
  //will need logic for which services to display based on cluster and team preferences instead of dislaying ALL services as this is currently doing

  constructor() {
    super();
    this.state = {
      servicesForNav: {},
      // dataScreenServicesByMetric: {}
    }
  }

  componentDidMount() {
    // console.log(this.props.dataScreens[this.props.dataScreenIndex].cards[this.props.selectedCardIndex].metrics)
    // console.log(this.props.dataScreens)
    // console.log(this.props.dataScreens)
    let relevantServiceIDs = {};

    const whichClustersInfo = this.props.whichClusters.map(clusterID => this.props.clusterInfo[clusterID]);
    const whichTeamsInfo = this.props.whichTeams.map(teamID => this.props.teamInfo[teamID]);
    whichClustersInfo.forEach((clusterInfo) => {
      relevantServiceIDs = Object.assign(relevantServiceIDs, clusterInfo.services)
    })
    whichTeamsInfo.forEach((teamInfo) => {
      relevantServiceIDs = Object.assign(relevantServiceIDs, teamInfo.services)
    })

    const relevantServiceInfos = Object.keys(relevantServiceIDs).map((serviceID) => this.props.serviceInfo[serviceID]);
    this.setState({servicesForNav: relevantServiceInfos})
    // let dataScreenServicesByMetric = {}

    // const dataScreenMetricsArray = Object.values(this.props.dataScreens[this.props.dataScreenIndex].cards[this.props.selectedCardIndex].metrics);
    // dataScreenMetricsArray.forEach((metric) => {
    //   dataScreenServicesByMetric = Object.assign(dataScreenServicesByMetric,  metric.services)
    // });
    // this.setState({
    //   servicesForNav: relevantServiceInfos,
    //   dataScreenServicesByMetric
    // })
  }

  render() {
    // console.log(this.state.services)
    return (
      <nav>
        {
          this.state.servicesForNav.length ? 
            Object.values(this.state.servicesForNav).map((service, i) => 
              <div 
                className='service' 
                key={i} 
              >
                <div className='fill-space'></div>
                <div>{service.name}</div>
                <SelectedServiceDiv 
                  {...this.props}
                  serviceID={service.id}
                  alreadyChosen={this.props.whichMetric || this.props.whichMetric === 0 ? this.props.dataScreens[this.props.dataScreenIndex].cards[this.props.selectedCardIndex].metrics[this.props.whichMetric].services[service.id] : ''}
                  // alreadyChosen={this.state.dataScreenServices[service.id] ? true : false}
                  // alreadyChosen={this.props.dataScreens[this.props.dataScreenIndex].cards[this.props.selectedCardIndex].services[i.toString()] ? true : false}
                />
              </div>)
            : <div></div>
        }
      </nav>
    )
  }
}

export default LeftNav;

//check if service is in this selected card's list of services

// this.props.dataScreens[this.props.dataScreenIndex].cards[this.props.selectedCardIndex].services