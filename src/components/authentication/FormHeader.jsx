import React, { Component } from 'react';

import LogoImage from '../../images/logo.png'

class FormHeader extends Component {
  render() {
    return (
      <div className="form__header">
        <div className="form__logo">
          <img src={LogoImage} alt={"LogoImage"} />
        </div>
        <h2 className="form__description">
          Добро пожаловать в твою собственную
          социальную кибер-реальность
        </h2>
      </div>
    );
  }
}

export default FormHeader;
