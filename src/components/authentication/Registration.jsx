import React, { Component } from 'react';
import FormHeader from './FormHeader';

import './less/main.less'
import EyeOpened from '../../images/eye_open.svg'
import EyeClosed from '../../images/eye_closed.svg'

class Registration extends Component {
  state = {
    show: false,
    type: 'password',
  }

  handleClick = () => this.setState(({type}) => ({
    type: type === 'text' ? 'password' : 'text'
  }))

  showPassword = (e) => {
    if (e.target.src == EyeOpened) {
      let type = 'text';
      this.setState(({
        type
      }))
      e.target.src = EyeClosed
      e.target.style.top = '22px'
    } else {
      let type = 'password';
      this.setState(({
        type
      }))
      e.target.src = EyeOpened
      e.target.style.top = '15px'
    }
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
            <div className="form__block">
              <input type={this.state.type}  placeholder="Придумайте сложный пароль" className="form__input"></input>
              <img onClick={this.showPassword} src={EyeOpened} alt={"EyeOpened"} />
            </div>
            <div className="form__block">
              <input type={this.state.type} placeholder="Повторите пароль" className="form__input"></input>
              <img onClick={this.showPassword} src={EyeOpened} alt={"EyeOpened"} />
            </div>
            <button className="form__btn form__btn-create">Создать аккаунт</button>
            <button className="form__btn form__btn-back">Назад</button>
          </fieldset>
        </div>
      </div>
    );
  }
}

export default Registration;
