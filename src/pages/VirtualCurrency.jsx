import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar';
import { mainPagesRoutes } from '../constants/routes';

class Virtualcurrency extends Component {
  _user = {
    balance: 1200
  }
  render() {
    return (
      <div className="main-container">
        <Navbar headerText={this._user.balance} linksRoutes={mainPagesRoutes}/>
        <div className="content transport__content row">
        </div>
      </div>
    );
  }
}

export default Virtualcurrency;
