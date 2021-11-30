import React, { Component } from 'react';
import PageCard from '../components/PageCard/PageCard';

import Image from '../images/vip.png'

class Characteridpage extends Component {
  cardInfo = {
    id: 1,
    count: 2,
    title: "Маска",
    price: 100
  }
  render() {
    return (
        <div className="content vip__content row">
        <PageCard
          image={Image}
          count={this.cardInfo.count}
          title={this.cardInfo.title}
          price={this.cardInfo.price}
        />
      </div>
    );
  }
}

export default Characteridpage;
