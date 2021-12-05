import React from 'react';
import Donate from './components/donate/Donate';

import './main-styles/main.less';
import './main-styles/adaptive.less';
import Profile from './components/profile/Profile';
import CarShowroom from './components/car_showroom/CarShowroom';
import Rent from './components/car_rent/Rent';
import Inventory from './components/inventory/Inventory';

function App() {
  return (
    <React.Fragment>
      <div className="box" id="box">
        <Donate />
        <Profile />
        <CarShowroom /> 
        <Rent />
        <Inventory />
      </div>
    </React.Fragment>

  );
}

export default App;