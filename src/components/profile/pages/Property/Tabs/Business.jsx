import React, { Component } from 'react';

import imgTab from '../../../../../images/tabProperty.png'
import './less/main.less';

import MoneyImg from '../../../../../images/money.svg'
import LocationImg from '../../../../../images/locator.svg';

import BusinessSvg from '../../../../../images/business.svg'
import BuildSvg from '../../../../../images/build.svg'
import HouseSvg from '../../../../../images/house.svg'

class Business extends Component {
  data = {
    builds: [
      {
        image: imgTab,
        color: 'green',
        icon: BusinessSvg,
        props: {
          "Адрес": "Загрузка",
          "Налог": "Загрузка",
          "Жилых мест": 0,
          "Гараж": "Загрузка"
        },
        gos: 300_000_000
      },
      {
        image: imgTab,
        color: 'red',
        icon: BuildSvg,
        props: {
          "Адрес": "Загрузка",
          "Налог": "Загрузка",
          "Жилых мест": 0,
          "Гараж": "Загрузка"
        },
        gos: 300_000_000
      },
      {
        image: imgTab,
        color: 'blue',
        icon: HouseSvg,
        props: {
          "Адрес": "Загрузка",
          "Налог": "Загрузка",
          "Жилых мест": 0,
          "Гараж": "Загрузка"
        },
        gos: 300_000_000
      }
    ],
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
        <h3 className="property-tab-name">
          <span>Имущество</span>
          <span className="property-tab-count">
            Кол-во: {this.data.builds.length}
          </span>
        </h3>
        {this.data.builds.map(({image, color, icon, props, gos}) => 
          <React.Fragment>
            <div className="property-tab__image">
              <img src={image} alt={"imgTab"} />
              <div className={`icon icon-${color}`}>
                <img src={icon} alt={"icon"} />
              </div>
            </div>
            <h2 className="property-tab__title">Склад</h2>
            <div className="property-text">
              {Object.keys(props).map(key => {
                return (
                  <div className="property-block">
                    <span className="property-block__prop">{key}</span>
                    <span className="property-block__value">{props[key]}</span>
                  </div>
                )
              })}
              <div className="property-gos">
                <span className="prop">
                  <img src={MoneyImg} alt={"MoneyImg"} />
                  Гос. цена:
                </span>
                {this.numberWithCommas(gos)}$
              </div>
              <button className="property-gps">
                <img src={LocationImg} alt={"LocationImg"} />
                Найти по GPS
              </button>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Business;
