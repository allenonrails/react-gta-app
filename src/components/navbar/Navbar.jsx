import React, {Component} from 'react'
import NavbarHeader from './NavbarHeader'
import NavbarContent from './NavbarContent'

import '../../main-styles/MainNavbar/main.less'

class Navbar extends Component {
  _user = {
    balance: 1355
  }
  render() {
    return (
      <navbar className="navbar">
        <NavbarHeader headerText={this._user.balance}/>
        <NavbarContent linksRoutes={this.props.mainPagesRoutes}/>
      </navbar>
    )
  }
}

export default Navbar
