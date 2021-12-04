import React, { Component } from 'react';

class Rowitem extends Component {
  render() {
    return (
      <div className="table__item">
        <span className="table__item-value">{this.props.value}</span>
      </div>  
    );
  }
}

export default Rowitem;
