import React, { Component } from 'react';
import Slider from '../../components/Slider';

import './less/main.less';

class Separatesetting extends Component {
  render() {
    if (!this.props.active) return null
    if (this.props.dataSetting.data.hasOwnProperty('blocks')) {
      return (
        <div className="settings-separate">
          {Object.keys(this.props.dataSetting.data.blocks).map(key => {
            return (
              <div className="settings-separate__block">
                <div className="settings-separate__image">
                  {key}
                </div>
                <h3 className="settings-separate__title">
                  {this.props.dataSetting.data.blocks[key]}
                </h3>
              </div>
            )
          })}
        </div>
      )
    } else {
      return (
        <div>
          <div className="main-settings">
            {Object.keys(this.props.dataSetting.data).map(keyName => {
              switch (keyName) {
                case 'switcher':
                  return (
                    this.props.dataSetting.data[keyName].map(textSwitcher =>
                      <div className="main-settings__block">
                        <span className="main-settings__prop">{textSwitcher}</span>
                        <span className="main-settings__value">
                          <label id="switcher" class="switch">
                            <input type="checkbox"></input>
                            <span class="slider round"></span>
                          </label>
                        </span>
                      </div>
                    )
                  )
                case 'slider':
                  return (
                    <Slider
                      textSlider={this.props.dataSetting.data[keyName].textSlider}
                      slides={this.props.dataSetting.data[keyName].slides} />
                  )
              }
            })}

          </div>
        </div>
      )
    }

  }
}

export default Separatesetting;
