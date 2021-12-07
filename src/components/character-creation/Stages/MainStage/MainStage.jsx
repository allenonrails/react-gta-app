import React, { Component } from 'react';
import Slider from '../../components/Slider/Slider';

import './less/main.less'

class MainStage extends Component {
  state = {
    show: false
  }

  accounts = [
    {
      name: 'giovanni giorgio',
      hours: '25',
      balance: 300_000,
      spawns: [
        "Спавн: Дом",
        "Спавн: ДетДом",
        "Спавн: 3",
      ],
      activeSpawn: 1
    },
    {
      name: 'giovanni giorgio',
      hours: '25',
      balance: 300_000,
      spawns: [
        "Спавн: Дом",
        "Спавн: ДетДом",
        "Спавн: 3",
      ],
      activeSpawn: 2
    },
  ]

  render() {
    if (!this.state.show) return null
    return (
      <div className='character-main-stage'>
        <h1 className="character-main-stage__title">
          Выберите персонажа чтобы продолжить
        </h1>
        <p className="character-main-stage__description">
          Так же вы можете создать дополнительного персонажа
        </p>
        <div className="character-main-stage__content">
          {this.accounts.map(({ name, hours, balance, spawns, activeSpawn }) =>
            <div className="character-main-stage__card character-card">
              <h3 className="character-card__title">
                {name}
              </h3>
              <p className="character-card__hours">
                Наиграно часов: {hours}
              </p>
              <p className="character-card__balance">
                Общий баланс: {balance}
              </p>
              <Slider
                activeSlide={activeSpawn}
                slides={spawns}
              />
              <button className="character-card__btn">
                Войти
              </button>
            </div>
          )}
          <button className="character-main-stage__btn">
            Создать персонажа
          </button>
        </div>
      </div>
    );
  }
}

export default MainStage;
