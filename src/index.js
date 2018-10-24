import React from 'react';
import { render } from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Auth from './util/Auth';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import reducer from './reducers/reducer';

const auth = new Auth();


function configureStore(preloadedState) {
  const enhancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware));
  return createStore(reducer, preloadedState, enhancer);
}

const store = configureStore();

let state = {};
window.setState = (changes) => {
  state = Object.assign({}, state, changes);

  render(
    <Provider store={store}>
      {/* <Router> */}
        <App {...state} />
      {/* </Router> */}
    </Provider>
    , document.getElementById('root')
  );
}

let initialState = {
  name: 'Jared',
  location: window.location.pathname.replace(/^\/?|\/$/g, ""),
  auth,
  whichScreen: 'main'
}

window.setState(initialState)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
