import React from 'react';
import Donate from './components/donate/Donate';

import './main-styles/main.less';
import './main-styles/adaptive.less';
import Profile from './components/profile/Profile';
import CarShowroom from './components/car_showroom/CarShowroom';

function App() {
  return (
    <React.Fragment>
      <div className="box" id="box">
        <Donate />
        <Profile />
        <CarShowroom /> 
      </div>
    </React.Fragment>

  );
}

export default App;