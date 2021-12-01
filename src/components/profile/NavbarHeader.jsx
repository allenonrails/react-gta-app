import React, { Component } from 'react';

import imgLogo from '../../images/logo.png'; 

class Navbarheader extends Component {
  render() {
    return (
      <div className="profile-navbar__header">
        <div className="profile-navbar__logo">
          <img src={imgLogo} alt={"imgLogo"} />
        </div>
        <div className="profile-navbar__balance">
          <span className="profile-navbar__text">
            {this.props.headerText}
          </span>
        </div>
      </div>
    );
  }
}

export default Navbarheader;
