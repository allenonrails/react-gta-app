import React, { Component } from 'react';
import Card from '../components/card/Card';
import Navbar from '../components/navbar/Navbar';
import Btnclose from '../constants/buttons/BtnClose';
import { CHARACTER_SETTINGS } from '../constants/constants';
import { mainPagesRoutes } from '../constants/routes';
import CardImage from '../images/smallBanner2.png'
import '../main-styles/pages/CharacterSettings/main.less';

class Charactersettings extends Component {
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
    },
  ]
  render() {
    return (
      <div className="main-container">
        <Btnclose/>
        <Navbar headerText={this._user.balance} linksRoutes={mainPagesRoutes}/>
        <div className="content row">
          {this.cards.map(({id, title, price}) =>
            <Card image={CardImage} path={CHARACTER_SETTINGS + '/' + id} customClasses={["character__card"]} title={title} price={price}>
            </Card>
          )}
        </div>
      </div>
    );
  }
}

export default Charactersettings;
