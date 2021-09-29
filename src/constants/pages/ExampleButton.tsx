import React from 'react';
import ExampleInterface from './interfaces/ExampleInterface';

function ExampleButton(values: ExampleInterface): JSX.Element{
  return(
    <React.Fragment>
      <div className={`button-box ${values.isActive}`}>
        <p className="button-text">{values.name}</p>
      </div>
    </React.Fragment>
  )
}

export default ExampleButton;