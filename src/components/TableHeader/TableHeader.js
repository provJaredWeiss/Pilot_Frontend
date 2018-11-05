import React, { Component } from 'react';
import './TableHeader.css';
import Cell from '../Cell/Cell';

class TableHeader extends Component { 
  render() {
    return (
      <tr>
        {this.props.headerData.map((cell, i) => 
          <th key={i}>
            <Cell header={true} {...this.props} cellData={this.props.metricInfo[cell]}/>
          </th>)}
      </tr>
    )
  }
}

export default TableHeader;