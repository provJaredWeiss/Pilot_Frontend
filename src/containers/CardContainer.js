import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card/Card';
import './CardContainer.css';
import { toggleGraph, modifyServicesMode, modifyMetricsMode } from '../actions/actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  toggleGraph: (newGraphIndex, dataScreenIndex, cardIndex) => dispatch(toggleGraph(newGraphIndex, dataScreenIndex, cardIndex)),
  modifyServicesMode: (cardIndex) => dispatch(modifyServicesMode(cardIndex)),
  modifyMetricsMode: (cardIndex) => dispatch(modifyMetricsMode(cardIndex)),
});

class CardContainer extends Component {
  render() {
    return (
      <div id='card-container'>
        <Card 
          whichGraph={this.props.supportedGraphs ? this.props.supportedGraphs[this.props.graphIndex] : ''}
          metricInfos={this.props.metricsOfCard ? Object.keys(this.props.metricsOfCard).map((metricIndex) => this.props.metrics[metricIndex]) : ''}
          serviceInfos={this.props.servicesOfCard ? Object.keys(this.props.servicesOfCard).map((serviceIndex) => this.props.services[serviceIndex]) : ''}
          {...this.props}
          // whichGraph={this.props.whichMetric.supportedGraphs ? this.props.whichMetric.supportedGraphs[this.props.dataScreens[this.props.dataScreenIndex].cards[this.props.cardIndex].graphIndex] : ''} {...this.props}
        />
      </div>
    );
  } 
};

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
