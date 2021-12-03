import React, { Component } from 'react';

import SettingsPage from './Tabs/SettingsPage/SettingsPage'
import SeparateSetting from './Tabs/SeparateSetting/SeparateSetting';

import './less/main.less'

class Settings extends Component {
  state = {
    active: 0
  }

  dataTabs = [
    {
      tabName: 'Основное',
    },
    {
      tabName: 'Интерфейс',
      data: {
        switcher: [
          "Включить параметр",
          "Включить параметр",
          "Включить параметр",
          "Включить параметр",
          "Включить параметр",
          "Включить параметр"
        ],
        slider: {
          textSlider: 'Что-то тут точно будет',
          slides: [
            "Парметр 1",
            "Параметр 2 ",
            "Другое"
          ]
        }
      }
    },
    {
      tabName: 'Голосовой чат',
      data: {
        blocks: {
          'A': 'SayHello',
          'B': 'Voice Chat',
          'С': 'SayHello',
          'D': 'Voice Chat',
          'DD': 'SayHello',
          'VV': 'Voice Chat',
          'AA': 'SayHello',
          'WW': 'Voice Chat',
          'AZZ': 'SayHello',
          'ZZ': 'Voice Chat',
          'Z': 'SayHello',
          'ZZZ': 'Voice Chat',
          'q': 'SayHello',
          'Q1': 'Voice Chat',
          'A22': 'SayHello',
          'B3': 'Voice Chat',
          '4A': 'SayHello',
          'B44': 'Voice Chat',
          '4A4': 'SayHello',
          'B88': 'Voice Chat',
          'A88': 'SayHello',
          '99B': 'Voice Chat',
          '88A': 'SayHello',
          'Ba': 'Voice Chat',
          'Aa': 'SayHello',
          'Ba': 'Voice Chat',
          'Aasa': 'SayHello',
          'aB': 'Voice Chat',
          '<': 'SayHello',
          'Ba': 'Voice Chat'
        }
      }
    },
    {
      tabName: 'Текстовый чат',
      data: {
        blocks: {
          'A': 'SayHello',
          'B': 'Voice Chat',
          'С': 'SayHello',
          'D': 'Voice Chat',
          'DD': 'SayHello',
          'VV': 'Voice Chat',
          'AA': 'SayHello',
          'WW': 'Voice Chat',
          'AZZ': 'SayHello',
          'ZZ': 'Voice Chat',
          'Z': 'SayHello',
          'ZZZ': 'Voice Chat',
          'q': 'SayHello',
          'Q1': 'Voice Chat',
          'A22': 'SayHello',
          'B3': 'Voice Chat',
          '4A': 'SayHello',
          'B44': 'Voice Chat',
          '4A4': 'SayHello',
          'B88': 'Voice Chat',
          'A88': 'SayHello',
          '99B': 'Voice Chat',
          '88A': 'SayHello',
          'Ba': 'Voice Chat',
          'Aa': 'SayHello',
          'Ba': 'Voice Chat',
          'Aasa': 'SayHello',
          'aB': 'Voice Chat',
          '<': 'SayHello',
          'Ba': 'Voice Chat'
        }
      }
    },
    {
      tabName: 'Дизайн меню',
      data: {
        blocks: {
          'A': 'SayHello',
          'B': 'Voice Chat',
          'С': 'SayHello',
          'D': 'Voice Chat',
          'DD': 'SayHello',
          'VV': 'Voice Chat',
          'AA': 'SayHello',
          'WW': 'Voice Chat',
          'AZZ': 'SayHello',
          'ZZ': 'Voice Chat',
          'Z': 'SayHello',
          'ZZZ': 'Voice Chat',
          'q': 'SayHello',
          'Q1': 'Voice Chat',
          'A22': 'SayHello',
          'B3': 'Voice Chat',
          '4A': 'SayHello',
          'B44': 'Voice Chat',
          '4A4': 'SayHello',
          'B88': 'Voice Chat',
          'A88': 'SayHello',
          '99B': 'Voice Chat',
          '88A': 'SayHello',
          'Ba': 'Voice Chat',
          'Aa': 'SayHello',
          'Ba': 'Voice Chat',
          'Aasa': 'SayHello',
          'aB': 'Voice Chat',
          '<': 'SayHello',
          'Ba': 'Voice Chat'
        }
      }
    },
    {
      tabName: 'Назначение клавишь',
      data: {
        blocks: {
          'A': 'SayHello',
          'B': 'Voice Chat',
          'С': 'SayHello',
          'D': 'Voice Chat',
          'DD': 'SayHello',
          'VV': 'Voice Chat',
          'AA': 'SayHello',
          'WW': 'Voice Chat',
          'AZZ': 'SayHello',
          'ZZ': 'Voice Chat',
          'Z': 'SayHello',
          'ZZZ': 'Voice Chat',
          'q': 'SayHello',
          'Q1': 'Voice Chat',
          'A22': 'SayHello',
          'B3': 'Voice Chat',
          '4A': 'SayHello',
          'B44': 'Voice Chat',
          '4A4': 'SayHello',
          'B88': 'Voice Chat',
          'A88': 'SayHello',
          '99B': 'Voice Chat',
          '88A': 'SayHello',
          'Ba': 'Voice Chat',
          'Aa': 'SayHello',
          'Ba': 'Voice Chat',
          'Aasa': 'SayHello',
          'aB': 'Voice Chat',
          '<': 'SayHello',
          'Ba': 'Voice Chat'
        }
      }
    },
  ]

  btnClickEvent = (e) => {
    this.setState({
      active: +e.target.dataset.index
    })
  }

  render() {
    return (
      <div className="settings">
        <div className="settings__header">
          {this.dataTabs.map((el, i) =>
            <span
              data-index={i}
              className={i === this.state.active ? "settings__tab-name settings__tab-name-active" : 'settings__tab-name'}
              onClick={this.btnClickEvent}
            >
              {el.tabName}
            </span>
          )}
        </div>
        <div className="settings__container">
          <SettingsPage active={0 === this.state.active} />
          {this.dataTabs.slice(1).map((el, i) => {
            return (
              <SeparateSetting dataSetting={el} active={i + 1 === this.state.active} />
            )
          })}

        </div>
      </div>
    );
  }
}

export default Settings;
