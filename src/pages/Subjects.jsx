import React, { Component } from 'react';
import Card from '../components/card/Card';
import Cardbtn from '../components/card/CardBtn';
import Navbar from '../components/navbar/Navbar';
import Btnclose from '../constants/buttons/BtnClose';
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
        <Btnclose/>
        <Navbar headerText={this._user.balance} linksRoutes={mainPagesRoutes}/>
        <div className="content subjects__content row">
          {this.cards.map(({title, price}) =>
            <Card image={CardImage} customClasses={["subjects__card"]} title={title} price={price}>
              <Cardbtn action="get" text="Получить" />
              <Cardbtn action="sell" text="Продать" />
            </Card>
          )}
        </div>
      </div>
    );
  }
}

export default Subjects;
