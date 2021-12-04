import React, { Component } from 'react';

import CardImg from '../../images/car.png'
import './less/main.less'

import LeftSvg from '../../images/left.svg'
import RightSvg from '../../images/right.svg'

class CarShowroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      path: '/car_showroom',
      activeCar: 0,
      activeColor: 2
    }
  }

  carsData = [
    {
      title: 'Annis',
      price: 1_500_000,
      availableCount: 3,
      image: CardImg,
      fullInfo: {
        "Класс": "SUVs",
        "Тип топлива": "100l",
        "Вместимость юака": "20l",
        "Расход топлива": "10l",
        "Объем багажника": "100 м",
        "Допустимый вес": "100 м"
      },
      rent: 1_500,
      colors: [
        "#3B39E0", "#EF1E97", "#F7EDD5", "#FFFFFF", "#0D1116", "#999DA0", "#DA1918", "#F78616", "#FFC91F"
      ]
    },
    {
      title: 'Annis',
      price: 1_500_000,
      availableCount: 3,
      image: CardImg,
      fullInfo: {
        "Класс": "SUVs",
        "Тип топлива": "100l",
        "Вместимость юака": "20l",
        "Расход топлива": "10l",
        "Объем багажника": "100 м",
        "Допустимый вес": "100 м"
      },
      rent: 1_500,
      colors: [
        "#3B39E0", "#EF1E97", "#F7EDD5", "#FFFFFF", "#0D1116", "#999DA0", "#DA1918", "#F78616", "#FFC91F"
      ]
    },
    {
      title: 'Annis',
      price: 1_500_000,
      availableCount: 3,
      image: CardImg,
      fullInfo: {
        "Класс": "SUVs",
        "Тип топлива": "100l",
        "Вместимость юака": "20l",
        "Расход топлива": "10l",
        "Объем багажника": "100 м",
        "Допустимый вес": "100 м"
      },
      rent: 1_500,
      colors: [
        "#3B39E0", "#EF1E97", "#F7EDD5", "#FFFFFF", "#0D1116", "#999DA0", "#DA1918", "#F78616", "#FFC91F"
      ]
    },
    {
      title: 'Annis',
      price: 1_500_000,
      availableCount: 3,
      image: CardImg,
      fullInfo: {
        "Класс": "SUVs",
        "Тип топлива": "100l",
        "Вместимость юака": "20l",
        "Расход топлива": "10l",
        "Объем багажника": "100 м",
        "Допустимый вес": "100 м"
      },
      rent: 1_500,
      colors: [
        "#3B39E0", "#EF1E97", "#F7EDD5", "#FFFFFF", "#0D1116", "#999DA0", "#DA1918", "#F78616", "#FFC91F"
      ]
    },
    {
      title: 'Annis',
      price: 1_500_000,
      availableCount: 3,
      image: CardImg,
      fullInfo: {
        "Класс": "SUVs",
        "Тип топлива": "100l",
        "Вместимость юака": "20l",
        "Расход топлива": "10l",
        "Объем багажника": "100 м",
        "Допустимый вес": "100 м"
      },
      rent: 1_500,
      colors: [
        "#3B39E0", "#EF1E97", "#F7EDD5", "#FFFFFF", "#0D1116", "#999DA0", "#DA1918", "#F78616", "#FFC91F"
      ]
    },
    {
      title: 'Annis',
      price: 1_500_000,
      availableCount: 3,
      image: CardImg,
      fullInfo: {
        "Класс": "SUVs",
        "Тип топлива": "100l",
        "Вместимость юака": "20l",
        "Расход топлива": "10l",
        "Объем багажника": "100 м",
        "Допустимый вес": "100 м"
      },
      rent: 1_500,
      colors: [
        "#3B39E0", "#EF1E97", "#F7EDD5", "#FFFFFF", "#0D1116", "#999DA0", "#DA1918", "#F78616", "#FFC91F"
      ]
    },
    {
      title: 'Annis',
      price: 1_500_000,
      availableCount: 3,
      image: CardImg,
      fullInfo: {
        "Класс": "SUVs",
        "Тип топлива": "100l",
        "Вместимость юака": "20l",
        "Расход топлива": "10l",
        "Объем багажника": "100 м",
        "Допустимый вес": "100 м"
      },
      rent: 1_500,
      colors: [
        "#3B39E0", "#EF1E97", "#F7EDD5", "#FFFFFF", "#0D1116", "#999DA0", "#DA1918", "#F78616", "#FFC91F"
      ]
    },
    {
      title: 'Annis',
      price: 1_500_000,
      availableCount: 3,
      image: CardImg,
      fullInfo: {
        "Класс": "SUVs",
        "Тип топлива": "100l",
        "Вместимость юака": "20l",
        "Расход топлива": "10l",
        "Объем багажника": "100 м",
        "Допустимый вес": "100 м"
      },
      rent: 1_500,
      colors: [
        "#3B39E0", "#EF1E97", "#F7EDD5", "#FFFFFF", "#0D1116", "#999DA0", "#DA1918", "#F78616", "#FFC91F"
      ]
    },
    {
      title: 'Annis',
      price: 1_500_000,
      availableCount: 3,
      image: CardImg,
      fullInfo: {
        "Класс": "SUVs",
        "Тип топлива": "100l",
        "Вместимость юака": "20l",
        "Расход топлива": "10l",
        "Объем багажника": "100 м",
        "Допустимый вес": "100 м"
      },
      rent: 1_500,
      colors: [
        "#3B39E0", "#EF1E97", "#F7EDD5", "#FFFFFF", "#0D1116", "#999DA0", "#DA1918", "#F78616", "#FFC91F"
      ]
    },
    {
      title: 'Annis',
      price: 1_500_000,
      availableCount: 3,
      image: CardImg,
      fullInfo: {
        "Класс": "SUVs",
        "Тип топлива": "100l",
        "Вместимость юака": "20l",
        "Расход топлива": "10l",
        "Объем багажника": "100 м",
        "Допустимый вес": "100 м"
      },
      rent: 1_500,
      colors: [
        "#3B39E0", "#EF1E97", "#F7EDD5", "#FFFFFF", "#0D1116", "#999DA0", "#DA1918", "#F78616", "#FFC91F"
      ]
    },
    {
      title: 'Annis',
      price: 1_500_000,
      availableCount: 3,
      image: CardImg,
      fullInfo: {
        "Класс": "SUVs",
        "Тип топлива": "100l",
        "Вместимость юака": "20l",
        "Расход топлива": "10l",
        "Объем багажника": "100 м",
        "Допустимый вес": "100 м"
      },
      rent: 1_500,
      colors: [
        "#3B39E0", "#EF1E97", "#F7EDD5", "#FFFFFF", "#0D1116", "#999DA0", "#DA1918", "#F78616", "#FFC91F"
      ]
    },
    {
      title: 'Annis',
      price: 1_500_000,
      availableCount: 3,
      image: CardImg,
      fullInfo: {
        "Класс": "SUVs",
        "Тип топлива": "100l",
        "Вместимость юака": "20l",
        "Расход топлива": "10l",
        "Объем багажника": "100 м",
        "Допустимый вес": "100 м"
      },
      rent: 1_500,
      colors: [
        "#3B39E0", "#EF1E97", "#F7EDD5", "#FFFFFF", "#0D1116", "#999DA0", "#DA1918", "#F78616", "#FFC91F"
      ]
    },
    {
      title: 'Annis',
      price: 1_500_000,
      availableCount: 3,
      image: CardImg,
      fullInfo: {
        "Класс": "SUVs",
        "Тип топлива": "100l",
        "Вместимость юака": "20l",
        "Расход топлива": "10l",
        "Объем багажника": "100 м",
        "Допустимый вес": "100 м"
      },
      rent: 1_500,
      colors: [
        "#3B39E0", "#EF1E97", "#F7EDD5", "#FFFFFF", "#0D1116", "#999DA0", "#DA1918", "#F78616", "#FFC91F"
      ]
    },
    {
      title: 'Annis',
      price: 1_500_000,
      availableCount: 3,
      image: CardImg,
      fullInfo: {
        "Класс": "SUVs",
        "Тип топлива": "100l",
        "Вместимость юака": "20l",
        "Расход топлива": "10l",
        "Объем багажника": "100 м",
        "Допустимый вес": "100 м"
      },
      rent: 1_500,
      colors: [
        "#3B39E0", "#EF1E97", "#F7EDD5", "#FFFFFF", "#0D1116", "#999DA0", "#DA1918", "#F78616", "#FFC91F"
      ]
    },
    {
      title: 'Annis',
      price: 1_500_000,
      availableCount: 3,
      image: CardImg,
      fullInfo: {
        "Класс": "SUVs",
        "Тип топлива": "100l",
        "Вместимость юака": "20l",
        "Расход топлива": "10l",
        "Объем багажника": "100 м",
        "Допустимый вес": "100 м"
      },
      rent: 1_500,
      colors: [
        "#3B39E0", "#EF1E97", "#F7EDD5", "#FFFFFF", "#0D1116", "#999DA0", "#DA1918", "#F78616", "#FFC91F"
      ]
    },
  ]

  btnClickEvent = (e) => {
    this.setState({
      activeCar: +e.target.parentElement.dataset.index
    })
  }

  nextSlide = () => {
    let activeColor = this.state.activeColor == this.carsData[Object.keys(this.carsData)[this.state.activeCar]].colors.length - 1 ? 0 : this.state.activeColor + 1;
    this.setState({
      activeColor
    })
  }

  prevSlide = () => {
    let activeColor = this.state.activeColor == 0 ? this.carsData[Object.keys(this.carsData)[this.state.activeCar]].colors.length - 1 : this.state.activeColor - 1;
    this.setState({
      activeColor
    })
  }

  numberWithCommas(value){
    var parts = value.toString().split(",");
    parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,",");
    return parts.join(',');
  }

  render() {
    let activeCar = this.carsData[Object.keys(this.carsData)[this.state.activeCar]];
    return (
      <div className="car-showroom">
        <div className="car-showroom__list">
          {this.carsData.map(({ title, price, availableCount, image }, i) =>
            <div className={i === this.state.activeCar ? "car car-active" : 'car'}
              onClick={this.btnClickEvent}
              data-index={i}>
              <div data-index={i} className="car__info">
                <h3 className="car__title">
                  {title}
                </h3>
                <span className="car__price">
                  ${this.numberWithCommas(price)}
                </span>
                <span className="car__available-count">
                  В наличии: {availableCount} шт.
                </span>
              </div>
              <div data-index={i} className="car__image">
                <img src={image} alt={"image"} />
              </div>
            </div>
          )}
        </div>
        <div className="car-showroom__colors car-colors">
          <div className="car-info__purchase">
            <button className="car-info__btn btn-color">Основной</button>
            <button className="car-info__btn ">Дополнительный</button>
          </div>
          <div className="car-colors__wrap">
            <img onClick={this.prevSlide} src={LeftSvg} alt={"LeftSvg"} />
            <div className="car-colors__container">
              {activeCar.colors.map((color, index) =>
                <div style={{ backgroundColor: color }} 
                  className={index == this.state.activeColor ? 'car-colors__block car-colors__block-active' : 'car-colors__block'}
                ></div>
              )}
            </div>
            <img onClick={this.nextSlide} src={RightSvg} alt="Rigth" />
          </div>
        </div>
        <div className="car-showroom__info car-info">
          <h2 className="car-info__title">
            {activeCar.title}
          </h2>
          <div className="car-info__props">
            {Object.keys(activeCar.fullInfo).map(key =>
              <div className="car-info__block">
                <span className="car-info__prop">
                  {key}
                </span>
                <span className="car-info__value">
                  {activeCar.fullInfo[key]}
                </span>
              </div>
            )}
          </div>
          <div className="car-info__price">
            Покупка:
            <span className="car-info__price-value">
              ${this.numberWithCommas(activeCar.price)}
            </span>
          </div>
          <div className="car-info__purchase">
            <button className="car-info__btn btn-purchase">По карте</button>
            <button className="car-info__btn btn-purchase">Наличкой</button>
          </div>
          <div className="car-info__price">
            Аренда:
            <span className="car-info__price-value">
              ${this.numberWithCommas(activeCar.rent)}
            </span>
          </div>
          <button className="car-info__btn btn-purchase">Аренда</button>
          <button className="car-info__btn btn-purchase btn-leave">Покинуть автосалон</button>
        </div>
      </div>
    );
  }
}

export default CarShowroom;
