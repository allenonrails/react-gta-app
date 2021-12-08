import React, { Component } from 'react';
import './less/main.less'
import FormHeader from './FormHeader';
import Input from './Input';

class Login extends Component {
  state = {
    show: false,
    type: 'password',
  }
  render() {
    if (!this.state.show) return null
    return (
      <div className="form">
        <FormHeader />
        <div className="form__content">
          <h3 className="form__title">
            Авторизация
          </h3>
          <fieldset>
            <input placeholder="Придумайте логин" className="form__input login-input"></input>
            <Input placeholder="Введите пароль"/>
            <button className="form__btn form__btn-create">Начать играть</button>
            <button className="form__btn form__btn-back">Регистрация</button>
          </fieldset>
        </div>
      </div>
    );
  }
}

export default Login;
