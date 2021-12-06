import React, { Component } from 'react';

import ShopLogo from '../../images/shopLogo.png';

import './less/main.less'
class Shop extends Component {
  state = {
    show: true,
    active: 2
  }

  data = [
    {
      title: 'Прическа для топ типов ахуеть да',
      helpText: 'Термостойкость: 20*',
      discount: '30',
      price: 322
    },
    {
      title: 'Прическа для топ типов ахуеть да',
      helpText: 'Термостойкость: 20*',
      discount: '30',
      price: 312
    },
    {
      title: 'Прическа для топ типов ахуеть да',
      helpText: 'Термостойкость: 20*',
      discount: '30',
      price: 522
    },
    {
      title: 'Прическа для топ типов ахуеть да',
      helpText: 'Термостойкость: 20*',
      discount: '30',
      price: 22
    },
    {
      title: 'Прическа для топ типов ахуеть да',
      helpText: 'Термостойкость: 20*',
      discount: '30',
      price: 122
    },
    {
      title: 'Прическа для топ типов ахуеть да',
      helpText: 'Термостойкость: 20*',
      discount: '30',
      price: 322
    },
    {
      title: 'Прическа для топ типов ахуеть да',
      helpText: 'Термостойкость: 20*',
      discount: '30',
      price: 322
    },
    {
      title: 'Прическа для топ типов ахуеть да',
      helpText: 'Термостойкость: 20*',
      discount: '30',
      price: 322
    },
    {
      title: 'Прическа для топ типов ахуеть да',
      helpText: 'Термостойкость: 20*',
      discount: '30',
      price: 322
    },
    {
      title: 'Прическа для топ типов ахуеть да',
      helpText: 'Термостойкость: 20*',
      discount: '30',
      price: 322
    },
    {
      title: 'Прическа для топ типов ахуеть да',
      helpText: 'Термостойкость: 20*',
      discount: '30',
      price: 322
    },
    {
      title: 'Прическа для топ типов ахуеть да',
      helpText: 'Термостойкость: 20*',
      discount: '30',
      price: 322
    },
    {
      title: 'Прическа для топ типов ахуеть да',
      helpText: 'Термостойкость: 20*',
      discount: '30',
      price: 322
    },
    {
      title: 'Прическа для топ типов ахуеть да',
      helpText: 'Термостойкость: 20*',
      discount: '30',
      price: 322
    },
    {
      title: 'Прическа для топ типов ахуеть да',
      helpText: 'Термостойкость: 20*',
      discount: '30',
      price: 322
    },
    {
      title: 'Прическа для топ типов ахуеть да',
      helpText: 'Термостойкость: 20*',
      discount: '30',
      price: 322
    },
  ]

  btnClickEvent = (e) => {
    this.setState({
      active: +e.target.dataset.index
    })
  }

  render() {
    if (!this.state.show) return null;
    let activeCardPrice = this.data[Object.keys(this.data)[this.state.active]].price;
    return (
      <div className="shop">
        <div className="shop__card shop-card">
          <div className="shop-card__header">
            <img src={ShopLogo} alt={"ShopLogo"} />
          </div>
          <h2 className="shop-card__title">
            Добро пожаловать
          </h2>
          <div className="shop-card__list">
            {this.data.map(({ title, helpText, discount }, index) =>
              <div
                data-index={index}
                onClick={this.btnClickEvent}
                className={index === this.state.active ? `shop-card__block shop-block shop-block-active` : 'shop-card__block shop-block'}>
                <div data-index={index} className="shop-block__info">
                  <h3 data-index={index} className="shop-block__title">
                    {title}
                  </h3>
                  {index === this.state.active &&
                    <p data-index={index} className="shop-block__help-text">
                      {helpText}
                    </p>
                  }
                </div>
                <div data-index={index} className="shop-block__discount">
                  -{discount}%
                </div>
              </div>
            )}
          </div>
          <button className="shop-card__btn-back">
            Назад
          </button>
        </div>
        <div className="shop__description">
          <h3 className="shop__price">
            Цена: {activeCardPrice}
          </h3>
          <button className="shop__btn">
            Оплата наличкой
          </button>
          <button className="shop__btn">
            Оплата картой
          </button>
        </div>
      </div>
    );
  }
}

export default Shop;
