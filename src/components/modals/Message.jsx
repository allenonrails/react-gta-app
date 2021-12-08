import React, { Component } from 'react';

import './main.less'

class Message extends Component {
  state = {
    show: false
  }

  data ={
    title: 'А может и не может'
  }
  render() {
    if (!this.state.show) return null
    return (
      <div className="modal-message">
        <h2 className="modal-message__title">
          {this.data.title}
        </h2>
        <div className="modal-message__wrap">
          <input type="text" className="modal-message__input" />
          <button className="modal-message__btn">
            Закрыть
          </button>
        </div>
      </div>
    );
  }
}

export default Message;
