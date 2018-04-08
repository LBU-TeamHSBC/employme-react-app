import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';
import { postData } from '../utils';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.clientId = "423585579744-ttjtm640ml2fbust2oun8b0de6738f71.apps.googleusercontent.com";
    this.state = {
      redirect: false
    };
  }

  responseGoogle = (res) => {
    postData({ tokenId: res.tokenId })
      .then(res => {
        if (res.result === 'OK') {
          sessionStorage.setItem("userData", JSON.stringify(res.userData));
          this.setState({ redirect: true });
        } else {
          throw new Error("Authenticated but not Authorised!");
        }
      })
      .catch(err => {
        console.log("Login Failed!");
        console.log(err);
      });
  };

  render() {
    if (this.state.redirect || sessionStorage.getItem('userData')) {
      return (<Redirect to={'/dashboard'} />)
    }
    return (
      <div className="content">
        <GoogleLogin
          clientId={this.clientId}
          buttonText="Login with Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}/>
      </div>
    );
  }
}