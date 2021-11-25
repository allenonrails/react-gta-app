import React, { Component } from 'react'
import { mainPagesRoutes } from '../../routes'
import Navbarlink from './NavbarLink'

class NavbarContent extends Component {
  render() {
    return (
      <ul className="navbar__content">  
        {mainPagesRoutes.map(({path, linkName}) =>
          <Navbarlink to={path} menuText={linkName}/>
        )}
      </ul>
    )
  }
}

export default NavbarContent