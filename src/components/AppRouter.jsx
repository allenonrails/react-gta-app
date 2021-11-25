import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import { authRoutes } from '../routes';
import { MAIN } from '../utils/constants';

class AppRouter extends Component{
  render(){
    return (
      <Switch>
          {authRoutes.map(({path, Component}) =>
            <Route key={path} path={path} component={Component} exact/>
          )}
          <Redirect to={MAIN}/>1
      </Switch>
    );
  }
}

export default AppRouter