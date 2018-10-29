import React, { Component } from 'react';
import './App.css';
import Main from './auth-pages/Main';
import Dashboard from './auth-pages/Dashboard';
import NotFound from './auth-pages/NotFound';
import NoAccess from './auth-pages/NoAccess';
import Callback from './auth-pages/Callback';

class App extends Component {
  render() {
    let mainComponent = '';
    switch(this.props.location) {
      case "":
        mainComponent = <Main {...this.props}/>
        break
      case "callback":
        mainComponent = <Callback {...this.props}/>
        break;
      case "dashboard":
        mainComponent = this.props.auth.isAuthenticated() ? <Dashboard {...this.props} /> : <NoAccess />
        break;
      default:
        mainComponent = <NotFound />
    }
    return (
      <div className="App">
        {mainComponent}
      </div>
    );
  }
}

export default App;
