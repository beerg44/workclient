import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import List from './Components/List';
import Modify from './Components/Modify';
import * as serviceWorker from './serviceWorker';
import { Route, Link, Redirect, BrowserRouter as Router } from 'react-router-dom'

const routing = (
  <Router>
    <Redirect exact from="/" to="list" />
    <div>
      <ul>
        <li>
          <Link to="/list">Listele</Link>
        </li>
        <li>
          <Link to="/modify">Düzenle</Link>
        </li>
      </ul>
      <Route path="/" component={App} />
      <Route path="/list" component={List} />
      <Route path="/modify" component={Modify} />
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
