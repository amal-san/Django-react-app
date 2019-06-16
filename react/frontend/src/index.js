import ReactDOM from 'react-dom'
import React from 'react';
import './index.css';
import Login from './Components/Login';
import { Home , Index } from './Components/Login'
import { Route } from 'react-router';
import { Router} from 'react-router';
import { hashHistory } from 'react-router'





  ReactDOM.render(
    <Router history={hashHistory}>
        <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path ="/loggedIn" component={Index} />
        </div>
    </Router>
    , document.getElementById('root')
  );