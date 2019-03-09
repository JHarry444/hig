import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import axios from 'axios';
import { PATH } from './consts';
import { Redirect } from 'react-router-dom';
import LoginForm from './LoginForm';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { authorised: false, error: "" };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${PATH}/login`, $("#loginForm").serialize(), {withCredentials: true, })
      .then(response => { console.log(response); this.setState({ authorised: response.status === 200 }); })
      .catch(error => { console.log(error); this.setState({ error: `${error}` }); });
  }
  render() {
    if (this.state.authorised) {
      return <Redirect to="/" />;
    } else {
      return (
        <LoginForm error={this.state.error} handleSubmit={this.handleSubmit} />
      );
    }
  }
}

export default Login;
