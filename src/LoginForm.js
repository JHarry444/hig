import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { PATH } from './consts';
import $ from 'jquery';

class LoginForm extends Component {

  onClick = () => {
    console.log("bloop");
    $.ajax({
      type: 'GET',
      url: `${PATH}/hello`
    }).done(function (data, textStatus, jqXHR) {
      var csrfToken = jqXHR.getResponseHeader('X-CSRF-TOKEN');
      if (csrfToken) {
        var cookie = JSON.parse($.cookie('helloween'));
        cookie.csrf = csrfToken;
        $.cookie('helloween', JSON.stringify(cookie));
      }
      $('#helloweenMessage').html(data.message);
    }).fail(function (jqXHR, textStatus, errorThrown) {
      if (jqXHR.status === 401) { // HTTP Status 401: Unauthorized
        var cookie = JSON.stringify({ method: 'GET', url: '/', csrf: jqXHR.getResponseHeader('X-CSRF-TOKEN') });
        $.cookie('helloween', cookie);
        window.location = '/login.html';
      } else {
        console.error('Houston, we have a problem...');
      }
    }
    );

  }

  onClick2 = () => {
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
        <input type="button" onClick={this.onClick} value="Test User" />
        <input type="button" onClick={this.onClick2} value="CSRF" />
      </div >
    );
  }
}


export default LoginForm;
