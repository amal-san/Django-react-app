import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AuthService from './Login/AuthService';
import withAuth from './Login/withAuth';
const Auth = new AuthService();


class App extends Component {
  render() {
    return(
      <div className="App">
          <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome {this.props.user.username}</h2>
          </div>
          <p className="App-intro">
              <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
          </p>
          </div>
     );
  }
  handleLogout(){
    Auth.logout()
    this.props.history.replace('/login');
  }
}

export default withAuth(App);
