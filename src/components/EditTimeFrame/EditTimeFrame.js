import React, { Component } from 'react';
import './EditTimeFrame.css';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css'

class EditTimeFrame extends Component {

  constructor() {
    super();
    this.state = {                 // <------------------------------ don't need this state, use the state in card and pass down fxns!!!!!!!!!!
      timeVals: {
        timeStart: moment().startOf('minute'),
        timeEnd: moment().startOf('minute'),
        timeStep: 'default',
      }
    };
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.handleTimeStepChange = this.handleTimeStepChange.bind(this);
  }

  componentDidMount() {
    let timeVals = this.props.timeVals;
    this.setState({timeVals})
  }

  handleStartChange(date) {
    this.setState({
      timeVals: {
        ...this.state.timeVals,
        timeStart: date.startOf('minute')    //rounds date to nearest minute
      }
    })
  }

  handleEndChange(date) {
    this.setState({
      timeVals: {
        ...this.state.timeVals,
        timeEnd: date.startOf('minute')
      }
    })
  }

  handleTimeStepChange(e) {
    this.setState({
      timeVals: {
        ...this.state.timeVals,
        timeStep: e.target.value
      }
    })
  }

  render() {

    return (
      <div className='edit-time-frame'>

        <DatePicker
          selected={this.state.timeVals.timeStart}
          onChange={this.handleStartChange}
          showTimeSelect
          timeIntervals={1}
          dateFormat='LLL'
        />
        <DatePicker
          selected={this.state.timeVals.timeEnd}
          onChange={this.handleEndChange}
          showTimeSelect
          timeIntervals={1}
          dateFormat='LLL'
        />
        <select
          value={this.state.timeVals.timeStep}
          onChange={this.handleTimeStepChange}
        >
          <option value='default'>By: (time interval)</option>
          <option value='second'>second</option>
          <option value='minute'>minute</option>
          <option value='hour'>hour</option>
          <option value='day'>day</option>
          <option value='week'>week</option>
          <option value='month'>month</option>
        </select>
        <button onClick={() => this.props.editTimeFrame(this.state.timeVals)}>Submit Timeframe Edit</button>
      </div>
    )
  }
}

export default EditTimeFrame;