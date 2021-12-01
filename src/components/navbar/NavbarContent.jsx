import React, { Component } from 'react'
import NavbarLink from './NavbarLink'

class NavbarContent extends Component {
  render() {
    return (
      <ul className="navbar__content">  
        {this.props.linksRoutes.map(({path, linkName}) =>
          {if(linkName){
            return <NavbarLink to={path} menuText={linkName}/>
          }}
        )}
        {this.props.children}
      </ul>
    )
  }
}

export default NavbarContent