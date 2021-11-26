import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import { mainPagesRoutes, profileRoutes } from '../constants/routes';
import { MAIN } from '../constants/constants';

class AppRouter extends Component{
  render(){
    return (
      <Switch>
          {mainPagesRoutes.concat(profileRoutes).map(({path, Component}) =>
            <Route key={path} path={path} component={Component} exact/>
          )}
          <Redirect to={MAIN}/>1
      </Switch>
    );
  }
}

export default AppRouter