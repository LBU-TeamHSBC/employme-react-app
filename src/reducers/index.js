import { combineReducers } from 'redux';

function getInitialLoginState() {
  if (!localStorage.getItem('uid')) {
    return { isLoggedIn: false };
  } else {
    return {
      isLoggedIn: true,
      uid: localStorage.getItem('uid'),
      token: localStorage.getItem('token'),
      username: localStorage.getItem('username'),
      email: localStorage.getItem('email'),
    };
  }
}

function saveLoginState(data) {
  localStorage.setItem('uid', data.uid);
  localStorage.setItem('token', data.token);
  localStorage.setItem('username', data.username);
  localStorage.setItem('email', data.email);
}

function clearLoginState() {
  localStorage.removeItem('uid');
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  localStorage.removeItem('email');
}

const user = (state=getInitialLoginState(), action) => {
  switch(action.type) {
    case 'CLEAR_LOGIN_STATE':
      clearLoginState();
      return { isLoggedIn: false };
    case 'SET_LOGIN_STATE':
      saveLoginState(action.data);
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