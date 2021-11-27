import React, { Component } from 'react';

import LogoForBalance from '../../images/logo.png';

import '../../main-styles/Card/main.less'

class Card extends Component {
  static defaultProps = {
    classes: []
  }

  classes = this.props.customClasses.join(' ') + " card";

  render() {
    return (
      <div className={this.classes}>
        <div data-url={this.props.image} className="card__image">
          <img src={this.props.image} alt={"image"} />
          <div className="card__buttons">
            {this.props.children}
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
