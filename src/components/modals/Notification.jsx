import React, { Component } from 'react';

import './main.less'

import crossSvg from '../../images/inventory/cross.svg'

class Notification extends Component {
  state = {
    show: true
  }
  data = {
    text: `          
      Таким образом сложившаяся структура организации
      позволяет выполнять важные задания по разработке дальнейщих направлений развития.
      Разнообразный и богатый опыт реализация намечанных плановых заданий влечет за собой процесс
      внедрения и модернизации новых предложений.
    `
  }
  render() {
    if (!this.state.show) return null
    return (
      <div className="notification">
        <img className="notification__cross" src={crossSvg} alt={"crossSvg"} />
        <p className="notification__text">
          {this.data.text}
        </p>
        <button className="notification__next">
          Далее
        </button>
      </div>
    );
  }
}

export default Notification;
