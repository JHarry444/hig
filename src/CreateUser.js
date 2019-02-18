import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import axios from 'axios';
import { PATH } from './consts';

class CreateUser extends Component {


  handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${PATH}/newUser`, $('#userForm').serialize(), {mode: "no-cors"})
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div>
        <p>Create User</p>
        <form id="userForm" onSubmit={this.handleSubmit}>
          <label htmlFor="userName">Username</label>
          <input name="username" />
          <label htmlFor="password">Password</label>
          <input name="password" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateUser;
