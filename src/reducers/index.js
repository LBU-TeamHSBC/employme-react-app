import { combineReducers } from 'redux';

const user = (state={ isLoggedIn: false }, action) => {
  switch(action.type) {
    case 'CLEAR_LOGIN_STATE':
      return { isLoggedIn: false };
    case 'SET_LOGIN_STATE':
      return {
        ...action.data,
        isLoggedIn: true
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  user
});

export default reducer;