import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar';
import PageCard from '../components/PageCard/PageCard';
import Btnclose from '../constants/buttons/BtnClose';
import { mainPagesRoutes } from '../constants/routes';

import Image from '../images/vip.png'

class Characteridpage extends Component {
  _user = {
    balance: 1200
  }
  cardInfo = {
    id: 1,
    count: 2,
    title: "Маска",
    price: 100
  }
  render() {
    return (
      <div className="main-container">
      <Btnclose/>
      <Navbar headerText={this._user.balance} linksRoutes={mainPagesRoutes}/>
      <div className="content vip__content row">
      <PageCard
        image={Image}
        count={this.cardInfo.count}
        title={this.cardInfo.title}
        price={this.cardInfo.price}
      />
      </div>
    </div>
    );
  }
}

export default Characteridpage;
