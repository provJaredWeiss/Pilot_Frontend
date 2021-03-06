import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
  render() {
    return (
      <div className='cell'>
        <p>{this.props.cellData ? this.props.cellData.name : ''}</p>

        {this.props.header 
        ? 
          <button 
            onClick={() => this.props.toggleEditMetricMode(this.props.dataScreenIndex, this.props.cardIndex, this.props.cellData.id)}
          >       
            {this.props.editMetricMode && this.props.whichMetric === this.props.cellData.id ? 'Done editing services' : 'Edit services'}
          </button> 
        : ''}
        
        {/* {this.props.cellData ? <button>-</button> : ''} */}
      </div>
    )
  }
}

export default Cell;