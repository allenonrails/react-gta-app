import React, { Component } from 'react';

import  './main.less'

class DialogWithNpc extends Component {
  state = {
    show: false
  }

  data = {
    name: 'Имя и Фамилия',
    prof: "Сотрудник сотрудников",
    question: "Как дела?",
    variants: [
      "Хорошо",
      "Нехороошо",
      "Нормально",
      "Ненормально"
    ]
  }

  render() {
    if(!this.state.show) return null
    return (
      <div className="dialog-with-npc">
        <h2 className="dialog-with-npc__title">{this.data.name}</h2>
        <span className="dialog-with-npc__prof">{this.data.prof}</span>
        <div className="dialog-with-npc__question">
          {this.data.question}
        </div>
        <div className="dialog-with-npc__content">
          {this.data.variants.map(answer => 
            <div className="dialog-with-npc__answer">{answer}</div>
          )}
        </div>
      </div>
    );
  }
}

export default DialogWithNpc;
