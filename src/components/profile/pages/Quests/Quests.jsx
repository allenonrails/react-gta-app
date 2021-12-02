import React, { Component } from 'react';

import './less/main.less'

import Human from '../../../../images/human.svg'
import Cross from '../../../../images/cross.svg'
import Done from '../../../../images/done.svg'

class Quests extends Component {
  state = {
    active: 0
  }

  dataTabs = [
    {
      id: 0,
      tabName: "Фруктовый вор"
    },
    {
      id: 1,
      tabName: "Механик"
    },
    {
      id: 2,
      tabName: "Механик"
    },
    {
      id: 3,
      tabName: "Механик"
    },
    {
      id: 4,
      tabName: "Механик"
    },
    {
      id: 5,
      tabName: "Механик"
    },
    {
      id: 6,
      tabName: "Механик"
    },
    {
      id: 7,
      tabName: "Механик"
    },
    {
      id: 8,
      tabName: "Механик"
    },

    {
      id: 9,
      tabName: "Механик"
    },
    {
      id: 10,
      tabName: "Механик"
    },
    {
      id: 11,
      tabName: "Механик"
    },
    {
      id: 12,
      tabName: "Механик"
    },
    {
      id: 13,
      tabName: "Механик"
    },
    {
      id: 14,
      tabName: "Механик"
    },
    {
      id: 15,
      tabName: "Механик"
    },
    {
      id: 16,
      tabName: "Механик"
    },
    {
      id: 17,
      tabName: "Механик"
    },
    {
      id: 18,
      tabName: "Механик"
    },
    {
      id: 19,
      tabName: "Механик"
    },
    {
      id: 20,
      tabName: "Механик"
    }
  ]

  quest = {
    title: 'Фруктовый вор',
    missionsCount: 3,
    missions: [
      {
        status: 'done',
        title: 'Кража апельсинов',
        description: 'Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин',
        reward: 5_000,
      },
      {
        status: 'during',
        title: 'Кража апельсинов',
        description: 'Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин',
        reward: 5_000,
      },
      {
        status: 'not available',
        title: 'Кража апельсинов',
        description: 'Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин',
        reward: 5_000,
      },
      {
        status: 'not available',
        title: 'Кража апельсинов',
        description: 'Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин',
        reward: 5_000,
      },
      {
        status: 'not available',
        title: 'Кража апельсинов',
        description: 'Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин',
        reward: 5_000,
      },
      {
        status: 'during',
        title: 'Кража апельсинов',
        description: 'Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин',
        reward: 5_000,
      },
      {
        status: 'done',
        title: 'Кража апельсинов',
        description: 'Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин Украсть 2 кг  апельсин',
        reward: 5_000,
      },
    ]
  }

  status = {
    'done': {
      text: "Завершено",
      image: Done,
      color: '#32F246'
    },
    'during': {
      text: "В процессе",
      image: Human,
      color: '#A3A3A3'
    },
    'not available': {
      text: "Недоступно",
      image: Cross,
      color: '#FF1919'
    }
  }

  numberWithCommas(value){
    var parts = value.toString().split(" ");
    parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g," ");
    return parts.join(" ");
  }

  ending = (number, words) => {
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]]
  }

  btnClickEvent = (e) => {
    this.setState({
      active: +e.target.dataset.id
    })
  }
  render() {
    return (
      <div className="quests">
        <div className="quests__header">
          {this.dataTabs.map(({tabName, id}) => 
            <span
            data-id={id} 
            className={id === this.state.active ? "quests__tab-name quests__tab-name-active" : 'quests__tab-name'}
            onClick={this.btnClickEvent}
            >
            <div className="quests__ellipse"></div>
            {tabName}
            </span>
          )}
        </div>
        <div className="quests__container quest">
          <h2 className="quest__title">{this.quest.title}</h2>
          <span className="quest__count-missions">
            {this.quest.missionsCount} {this.ending(this.quest.missionsCount, ["Задание", "Задания", "Заданий"])}
          </span>
          <div className="quest__missions">
            {this.quest.missions.map(({status, title, description, reward}) => 
              <div className="quest__block">
                <div className="quest__mission quest-mission">
                  <div className="quest-mission__wrap">
                    <h3 className="quest-mission__title">
                      {title}
                    </h3>
                    <p className="quest-mission__description">
                      {description}
                    </p>
                    <span className="quest-mission__reward">
                      {reward}
                    </span>
                  </div>
                  {status == "during" && 
                    <button className="quest-mission__btn">
                      Продолжить путь
                    </button>
                  }
                </div>
                <div style={{color: this.status[status].color}} className="quest__status">
                  {this.status[status].text}
                  <img src={this.status[status].image} alt={"this.status[status].text"} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Quests;
