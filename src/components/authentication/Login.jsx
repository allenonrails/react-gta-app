import React, { Component } from 'react';
import './less/main.less'
import EyeOpened from '../../images/eye_open.svg'
import EyeClosed from '../../images/eye_closed.svg'
import FormHeader from './FormHeader';

class Login extends Component {
  state = {
    show: false,
    type: 'password',
  }
  handleClick = () => this.setState(({ type }) => ({
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
            <div className="form__block">
              <input type={this.state.type} placeholder="Введите пароль" className="form__input login-input"></input>
              <img onClick={this.showPassword} src={EyeOpened} alt={"EyeOpened"} />
            </div>
            <button className="form__btn form__btn-create">Начать играть</button>
            <button className="form__btn form__btn-back">Регистрация</button>
          </fieldset>
        </div>
      </div>
    );
  }
}

export default Login;
