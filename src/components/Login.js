import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { saveLoginState } from '../actions';
import { GoogleLogin } from 'react-google-login';
import { loginUser } from '../utils';
import { loginStatusCode } from '../apiCodes';
import config from '../config';

class _Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      login_error: false
    };
  }

  responseGoogle = (res) => {
    loginUser({ tokenId: res.tokenId })
      .then(res => {
        if (res.result === loginStatusCode.LOGGED_IN) {
          this.props.saveLoginState(res);
        } else {
          this.props.saveLoginState();
        }
      })
      .catch(err => {
        this.setState({ login_error: true });
        console.log(err);
      });
  };

  render() {
    const { user } = this.props;
    if (user.isLoggedIn) {
      return (<Redirect to={'/dashboard'} />)
    }

    return (
      <div className="content">
        <GoogleLogin
          clientId={config.clientId}
          buttonText="Login with Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}/>
        { this.state.login_error && <b>Login failed!</b> }
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = { saveLoginState };
export const Login = connect(mapStateToProps, mapDispatchToProps)(_Login);