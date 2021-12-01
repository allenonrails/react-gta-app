import React, { Component } from 'react';

import imgTab from '../../../../../images/tabProperty.png'
import './less/main.less';
class Home extends Component {
  render() {
    return (
      <div className='property-tab'>
        <div className="property-tab__image">
          <img src={imgTab} alt={"imgTab"} />
        </div>
      </div>
    );
  }
}

export default Home;
