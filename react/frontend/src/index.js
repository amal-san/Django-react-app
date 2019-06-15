import ReactDOM from 'react-dom'
import React from 'react';
import './index.css';
import Login from './Components/Login';
import { Home } from './Components/Login'
import { Route } from 'react-router';
import { Router} from 'react-router';


  ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Home} />
        </div>
    </Router>
    , document.getElementById('root')
  );