import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { MAIN_STAT } from '../../constants/constants';
import { profileRoutes } from '../../constants/routes';
import EmitWebView from '../../constants/events/emit-webView'
import Navbar from '../navbar/Navbar';
import NavbarHeader from './NavbarHeader';
import NavbarContent from '../navbar/NavbarContent';
import NavbarLink from '../navbar/NavbarLink';
import './less/main.less'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      path: '/'
    }
  }

  _user = {
    id: 1000,
    nickname: 'Iru Nil'
  }

  componentDidMount() {
    EventManager.addHandler(EmitWebView.MainStat, (value) => {
      switch (value.type) {
        case WebViewType.show:
          return this.setState({ show: true });
        case WebViewType.hide:
          return this.setState({ show: false });
      }
    });
  }

  componentWillUnmount() {
    EventManager.removeHandler(EmitWebView.MainStat);
  }

  render() {
    if (!this.state.show) return null;
    return (
      <BrowserRouter>
      <div className="profile-container">
        <Navbar customClasses={['profile-navbar']} linksRoutes={profileRoutes}>
          <NavbarHeader headerText={`${this._user.nickname} #${this._user.id}`}/>
          <NavbarContent linksRoutes={profileRoutes}>
            <NavbarLink menuText="Закрыть" customClasses={['profile-navbar-close']} />
          </NavbarContent>
        </Navbar>
        <div className="profile-content">
          <Switch>
            {profileRoutes.map(({path, Component}) =>
              <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={MAIN_STAT}/>
          </Switch>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default Profile;
