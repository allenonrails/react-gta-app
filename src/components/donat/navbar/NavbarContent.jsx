import React, { Component } from 'react'
import { donatRoutes } from '../../../constants/routes'
import NavbarLink from './NavbarLink'

class NavbarContent extends Component {
  render() {
    return (
      <ul className="navbar__content">  
        {donatRoutes.map(({path, linkName}) =>
          {if(linkName){
            return <NavbarLink to={path} menuText={linkName}/>
          }}
        )}
      </ul>
    )
  }
}

export default NavbarContent