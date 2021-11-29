import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/navbar/Navbar';
import ButtonClose from './constants/buttons/ButtonClose';
import { mainPagesRoutes } from './constants/routes';

import './main-styles/main.less';

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <ButtonClose/>
        <Navbar linksRoutes={mainPagesRoutes}/>
        <AppRouter/>
      </div>
    </BrowserRouter>
  );
}

export default App;