import React, { Component } from 'react';

import imgTab from '../../../../../images/tabProperty.png'
import './less/main.less';

import MoneyImg from '../../../../../images/money.svg'
import LocationImg from '../../../../../images/locator.svg';

class Transport extends Component {
  data = [
    {
      name: "Neon",
      type: "Автомобиль",
      car: {
        "Налог": 1337,
        "Штраф": "А",
        "Топливо": "Есть",
        "Номер": "KB232323"
      },
    }
  ]
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
          <span>Автомобиль</span>
          <span className="property-tab-count">
            Кол-во: {this.data.length}
          </span>
        </h3>
        {this.data.map(({name, type, car}) => 
          <React.Fragment>
            <div className="property-tab__image">
                <img src={imgTab} alt={"imgTab"} />
              </div>
              <span className="property-tab__type">{type}</span>
              <h2 className="property-tab__title">{name}</h2>
              <div className="property-tab__props">
                <div className="property-tab__car-wrap">
                  {Object.keys(car).map(key => {
                    return (
                      <div className="property-tab__car-block">
                        <div className="prop">{key}</div>
                        <div className="value">{car[key]}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Transport;
