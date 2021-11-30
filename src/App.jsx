import React from 'react';
import Donat from './components/donat/Donat';

import './main-styles/main.less';
import './main-styles/adaptive.less';

function App() {
  return (
    <React.Fragment>
    <div className="box" id="box">
      <Donat />
    </div>
  </React.Fragment>

  );
}

export default App;