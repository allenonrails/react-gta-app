import React, { Component } from 'react';
import Table from './Table/Table';

class Tabs extends Component {
  toggleTab = (key) => {
    console.log(Object.keys(this.props.data).indexOf(key))
  }

  state = {
    active: 0
  }

  btnClickEvent = (e) => {
    this.setState({
      active: +e.target.dataset.index
    })
  }

  render() {
    let {active} = this.state;
    return (
      <div className="tabs-container">
        <div className="tabs-header">
          {Object.keys(this.props.data).map((rowTitle, i) =>
            <button 
              data-index={i}
              className={i === active ? "tabs__btn tabs__btn-active" : 'tabs__btn'}
              onClick={this.btnClickEvent}
            >
              {rowTitle}
            </button>
          )}
        </div>
        <div className="tabs">
          {Object.values(this.props.data).map((dataHash, i) =>
            <div 
              className={i === active ? "table-container table-container-active" : "table-container"}>
                <Table tableHash={dataHash} classes={["tabs__content"]} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Tabs;
