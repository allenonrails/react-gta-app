import React, { Component } from 'react';

class Rowitem extends Component {
  render() {
    return (
      <td className="table__item">
        <span className="table__item-value">{this.props.value}</span>
      </td>  
    );
  }
}

export default Rowitem;
