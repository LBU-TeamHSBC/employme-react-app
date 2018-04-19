import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveLoginState } from '../actions';

function _Logout({ saveLoginState }) {
  saveLoginState();
  return <Redirect to={'/'} />;
}

const mapDispatchToProps = { saveLoginState };
export const Logout = connect(null, mapDispatchToProps)(_Logout);