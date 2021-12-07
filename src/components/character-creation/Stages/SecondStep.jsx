import React, { Component } from 'react';
import Slider from '../components/Slider/Slider';

class SecondStep extends Component {
  state = {
    show: true,
    active: 1
  }

  data = {
    step: 2,
    title: 'Выберите пол',
    sex: [
      {
        sex: 'Муж',
        sliders: [
          {
            title: 'Отец',
            slides: [
              "Бенджамин",
              "Иван"
            ]
          },
          {
            title: 'Сходство',
            slides: [
              "50%",
              "100%"
            ]
          }
        ]
      },
      {
        sex: 'Жен',
        sliders: [
          {
            title: 'Мать',
            slides: [
              "Бенджамин",
              "Иван"
            ]
          },
          {
            title: 'Сходство',
            slides: [
              "50%",
              "100%"
            ]
          }
        ]
      }
    ]
  }

  btnClickEvent = (e) => {
    this.setState({
      active: +e.target.dataset.index
    })
  }

  render() {
    if (!this.state.show) return null
    return (
      <React.Fragment>
        <div className="step-form">
          <h4 className="step-form__step">
            Шаг {this.data.step}
          </h4>
          <span className="step-form__help">
            {this.data.title}
          </span>
          <div className="step-form__sex step-form-sex">
            {this.data.sex.map(({ sex, sliders }, index) =>
              <div className="step-form-sex__block">
                <div 
                  data-index={index}
                  onClick={this.btnClickEvent}
                  className={index === this.state.active ? 'step-form-sex__sex step-form-sex__sex-active' : 'step-form-sex__sex'}>
                  {sex}
                </div>
                {sliders.map(({ title, slides }) =>
                  <div className="step-form-sex__slider">
                    <h3 className="step-form-sex__slider-text">
                      {title}
                    </h3>
                    <Slider
                      activeSlide={0}
                      width={160}
                      slides={slides}
                    />
                  </div>
                )}
              </div>
            )}
            <div className="step-form-sex__block"></div>
          </div>
          <div className="step-form__buttons" style={{marginTop: '200px'}}>
            <button className="step-form__btn">Рандом</button>
            <button className="step-form__btn">Сбор</button>
            <button className="step-form__btn">Далее</button>
          </div>
        </div>
        <p className="step-help-text">
          Используйте ЛКМ чтобы вращять камеру, а колёсико мыши для приближения
        </p>
      </React.Fragment>
    );
  }
}

export default SecondStep;
