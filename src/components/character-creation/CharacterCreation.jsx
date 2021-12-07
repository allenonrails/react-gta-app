import React, { Component } from 'react';

import './less/main.less'
import MainStage from './Stages/MainStage/MainStage';
import SecondStep from './Stages/SecondStep';
import StepForm from './Stages/StepForm';


class CharacterCreation extends Component {
  state = {
    show: false
  }
  render() {
    if(!this.state.show) return null
    return (
      <div className='character-creation'>
        <MainStage />
        <StepForm />
        <SecondStep />
      </div>
    );
  }
}

export default CharacterCreation;
