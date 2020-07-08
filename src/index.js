import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Routehandler from './container/index'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AuthContext from './component/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContext.Provider value={localStorage.token}>
      <Router>
        <Routehandler/>
      </Router>
    </AuthContext.Provider>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
