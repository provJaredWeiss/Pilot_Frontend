import * as types from './actionTypes';

export const switchScreen = () => ({
  type: types.SWITCH_SCREEN
});

export const switchMainTab = (newMainIndex) => ({ //needs better name
  type: types.SWITCH_MAINTAB,
  newMainIndex: newMainIndex
});

export const switchCard = (newCardIndex) => ({
  type: types.SWITCH_CARD,
  newCardIndex: newCardIndex
});

export const switchService = (newServiceIndex) => ({
  type: types.SWITCH_SERVICE,
  newServiceIndex: newServiceIndex
});