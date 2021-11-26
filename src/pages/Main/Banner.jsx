import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component {
  render() {
    return (
    <Link className="banner-wrap__block banner-block" to={this.props.to}>
      <div className="banner-block__image">
        <img src={this.props.image} alt={"this.props.image"} />
      </div>
      <div className="banner-block__text">
        <h2 className="banner-block__title">
          {this.props.title}
        </h2>
        <p className="banner-block__description">
          {this.props.description}
        </p>
      </div>
    </Link>
    );
  }
}

export default Banner;
