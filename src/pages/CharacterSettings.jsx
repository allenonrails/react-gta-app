import React, { Component } from 'react';
import Card from '../components/card/Card';
import { CHARACTER_SETTINGS } from '../constants/constants';
import CardImage from '../images/smallBanner2.png'
import '../main-styles/pages/CharacterSettings/main.less';

class CharacterSettings extends Component {
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
      <div className="content row">
        {this.cards.map(({id, title, price}) =>
          <Card image={CardImage} path={CHARACTER_SETTINGS + '/' + id} customClasses={["character__card"]} title={title} price={price}>
          </Card>
        )}
      </div>
    );
  }
}

export default CharacterSettings;
