import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Landing } from './components/layout/Landing';
import { Register } from './components/auth/Register';
import { Login } from './components/auth/Login';

import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <Navbar></Navbar>
      <Route exact path='/' render={(props) => <Landing {...props} />} />
      <section className='container'>
        <Switch>
          <Route
            exact
            path='/register'
            render={(props) => <Register {...props} />}
          />
          <Route exact path='/login' render={(props) => <Login {...props} />} />
        </Switch>
      </section>
    </Fragment>
  </Router>
);

export default App;
