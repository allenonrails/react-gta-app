import React, {Component} from 'react'
import NavbarHeader from './NavbarHeader'
import NavbarContent from './NavbarContent'

import './less/main.less'

class Navbar extends Component {
  static defaultProps = {
    classes: []
  }

  classes = this.props.customClasses.join(' ') + " navbar";
  render() {
    return (
      <navbar className={this.classes}>
        {this.props.children}
      </navbar>
    )
  }
}

export default Navbar
