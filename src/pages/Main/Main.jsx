import React, { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { mainPagesRoutes } from '../../constants/routes';
import Banner from './Banner';

import '../../main-styles/pages/Main/main.less'

import Banner1 from '../../images/banner1.png'
import Banner2 from '../../images/banner2.png'

import SmallBanner1 from "../../images/smallBanner1.png"
import SmallBanner2 from "../../images/smallBanner2.png"
import SmallBanner3 from "../../images/smallBanner3.png"

import Smallbanner from './SmallBanner';
import Btnclose from '../../constants/buttons/BtnClose';

class Main extends Component {
  _user = {
    balance: 1200
  }

  banners = {
    big: [
      {
        title: "Кейсы Imperium Life",
        description: "Открывая кейсы вы можете получить деньги, Imperium Coins, VIP статус, уникальные автомобили и многое другое",
        image: Banner1,
        to: '/transport'
      },
      {
        title: "Транспорт",
        description: "Выбирай любой понравившийся транспорт из реальной жизни",
        image: Banner2,
        to: '/transport'
      }
    ],
    small: [
      {
        title: "На расслабоне на чилле",
        image: SmallBanner1,
        to: '/transport' 
      },
      {
        title: "Комфортный и быстрый",
        image: SmallBanner2,
        to: '/transport'
      },
      {
        title: "В костюме с пакетом",
        image: SmallBanner3,
        to: '/transport'
      }
    ]
  }

  render() {
    return (
      <div className="main-container">
        <Navbar headerText={this._user.balance} linksRoutes={mainPagesRoutes}/>
        <div className="content">
          <Btnclose/>
          <div className="banner__row banner-wrap row">
            {this.banners.big.map(({title, description, image, to}) => 
              <Banner
                title={title}
                description={description}
                image={image}
                to={to}
              />
            )}
          </div>
          <div className="banner__small-wrap row small-row">
          {this.banners.small.map(({title, image, to}) => 
              <Smallbanner
                title={title}
                image={image}
                to={to}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
