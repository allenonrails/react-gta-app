import React from 'react';
import Donat from './components/donat/Donat';

import './main-styles/main.less';
import './main-styles/adaptive.less';
import Profile from './components/profile/Profile';

function App() {
  return (
    <React.Fragment>
      <div className="box" id="box">
        <Donat />
        <Profile />
      </div>
    </React.Fragment>

  );
}

export default App;