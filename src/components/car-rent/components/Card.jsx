import React, { Component } from 'react';

import './less/main.less'

class Card extends Component {
  render() {
    return (
      <div className='rent-card'>
        <div className="rent-card__image">
          <img src={this.props.image} alt={"this.props.image"} />
        </div>
        <div className="rent-card__info">
          <div className="rent-card__text">
            <h3 className="rent-card__title">
              {this.props.title}
            </h3>
            <span className="rent-card__price">
              {this.props.price}
            </span>
          </div>
          <div className="rent-card__button">
            <button className="rent__btn">По карте</button>
            <button className="rent__btn">Наличными</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
