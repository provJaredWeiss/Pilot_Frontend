import * as types from '../actions/actionTypes';

const initialState = {
  whichScreen: 'main', //as opposed to 'service'
  cards: [
    {
      name: 'Card 1',
      description: '....', // 2 choices: either have all card info in state for all cards, or just one prop of state that has the props of the spec card we're looking at (prbly the latter)
      sampleImg: '',       // ^ for option 2, using the name of the card and service, we will look up necessary data...
      
    }, 
    {name: 'Card 2'}, 
    {name: 'Card 3'}, 
    {name: 'Card 4'}, 
    {name: 'Card 5'}],
  cardIndex: 0,
  mainTabs: [{name: 'General Info'}, {name: 'Service Metric Cards'}, {name: 'RCA'}, {name: 'Create/Migrate'}, {name: 'Other'}], 
  mainIndex: 0, //need a better name, this is for the nav on the main screen (but the service screen nav i'm calling 'cards', hence 'cardIndex')
  services: [{name: 'Service 1', status: 'ok'}, {name: 'Service 2', status: 'ok'}, {name: 'Service 3', status: 'ok'}, {name: 'Service 4', status: 'ok'}, {name: 'Service 5', status: 'ok'}],
  serviceIndex: 0
};

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case types.SWITCH_SCREEN:
      return Object.assign({}, state, {
        whichScreen: state.whichScreen === 'main' ? 'service' : 'main'
      });
    case types.SWITCH_CARD: 
      let newCardIndex = action.newCardIndex;
      return Object.assign({}, state, {
        cardIndex: newCardIndex
      });
    case types.SWITCH_MAINTAB:
      let newMainIndex = action.newMainIndex;
      return Object.assign({}, state, {
        mainIndex: newMainIndex
      });
    case types.SWITCH_SERVICE:
      let newServiceIndex = action.newServiceIndex;
      return Object.assign({}, state, {
        serviceIndex: newServiceIndex
      });
    default:
      return state;
  }
};

export default reducer;