import React, { Component } from 'react';
import Auth from '../util/Auth';

class Callback extends Component {

  componentDidMount() {
    const auth = new Auth();
    auth.handleAuthentication();
    // this.props.auth.handleAuthentication();
  }

  render() {
    return (
      <div>
        <p>
          Welcome to the Callback page...
        </p>
      </div>
    )
  }
}

export default Callback;