import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login/Login'
import './index.css';
import './Login/Login.css'
import App from "./App"
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
      <div>
          <Route exact path="/" component={App} />
          <Route exact path="/login" component={Login} />
      </div>
  </Router>
  , document.getElementById('root')
);