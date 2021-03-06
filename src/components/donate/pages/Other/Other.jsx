import React, { Component } from 'react';
import Card from '../../../card/Card';

import './less/main.less'
import CardImage from '../../../../images/smallBanner2.png'

class Other extends Component {
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
      <div className="content row">
        {this.cards.map(({title, price}) =>
          <Card image={CardImage} customClasses={["other__card"]} title={title} price={price}/>
        )}
      </div>
    );
  }
}

export default Other;
