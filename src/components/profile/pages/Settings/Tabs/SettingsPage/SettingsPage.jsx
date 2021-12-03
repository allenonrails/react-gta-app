import React, { Component } from 'react'

import './less/main.less'
import Slider from '../../components/Slider'

class SettingsPage extends Component {
  state = {
    activeSlide: 3
  }

  nextSlide = () => {
    let activeSlide = this.state.activeSlide == this.dataSlider.length - 1 ? 0 : this.state.activeSlide + 1;
    this.setState({
      activeSlide
    })
  }

  prevSlide = () => {
    let activeSlide = this.state.activeSlide == 0 ? this.dataSlider.length - 1 : this.state.activeSlide - 1;
    this.setState({
      activeSlide
    })
  }

  reloadChat = () => {
    console.log("rebooting the chat...")
  }

  switcherData = [
    "Свойство",
    "Свойство",
    "Свойство",
    "Свойство",
    "Свойство",
    "Свойство",
    "Свойство",
    "Свойство",
    "Свойство"
  ]

  dataSlider = {
    textSlider: 'Текст слайда',
    slides: [
      "цифровой",
      "никакой",
      "другой",
      "другой2"
    ]
  }

  render() {
    if (!this.props.active) return null
    return (
      <div className="main-settings">
        {this.switcherData.map(textValue =>
          <div className="main-settings__block">
            <span className="main-settings__prop">{textValue}</span>
            <span className="main-settings__value">
              <label id="switcher" class="switch">
                <input type="checkbox"></input>
                <span class="slider round"></span>
              </label>
            </span>
          </div>
        )}
        <Slider
          textSlider={this.dataSlider.textSlider}
          slides={this.dataSlider.slides}
        />
        <div className="main-settings__block">
          <span className="main-settings__prop">Голосовой чат</span>
          <div onClick={this.reloadChat} className="main-settings__btn">
            Перезагрузить
          </div>
        </div>
      </div>
    )
  }
}

export default SettingsPage