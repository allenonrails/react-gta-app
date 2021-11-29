import React, { Component } from 'react';

import Logo from '../../images/logo.png';

class Virtualcurrencycard extends Component {
  numberWithCommas(value){
    var parts = value.toString().split(".");
    parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
    return parts.join(",");
  }

  formattedValue = this.numberWithCommas((this.props.value)) + this.props.currency

  render() {
    return (
      <div className="currency__card currency-card">
        <h3 className="currency-card__title">{this.formattedValue}</h3>
        <p className="currency-card__description">{this.formattedValue + this.props.description}</p>
        <div className="currency-card__bottom">
          <span className="currency-card__price">
            {this.props.price}
            <img className="currency-card__logo" src={Logo} alt={"Logo"} />
          </span>
          <button className="currency-card__btn">
            Купить
          </button>
        </div>
      </div>
    );
  }
}

export default Virtualcurrencycard;
