export const isLoggedIn = loggedIn => {
  if (loggedIn) {
    return { type: 'IS_LOGGED_IN' };
  } else {
    return { type: 'IS_NOT_LOGGED_IN' };
  }
};