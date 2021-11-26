import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Smallbanner extends Component {
  render() {
    return (
      <Link className="banner-small__block banner-small" to={this.props.to}>
        <div className="banner-small__image">
          <img src={this.props.image} alt={"this.props.image"} />
        </div>
        <h2 className="banner-small__title">
          {this.props.title}
        </h2>
    </Link>
    );
  }
}

export default Smallbanner;
