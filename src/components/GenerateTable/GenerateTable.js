import React, { Component } from 'react';
import './GenerateTable.css';
import TableHeader from '../TableHeader/TableHeader';
import TableRow from '../TableRow/TableRow';


class GenerateTable extends Component { 
  render() {
    let maxLength = 0; //denotes the maximum number of services a metric is associated with (ie, the # of rows below the header in our 'edit card' table)
    const metricHeaders = Object.keys(this.props.tableData);
    metricHeaders.forEach((metricHeader) => {
      maxLength = Math.max(maxLength, this.props.tableData[metricHeader].length);
    })
    const amtOfMetricHeaders = metricHeaders.length;
    // console.log(amtOfMetricHeaders)
    const serviceRows = [];
    for (let i = 0; i < maxLength; i++) {
      let serviceRow = [];
      for (let j = 0; j < amtOfMetricHeaders; j++) {
        serviceRow.push(this.props.tableData[metricHeaders[j]] ? this.props.tableData[metricHeaders[j]][i] : '')
      }
      serviceRows.push(serviceRow);
    }
    // console.log(metricHeaders)
    // console.log(serviceRows)

    return (
      <div className='generate-table'>
        <table>
          <thead>
            <TableHeader headerData={metricHeaders} {...this.props}/>
          </thead>
          <tbody>
            {serviceRows.map((row, i) => 
              <TableRow key={i} rowData={row} {...this.props}/>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default GenerateTable;