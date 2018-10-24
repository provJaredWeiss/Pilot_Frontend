import React, { Component } from 'react';
import logo from '../logo.svg';

class Main extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {this.props.name}.
          Edit <code>src/App.js</code> and save to reload <br/>
          Do you want to see your dashboard? <a href={'/dashboard'}> Click here </a>
        </p>
        {!this.props.auth.isAuthenticated() ? 
          <div>
            <p>
              Please login
            </p>
            <button onClick={this.props.auth.login}>Login</button>
          </div>
          :
          <div></div>
        }
      </header>
    )
  }
}

export default Main;