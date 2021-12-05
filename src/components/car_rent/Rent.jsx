import React, { Component } from 'react';

import RentImg from '../../images/rent.png'
import Card from './components/Card';

import './less/main.less'

class Rent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      activeCar: 0,
      activeColor: 2
    }
  }

  cards = [
    {
      title: 'Elegy',
      image: RentImg,
      price: 300
    },
    {
      title: 'Elegy',
      image: RentImg,
      price: 300
    },
    {
      title: 'Elegy',
      image: RentImg,
      price: 300
    },
    {
      title: 'Elegy',
      image: RentImg,
      price: 300
    },
    {
      title: 'Elegy',
      image: RentImg,
      price: 300
    },
    {
      title: 'Elegy',
      image: RentImg,
      price: 300
    },
    {
      title: 'Elegy',
      image: RentImg,
      price: 300
    },
    {
      title: 'Elegy',
      image: RentImg,
      price: 300
    },
    {
      title: 'Elegy',
      image: RentImg,
      price: 300
    },
    {
      title: 'Elegy',
      image: RentImg,
      price: 300
    },

  ]

  render() {
    return (
      <div className="rent">
        <div className="rent__header">
          <h1 className="rent__title">Аренда транспорта</h1>
          <button className="rent__btn">
            Закрыть
          </button>
        </div>
        <div className="rent__wrap">
          {this.cards.map(({title, image, price}) => 
            <Card
              title={title}
              image={image}
              price={price}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Rent;
