import React, { Component } from 'react';
import './EditTimeFrame.css';

class EditTimeFrame extends Component {

  constructor() {
    super();
    this.state = {
      text: {
        timeStart: '',
        timeEnd: '',
        timeStep: '',
      }
    };
    this.updateTimeStart = this.updateTimeStart.bind(this);
    this.updateTimeEnd = this.updateTimeEnd.bind(this);
    this.updateTimeStep = this.updateTimeStep.bind(this);
  }

  updateTimeStart(event) {
    this.setState({
      text: {
        ...this.state.text,
        timeStart: event.target.value
      }
    })
  }

  updateTimeEnd(event) {
    this.setState({
      text: {
        ...this.state.text,
        timeEnd: event.target.value
      }
    })
  }

  updateTimeStep(event) {
    this.setState({
      text: {
        ...this.state.text,
        timeStep: event.target.value
      }
    })
  }

  render() {
    return (
      <div className='edit-time-frame'>
        <input 
          type='text' 
          name='timeStart' 
          placeholder='start time'
          // value={this.state.text.timeStart}
          onChange={this.updateTimeStart}
        />
        <input 
          type='text' 
          name='timeEnd' 
          placeholder='end time'
          // value={this.state.text.timeEnd}
          onChange={this.updateTimeEnd}
        />
        <input 
          type='text' 
          name='timeStep' 
          placeholder='time step'
          // value={this.state.text.timeStep}
          onChange={this.updateTimeStep}
        />
        <button onClick={() => this.props.editTimeFrame(this.state.text)}>Submit Timeframe Edit</button>
      </div>
    )
  }
}

export default EditTimeFrame;