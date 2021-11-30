import React, {Component} from 'react'
import NavbarHeader from './NavbarHeader'
import NavbarContent from './NavbarContent'

import './less/main.less'

class Navbar extends Component {
  _user = {
    balance: 1355
  }
  render() {
    return (
      <navbar className="navbar">
        <NavbarHeader headerText={this._user.balance}/>
        <NavbarContent linksRoutes={this.props.donutRoutes}/>
      </navbar>
    )
  }
}

export default Navbar
