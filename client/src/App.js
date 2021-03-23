import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import GasPrices from './components/GasPrices';
import PrivateRoute from './components/PrivateRoute';

import { axiosWithAuth } from './utils/axiosWithAuth';

function App() {
  const logout = () => {
    //1. do a request to our server to delete the token
    //2. remove our local token
    //3. redirect to login page

    axiosWithAuth()
      .post('/api/logout')
      .then(res => {
        localStorage.removeItem('token');
        window.location.href = '/login';
      })
      .catch(err => {
        console.log(err.response);
    });
  };


  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link onClick={logout}>Logout</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={GasPrices} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
