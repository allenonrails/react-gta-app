import React, { Component } from 'react'

import './less/main.less'
import LeftSvg from '../../../../../../images/left.svg'
import RightSvg from '../../../../../../images/right.svg'

class Main extends Component {
  state = {
    activeSlide: 3
  }

  nextSlide = () => {
    let activeSlide = this.state.activeSlide == this.dataSlider.length - 1 ? 0 : this.state.activeSlide + 1;
    console.log(activeSlide)
    this.setState = ({
      activeSlide 
    })
  }

  prevSlide = () => {
    let activeSlide = this.state.activeSlide == 0 ? this.dataSlider.length - 1 : this.state.activeSlide - 1;
    console.log(activeSlide)
    this.setState({
      activeSlide
    })
  }

  dataSlider = [
    "цифровой",
    "никакой",
    "другой",
    "другой2"
  ]

  render() {
    if(!this.props.active) return null
    return (
      <div>
        <div className="main-settings">
          <div className="main-settings__block">
            <span className="main-settings__prop">Показывать худ</span>
            <span className="main-settings__value">
              <label id="switcher" class="switch">
                <input type="checkbox"></input>
                <span class="slider round"></span>
              </label>
            </span>
          </div>
          <div className="main-settings__block">
            <span className="main-settings__prop">Показывать худ</span>
            <span className="main-settings__value">
              <label id="switcher" class="switch">
                <input type="checkbox"></input>
                <span class="slider round"></span>
              </label>
            </span>
          </div>
          <div className="main-settings__block">
            <span className="main-settings__prop">Показывать худ</span>
            <span className="main-settings__value">
              <label id="switcher" class="switch">
                <input type="checkbox"></input>
                <span class="slider round"></span>
              </label>
            </span>
          </div>
          <div className="main-settings__block">
            <span className="main-settings__prop">Показывать худ</span>
            <span className="main-settings__value">
              <label id="switcher" class="switch">
                <input type="checkbox"></input>
                <span class="slider round"></span>
              </label>
            </span>
          </div>
          <div className="main-settings__block">
            <span className="main-settings__prop">Показывать худ</span>
            <span className="main-settings__value">
              <label id="switcher" class="switch">
                <input type="checkbox"></input>
                <span class="slider round"></span>
              </label>
            </span>
          </div>
          <div className="main-settings__block">
            <span className="main-settings__prop">Показывать худ</span>
            <span className="main-settings__value">
              <label id="switcher" class="switch">
                <input type="checkbox"></input>
                <span class="slider round"></span>
              </label>
            </span>
          </div>
          <div className="main-settings__block">
            <span className="main-settings__prop">Вид спидометра</span>
            <div className="main-settings__slider settings-slider">
              <div onClick={this.prevSlide}  className="settings-slider__left">
                <img src={LeftSvg} alt={"LeftSvg"} />
              </div>
              <div className="settings-slider__content">
                {this.dataSlider.map((textSlide, index )=> {
                  return (
                    <div 
                    className={index == this.state.activeSlide ? "settings-slider__slide settings-slider__slide-active" : "settings-slider__slide"}>
                    {textSlide}
                  </div>
                  )
                })}
              </div>
              <div onClick={this.nextSlide} className="settings-slider__right">
                <img src={RightSvg} alt={"RightSvg"} />
              </div>
            </div>
          </div>
          <div className="main-settings__block">
            <span className="main-settings__prop">Голосовой чат</span>
            <div className="main-settings__btn">
              Перезагрузить
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main