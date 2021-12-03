import React, { Component } from 'react';;
import PageCard from '../../PageCard/PageCard';

import Image from '../../../../images/transport.png'

class TransportIdPage extends Component {
  
  cardInfo = {
    id: 1,
    count: 2,
    title: "Маска",
    price: 100
  }

  render() {
    return (
      <div className="content">
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

export default TransportIdPage;
