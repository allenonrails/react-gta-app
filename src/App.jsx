import React from 'react';

import MainExample from './components/example/MainExample';

import './main-styles/main.less';

function App() {
  return (
    <React.Fragment>
      <div className="box" id="box">
        <MainExample />
      </div>
    </React.Fragment>
  );
}

export default App;