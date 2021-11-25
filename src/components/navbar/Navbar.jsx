import React, { Component } from 'react'
import NavbarHeader from './NavbarHeader'
import NavbarContent from './NavbarContent'

import '../../main-styles/navbar/Navbar.less'

class Navbar extends Component {
  render() {
    return (
      <navbar className="navbar">
        <NavbarHeader headerText={this.props.headerText} />
        <NavbarContent linksRoutes={this.props.mainPagesRoutes}/>
      </navbar>
    )
  }
}

export default Navbar
