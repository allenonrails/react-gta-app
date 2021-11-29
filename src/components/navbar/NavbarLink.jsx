import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';

class NavbarLink extends Component {
  render() {
    let isActive = this.props.location.pathname === this.props.to;
    let classNameItem = isActive ? 'navbar__item navbar__item-active' : 'navbar__item';

    return (    
      <li className={classNameItem}>
        <Link className="navbar__link" {...this.props}>
          {this.props.menuText}
        </Link>
      </li>
  );
  }
}

export default withRouter(NavbarLink);
