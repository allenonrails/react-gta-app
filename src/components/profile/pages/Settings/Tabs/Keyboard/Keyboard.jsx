import React, { Component } from 'react'

import './less/main.less'

export default class Keyboard extends Component {
  data = [
    'Голосовой чат',
    'Голосовой чат',
    'Голосовой чат',
    'Голосовой чат',
    'Голосовой чат',
    'Голосовой чат',
    'Голосовой чат',
    'Голосовой чат',
    'Голосовой чат',
    'Голосовой чат',
    'Голосовой чат',
    'Голосовой чат',
    'Голосовой чат',
    'Голосовой чат',
    'Голосовой чат',
    'Голосовой чат',
    'Голосовой чат',
    'Голосовой чат',
    'Голосовой чат',
  ]
  render() {
    if(!this.props.active) return null
    return (
      <div className="settings-keyboard">
        {this.data.map(text => {
          return (
            <div className="settings-keyboard__block">
              <div className="settings-keyboard__image">
                N
              </div>
              <h3 className="settings-keyboard__title">
                {text}
              </h3>
          </div>
          )
        })}
      </div>
    )
  }
}
