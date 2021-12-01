import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { MAIN } from '../../constants/constants';
import EmitWebView from '../../constants/events/emit-webView';
import { donatRoutes } from '../../constants/routes';
import EventManager from '../../EventManager'
import Navbar from '../navbar/Navbar'
import NavbarHeader from '../navbar/NavbarHeader'
import NavbarContent from '../navbar/NavbarContent'
import ButtonClose from '../../constants/buttons/ButtonClose/ButtonClose'
import './less/main.less'

class Donat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      path: '/donat'
    }
  }

  _user = {
    balance: 1355
  }

  componentDidMount() {
    EventManager.addHandler(EmitWebView.Donat, (value) => {
      switch (value.type) {
        case WebViewType.show:
          return this.setState({ show: true });
        case WebViewType.hide:
          return this.setState({ show: false });
      }
    });
  }

  componentWillUnmount() {
    EventManager.removeHandler(EmitWebView.Donat);
  }

  render() {
    if (!this.state.show) return null;
    return (
      <BrowserRouter>
      <div className="main-container">
        <ButtonClose/>
        <Navbar customClasses={['']} linksRoutes={donatRoutes}>
          <NavbarHeader headerText={this._user.balance}/>
          <NavbarContent linksRoutes={this.props.donutRoutes}/>
        </Navbar>
        <Switch>
          {donatRoutes.map(({path, Component}) =>
            <Route key={path} path={path} component={Component} exact/>
          )}
          <Redirect to={MAIN}/>
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default Donat;
