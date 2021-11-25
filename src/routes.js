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

export const authRoutes = [
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
  {
    path: SUBJECTS,
    Component: Subjects
  },
  {
    path: HISTORY,
    Component: History
  },
  {
    path: TRANSPORT,
    Component: Transport
  },
  {
    path: VIRTUAL_CURRENCY,
    Component: VirtualCurrency
  },
  {
    path: VIP,
    Component: Vip
  },
  {
    path: CHARACTER_SETTINGS,
    Component: CharacterSettings
  },
  {
    path: MAIN,
    Component: Main
  },
]

export const publicRoutes = [

]