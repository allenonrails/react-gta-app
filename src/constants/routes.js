import MainStat from "../pages/MainStat"
import Property from "../pages/Property"
import Appeals from "../pages/Appeals"
import Settings from "../pages/Settings"
import Quests from "../pages/Quests"
import Subjects from "../pages/Subjects"
import History from "../pages/History"
import Transport from "../pages/Transport"
import VirtualCurrency from "../pages/VirtualCurrency"
import Vip from "../pages/Vip"
import CharacterSettings from "../pages/CharacterSettings"
import Main from "../pages/Main/Main"
import { APPEALS, HISTORY, MAIN_STAT, PROPERTY, QUESTS, SETTINGS, SUBJECTS, TRANSPORT, VIP, VIRTUAL_CURRENCY, CHARACTER_SETTINGS, MAIN, OTHER } from "./constants"
import Other from "../pages/Other"

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
  {
    path: OTHER,
    Component: Other,
    linkName: "Другое"
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