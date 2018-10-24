import * as types from '../actions/actionTypes';

const initialState = {
  whichScreen: 'main' //as opposed to 'service'
};

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case types.SWITCH_SCREEN:
      return Object.assign({}, state, {
        whichScreen: !state.whichScreen
      })
    default:
      return state;
  }
};

export default reducer;