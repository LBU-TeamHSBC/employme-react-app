import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';
import { loginUser } from '../utils';
import { login_status } from '../apiCodes';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.clientId = "423585579744-ttjtm640ml2fbust2oun8b0de6738f71.apps.googleusercontent.com";
    this.state = {
      redirect: false,
      login_error: false
      // signup: false
    };
  }

  responseGoogle = (res) => {
    loginUser({ tokenId: res.tokenId })
      .then(res => {
        if (res.result === login_status.LOGGED_IN) {
          sessionStorage.setItem('token', JSON.stringify(res.token));
          this.setState({
            redirect: true,
            login_error: false
          });
        // } else if (res.result === 'SIGNUP') {
        //   this.setState({ redirect: false, signup: true })
        } else {
          this.setState({ login_error: true });
        }
      })
      .catch(err => {
        console.log("Login Failed!");
        console.log(err);
      });
  };

  render() {
    if (this.state.redirect || sessionStorage.getItem('token')) {
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