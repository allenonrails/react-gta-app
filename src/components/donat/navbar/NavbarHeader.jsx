import React, { Component } from 'react';
import imgLogo from '../../../images/logo.png'

class NavbarHeader extends Component {
  render() {
    return (
      <div className="navbar__header">
        <div className="navbar__logo">
          <img src={imgLogo} alt={"imgLogo"} />
        </div>
        <div className="navbar__balance">
          <img src={imgLogo} alt={"imgLogo"} />
          <span className="navbar__balance-text">
            {this.props.headerText}
          </span>
        </div>
      </div>
    );
  }
}

export default NavbarHeader;
