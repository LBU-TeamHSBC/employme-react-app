import { combineReducers } from 'redux';

const getDefaultState = _ => {
  if (sessionStorage.getItem('token')) {
    return true;
  }
  return false;
}

const isLoggedIn = (state=getDefaultState(), action) => {
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