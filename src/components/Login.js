import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { isLoggedIn } from '../actions';
import { GoogleLogin } from 'react-google-login';
import { loginUser } from '../utils';
import { login_status } from '../apiCodes';

class _Login extends Component {
  constructor(props) {
    super(props);
    this.clientId = "423585579744-ttjtm640ml2fbust2oun8b0de6738f71.apps.googleusercontent.com";
    this.state = {
      redirect: false,
      login_error: false
    };
  }

  responseGoogle = (res) => {
    loginUser({ tokenId: res.tokenId })
      .then(res => {
        if (res.result === login_status.LOGGED_IN) {
          sessionStorage.setItem('token', JSON.stringify(res.token));
          this.props.dispatch(isLoggedIn(true));
        } else {
          this.props.dispatch(isLoggedIn(false));
        }
      })
      .catch(err => {
        console.log("Login Failed!");
        console.log(err);
      });
  };

  render() {
    if (this.props.isLoggedIn) { // || sessionStorage.getItem('token')
      return (<Redirect to={'/dashboard'} />)
    }
    return (
      <div className="content">
        <GoogleLogin
          clientId={this.clientId}
          buttonText="Login with Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}/>
        { this.state.login_error && <b>Login failed!</b> }
      </div>
    );
  }
}

const mapStateToProps = ({ isLoggedIn }) => ({ isLoggedIn });

export const Login = connect(mapStateToProps)(_Login);