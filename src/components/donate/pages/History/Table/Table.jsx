import React, { Component } from 'react';
import RowHeader from './RowHeader';
import RowItem from './RowItem';

class Table extends Component {
  classes = this.props.classes.join(' ') + " table";
  
  render() {
    return (
      <table className={this.classes}>
        <tbody>
          <tr className="table__header">
            {this.props.tableHash.rowNames.map(rowName =>
              <RowHeader key={rowName} rowName={rowName}/>
            )}
          </tr>
          {this.props.tableHash.items.map(itemValues => 
            <tr className="table__items">
              {itemValues.map(value => 
                <RowItem key={value} value={value} />
              )}
            </tr>
          )}
        </tbody>
    </table>
    )
  }
}

export default Table;
