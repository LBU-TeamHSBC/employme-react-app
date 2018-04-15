import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { isLoggedIn } from '../actions';

function _Logout({ dispatch }) {
  dispatch(isLoggedIn(false));
  sessionStorage.removeItem('token');
  return <Redirect to={'/'} />;
}

export const Logout = connect()(_Logout);