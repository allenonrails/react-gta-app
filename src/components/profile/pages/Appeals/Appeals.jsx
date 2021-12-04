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

  request = {
    number: 11231,
    messages: [
      {
        type: 'from',
        name: 'Admin',
        surname: 'Mask',
        text: 'Попробуйте перезайти',
        date: '07.08.2009'
      },
      {
        type: 'to',
        name: 'Вы',
        text: 'Не могу купить дом,',
        date: '07.08.2009'
      },
      {
        type: 'from',
        name: 'Admin',
        surname: 'Mask',
        text: 'Попробуйте перезайти',
        date: '07.08.2009'
      },
      {
        type: 'to',
        name: 'Вы',
        text: 'Не могу купить дом,',
        date: '07.08.2009'
      },
      {
        type: 'from',
        name: 'Admin',
        surname: 'Mask',
        text: 'Попробуйте перезайти',
        date: '07.08.2009'
      },
      {
        type: 'to',
        name: 'Вы',
        text: 'Не могу купить дом,',
        date: '07.08.2009'
      },
      {
        type: 'from',
        name: 'Admin',
        surname: 'Mask',
        text: 'Попробуйте перезайти',
        date: '07.08.2009'
      },
      {
        type: 'to',
        name: 'Вы',
        text: 'Не могу купить дом,',
        date: '07.08.2009'
      },
      {
        type: 'from',
        name: 'Admin',
        surname: 'Mask',
        text: 'Попробуйте перезайти',
        date: '07.08.2009'
      },
      {
        type: 'to',
        name: 'Вы',
        text: 'Не могу купить дом,',
        date: '07.08.2009'
      },
      {
        type: 'from',
        name: 'Admin',
        surname: 'Mask',
        text: 'Попробуйте перезайти',
        date: '07.08.2009'
      },
      {
        type: 'to',
        name: 'Вы',
        text: 'Не могу купить дом,',
        date: '07.08.2009'
      },
      {
        type: 'from',
        name: 'Admin',
        surname: 'Mask',
        text: 'Попробуйте перезайти',
        date: '07.08.2009'
      },
      {
        type: 'to',
        name: 'Вы',
        text: 'Не могу купить дом,',
        date: '07.08.2009'
      }
    ]
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
                ЗАПРОС №{this.request.number}
              </h4>
              <span className="appeals-chat__date">01.07.2020 | 21:00</span>
            </div>
            <div className="appeals-chat__content">

              {this.request.messages.map(message => {
                switch (message.type) {
                  case 'from':
                    return (
                      <div className="appeals-chat__from chat-message">
                        <div className="chat-message__block">
                          <h4 className="chat-message__from-title">
                            {message.name} {message.surname} 
                          </h4>
                          <p className="chat-message__text">
                            {message.text}
                          </p>
                        </div>
                        <span className="chat-message__date">{message.date}</span>
                      </div>
                    )
                  case 'to':
                    return (
                      <div className="appeals-chat__to chat-message">
                        <div className="chat-message__block-to">
                          <h4 className="chat-message__to-title">
                            {message.name}
                          </h4>
                          <p className="chat-message__text">
                            {message.text}
                          </p>
                        </div>
                        <span className="chat-message__date">{message.date}</span>
                      </div>
                    )
                }
              })}
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
