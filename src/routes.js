import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import { SignIn } from './views/SignIn';
import { Dashboard } from './views/Dashboard';

import { isAuthorized } from './services/auth';

const Routes = () => (
  <Switch>
    <Route exact path='/' render={
      props => isAuthorized() 
        ? <Dashboard />
        : (<Redirect to='/signin' />) 
    } />
    <Route path='/signin' component={SignIn} />
  </Switch>
);

export { Routes };