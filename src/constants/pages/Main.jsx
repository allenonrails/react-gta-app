import React, { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { mainPagesRoutes } from '../../routes';

class Main extends Component {
  _user = {
    balance: 1200
  }

  render() {
    return (
      <div>
        <Navbar headerText={this._user.balance} linksRoutes={mainPagesRoutes}/>
      </div>
    );
  }
}

export default Main;
