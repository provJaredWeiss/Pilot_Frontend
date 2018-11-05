import React, { Component } from 'react';
import './GenerateTable.css';
import TableHeader from '../TableHeader/TableHeader';
import TableRow from '../TableRow/TableRow';


class GenerateTable extends Component { 
  render() {
    let maxLength = 0;
    const metricHeaders = Object.keys(this.props.tableData);
    metricHeaders.forEach((metricHeader) => {
      maxLength = Math.max(maxLength, this.props.tableData[metricHeader].length);
    })
    const amtOfMetricHeaders = metricHeaders.length;
    const rows = [];
    for (let i = 0; i < maxLength; i++) {
      let row = [];
      for (let j = 0; j < amtOfMetricHeaders; j++) {
        row.push(this.props.tableData[metricHeaders[j]] ? this.props.tableData[metricHeaders[j]] : '')
      }
      rows.push(row);
    }
    // console.log(metricHeaders)
    // console.log(rows)

    return (
      <div className='generate-table'>
        <table>
          <thead>
            <TableHeader headerData={metricHeaders} {...this.props}/>
          </thead>
          <tbody>
            {rows.map((row, i) => 
              <TableRow key={i} rowData={row} {...this.props}/>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default GenerateTable;