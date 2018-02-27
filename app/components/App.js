import React from 'react';
require('./App.css');

import ReactDOM from 'react-dom';
import Admin from './admin/Admin';
import Quest from './quest/Quest';
import Header from './common/header/Header';
import Footer from './common/footer/Footer';
import { HashRouter,Link } from 'react-router-dom'
import { HashRouter as Router, Route ,Redirect } from 'react-router-dom'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HashRouter>
        <Router basename="/app" >
          <div>
            <Header/>
            <ul className="navbar-nav">
              <li className="navbar-item"><Link to="/">首页</Link></li>
              <li className="navbar-item"><Link to="/questPrise">有奖题组</Link></li>
              <li className="navbar-item"><Link to="/questHoliday">节目题组</Link></li>
              <li className="navbar-item"><Link to="/questHot">热门题组</Link></li>
              <li className="navbar-item"><Link to="/questPractise">练习题组</Link></li>
            </ul>
            <Route path="/questPrise" component={Quest}></Route >
            <Route path="/questHoliday" component={Quest}></Route >
            <Route path="/questHot" component={Quest}></Route >
            <Route path="/questPractise" component={Quest}></Route >
            <Route path="/admin" component={Admin}></Route >
            <Footer></Footer>
          </div>
        </Router>
      </HashRouter>
    );
  }
}
