import React, { Component } from 'react';
import Card from '../../../card/Card';
import CardButton from '../../../card/CardButton';

import CardImage from '../../../../images/smallBanner2.png'
import './less/main.less'

class Subjects extends Component {
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
