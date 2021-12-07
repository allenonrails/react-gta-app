import React from 'react';
import Donate from './components/donate/Donate';

import './main-styles/main.less';
import './main-styles/adaptive.less';
import Profile from './components/profile/Profile';
import CarShowroom from './components/car-showroom/CarShowroom';
import Rent from './components/car-rent/Rent';
import Inventory from './components/inventory/Inventory';
import Registration from './components/authentication/Registration';
import Login from './components/authentication/Login';
import Shop from './components/shop/Shop';
import CharacterCreation from './components/character-creation/CharacterCreation';

function App() {
  return (
    <React.Fragment>
      <div className="box" id="box">
        <Donate />
        <Profile />
        <CarShowroom /> 
        <Rent />
        <Inventory />

        <Registration />
        <Login />

        <Shop />

        <CharacterCreation />
      </div>
    </React.Fragment>

  );
}

export default App;