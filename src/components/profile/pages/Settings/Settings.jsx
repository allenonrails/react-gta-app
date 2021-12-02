import React, { Component } from 'react';

import Main from './Tabs/Main/Main'
import Interface from './Tabs/Interface'
import VoiceChat from './Tabs/VoiceChat'
import TextChat from './Tabs/TextChat'
import DesignMenu from './Tabs/DesignMenu'
import Keyboard from './Tabs/Keyboard/Keyboard'

import './less/main.less'

class Settings extends Component {
  state = {
    active: 0
  }

  dataTabs = [
    {
      id: 0,
      tabName: 'Основное',
    },
    {
      id: 1,
      tabName: 'Интерфейс',
    },
    {
      id: 2,
      tabName: 'Голосовой чат',
    },
    {
      id: 3,
      tabName: 'Текстовый чат',
    },
    {
      id: 4,
      tabName: 'Дизайн меню',
    },
    {
      id: 5,
      tabName: 'Назначение клавишь',
    },
  ]

  btnClickEvent = (e) => {
    this.setState({
      active: +e.target.dataset.id
    })
  }

  render() {
    return (
      <div className="settings">
        <div className="settings__header">
          {this.dataTabs.map(({tabName, id}) => 
            <span
            data-id={id} 
            className={id === this.state.active ? "settings__tab-name settings__tab-name-active" : 'settings__tab-name'}
            onClick={this.btnClickEvent}
            >
              {tabName}
            </span>
          )}
        </div>
        <div className="settings__container">
          <Main active={0 === this.state.active}/>
          <Interface active={1 === this.state.active}/>
          <VoiceChat active={2 === this.state.active}/>
          <TextChat active={3 === this.state.active}/>
          <DesignMenu active={4 === this.state.active}/>
          <Keyboard active={5 === this.state.active}/>
        </div>
      </div>
    );
  }
}

export default Settings;
