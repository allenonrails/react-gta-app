import React, { Component } from 'react';

import LogoForBalance from '../../images/logo.png';

import '../../main-styles/Card/main.less'
import Cardbtn from './CardBtn';

class Card extends Component {
  static defaultProps = {
    classes: []
  }

  render() {
    let classes = this.props.customClasses.join(' ') + " card";
    return (
      <div className={classes}>
        <div className="card__image">
          <img src={this.props.image} alt={"image"} />
          <div className="card__buttons">
            <Cardbtn action="get" text="Получить" />
            <Cardbtn action="sell" text="Продать" />
          </div>
        </div>
      <div className="card__text">
        <h3 className="card__title">{this.props.title}</h3>
        <div className="card__balance">
          <span className="card__price">{this.props.price}</span>
          <img src={LogoForBalance} alt={"LogoForBalance"} />
        </div>
      </div>
      </div>
    );
  }
}

export default Card;
