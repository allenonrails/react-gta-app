import React, { Component } from 'react';
import Card from '../../components/card/Card';
import Navbar from '../../components/navbar/Navbar';
import Btnclose from '../../constants/buttons/BtnClose';
import { TRANSPORT_ID } from '../../constants/constants';
import { mainPagesRoutes } from '../../constants/routes';
import CardImage from '../../images/smallBanner2.png';
import '../../main-styles/pages/Transport/main.less';
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
      <div className="main-container">
        <Btnclose/>
        <Navbar headerText={this._user.balance} linksRoutes={mainPagesRoutes}/>
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
      </div>
    )
  }
}

export default Transport;
