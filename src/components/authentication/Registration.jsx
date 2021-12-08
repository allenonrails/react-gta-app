import React, { Component } from 'react';
import FormHeader from './FormHeader';

import Input from './Input'

import './less/main.less'
class Registration extends Component {
  state = {
    show: false,
    type: 'password',
  }

  render() {
    if(!this.state.show) return null
    return (
      <div className="form">
        <FormHeader/>
        <div className="form__content">
          <h3 className="form__title">
            Регистрация
          </h3>
          <fieldset>
            <input placeholder="Придумайте логин" className="form__input"></input>
            <input 
              placeholder="Введите ваш email"
              className="form__input"></input>
            <Input placeholder="Придумайте сложный пароль"/>
            <Input placeholder="Повторите пароль"/>
            <button className="form__btn form__btn-create">Создать аккаунт</button>
            <button className="form__btn form__btn-back">Назад</button>
          </fieldset>
        </div>
      </div>
    );
  }
}

export default Registration;
