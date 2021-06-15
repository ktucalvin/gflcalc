import type { Preset } from '../common/gflcalc'

// recipe === undefined implies basic recipe 500/500/500/500
const paraSet = [2000, 500, 2000, 1000]
const landmineSet = [500, 2000, 2000, 1000]

export type Fairy = {
  nameEN: string,
  nameCN: string,
  nameKR: string,
  nameTW: string,
  nameJP: string,
  time: string,
  isCombat: boolean,
  recipe?: number[]
}

export const Fairies: Fairy[] = [
  {
    nameEN: 'Armor Fairy',
    nameCN: '盾甲妖精',
    nameKR: '방패요정',
    nameTW: '盾甲妖精',
    nameJP: '装甲妖精',
    time: '3:00',
    isCombat: true
  },
  {
    nameEN: 'Shield Fairy',
    nameCN: '护盾妖精',
    nameKR: '수호요정',
    nameTW: '護盾妖精',
    nameJP: '守護妖精',
    time: '3:05',
    isCombat: true
  },
  {
    nameEN: 'Taunt Fairy',
    nameCN: '嘲讽妖精',
    nameKR: '도발요정',
    nameTW: '嘲諷妖精',
    nameJP: '挑発妖精',
    time: '3:10',
    isCombat: true
  },
  {
    nameEN: 'Sniper Fairy',
    nameCN: '狙击妖精',
    nameKR: '저격요정',
    nameTW: '狙擊妖精',
    nameJP: '狙撃妖精',
    time: '3:30',
    isCombat: true
  },
  {
    nameEN: 'Artillery Fairy',
    nameCN: '炮击妖精',
    nameKR: '포격요정',
    nameTW: '炮擊妖精',
    nameJP: '砲撃妖精',
    time: '3:35',
    isCombat: true
  },
  {
    nameEN: 'Airstrike Fairy',
    nameCN: '空袭妖精',
    nameKR: '공습요정',
    nameTW: '空襲妖精',
    nameJP: '空襲妖精',
    time: '3:40',
    isCombat: true
  },
  {
    nameEN: 'Barrier Fairy',
    nameCN: '立盾妖精',
    nameKR: '장벽요정',
    nameTW: '立盾妖精',
    nameJP: '障壁妖精',
    time: '4:15',
    isCombat: true
  },
  {
    nameEN: 'Warrior Fairy',
    nameCN: '勇士妖精',
    nameKR: '용사요정',
    nameTW: '勇士妖精',
    nameJP: '勇士妖精',
    time: '4:30',
    isCombat: true
  },
  {
    nameEN: 'Fury Fairy',
    nameCN: '暴怒妖精',
    nameKR: '격노요정',
    nameTW: '暴怒妖精',
    nameJP: '激怒妖精',
    time: '4:35',
    isCombat: true
  },
  {
    nameEN: 'Twin Fairy',
    nameCN: '双生妖精',
    nameKR: '쌍둥이요정',
    nameTW: '雙生妖精',
    nameJP: '双子妖精',
    time: '4:40',
    isCombat: true
  },
  {
    nameEN: 'Command Fairy',
    nameCN: '指挥妖精',
    nameKR: '지휘요정',
    nameTW: '指揮妖精',
    nameJP: '指揮妖精',
    time: '5:00',
    isCombat: true
  },
  {
    nameEN: 'Rescue Fairy',
    nameCN: '搜救妖精',
    nameKR: '수색요정',
    nameTW: '搜救妖精',
    nameJP: '捜索妖精',
    time: '5:05',
    isCombat: true
  },
  {
    nameEN: 'Reinforcement Fairy',
    nameCN: '增援妖精',
    nameKR: '증원요정',
    nameTW: '增援妖精',
    nameJP: '増援妖精',
    time: '4:00',
    recipe: paraSet,
    isCombat: false
  },
  {
    nameEN: 'Parachute Fairy',
    nameCN: '空降妖精',
    nameKR: '공수요정',
    nameTW: '空降妖精',
    nameJP: '空挺妖精',
    time: '4:05',
    recipe: paraSet,
    isCombat: false
  },
  {
    nameEN: 'Defense Fairy',
    nameCN: '防御妖精',
    nameKR: '방어요정',
    nameTW: '防禦妖精',
    nameJP: '防御妖精',
    time: '4:10',
    recipe: paraSet,
    isCombat: false
  },
  {
    nameEN: 'Illumination Fairy',
    nameCN: '照明妖精',
    nameKR: '조명요정',
    nameTW: '照明妖精',
    nameJP: '照明妖精',
    time: '5:10',
    isCombat: false
  },
  {
    nameEN: 'Combo Fairy',
    nameCN: '连击妖精',
    nameKR: '연타요정',
    nameTW: '連擊妖精',
    nameJP: '連撃妖精',
    time: '5:15',
    recipe: landmineSet,
    isCombat: false
  },
  {
    nameEN: 'Landmine Fairy',
    nameCN: '布雷妖精',
    nameKR: '매설요정',
    nameTW: '佈雷妖精',
    nameJP: '地雷妖精',
    time: '5:30',
    recipe: landmineSet,
    isCombat: false
  },
  {
    nameEN: 'Rocket Fairy',
    nameCN: '火箭妖精',
    nameKR: '로켓요정',
    nameTW: '火箭妖精',
    nameJP: '火箭妖精',
    time: '5:35',
    recipe: landmineSet,
    isCombat: false
  },
  {
    nameEN: 'Construction Fairy',
    nameCN: '工事妖精',
    nameKR: '공사요정',
    nameTW: '工事妖精',
    nameJP: '工事妖精',
    time: '5:40',
    recipe: landmineSet,
    isCombat: false
  },
]

export const fairyPresets: Preset[] = [
  { preset: [500,500,500,500], text: 'Basic Set' },
  { preset: paraSet, text: 'Fairy Set #1 (w/ Parachute)' },
  { preset: landmineSet, text: 'Fairy Set #2 (w/ Landmine)' },
  { preset: [2000, 2000, 2000, 1000], text: 'All' }
]
