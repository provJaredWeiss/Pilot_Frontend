import React, { Component } from 'react';
import './EditCardTable.css';
// import EditCardTableHeader from '../EditCardTableHeader/EditCardTableHeader';
import GenerateTable from '../GenerateTable/GenerateTable';

class EditCardTable extends Component {
  render() {
    // console.log(this.props.card)  

    let tableData = {};
    let metrics = this.props.card.metrics;
    let metricIDsForCard = Object.keys(metrics);
    metricIDsForCard.forEach((metricID) => {
      let serviceIDsForMetric = Object.keys(metrics[metricID].services);
      // let serviceNamesForMetric = serviceIDsForMetric.map((serviceID) => this.props.serviceInfo[serviceID].name);
      
      // console.log('service ids for metric')
      // console.log(serviceIDsForMetric)
      if (!serviceIDsForMetric.length) tableData[metricID] = '';
      else {
        serviceIDsForMetric.forEach((serviceID) => {
          tableData[metricID] ? tableData[metricID].push(serviceID) : tableData[metricID] = [serviceID] //e.g. {metric1: [service1, service2]}
        })
      }
    })
    // console.log(tableData)
    return (
      <div className='edit-card-Table'>
        <GenerateTable tableData={tableData} {...this.props}/>
      </div>
    )
  }
}

export default EditCardTable;