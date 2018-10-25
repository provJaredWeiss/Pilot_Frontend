import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../App';
import './AppContainer.css';
import { switchScreen, switchCard, switchMainTab, switchService } from '../actions/actions';

const mapStateToProps = state => ({
  whichScreen: state.whichScreen,
  cards: state.cards,
  cardIndex: state.cardIndex,
  mainTabs: state.mainTabs,
  mainIndex: state.mainIndex,
  services: state.services,
  serviceIndex: state.serviceIndex
});

const mapDispatchToProps = dispatch => ({
  switchScreen: () => dispatch(switchScreen()),
  switchCard: (newCardIndex) => dispatch(switchCard(newCardIndex)),
  switchMainTab: (newMainIndex) => dispatch(switchMainTab(newMainIndex)),
  switchService: (newServiceIndex) => dispatch(switchService(newServiceIndex))
});

class AppContainer extends Component {

  render() {
    return (
      <div id='app-container'>
        <App {...this.props}/>
      </div>
    );
  } 
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
