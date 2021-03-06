import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';

class NavbarLink extends Component {
  static defaultProps = {
    customClasses: []
  }

  render() {
    let regexp = /^(\/?[A-z0-9]*\/?[A-z0-9]*)/;
    let isActive = this.props.location.pathname.match(regexp)[0] === this.props.to;
    let classNameItem = isActive ? 'navbar__item navbar__item-active ' : 'navbar__item ';
    return (    
      <li className={classNameItem + this.props.customClasses.join(' ')}>
        <Link className="navbar__link" {...this.props}>
          {this.props.menuText}
        </Link>
      </li>
  );
  }
}

export default withRouter(NavbarLink);
