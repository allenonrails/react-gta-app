import React, { Component } from 'react';
import RowHeader from './RowHeader';
import RowItem from './RowItem';

class Table extends Component {
  classes = this.props.classes.join(' ') + " table";

  render() {
    return (
      <table className={this.classes}>
        <div>
          <div className="table__header">
            {this.props.tableHash.rowNames.map(rowName =>
              <RowHeader key={rowName} rowName={rowName} />
            )}
          </div>
          <div className="table-scrollbar">
            {this.props.tableHash.items.map(itemValues =>
              <div className="table__items">
                {itemValues.map(value =>
                  <RowItem key={value} value={value} />
                )}
              </div>
            )}
          </div>
        </div>
      </table>
    )
  }
}

export default Table;
