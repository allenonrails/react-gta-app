import React, { Component } from 'react';
import Slider from '../components/Slider/Slider';


class StepForm extends Component {
  state = {
    show: false
  }

  data = {
    step : 1,
    title: 'Введите свои данные',
    inputs: [
      {
        placeholder: 'Имя (англ)'
      },
      {
        placeholder: 'Фамилия (англ)'
      },
      {
        placeholder: 'Возраст (от 18 до 60)'
      },
      {
        placeholder: 'Промокод (если есть)'
      },
      {
        placeholder: 'Ник пригласившего (если он есть)'
      },
    ],
    sliders: [
      {
        textSlider: 'Выберите национальность ',
        slides: [
          "Абхаз",
          "Узбек",
          "Пудж"
        ],
        helpText: 'Ваша национальность никак не влият на внешность. Внешность выбирается следующим шагом.'
      }
    ]
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
          {this.data.inputs.map(({ placeholder }) =>
            <input placeholder={placeholder} type="text" className="step-form__input" />
          )}
          {this.data.sliders.map(({ textSlider, helpText, slides }) =>
            <div className="step-form__slider">
              {textSlider}
              <Slider
                activeSlide={0}
                slides={slides}
              />
              <p className="step-form__slider-help">
                Ваша национальность никак не влият на внешность. Внешность
                выбирается следующим шагом.
              </p>
            </div>
          )}
          <div className="step-form__buttons">
            <button className="step-form__btn">...</button>
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

export default StepForm;
