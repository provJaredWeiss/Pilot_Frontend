import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardMetricDisplay from '../components/CardMetricDisplay/CardMetricDisplay';
import EditCard from '../components/EditCard/EditCard';
import './CardMetricContainer.css';
import { requestData } from '../actions/actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  requestData: () => dispatch(requestData()),
});

class CardContainer extends Component {
  render() {
    return (
      <div className='card-container'>
        <div className='wrapper'>
          <CardMetricDisplay 
            {...this.props} 
            graphs={this.props.supportedGraphs ? this.props.supportedGraphs : ''} 
            // modifiers={this.props.whichMetric.modifiers ? this.props.whichMetric.modifiers : ''}
          />
          {this.props.editThisCardMode ? <EditCard {...this.props} /> : ''}
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
