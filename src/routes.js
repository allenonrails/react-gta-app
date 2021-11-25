import MainStat from "./constants/pages/MainStat"
import Property from "./constants/pages/Property"
import Appeals from "./constants/pages/Appeals"
import Settings from "./constants/pages/Settings"
import Quests from "./constants/pages/Quests"
import Subjects from "./constants/pages/Subjects"
import History from "./constants/pages/History"
import Transport from "./constants/pages/Transport"
import VirtualCurrency from "./constants/pages/VirtualCurrency"
import Vip from "./constants/pages/Vip"
import CharacterSettings from "./constants/pages/CharacterSettings"
import Main from "./constants/pages/Main"
import { APPEALS, HISTORY, MAIN_STAT, PROPERTY, QUESTS, SETTINGS, SUBJECTS, TRANSPORT, VIP, VIRTUAL_CURRENCY, CHARACTER_SETTINGS, MAIN } from "./utils/constants"

export const mainPagesRoutes = [
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
]

export const profileRoutes = [
  {
    path: MAIN_STAT,
    Component: MainStat
  },
  {
    path: APPEALS,
    Component: Appeals
  },
  {
    path: PROPERTY,
    Component: Property
  },
  {
    path: SETTINGS,
    Component: Settings
  },
  {
    path: QUESTS,
    Component: Quests
  },
]