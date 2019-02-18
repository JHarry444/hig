import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Login";
import CreateUser from './CreateUser';
import axios from "axios";
import { PATH } from './consts';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = { user: undefined };
  }

  componentWillReceiveProps = () => {
    axios.get(`${PATH}/user`).then(r => this.setState({ user: r.data.name })).catch(e => console.error(e));
  }

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
                {!this.state.user ? <Link to="/login">Login</Link> : <p>{this.state.user}</p>}
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
