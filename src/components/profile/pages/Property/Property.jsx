import React, { Component } from 'react';
import './less/main.less'
import Home from './Tabs/Home'
import Business from './Tabs/Business'
import Transport from './Tabs/Transport'
import { Route, withRouter } from 'react-router';

class Property extends Component {
  state = {
    active: 0
  }

  dataTabs = [
    {
      id: 0,
      tabName: 'Дом',
      tabComponent: Home
    },
    {
      id: 1,
      tabName: 'Бизнес и др.',
      tabComponent: Business
    },
    {
      id: 2,
      tabName: 'Транспорт',
      tabComponent: Transport
    }
  ]

  btnClickEvent = (e) => {
    console.log(e)
    this.setState({
      active: +e.target.dataset.id
    })
  }

  render() {
    return (
      <div className="property">
        <div className="property__header">
          {this.dataTabs.map(({tabName, id}) => 
            <span
            data-id={id} 
            className={id === this.state.active ? "property__tab-name property__tab-name-active" : 'property__tab-name'}
            onClick={this.btnClickEvent}
            >
              {tabName}
            </span>
          )}
        </div>
        <div className="property__container">
          <Home active={0 === this.state.active}/>
          <Business active={1 === this.state.active}/>
          <Transport active={2 === this.state.active}/>
        </div>
      </div>
    );
  }
}

export default withRouter(Property);
