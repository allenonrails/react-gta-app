import React, { Component } from 'react'

import Logo from '../../images/logo.png';
import '../../main-styles/PageCard/main.less'

export default class PageCard extends Component {
  render() {
    return (
      <div className="content page-card row">
      <div className="page-card__image">
        <img src={this.props.image} alt={"this.props.imge"} />
      </div>
      <div className="page-card__info">
        <div className="page-card__header">
          <div className="page-card__title">
            {this.props.title}
          </div>
          <span className="page-card__count">
            {this.props.count}
          </span>
        </div>
        <div className="page-card__bottom">
          <span className="page-card__price">
            {this.props.price}
            <img src={Logo} alt={"Logo"} />
          </span>
          <div className="page-card__buttons">
            <button className="page-card__btn">Купить</button>
            <button className="page-card__btn">Вернуться назад</button>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
