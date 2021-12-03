import React, { Component } from 'react';
import Card from '../../../card/Card';
import { VIP } from '../../../../constants/constants';
import './less/main.less';

class Vip extends Component {
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
      <div className="content vip vip__content row">
        {this.cards.map(({id, title, price}) =>
          <Card path={VIP + '/' + id} customClasses={["vip__card"]} title={title} price={price}>
          </Card>
        )}
      </div>
    );
  }
}

export default Vip;
