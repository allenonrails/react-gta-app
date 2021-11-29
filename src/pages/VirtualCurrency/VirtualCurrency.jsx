import React, { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { mainPagesRoutes } from '../../constants/routes';
import VirtualCurrencyCard from './VirtualCurrencyCard'
import '../../main-styles/pages/VirtualCurrency/main.less' ;
import Btnclose from '../../constants/buttons/BtnClose';

class Virtualcurrency extends Component {
  _user = {
    balance: 1200
  }

  cards = [
    {
      value: 10_000,
      currency: "$",
      description: ' на ваш игровой счёт',
      price: 100
    },
    {
      value: 10_000,
      currency: "$",
      description: ' на ваш игровой счёт',
      price: 100
    },
    {
      value: 10_000,
      currency: "$",
      description: ' на ваш игровой счёт',
      price: 100
    },
    {
      value: 10_000,
      currency: "$",
      description: ' на ваш игровой счёт',
      price: 100
    },
    {
      value: 10_000,
      currency: "$",
      description: ' на ваш игровой счёт',
      price: 100
    }
  ]

  render() {
    return (
      <div className="main-container">
        <Navbar headerText={this._user.balance} linksRoutes={mainPagesRoutes}/>
        <div className="content currency__content row">
        <Btnclose/>
          {this.cards.map(({value, currency, description, price}) => 
            <VirtualCurrencyCard
              value={value}
              currency={currency}
              description={description}
              price={price}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Virtualcurrency;
