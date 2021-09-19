import type { Equip } from '../common/gflcalc'
import { CN, KR, TW } from '../common/constants'

const zeroSet = [0, 0, 0, 0] // min/max not known for slap, rmr, and chips
const opticsSet = [0, 150, 0, 150]
const peqSet = [50, 0, 100, 0]
const suppressorSet = [50, 0, 0, 0]
const ammoSet = [0, 150, 0, 50]
const capeSet = [100, 0, 100, 0]
const exoSet = [50, 0, 0, 50]
const ammoBoxSet = [0, 0, 0, 150]
const armorSet = [0, 0, 50, 50]

export const Equipment: Equip[] = [
  {
    nameEN: 'BM 3-12X40',
    time: '05',
    type: 'scope',
    recipe: opticsSet
  },
  {
    nameEN: 'AC1 Suppressor',
    time: '07',
    type: 'suppressor',
    nameCN: 'AC1消音器',
    nameTW: 'AC1消音器',
    nameKR: 'AC1 소음기',
    nameJP: 'AC1',
    recipe: suppressorSet
  },
  {
    nameEN: 'EOT 506',
    time: '08',
    type: 'holo',
    recipe: opticsSet
  },
  {
    nameEN: 'PEQ-2',
    time: '09',
    type: 'peq',
    recipe: peqSet
  },
  {
    nameEN: 'AMP COMPM2',
    time: '10',
    type: 'red dot',
    recipe: opticsSet
  },
  {
    nameEN: 'IOP X1 Exoskeleton',
    time: '12',
    type: 'exo',
    nameCN: 'IOP X1外骨骼',
    nameTW: 'IOP X1外骨骼',
    nameKR: 'IOP X1 외골격',
    nameJP: 'IOP X1外骨格',
    recipe: exoSet
  },
  {
    nameEN: 'IOP T1 Exoskeleton',
    time: '12',
    type: 'exo',
    nameCN: 'IOP T1外骨骼',
    nameTW: 'IOP T1外骨骼',
    nameKR: 'IOP T1 외골격',
    nameJP: 'IOP T1外骨格',
    recipe: exoSet
  },
  {
    nameEN: 'ILM Hollow Point Ammo',
    time: '13',
    type: 'hp ammo',
    nameCN: 'ILM空尖彈',
    nameTW: 'ILM空尖彈',
    nameKR: 'ILM HP탄',
    nameJP: 'ILMホローポイント弾',
    recipe: ammoSet
  },
  {
    nameEN: '#1 Buckshot',
    time: '14',
    type: 'buckshot',
    nameCN: '#1獵鹿彈',
    nameTW: '#1獵鹿彈',
    nameKR: '#1 벅샷',
    nameJP: '＃1バックショット',
    recipe: ammoSet
  },
  {
    nameEN: 'BK Slug',
    time: '14',
    type: 'slug',
    nameCN: 'BK獨頭彈',
    nameTW: 'BK獨頭彈',
    nameKR: 'BK 슬러그',
    nameJP: 'BKスラッグ弾',
    recipe: ammoSet
  },
  {
    nameEN: 'M61 Armor-Piercing Ammo',
    time: '15',
    type: 'ap ammo',
    nameCN: 'M61穿甲彈',
    nameTW: 'M61穿甲彈',
    nameKR: 'M61 철갑탄',
    nameJP: 'M61徹甲弾',
    recipe: ammoSet
  },
  {
    nameEN: 'Ragged Cape',
    time: '16',
    type: 'cape',
    nameCN: '破舊披風',
    nameTW: '破舊披風',
    nameKR: '낡은 슈트',
    nameJP: 'ぼろぼろのマント',
    recipe: capeSet
  },
  {
    nameEN: 'FMJ High-Velocity Ammo',
    time: '18',
    type: 'hv ammo',
    nameCN: 'FMJ高速彈',
    nameTW: 'FMJ高速彈',
    nameKR: 'FMJ 고속탄',
    nameJP: 'FMJ高速弾',
    recipe: ammoSet
  },
  {
    nameEN: 'LRA 2-12x50',
    rarity: 3,
    time: '20',
    type: 'scope',
    recipe: opticsSet
  },
  {
    nameEN: 'AC2 Suppressor',
    rarity: 3,
    time: '22',
    type: 'suppressor',
    nameCN: 'AC2消音器',
    nameTW: 'AC2消音器',
    nameKR: 'AC2 소음기',
    nameJP: 'AC2',
    recipe: suppressorSet
  },
  {
    nameEN: 'EOT 512',
    rarity: 3,
    time: '23',
    type: 'holo',
    recipe: opticsSet
  },
  {
    nameEN: 'PEQ-5',
    rarity: 3,
    time: '24',
    type: 'peq',
    recipe: peqSet
  },
  {
    nameEN: 'AMP COMPM4',
    rarity: 3,
    time: '25',
    type: 'red dot',
    recipe: opticsSet
  },
  {
    nameEN: 'Type 1 Armor Plate',
    rarity: 3,
    time: '26',
    type: 'armor',
    nameCN: 'Type1防彈插板',
    nameTW: 'Type1防彈插板',
    nameKR: 'Type1 방탄삽판',
    nameJP: 'Type1防弾ベスト',
    recipe: armorSet
  },
  {
    nameEN: 'Experimental Processing Chip',
    rarity: 3,
    time: '26',
    type: 'chip',
    nameKR: '시제품 연산칩',
    nameJP: '実験用処理チップ',
    recipe: zeroSet,
    availability: 14
  },
  {
    nameEN: 'IOP X2 Exoskeleton',
    rarity: 3,
    time: '27',
    type: 'exo',
    nameCN: 'IOP X2外骨骼',
    nameTW: 'IOP X2外骨骼',
    nameKR: 'IOP X2 외골격',
    nameJP: 'IOP X2外骨格',
    recipe: exoSet
  },
  {
    nameEN: 'IOP T2 Exoskeleton',
    rarity: 3,
    time: '27',
    type: 'exo',
    nameCN: 'IOP T2外骨骼',
    nameTW: 'IOP T2外骨骼',
    nameKR: 'IOP T2 외골격',
    nameJP: 'IOP T2外骨格',
    recipe: exoSet
  },
  {
    nameEN: 'ILM Hollow Point Ammo',
    rarity: 3,
    time: '28',
    type: 'hp ammo',
    nameCN: 'ILM空尖彈',
    nameTW: 'ILM空尖彈',
    nameKR: 'ILM HP탄',
    nameJP: 'ILMホローポイント弾',
    recipe: ammoSet
  },
  {
    nameEN: '#0 Buckshot',
    rarity: 3,
    time: '29',
    type: 'buckshot',
    nameCN: '#0獵鹿彈',
    nameTW: '#0獵鹿彈',
    nameKR: '#0 벅샷',
    nameJP: '＃0バックショット',
    recipe: ammoSet
  },
  {
    nameEN: 'FST Slug',
    rarity: 3,
    time: '29',
    type: 'slug',
    nameCN: 'FST獨頭彈',
    nameTW: 'FST獨頭彈',
    nameKR: 'FST 슬러그',
    nameJP: 'FSTスラッグ弾',
    recipe: ammoSet
  },
  {
    nameEN: 'M993 Armor-Piercing Ammo',
    rarity: 3,
    time: '30',
    type: 'ap ammo',
    nameCN: 'M993穿甲彈',
    nameTW: 'M993穿甲彈',
    nameKR: 'M993 철갑탄',
    nameJP: 'M993徹甲弾',
    recipe: ammoSet
  },
  {
    nameEN: 'Camouflage Cape',
    rarity: 3,
    time: '31',
    type: 'cape',
    nameCN: '偽裝披風',
    nameTW: '偽裝披風',
    nameKR: '위장용 슈트',
    nameJP: 'カモフラージュマント',
    recipe: capeSet
  },
  {
    nameEN: 'JSP High-Velocity Ammo',
    rarity: 3,
    time: '33',
    type: 'hv ammo',
    nameCN: 'JSP高速彈',
    nameTW: 'JSP高速彈',
    nameKR: 'JSP 고속탄',
    nameJP: 'JSP高速弾',
    recipe: ammoSet
  },
  {
    nameEN: 'RMR Red Dot Sight',
    rarity: 3,
    time: '34',
    type: 'rmr',
    nameCN: 'RMR紅點',
    nameKR: 'RMR 레드닷',
    nameJP: 'RMRレッドドットサイト',
    recipe: zeroSet,
    availability: 14
  },
  {
    nameEN: 'PSO-1',
    rarity: 4,
    time: '35',
    type: 'scope',
    recipe: opticsSet
  },
  {
    nameEN: 'AC3 Suppressor',
    rarity: 4,
    time: '37',
    type: 'suppressor',
    nameCN: 'AC3消音器',
    nameTW: 'AC3消音器',
    nameKR: 'AC3 소음기',
    nameJP: 'AC3',
    recipe: suppressorSet
  },
  {
    nameEN: 'EOT 516',
    rarity: 4,
    time: '38',
    type: 'holo',
    recipe: opticsSet
  },
  {
    nameEN: 'PEQ-15',
    rarity: 4,
    time: '39',
    type: 'peq',
    recipe: peqSet
  },
  {
    nameEN: 'COG M150',
    rarity: 4,
    time: '40',
    type: 'red dot',
    recipe: opticsSet
  },
  {
    nameEN: 'Type 2 Armor Plate',
    rarity: 4,
    time: '41',
    type: 'armor',
    nameCN: 'Type2防彈插板',
    nameTW: 'Type2防彈插板',
    nameKR: 'Type2 방탄판',
    nameJP: 'Type2防弾ベスト',
    recipe: armorSet
  },
  {
    nameEN: '#1 Processing Chip',
    rarity: 4,
    time: '41',
    type: 'chip',
    nameKR: '#1 연산칩',
    nameJP: '#1 加工チップ',
    recipe: zeroSet,
    availability: 14
  },
  {
    nameEN: 'IOP X3 Exoskeleton',
    rarity: 4,
    time: '42',
    type: 'exo',
    nameCN: 'IOP X3外骨骼',
    nameTW: 'IOP X3外骨骼',
    nameKR: 'IOP X3 외골격',
    nameJP: 'IOP X3外骨格',
    recipe: exoSet
  },
  {
    nameEN: 'IOP T3 Exoskeleton',
    rarity: 4,
    time: '42',
    type: 'exo',
    nameCN: 'IOP T3外骨骼',
    nameTW: 'IOP T3外骨骼',
    nameKR: 'IOP T3 외골격',
    nameJP: 'IOP T3外骨格',
    recipe: exoSet
  },
  {
    nameEN: 'ILM Hollow Point Ammo',
    rarity: 4,
    time: '43',
    type: 'hp ammo',
    nameCN: 'ILM空尖彈',
    nameTW: 'ILM空尖彈',
    nameKR: 'ILM HP탄',
    nameJP: 'ILMホローポイント弾',
    recipe: ammoSet
  },
  {
    nameEN: '#00 Buckshot',
    rarity: 4,
    time: '44',
    type: 'buckshot',
    nameCN: '#00獵鹿彈',
    nameTW: '#00獵鹿彈',
    nameKR: '#00 벅샷',
    nameJP: '＃00バックショット',
    recipe: ammoSet
  },
  {
    nameEN: 'WAD Slug',
    rarity: 4,
    time: '44',
    type: 'slug',
    nameCN: 'WAD獨頭彈',
    nameTW: 'WAD獨頭彈',
    nameKR: 'WAD 슬러그',
    nameJP: 'WADスラッグ弾',
    recipe: ammoSet
  },
  {
    nameEN: 'VFL 6-24x56',
    rarity: 5,
    time: '45',
    type: 'scope',
    recipe: opticsSet
  },
  {
    nameEN: 'Mk169 Armor-Piercing Ammo',
    rarity: 4,
    time: '45',
    type: 'ap ammo',
    nameCN: 'Mk169穿甲彈',
    nameTW: 'Mk169穿甲彈',
    nameKR: 'MK169 철갑탄',
    nameJP: 'Mk169徹甲弾',
    recipe: ammoSet
  },
  {
    nameEN: 'Urban Camouflage Cape',
    rarity: 4,
    time: '46',
    type: 'cape',
    nameCN: '城市迷彩披風',
    nameTW: '城市迷彩披風',
    nameKR: '도시 미채 슈트',
    nameJP: '都市迷彩マント',
    recipe: capeSet
  },
  {
    nameEN: 'AC4 Suppressor',
    rarity: 5,
    time: '47',
    type: 'suppressor',
    nameCN: 'AC4消音器',
    nameTW: 'AC4消音器',
    nameKR: 'AC4 소음기',
    nameJP: 'AC4',
    recipe: suppressorSet
  },
  {
    nameEN: 'IOP High-Capacity Ammo Box',
    rarity: 4,
    time: '47',
    type: 'ammo box',
    nameCN: 'IOP大容量彈鏈箱',
    nameTW: 'IOP大容量彈鏈箱',
    nameKR: 'IOP 대용량 탄약상자',
    nameJP: 'IOP弾帯箱',
    recipe: ammoBoxSet
  },
  {
    nameEN: 'EOT 518',
    rarity: 5,
    time: '48',
    type: 'holo',
    recipe: opticsSet
  },
  {
    nameEN: 'JHP High-Velocity Ammo',
    rarity: 4,
    time: '48',
    type: 'hv ammo',
    nameCN: 'JHP高速彈',
    nameTW: 'JHP高速彈',
    nameKR: 'JHP 고속탄',
    nameJP: 'JHP高速弾',
    recipe: ammoSet
  },
  {
    nameEN: 'Mk900SLAP',
    rarity: 4,
    time: '48',
    type: 'slap ammo',
    recipe: zeroSet,
    availability: 14
  },
  {
    nameEN: 'PEQ-16A',
    rarity: 5,
    time: '49',
    type: 'peq',
    recipe: peqSet
  },
  {
    nameEN: 'RMR T2 Red Dot Sight',
    rarity: 4,
    time: '49',
    type: 'rmr',
    nameCN: 'RMR T2紅點',
    nameKR: 'RMR T2 레드닷',
    nameJP: 'RMR T2レッドドットサイト',
    recipe: zeroSet,
    availability: 14
  },
  {
    nameEN: 'ITI Mars',
    rarity: 5,
    time: '50',
    type: 'red dot',
    recipe: opticsSet
  },
  {
    nameEN: 'M1022 Sniper Round',
    rarity: 5,
    time: '50',
    type: 'ap ammo',
    nameKR: 'M1022 저격탄',
    nameJP: 'M1022スナイパーラウンド',
    recipe: zeroSet,
    availability: 14
  },
  {
    nameEN: 'Type 3 Armor Plate',
    rarity: 5,
    time: '51',
    type: 'armor',
    nameCN: 'Type3防彈插板',
    nameTW: 'Type3防彈插板',
    nameKR: 'Type3 방탄판',
    nameJP: 'Type3防弾ベスト',
    recipe: armorSet
  },
  {
    nameEN: '#2 Processing Chip',
    rarity: 5,
    time: '51',
    type: 'chip',
    nameKR: '#2 연산칩',
    nameJP: '#2 加工チップ',
    recipe: zeroSet,
    availability: 14
  },
  {
    nameEN: 'IOP X4 Exoskeleton',
    rarity: 5,
    time: '52',
    type: 'exo',
    nameCN: 'IOP X4外骨骼',
    nameTW: 'IOP X4外骨骼',
    nameKR: 'IOP X4 외골격',
    nameJP: 'IOP X4外骨格',
    recipe: exoSet
  },
  {
    nameEN: 'IOP T4 Exoskeleton',
    rarity: 5,
    time: '52',
    type: 'exo',
    nameCN: 'IOP T4外骨骼',
    nameTW: 'IOP T4外骨骼',
    nameKR: 'IOP T4 외골격',
    nameJP: 'IOP T4外骨格',
    recipe: exoSet
  },
  {
    nameEN: 'ILM Hollow Point Ammo',
    rarity: 5,
    time: '53',
    type: 'hp ammo',
    nameCN: 'ILM空尖彈',
    nameTW: 'ILM空尖彈',
    nameKR: 'ILM HP탄',
    nameJP: 'ILMホローポイント弾',
    recipe: ammoSet
  },
  {
    nameEN: '#000 Buckshot',
    rarity: 5,
    time: '54',
    type: 'buckshot',
    nameCN: '#000獵鹿彈',
    nameTW: '#000獵鹿彈',
    nameKR: '#000 벅샷',
    nameJP: '＃000バックショット',
    recipe: ammoSet
  },
  {
    nameEN: 'SABOT Slug',
    rarity: 5,
    time: '54',
    type: 'slug',
    nameCN: 'SABOT獨頭彈',
    nameTW: 'SABOT獨頭彈',
    nameKR: 'SABOT 슬러그',
    nameJP: 'SABOTスラッグ弾',
    recipe: ammoSet
  },
  {
    nameEN: 'Mk211 High-Explosive Armor-Piercing Ammo',
    rarity: 5,
    time: '55',
    type: 'ap ammo',
    nameCN: 'Mk211高爆穿甲彈',
    nameTW: 'Mk211高爆穿甲彈',
    nameKR: 'Mk211 고폭철갑탄',
    nameJP: 'Mk211徹甲弾',
    recipe: ammoSet
  },
  {
    nameEN: '#7.5 Birdshot',
    rarity: 5,
    time: '55',
    type: 'birdshot',
    nameKR: '#7.5 버드샷',
    nameJP: '#7.5号バードショット',
    recipe: zeroSet,
    availability: 14
  },
  {
    nameEN: 'Thermoptic Camouflage Cape',
    rarity: 5,
    time: '56',
    type: 'cape',
    nameCN: '熱光學迷彩披風',
    nameTW: '熱光學迷彩披風',
    nameKR: '열광학 미채 슈트',
    nameJP: '熱光学迷彩マント',
    recipe: capeSet
  },
  {
    nameEN: 'IOP Maximum Ammo Box',
    rarity: 5,
    time: '57',
    type: 'ammo box',
    nameCN: 'IOP極限彈鏈箱',
    nameTW: 'IOP極限彈鏈箱',
    nameKR: 'IOP대용량 탄약통',
    nameJP: 'IOPEX弾帯箱',
    recipe: ammoBoxSet
  },
  {
    nameEN: 'Shotgun Flashbang',
    rarity: 5,
    time: '57',
    type: 'sg ammo',
    nameKR: '산탄총 섬광탄',
    nameJP: 'ショットガンフラッシュバン',
    recipe: zeroSet,
    availability: 14
  },
  {
    nameEN: 'Signal Flare',
    rarity: 5,
    time: '57',
    type: 'status ammo',
    nameKR: '신호탄',
    nameJP: 'シグナルフレア',
    recipe: zeroSet,
    availability: 14
  },
  {
    nameEN: 'APCR High-Velocity Ammo',
    rarity: 5,
    time: '58',
    type: 'hv ammo',
    nameCN: 'APCR高速彈',
    nameTW: 'APCR高速彈',
    nameKR: 'APCR 고속탄',
    nameJP: 'APCR高速弾',
    recipe: ammoSet
  },
  {
    nameEN: 'Mk1000SLAP',
    rarity: 4,
    time: '58',
    type: 'slap ammo',
    recipe: zeroSet,
    availability: 14
  },
  {
    nameEN: 'RMR T4 Red Dot Sight',
    rarity: 5,
    time: '59',
    type: 'rmr',
    nameCN: 'RMR T4紅點',
    nameTW: 'RMR T4紅點',
    nameKR: 'RMR T4 레드닷',
    nameJP: 'RMR T4レッドドットサイト',
    recipe: zeroSet,
    availability: 14
  }
]
