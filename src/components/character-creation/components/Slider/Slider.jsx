import React, { Component } from 'react';

import './less/main.less'

import leftSvg from '../../../../images/left.svg'
import RightSvg from '../../../../images/right.svg'

class Slider extends Component {
  state = {
    activeSlide: this.activeSlideCorrect()
  }

  activeSlideCorrect(){
    if(this.props.activeSlide < this.props.slides.length) {
      return this.props.activeSlide
    }else{
      return 0
    }
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
      <div className='character-slider' style={{width: `${this.props.width}px`}}>
        <img onClick={this.prevSlide} className='left' src={leftSvg} alt={"leftSvg"} />
        {this.props.slides.map((text, index) =>
          <div
          data-index={index}
          className={index === this.state.activeSlide ? 'character-slider__slide character-slider__slide-active' : 'character-slider__slide'}>
            {text}
          </div>
        )}
        <img onClick={this.nextSlide} className='right' src={RightSvg} alt={"RightSvg"} />
      </div>
    );
  }
}

export default Slider;
