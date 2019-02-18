import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { PATH } from './consts';

class LoginForm extends Component {

  onClick = () => {
    axios.get(`${PATH}/user`).then(r => console.log(r)).catch(e => console.log(e));
  }

  render() {
    return (
      <div>
        <p className="error">{this.props.error}</p>
        <p>Login</p>
        <form id="loginForm" onSubmit={this.props.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input name="username" />
          <label htmlFor="password">Password</label>
          <input name="password" />
          <button>Submit</button>
        </form>
        <input type="button" onClick={this.onClick} value="Test User"/>
      </div>
    );
  }
}

export default LoginForm;
