import React, { Component } from 'react'

import EyeSvg from '../../../../images/eye.svg'
import SendSvg from '../../../../images/send.svg'
import TicketSvg from '../../../../images/ticket.svg'

import './less/main.less'

class Appeals extends Component {
  data = {
    requests: [
      "16548",
      "16548",
      "16548",
      "16548",
      "16548",
      "16548",
      "16548",
      "16548",
      "16548",
      "16548",
      "16548",
      "16548",
      "16548",
      "16548",
      "16548",
      "16548",
      "16548",
      "16548",
      "16548",
      "16548",
      "16548",
      "16548",
    ],
  }
  
  render() {
    return (
      <div className="appeals">
        <h3 className="appeals__title">
          Все обращения
        </h3>
        <span className="appeals__help-text">Задай вопрос или подай жалобу</span>
        <div className="appeals__requests appeals-requests">
          <div className="appeals-requests__list">
            {this.data.requests.map(number => {
              return (
                <div className="appeals-requests__block">
                  <div className="appeals-requests__ellipse"></div>
                  <img className="ticket" src={TicketSvg} alt={"TicketSvg"} />
                  <h4 className="appeals-requests__text">Запрос №{number}</h4>
                  <img src={EyeSvg} alt={"EyeSvg"} />
                </div>
              )
            })}
          </div>
          <div className="appeals-request__chat appeals-chat">
            <div className="appeals-chat__header">
              <h4 className="appeals-chat__title">
                <img className="ticket" src={TicketSvg} alt={"TicketSvg"} />
                ЗАПРОС №16548
              </h4>
              <span className="appeals-chat__date">01.07.2020 | 21:00</span>
            </div>
            <div className="appeals-chat__content">
              <div className="appeals-chat__from chat-message">
                <div className="chat-message__block">
                  <h4 className="chat-message__from-title">
                    Namename Namename
                  </h4>
                  <p className="chat-message__text">
                    Попробуйте перезайти
                  </p>
                </div>
                <span className="chat-message__date">01.07.2020 | 21:01</span>
              </div>
              <div className="appeals-chat__to chat-message">
                <div className="chat-message__block-to">
                  <h4 className="chat-message__to-title">
                    Вы
                  </h4>
                  <p className="chat-message__text">
                    Не могу купить дом
                  </p>
                </div>
                <span className="chat-message__date">01.07.2020 | 21:01</span>
              </div>
              <div className="appeals-chat__from chat-message">
                <div className="chat-message__block">
                  <h4 className="chat-message__from-title">
                    Namename Namename
                  </h4>
                  <p className="chat-message__text">
                    Попробуйте перезайти
                  </p>
                </div>
                <span className="chat-message__date">01.07.2020 | 21:01</span>
              </div>
              <div className="appeals-chat__to chat-message">
                <div className="chat-message__block-to">
                  <h4 className="chat-message__to-title">
                    Вы
                  </h4>
                  <p className="chat-message__text">
                    Не могу купить дом
                  </p>
                </div>
                <span className="chat-message__date">01.07.2020 | 21:01</span>
              </div>
              <div className="appeals-chat__from chat-message">
                <div className="chat-message__block">
                  <h4 className="chat-message__from-title">
                    Namename Namename
                  </h4>
                  <p className="chat-message__text">
                    Попробуйте перезайти
                  </p>
                </div>
                <span className="chat-message__date">01.07.2020 | 21:01</span>
              </div>
              <div className="appeals-chat__to chat-message">
                <div className="chat-message__block-to">
                  <h4 className="chat-message__to-title">
                    Вы
                  </h4>
                  <p className="chat-message__text">
                    Не могу купить дом
                  </p>
                </div>
                <span className="chat-message__date">01.07.2020 | 21:01</span>
              </div>
              <div className="appeals-chat__from chat-message">
                <div className="chat-message__block">
                  <h4 className="chat-message__from-title">
                    Namename Namename
                  </h4>
                  <p className="chat-message__text">
                    Попробуйте перезайти
                  </p>
                </div>
                <span className="chat-message__date">01.07.2020 | 21:01</span>
              </div>
              <div className="appeals-chat__to chat-message">
                <div className="chat-message__block-to">
                  <h4 className="chat-message__to-title">
                    Вы
                  </h4>
                  <p className="chat-message__text">
                    Не могу купить дом
                  </p>
                </div>
                <span className="chat-message__date">01.07.2020 | 21:01</span>
              </div>
              <div className="appeals-chat__from chat-message">
                <div className="chat-message__block">
                  <h4 className="chat-message__from-title">
                    Namename Namename
                  </h4>
                  <p className="chat-message__text">
                    Попробуйте перезайти
                  </p>
                </div>
                <span className="chat-message__date">01.07.2020 | 21:01</span>
              </div>
              <div className="appeals-chat__to chat-message">
                <div className="chat-message__block-to">
                  <h4 className="chat-message__to-title">
                    Вы
                  </h4>
                  <p className="chat-message__text">
                    Не могу купить дом
                  </p>
                </div>
                <span className="chat-message__date">01.07.2020 | 21:01</span>
              </div>
              <div className="appeals-chat__from chat-message">
                <div className="chat-message__block">
                  <h4 className="chat-message__from-title">
                    Namename Namename
                  </h4>
                  <p className="chat-message__text">
                    Попробуйте перезайти
                  </p>
                </div>
                <span className="chat-message__date">01.07.2020 | 21:01</span>
              </div>
              <div className="appeals-chat__to chat-message">
                <div className="chat-message__block-to">
                  <h4 className="chat-message__to-title">
                    Вы
                  </h4>
                  <p className="chat-message__text">
                    Не могу купить дом
                  </p>
                </div>
                <span className="chat-message__date">01.07.2020 | 21:01</span>
              </div>
              <div className="appeals-chat__from chat-message">
                <div className="chat-message__block">
                  <h4 className="chat-message__from-title">
                    Namename Namename
                  </h4>
                  <p className="chat-message__text">
                    Попробуйте перезайти
                  </p>
                </div>
                <span className="chat-message__date">01.07.2020 | 21:01</span>
              </div>
              <div className="appeals-chat__to chat-message">
                <div className="chat-message__block-to">
                  <h4 className="chat-message__to-title">
                    Вы
                  </h4>
                  <p className="chat-message__text">
                    Не могу купить дом
                  </p>
                </div>
                <span className="chat-message__date">01.07.2020 | 21:01</span>
              </div>
              <div className="appeals-chat__from chat-message">
                <div className="chat-message__block">
                  <h4 className="chat-message__from-title">
                    Namename Namename
                  </h4>
                  <p className="chat-message__text">
                    Попробуйте перезайти
                  </p>
                </div>
                <span className="chat-message__date">01.07.2020 | 21:01</span>
              </div>
              <div className="appeals-chat__to chat-message">
                <div className="chat-message__block-to">
                  <h4 className="chat-message__to-title">
                    Вы
                  </h4>
                  <p className="chat-message__text">
                    Не могу купить дом
                  </p>
                </div>
                <span className="chat-message__date">01.07.2020 | 21:01</span>
              </div>
            </div>
            <div className="appeals-chat__input-block">
              <input placeholder="Введите сообщение..." type="text" className="appeals-chat__input" />
              <button className="appeals-chat__send">
                <img src={SendSvg} alt={"SendSvg"} />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Appeals
