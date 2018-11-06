import React, { Component } from 'react';
import './EditCard.css';
import EditCardTable from '../EditCardTable/EditCardTable';

class EditCard extends Component {
  render() {
    return (
      <div className='edit-card'>
        <EditCardTable {...this.props}/>
        {/* <button onClick={() => this.props.toggleEditCardMode(this.props.dataScreenIndex, this.props.cardIndex)}>X</button> */}
      </div>
    )
  }
}

export default EditCard;