import { APPEALS, CHARACTER_SETTINGS, HISTORY, MAIN, MAIN_STAT, OTHER, PROFILE_SETTINGS, PROPERTY, QUESTS, SETTINGS, SUBJECTS, TRANSPORT, VIP, VIRTUAL_CURRENCY } from "./constants";
import Main from '../components/donat/pages/Main/Main';
import Subjects from '../components/donat/pages/Subjects/Subjects';
import History from '../components/donat/pages/History/History';
import Transport from '../components/donat/pages/Transport/Transport';
import VirtualCurrency from '../components/donat/pages/VirtualCurrency/VirtualCurrency';
import Vip from '../components/donat/pages/Vip/Vip';
import CharacterSettings from '../components/donat/pages/CharacterSettings/CharacterSettings';
import Other from '../components/donat/pages/Other/Other';
import TransportIdPage from '../components/donat/pages/TransportIdPage/TransportIdPage';
import VipIdPage from '../components/donat/pages/VipIdPage/VipIdPage';
import CharacterIdPage from '../components/donat/pages/CharacterIdPage/CharacterIdPage';

import MainStat from '../components/profile/pages/MainStat/MainStat'
import Property from '../components/profile/pages/Property/Property'
import Appeals from '../components/profile/pages/Appeals/Appeals'
import Settings from '../components/profile/pages/Settings/Settings'
import Quests from '../components/profile/pages/Quests/Quests'

export const donatRoutes = [
  {
    path: MAIN,
    Component: Main,
    linkName: "Главная"
  },
  {
    path: SUBJECTS,
    Component: Subjects,
    linkName: "Мои предметы"
  },
  {
    path: HISTORY,
    Component: History,
    linkName: "История"
  },
  {
    path: TRANSPORT,
    Component: Transport,
    linkName: "Эксклюзивный транспорт"
  },
  {
    path: VIRTUAL_CURRENCY,
    Component: VirtualCurrency,
    linkName: "Виртуальная валюта"
  },
  {
    path: VIP,
    Component: Vip,
    linkName: "VIP Аккаунт"
  },
  {
    path: CHARACTER_SETTINGS,
    Component: CharacterSettings,
    linkName: "Настройка персонажа"
  },
  {
    path: OTHER,
    Component: Other,
    linkName: "Другое"
  },
  {
    path: TRANSPORT + '/:id',
    Component: TransportIdPage
  },
  {
    path: VIP + '/:id',
    Component: VipIdPage
  },
  {
    path: CHARACTER_SETTINGS + '/:id',
    Component: CharacterIdPage
  }
];


export const profileRoutes = [
  {
    path: MAIN_STAT,
    Component: MainStat,
    linkName: "Общее"
  },
  {
    path: PROPERTY,
    Component: Property,
    linkName: "Имущество"
  },
  {
    path: APPEALS,
    Component: Appeals,
    linkName: "Обращения"
  },
  {
    path: PROFILE_SETTINGS,
    Component: Settings,
    linkName: "Настройки"
  },
  {
    path: QUESTS,
    Component: Quests,
    linkName: "Квесты"
  },
]