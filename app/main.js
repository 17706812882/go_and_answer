import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


import Login from './components/login/Login';
import Admin from './components/admin/Admin';
import Quest from './components/quest/Quest';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import { HashRouter,Link } from 'react-router-dom'
import { HashRouter as Router, Route ,Redirect } from 'react-router-dom'

require('./main.css');
ReactDOM.render(
  (
    <HashRouter>
      <Router basename="/" >
        <div>
          <Route exact path="/" component={Login}/>
          <Route path="/app" component={App}></Route >
        </div>
      </Router>
    </HashRouter>
  ),
  document.body.appendChild(document.createElement('div'))
);
