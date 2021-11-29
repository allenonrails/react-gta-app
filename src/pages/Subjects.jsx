import React, { Component } from 'react';
import Card from '../components/card/Card';
import CardButton from '../components/card/CardButton';

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
      <div className="content subjects__content row">
        {this.cards.map(({title, price}) =>
          <Card image={CardImage} customClasses={["subjects__card"]} title={title} price={price}>
            <CardButton action="get" text="Получить" />
            <CardButton action="sell" text="Продать" />
          </Card>
        )}
      </div>
    );
  }
}

export default Subjects;
