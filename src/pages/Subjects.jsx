import React, { Component } from 'react';
import Card from '../components/card/Card';
import Navbar from '../components/navbar/Navbar';
import { mainPagesRoutes } from '../constants/routes';

import CardImage from '../images/smallBanner2.png'
import '../main-styles/pages/Subjects/main.less'

class Subjects extends Component {
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
    },
    {
      title: "Маска",
      price: 100
    },
    {
      title: "Маска",
      price: 100
    },
  ]

  render() {
    return (
      <div className="main-container">
        <Navbar headerText={this._user.balance} linksRoutes={mainPagesRoutes}/>
        <div className="content subjects__content row">
          {this.cards.map(({title, price}) =>
            <Card image={CardImage} customClasses={["subjects__card"]} title={title} price={price}/>
          )}
        </div>
      </div>
    );
  }
}

export default Subjects;
