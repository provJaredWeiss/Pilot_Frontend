import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card/Card';
import './CardContainer.css';
import { toggleGraph, toggleEditCardMode, toggleEditMetricMode } from '../actions/actions';

const mapStateToProps = state => ({
  editMetricMode: state.editMetricMode,
  whichMetric: state.whichMetric
});

const mapDispatchToProps = dispatch => ({
  toggleGraph: (newGraphIndex, dataScreenIndex, cardIndex) => dispatch(toggleGraph(newGraphIndex, dataScreenIndex, cardIndex)),
  toggleEditCardMode: (dataScreenIndex, cardIndex) => dispatch(toggleEditCardMode(dataScreenIndex, cardIndex)),
  toggleEditMetricMode: (dataScreenIndex, cardIndex, metric) => dispatch(toggleEditMetricMode(dataScreenIndex, cardIndex, metric))
});

class CardContainer extends Component {
  render() {
    return (
      <div id='card-container'>
        <Card 
          editThisCardMode={this.props.dataScreens[this.props.dataScreenIndex].cards[this.props.cardIndex].editCardMode}
          whichGraph={this.props.supportedGraphs ? this.props.supportedGraphs[this.props.graphIndex] : ''}
          // metricInfos={this.props.metricsOfCard ? Object.keys(this.props.metricsOfCard).map((metricID) => this.props.metricInfo[metricID]) : ''}
          // serviceInfos={this.props.servicesOfCard ? Object.keys(this.props.servicesOfCard).map((serviceID) => this.props.serviceInfo[serviceID]) : ''}
          {...this.props}
          // whichGraph={this.props.whichMetric.supportedGraphs ? this.props.whichMetric.supportedGraphs[this.props.dataScreens[this.props.dataScreenIndex].cards[this.props.cardIndex].graphIndex] : ''} {...this.props}
        />
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
