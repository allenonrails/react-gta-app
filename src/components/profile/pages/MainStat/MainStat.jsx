import React from 'react'
import './less/main.less';

import BankSvg from '../../../../images/bank.svg'
import WalletSvg from '../../../../images/wallet.svg'

class MainStat extends React.Component{
  userInfo = {
    main: {
      "Имя": 'Iru Nil',
      "Фракция": 'LSPD',
      "Пол": "Мужской",
      "Дата рождения": "20.20.2020",
      "Супруг(а)": "Name Surname",
      "Часов в игре": 300,
      "Последний вход": "01.07.2020 12:23",
      "Дата создания": '01.05.2020 11:20'
    },
    finance: {
      cash: 100_000_00,
      bankCard: 30_000_000
    }
  }
  
  reputationData = {
    'Репутация3': '123123',
    'Репутаци2': '1232123',
    'Репутаци3': '123323',
    'Репутация1': '123423',
    'Репутация4': '123123',
    'Репутация55': '123123',
    'Репутация34': '123123',
    'Репутация12': '123123',
    'Репутация13': '123123',
    'Репутация14': '123123',
    'Репутаци1я': '123123',
    'Репутация155': '123123',
    'Репутация111': '123123',
    'Репутацияz': '123123',
    'Репутацияaaa': '123123',
    'Репутацияяяя': '123123',
    'Репутация22z': '123123',
    'Репу1тацияaaa': '123123',
    'Реп111ута22цияяяя': '123123'
  }

  numberWithCommas(value){
    var parts = value.toString().split(" ");
    parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g," ");
    return parts.join(" ");
  }

  splitInTwoColumnsData(){
    let resultColumns = Object
      .entries(this.reputationData)
      .map(entry => ({[entry[0]]: entry[1]}));
    let lengthPath = Object.keys(this.reputationData).length / 2;
    return {
      firstColData: resultColumns
        .slice(lengthPath)
        .reduce((previousValue, currentValue) => Object.assign(previousValue, currentValue)),
      secondColData: resultColumns
        .slice(0, lengthPath)
        .reduce((previousValue, currentValue) => Object.assign(previousValue, currentValue))
    }
  }


  render(){
    let dataCols = this.splitInTwoColumnsData();
    return (
      <div className="main">
        <div className="main__wrap row">
          <div className="main__info main-info main-card">
            <h3 className="main-card__title">Общая информация</h3>
            {Object.keys(this.userInfo.main).map(key => {
              return(
                <div className="main-info__block">
                  <span className="main-info__prop">{key}:</span>
                  <span className="main-info__value">{this.userInfo.main[key]}</span>
                </div>
              )
            })}
          </div>
          <div className="main__finance main-finance main-card ">
            <h3 className="main-card__title">Финансы</h3>
            <div className="main-finance__wrap">
              <div className="main-finance__block">
                <h4 className="main-finance__title">
                  <object data={BankSvg} type="image/svg+xml"></object>
                  Наличные
                </h4>
                <span className="main-finance__balance">${this.numberWithCommas(this.userInfo.finance.cash)}</span>
              </div>
              <div className="main-finance__block">
                <h4 className="main-finance__title">
                  <object data={WalletSvg} type="image/svg+xml"></object>
                  На счету
                </h4>
                <span className="main-finance__balance">${this.numberWithCommas(this.userInfo.finance.bankCard)}</span>
              </div>
            </div>
            <div className="main-finance__wrap">
              <div className="main-finance__block">
                <h4 className="main-finance__status-text">
                  Статус иггрока
                </h4>
              </div>
              <div className="main-finance__block">
                <button className="main__btn main-finance__btn">
                  Гражданин
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="main__buttons">
          <button className="main__btn main__btn-red">Жалоба</button>
          <button className="main__btn main__btn-blue">Вопрос</button>
        </div>
        <div className="main-reputation main-card">
          <h3 className="main-card__title">
            Статистика
          </h3>
          <div className="main-reputation__wrap">
            <div className="main-reputation__stat reputation-stat">
                {Object.keys(dataCols.firstColData).map(key => {
                  {return(
                    <div className="reputation-stat__block">
                      <span className="reputation-stat__text">{key}</span>
                      <span className="reputation-stat__text">{dataCols.firstColData[key]}</span>
                    </div>
                  )}
                })}
            </div>
            <div className="main-reputation__stat reputation-stat">
                {Object.keys(dataCols.secondColData).map(key => {
                  {return(
                    <div className="reputation-stat__block">
                      <span className="reputation-stat__text">{key}</span>
                      <span className="reputation-stat__text">{dataCols.secondColData[key]}</span>
                    </div>
                  )}
                })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainStat