import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import axios from 'axios';
import { PATH } from './consts';

class CreateUser extends Component {

  constructor(props) {
    super(props);
    this.state = { output: "" };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${PATH}/newUser`, $('#userForm').serialize())
      .then(response => this.setState({ output: "User created successfully" }))
      .catch(error => this.setState({ output: "Failed to create user" }));

  }
  render() {
    return (
      <div>
        <p>{this.state.output}</p>
        <p>Create User</p>
        <form id="userForm" onSubmit={this.handleSubmit}>
          <label htmlFor="userName">Username</label>
          <input name="username" defaultValue="" />
          <label htmlFor="password">Password</label>
          <input name="password" defaultValue="" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateUser;
