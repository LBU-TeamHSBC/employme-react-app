import React from 'react';
import { Redirect } from 'react-router-dom'

export function Logout(props) {
  sessionStorage.removeItem('userData');
  return <Redirect to={'/'} />;
}