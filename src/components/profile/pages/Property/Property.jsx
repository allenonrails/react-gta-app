import React, { Component } from 'react';
import './less/main.less'
import Home from './Tabs/Home'
import Business from './Tabs/Business'
import Transport from './Tabs/Transport'
import { BrowserRouter as Router, Route, withRouter, Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class Property extends Component {
  state = {
    show: true,
    path: '/property',
    active: '/property'
  }

  dataTabs = [
    {
      tabName: 'Дом',
      path: `${this.props.location.pathname}`,
      tabComponent: Home
    },
    {
      tabName: 'Бизнес и др.',
      path: `${this.props.location.pathname}/business`,
      tabComponent: Business
    },
    {
      tabName: 'Транспорт',
      path: `${this.props.location.pathname}/transport`,
      tabComponent: Transport
    }
  ]

  btnClickEvent = (e) => {
    
    this.setState({
      active: +e.target.dataset.path
    })
  }

  render() {
    let {active} = this.state;
    return (
      <div className="property">
        <div className="property__header">
          {this.dataTabs.map(({tabName, path}) => 
            <Link
            to={path} 
            data-path={path} 
            className={path == active ? "property__tab-name property__tab-name-active" : 'property__tab-name'}
            onClick={this.btnClickEvent}
            >
              {tabName}
            </Link>
          )}
        </div>
        <div className="property__container">
          {this.dataTabs.map(({path, tabComponent}) =>
            <Route exact path={path} component={tabComponent} />
          )}
          <Redirect to={this.state.path} push />
        </div>
      </div>
    );
  }
}

export default withRouter(Property);
