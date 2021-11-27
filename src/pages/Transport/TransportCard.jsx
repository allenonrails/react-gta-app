import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { TRANSPORT } from '../../constants/constants'

import LogoForBalance from '../../images/logo.png'

class TransportCard extends Component {
  render() {
    return (
      <Link to={TRANSPORT + '/' + this.props.id} className="transport-card" {...this.props}>
        <img className="transport-card__bg" src={this.props.image} alt={"this.props.image"} />
        <div className="transport-card__text">
          <h3 className="transport-card__title">{this.props.title}</h3>
          <span className="transport-card__price">
            {this.props.price}
            <img src={LogoForBalance} alt={"LogoForBalance"} />  
          </span>
        </div>
      </Link>
    )
  }
}

export default withRouter(TransportCard)