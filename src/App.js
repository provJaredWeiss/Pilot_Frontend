import React, { Component } from 'react';
import './App.css';
import Main from './outer-components/Main';
import Dashboard from './outer-components/Dashboard';
import NotFound from './outer-components/NotFound';
import NoAccess from './outer-components/NoAccess';
import Callback from './outer-components/Callback';

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
