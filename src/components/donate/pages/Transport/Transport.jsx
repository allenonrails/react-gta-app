import React, { Component } from 'react';
import CardImage from '../../../../images/smallBanner2.png';
import './less/main.less';
import TransportCard from './TransportCard';

class Transport extends Component {
  _user = {
    balance: 1200
  }
  cards = [
    {
      id: 1,
      title: "Маска",
      price: 100
    },
    {
      id: 2,
      title: "Маска",
      price: 100
    },
    {
      id: 3,
      title: "Маска",
      price: 100
    }
  ]

  render() {
    return (
      <div className="content transport__content row">
        {this.cards.map(({id, title, price}) =>
            <TransportCard 
            headerText={this._user.balance} 
            key={id} 
            id={id} 
            image={CardImage} 
            title={title} 
            price={price}/>
          )}
      </div>
    )
  }
}

export default Transport;
