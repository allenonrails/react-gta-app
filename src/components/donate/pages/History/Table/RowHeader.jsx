import React, { Component } from 'react'

export default class RowHeader extends Component {
  render() {
    return (
      <div className="table__title-row" >
        <div className="table__title">
          {this.props.rowName}
        </div>
      </div>
    )
  }
}
