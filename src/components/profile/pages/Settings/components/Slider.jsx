import React, { Component } from 'react';

import LeftSvg from '../../../../../images/left.svg'
import RightSvg from '../../../../../images/right.svg'

import './main.less'

class Slider extends Component {
  state = {
    activeSlide: 0
  }

  nextSlide = () => {
    let activeSlide = this.state.activeSlide == this.props.slides.length - 1 ? 0 : this.state.activeSlide + 1;
    this.setState({
      activeSlide
    })
  }

  prevSlide = () => {
    let activeSlide = this.state.activeSlide == 0 ? this.props.slides.length - 1 : this.state.activeSlide - 1;
    this.setState({
      activeSlide
    })
  }

  render() {
    return (
      <div className="main-settings__block">
        <span className="main-settings__prop">{this.props.textSlider}</span>
        <div className="main-settings__slider settings-slider">
          <div onClick={this.prevSlide} className="settings-slider__left">
            <img src={LeftSvg} alt={"LeftSvg"} />
          </div>
          <div className="settings-slider__content">
            {this.props.slides.map((textSlide, index) =>
              <div
                className={index == this.state.activeSlide ? "settings-slider__slide settings-slider__slide-active" : "settings-slider__slide"}>
                {textSlide}
              </div>

            )}
          </div>
          <div onClick={this.nextSlide} className="settings-slider__right">
            <img src={RightSvg} alt={"RightSvg"} />
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
