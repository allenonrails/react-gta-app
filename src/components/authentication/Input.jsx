import React, { Component } from 'react';
import EyeOpened from '../../images/eye_open.svg'
import EyeClosed from '../../images/eye_closed.svg'

class Input extends Component {
  state = {
    type: 'password'
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
    return (
      <div>
        <div className="form__block">
          <input type={this.state.type} placeholder={this.props.placeholder} className="form__input"></input>
          <img onClick={this.showPassword} src={EyeOpened} alt={"EyeOpened"} />
        </div>
      </div>
    );
  }
}

export default Input;