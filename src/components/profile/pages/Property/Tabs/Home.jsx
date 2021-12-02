import React, { Component } from 'react';

import imgTab from '../../../../../images/tabProperty.png'
import './less/main.less';

import MoneyImg from '../../../../../images/money.svg'
import LocationImg from '../../../../../images/locator.svg';

class Home extends Component {
  data = {
    house: {
      "Адрес": "Загрузка",
      "Налог": "Загрузка",
      "Жилых мест": 0,
      "Гараж": "Загрузка"
    },
    gos: 300_000_000
  }

  numberWithCommas(value){
    var parts = value.toString().split(" ");
    parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g," ");
    return parts.join(" ");
  }

  render() {
    if(!this.props.active) return null
    return (
      <div className='property-tab'>
        <div className="property-tab__image">
          <img src={imgTab} alt={"imgTab"} />
        </div>
        <h2 className="property-tab__title">Дом</h2>
        <div className="property-text">
          {Object.keys(this.data.house).map(key => {
            return (
              <div className="property-block">
                <span className="property-block__prop">{key}</span>
                <span className="property-block__value">{this.data.house[key]}</span>
              </div>
            )
          })}
          <div className="property-gos">
            <span className="prop">
              <img src={MoneyImg} alt={"MoneyImg"} />
              Гос. цена:
            </span>
            {this.numberWithCommas(this.data.gos)}$
          </div>
          <button className="property-gps">
            <img src={LocationImg} alt={"LocationImg"} />
            Найти по GPS
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
