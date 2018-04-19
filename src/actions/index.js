export const saveLoginState = state => {
  if (!state) {
    return { type: 'CLEAR_LOGIN_STATE' };
  }
  return {
    type: 'SET_LOGIN_STATE',
    data: {
      uid: state.uid,
      email: state.email,
      username: state.username,
      token: state.token
    }
  };
}