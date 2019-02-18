import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Login";
import CreateUser from './CreateUser';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={CreateUser} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
