import React, { Component } from 'react'

import './less/main.less'

import BagImg from '../../images/bag.png';
import GunImg from '../../images/gun.png'

import Icon1 from '../../images/inventory/1.png'
import Icon2 from '../../images/inventory/2.png'
import Icon3 from '../../images/inventory/3.png'
import Icon4 from '../../images/inventory/4.png'
import Icon5 from '../../images/inventory/5.png'
import Icon6 from '../../images/inventory/6.png'
import Icon7 from '../../images/inventory/7.png'
import Icon8 from '../../images/inventory/8.png'
import Icon9 from '../../images/inventory/9.png'
import Icon11 from '../../images/inventory/11.png'
import Icon12 from '../../images/inventory/12.png'
import Icon13 from '../../images/inventory/13.png'
import Icon14 from '../../images/inventory/14.png'
import Icon15 from '../../images/inventory/15.png'
import MainIcon1 from '../../images/inventory/main1.png'
import MainIcon2 from '../../images/inventory/main2.png'
import MainIcon3 from '../../images/inventory/main3.png'

import DopWeapon1 from '../../images/inventory/w11.png'
import DopWeapon2 from '../../images/inventory/w21.png'
import DopWeapon3 from '../../images/inventory/w31.png'
import DopWeapon4 from '../../images/inventory/w41.png'

import CrossSvg from '../../images/inventory/cross.svg'


export default class Inventory extends Component {
  state = {
    show: true,
    username: 'Nika Kondr'
  }

  inventory = {
    current: 290,
    max: 1000,
    items: [
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
    ]
  }

  trunk = {
    view: 'none',
    current: 322,
    max: 1000,
    items: [
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: BagImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
    ]
  }

  weapons = {
    view: 'none',
    items: [
      {
        image: GunImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: GunImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: GunImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: GunImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: GunImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: GunImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: GunImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: GunImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: GunImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: GunImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: GunImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: GunImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: GunImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: GunImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: GunImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: GunImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: GunImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: GunImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: GunImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: GunImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: GunImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      }, {
        image: GunImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: GunImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
      {
        image: GunImg,
        title: 'Товар',
        model: 'AR-39393',
        count: 5
      },
    ]
  }

  render() {
    if (!this.state.show) return null
    return (
      <div className="inventory">
        <div className={`inventory__card inventory-card ${this.weapons.view}`}>
          <div className="inventory-card__header">
            <span className="inventory-card__count">{this.trunk.current}/{this.trunk.max}k</span>
            <h2 className="inventory-card__title">Багажник</h2>
          </div>
          <div className="inventory-card__list">
            {this.trunk.items.map(({ image, title, model, count }) =>
              <div className="inventory-card__item inventory-item">
                <div className="inventory-item__image">
                  <img src={image} alt={"image"} />
                </div>
                <div className="inventory-item__info">
                  <div className="inventory-item__title">{title}</div>
                  <span className="inventory-item__model">{model}</span>
                </div>
                <span className="inventory-item__count">{count}</span>
              </div>
            )}
          </div>
        </div>
        <div className={`inventory__card inventory-card inventory-card-weapons ${this.weapons.view}`}>
          <div className="weapon-cross">
            <img src={CrossSvg} alt={"CrossSvg"} />
          </div>
          <h2 className="inventory-card__title">Оружие</h2>
          <div className='inventory-card__list inventory-card__list-weapons'>
            {this.weapons.items.map(({ image, title, model, count }) =>
              <div className="inventory-card__item inventory-item inventory-item-reverse">
                <div className="inventory-item__image">
                  <img src={image} alt={"image"} />
                </div>
                <div className="inventory-item__info">
                  <div className="inventory-item__title">{title}</div>
                  <span className="inventory-item__model">{model}</span>
                </div>
              </div>
            )}
          </div>
          <div className="inventory-card__footer">
            <h3 className="inventory-card__description">
              Дополнительное оборудование
            </h3>
            <div className="weapon-wrap">
              <div className="inventory-card__block"><img src={DopWeapon1} alt={"DopWeapon1"} /></div>
              <div className="inventory-card__block"><img src={DopWeapon2} alt={"DopWeapon2"} /></div>
              <div className="inventory-card__block"><img src={DopWeapon3} alt={"DopWeapon3"} /></div>
              <div className="inventory-card__block"><img src={DopWeapon4} alt={"DopWeapon4"} /></div>
            </div>
          </div>
        </div>
        <div className="inventory__card inventory-card">
          <h2 className="inventory-card__title">{this.state.username}</h2>
          <div className="inventory-cols">
            <div className="inventory-col">
              <img src={Icon1} alt="{Icon1}" /><img src={Icon2} alt="{Icon2}" /><img src={Icon3} alt="{Icon3}" /><img src={Icon4} alt="{Icon4}" /><img src={Icon5} alt="{Icon5}" /><img src={Icon6} alt="{Icon6}" />
            </div>
            <div className="inventory-col">
              <img src={Icon15} alt="{Icon15}" />
              <div className="inventory-col__main">
                <img src={MainIcon1} alt="{Icon1}" />
                <img src={MainIcon2} alt="{Icon1}" />
                <img src={MainIcon3} alt="{Icon1}" />
              </div>
              <img src={Icon8} alt="{Icon1}" />
            </div>
            <div className="inventory-col">
              <img src={Icon14} alt="{Icon14}" />
              <img src={Icon13} alt="{Icon13}" />
              <img src={Icon12} alt="{Icon12}" />
              <img src={Icon11} alt="{Icon11}" />
              <img src={Icon7} alt="{Icon7}" />
              <img src={Icon9} alt="{Icon9}" />
            </div>
          </div>
        </div>
        <div className="inventory__card inventory-card">
          <div className="inventory-card__header">
            <span className="inventory-card__count">{this.inventory.current}/{this.inventory.max}k</span>
            <h2 className="inventory-card__title">Инвентарь</h2>
          </div>
          <div className="inventory-card__list">
            {this.inventory.items.map(({ image, title, model, count }) =>
              <div className="inventory-card__item inventory-item">
                <div className="inventory-item__image">
                  <img src={image} alt={"image"} />
                </div>
                <div className="inventory-item__info">
                  <div className="inventory-item__title">{title}</div>
                  <span className="inventory-item__model">{model}</span>
                </div>
                <span className="inventory-item__count">{count}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
