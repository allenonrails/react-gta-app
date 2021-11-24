import React from 'react';

import './styles/exampleButton.less';

function ExampleButton(values) {
  return (
    <React.Fragment>
      <div className={`button-box ${values.isActive ? 'active' : ''}`}>
        <p className="button-text">{values.name}</p>
      </div>
    </React.Fragment>
  )
}

export default ExampleButton;