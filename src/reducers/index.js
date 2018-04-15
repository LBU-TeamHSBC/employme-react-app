import { combineReducers } from 'redux';

const isLoggedIn = (state=false, action) => {
  switch(action.type) {
    case 'IS_LOGGED_IN':
      return true;
    case 'IS_NOT_LOGGED_IN':
      return false;
    default:
      return state;
  }
};

const reducer = combineReducers({
  isLoggedIn
});

export default reducer;