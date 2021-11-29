import React, { Component } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Btnclose from '../../constants/buttons/BtnClose'
import { mainPagesRoutes } from '../../constants/routes'

import '../../main-styles/pages/History/main.less'
import Tabs from './Tabs'

export default class History extends Component {
  _user = {
    balance: 1200
  }

  data = {
    "Начисления": {
      rowNames: [
        "Дата и время",
        "Сумма",
        "Комментарии"
      ],
      items: [
        [
          "12.03.2202",
          "1 SC",
          1
        ],
        [
          1,
          "1 SC",
          1
        ],
        [
          1,
          "1 SC",
          1
        ],
        [
          1,
          "1 SC",
          1
        ],
        [
          1,
          "1 SC",
          1
        ],
        [
          1,
          "1 SC",
          1
        ],
        [
          1,
          "1 SC",
          1
        ],
        [
          1,
          "1 SC",
          1
        ],
        [
          1,
          "1 SC",
          1
        ],
        [
          1,
          "1 SC",
          1
        ],
        [
          1,
          "1 SC",
          1
        ]
      ]
    },
    "Что-то другое": {
      rowNames: [
        "Дата и время",
        "Сумма",
        "Комментарии"
      ],
      items: [
        [
          "12.303.2202",
          "1 SC",
          1
        ],
        [
          1,
          "1 SC",
          1
        ],
        [
          1,
          "1 SC",
          1
        ],
        [
          1,
          "1 SC",
          1
        ],
        [
          1,
          "1 SC",
          1
        ],
        [
          1,
          "1 SC",
          1
        ],
        [
          1,
          "1 SC",
          1
        ],
        [
          1,
          "1 SC",
          1
        ],
        [
          1,
          "1 SC",
          1
        ],
        [
          1,
          "1 SC",
          1
        ],
        [
          1,
          "1 SC",
          1
        ]
      ]
    }
  }

  render() {
    return (
      <div className="main-container">
        <Btnclose/>
        <Navbar headerText={this._user.balance} linksRoutes={mainPagesRoutes}/>
        <div className="content history__content">
          <Tabs data={this.data} />
        </div>
      </div>
    )
  }
}
