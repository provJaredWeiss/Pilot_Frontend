import React, { Component } from 'react';
import './TableRow.css';
import Cell from '../Cell/Cell';

class TableRow extends Component { 
  render() {
    return (
      <tr>
        {this.props.rowData.map((cell, i) => 
          <td key={i}>
            <Cell cellData={cell ? this.props.serviceInfo[cell] : null} {...this.props} />
          </td>)}
      </tr>
    )
  }
}

export default TableRow;