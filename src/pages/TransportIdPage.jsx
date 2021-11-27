import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar';
import { mainPagesRoutes } from '../constants/routes';

import Logo from '../images/logo.png';
import Image from '../images/transport.png'
import '../main-styles/pages/TransportIdPage/main.less'

class TransportIdPage extends Component {
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
        <Navbar headerText={this._user.balance} linksRoutes={mainPagesRoutes}/>
        <div className="content transport row">
          <div className="transport__image">
            <img src={Image} alt={"Image"} />
          </div>
          <div className="transport__info">
            <div className="transport__header">
              <div className="transport__title">
                {this.cardInfo.title}
              </div>
              <span className="transport__count">
                {this.cardInfo.count}
              </span>
            </div>
            <div className="transport__bottom">
              <span className="transport__price">
                {this.cardInfo.price}
                <img src={Logo} alt={"Logo"} />
              </span>
              <div className="transport__buttons">
                <button className="transport__btn">Купить</button>
                <button className="transport__btn">Вернуться назад</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TransportIdPage;
