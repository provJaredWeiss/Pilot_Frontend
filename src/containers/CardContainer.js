import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card/Card';
import './CardContainer.css';
import { toggleGraph } from '../actions/actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  toggleGraph: (newGraphIndex, dataScreenIndex, cardIndex) => dispatch(toggleGraph(newGraphIndex, dataScreenIndex, cardIndex))
});

class CardContainer extends Component {

  render() {
    return (
      <div id='card-container'>
        <Card whichGraph={this.props.whichMetric.supportedGraphs ? this.props.whichMetric.supportedGraphs[this.props.dataScreens[this.props.dataScreenIndex].cards[this.props.cardIndex].graphIndex] : ''} {...this.props}/>
      </div>
    );
  } 
};

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
