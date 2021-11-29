import React, { Component } from 'react';
import Card from '../components/card/Card';
import Navbar from '../components/navbar/Navbar';
import { mainPagesRoutes } from '../constants/routes';

import '../main-styles/pages/Other/main.less'

import CardImage from '../images/smallBanner2.png'
import Btnclose from '../constants/buttons/BtnClose';

class Other extends Component {
  _user = {
    balance: 1200
  }

  cards = [
    {
      title: "Маска",
      price: 100
    },
    {
      title: "Маска",
      price: 100
    },
    {
      title: "Маска",
      price: 100
    }
  ]

  render() {
    return (
      <div className="main-container">
        <Navbar headerText={this._user.balance} linksRoutes={mainPagesRoutes}/>
        <div className="content row">
          <Btnclose/>
          {this.cards.map(({title, price}) =>
            <Card image={CardImage} customClasses={["other__card"]} title={title} price={price}/>
          )}
        </div>
      </div>
    );
  }
}

export default Other;
