import React, { Component } from 'react';
import VirtualCurrencyCard from './VirtualCurrencyCard'
import './less/main.less' ;

class VirtualCurrency extends Component {
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
      <div className="content currency__content row">
        {this.cards.map(({value, currency, description, price}) => 
          <VirtualCurrencyCard
            value={value}
            currency={currency}
            description={description}
            price={price}
          />
        )}
      </div>
    );
  }
}

export default VirtualCurrency;
