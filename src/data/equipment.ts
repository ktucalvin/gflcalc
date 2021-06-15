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
    nameEN: 'LRA 2-12x50',
    time: '20',
    rarity: 3,
    type: 'scope',
    recipe: opticsSet
  },
  {
    nameEN: 'PSO-1',
    time: '35',
    rarity: 4,
    type: 'scope',
    recipe: opticsSet
  },
  {
    nameEN: 'VFL 6-24x56',
    time: '45',
    rarity: 5,
    type: 'scope',
    recipe: opticsSet
  },
  {
    nameEN: 'EOT 506',
    time: '08',
    type: 'holo',
    recipe: opticsSet
  },
  {
    nameEN: 'EOT 512',
    time: '23',
    rarity: 3,
    type: 'holo',
    recipe: opticsSet
  },
  {
    nameEN: 'EOT 516',
    time: '38',
    rarity: 4,
    type: 'holo',
    recipe: opticsSet
  },
  {
    nameEN: 'EOT 518',
    time: '48',
    rarity: 5,
    type: 'holo',
    recipe: opticsSet
  },
  {
    nameEN: 'AMP COMPM2',
    time: '10',
    type: 'red dot',
    recipe: opticsSet
  },
  {
    nameEN: 'AMP COMPM4',
    time: '25',
    rarity: 3,
    type: 'red dot',
    recipe: opticsSet
  },
  {
    nameEN: 'COG M150',
    time: '40',
    rarity: 4,
    type: 'red dot',
    recipe: opticsSet
  },
  {
    nameEN: 'ITI Mars',
    time: '50',
    rarity: 5,
    type: 'red dot',
    recipe: opticsSet
  },
  {
    nameEN: 'PEQ-2',
    time: '09',
    type: 'peq',
    recipe: peqSet
  },
  {
    nameEN: 'PEQ-5',
    time: '24',
    rarity: 3,
    type: 'peq',
    recipe: peqSet
  },
  {
    nameEN: 'PEQ-15',
    time: '39',
    rarity: 4,
    type: 'peq',
    recipe: peqSet
  },
  {
    nameEN: 'PEQ-16A',
    time: '49',
    rarity: 5,
    type: 'peq',
    recipe: peqSet
  },
  {
    nameEN: 'AC1 Suppressor',
    nameKR: 'AC1 소음기',
    nameJP: 'AC1',
    time: '07',
    type: 'suppressor',
    recipe: suppressorSet
  },
  {
    nameEN: 'AC2 Suppressor',
    nameKR: 'AC2 소음기',
    nameJP: 'AC2',
    time: '22',
    rarity: 3,
    type: 'suppressor',
    recipe: suppressorSet
  },
  {
    nameEN: 'AC3 Suppressor',
    nameKR: 'AC3 소음기',
    nameJP: 'AC3',
    time: '37',
    rarity: 4,
    type: 'suppressor',
    recipe: suppressorSet
  },
  {
    nameEN: 'AC4 Suppressor',
    nameKR: 'AC4 소음기',
    nameJP: 'AC4',
    time: '47',
    rarity: 5,
    type: 'suppressor',
    recipe: suppressorSet
  },
  {
    nameEN: 'M61 Armor-Piercing Ammo',
    nameKR: 'M61 철갑탄',
    nameJP: 'M61徹甲弾',
    time: '15',
    type: 'ap ammo',
    recipe: ammoSet
  },
  {
    nameEN: 'M993 Armor-Piercing Ammo',
    nameKR: 'M993 철갑탄',
    nameJP: 'M993徹甲弾',
    time: '30',
    rarity: 3,
    type: 'ap ammo',
    recipe: ammoSet
  },
  {
    nameEN: 'Mk169 Armor-Piercing Ammo',
    nameKR: 'MK169 철갑탄',
    nameJP: 'Mk169徹甲弾',
    time: '45',
    rarity: 4,
    type: 'ap ammo',
    recipe: ammoSet
  },
  {
    nameEN: 'Mk211 High-Explosive Armor-Piercing Ammo',
    nameKR: 'Mk211 고폭철갑탄',
    nameJP: 'Mk211徹甲弾',
    time: '55',
    rarity: 5,
    type: 'ap ammo',
    recipe: ammoSet
  },
  {
    nameEN: 'ILM Hollow Point Ammo',
    nameKR: 'ILM HP탄',
    nameJP: 'ILMホローポイント弾',
    time: '13',
    type: 'hp ammo',
    recipe: ammoSet
  },
  {
    nameEN: 'ILM Hollow Point Ammo',
    nameKR: 'ILM HP탄',
    nameJP: 'ILMホローポイント弾',
    time: '28',
    rarity: 3,
    type: 'hp ammo',
    recipe: ammoSet
  },
  {
    nameEN: 'ILM Hollow Point Ammo',
    nameKR: 'ILM HP탄',
    nameJP: 'ILMホローポイント弾',
    time: '43',
    rarity: 4,
    type: 'hp ammo',
    recipe: ammoSet
  },
  {
    nameEN: 'ILM Hollow Point Ammo',
    nameKR: 'ILM HP탄',
    nameJP: 'ILMホローポイント弾',
    time: '53',
    rarity: 5,
    type: 'hp ammo',
    recipe: ammoSet
  },
  {
    nameEN: 'FMJ High-Velocity Ammo',
    nameKR: 'FMJ 고속탄',
    nameJP: 'FMJ高速弾',
    time: '18',
    type: 'hv ammo',
    recipe: ammoSet
  },
  {
    nameEN: 'JSP High-Velocity Ammo',
    nameKR: 'JSP 고속탄',
    nameJP: 'JSP高速弾',
    time: '33',
    rarity: 3,
    type: 'hv ammo',
    recipe: ammoSet
  },
  {
    nameEN: 'JHP High-Velocity Ammo',
    nameKR: 'JHP 고속탄',
    nameJP: 'JHP高速弾',
    time: '48',
    rarity: 4,
    type: 'hv ammo',
    recipe: ammoSet
  },
  {
    nameEN: 'APCR High-Velocity Ammo',
    nameKR: 'APCR 고속탄',
    nameJP: 'APCR高速弾',
    time: '58',
    rarity: 5,
    type: 'hv ammo',
    recipe: ammoSet
  },
  {
    nameEN: '#1 Buckshot',
    nameKR: '#1 벅샷',
    nameJP: '＃1バックショット',
    time: '14',
    type: 'buckshot',
    recipe: ammoSet
  },
  {
    nameEN: 'BK Slug',
    nameKR: 'BK 슬러그',
    nameJP: 'BKスラッグ弾',
    time: '14',
    type: 'slug',
    recipe: ammoSet
  },
  {
    nameEN: '#0 Buckshot',
    nameKR: '#0 벅샷',
    nameJP: '＃0バックショット',
    time: '29',
    rarity: 3,
    type: 'buckshot',
    recipe: ammoSet
  },
  {
    nameEN: 'FST Slug',
    nameKR: 'FST 슬러그',
    nameJP: 'FSTスラッグ弾',
    time: '29',
    rarity: 3,
    type: 'slug',
    recipe: ammoSet
  },
  {
    nameEN: '#00 Buckshot',
    nameKR: '#00 벅샷',
    nameJP: '＃00バックショット',
    time: '44',
    rarity: 4,
    type: 'buckshot',
    recipe: ammoSet
  },
  {
    nameEN: 'WAD Slug',
    nameKR: 'WAD 슬러그',
    nameJP: 'WADスラッグ弾',
    time: '44',
    rarity: 4,
    type: 'slug',
    recipe: ammoSet
  },
  {
    nameEN: '#000 Buckshot',
    nameKR: '#000 벅샷',
    nameJP: '＃000バックショット',
    time: '54',
    rarity: 5,
    type: 'buckshot',
    recipe: ammoSet
  },
  {
    nameEN: 'SABOT Slug',
    nameKR: 'SABOT 슬러그',
    nameJP: 'SABOTスラッグ弾',
    time: '54',
    rarity: 5,
    type: 'slug',
    recipe: ammoSet
  },
  {
    nameEN: 'IOP X1 Exoskeleton',
    nameKR: 'IOP X1 외골격',
    nameJP: 'IOP X1外骨格',
    time: '12',
    type: 'exo',
    recipe: exoSet
  },
  {
    nameEN: 'IOP T1 Exoskeleton',
    nameKR: 'IOP T1 외골격',
    nameJP: 'IOP T1外骨格',
    time: '12',
    type: 'exo',
    recipe: exoSet
  },
  {
    nameEN: 'IOP X2 Exoskeleton',
    nameKR: 'IOP X2 외골격',
    nameJP: 'IOP X2外骨格',
    time: '27',
    rarity: 3,
    type: 'exo',
    recipe: exoSet
  },
  {
    nameEN: 'IOP T2 Exoskeleton',
    nameKR: 'IOP T2 외골격',
    nameJP: 'IOP T2外骨格',
    time: '27',
    rarity: 3,
    type: 'exo',
    recipe: exoSet
  },
  {
    nameEN: 'IOP X3 Exoskeleton',
    nameKR: 'IOP X3 외골격',
    nameJP: 'IOP X3外骨格',
    time: '42',
    rarity: 4,
    type: 'exo',
    recipe: exoSet
  },
  {
    nameEN: 'IOP T3 Exoskeleton',
    nameKR: 'IOP T3 외골격',
    nameJP: 'IOP T3外骨格',
    time: '42',
    rarity: 4,
    type: 'exo',
    recipe: exoSet
  },
  {
    nameEN: 'IOP X4 Exoskeleton',
    nameKR: 'IOP X4 외골격',
    nameJP: 'IOP X4外骨格',
    time: '52',
    rarity: 5,
    type: 'exo',
    recipe: exoSet
  },
  {
    nameEN: 'IOP T4 Exoskeleton',
    nameKR: 'IOP T4 외골격',
    nameJP: 'IOP T4外骨格',
    time: '52',
    rarity: 5,
    type: 'exo',
    recipe: exoSet
  },
  {
    nameEN: 'Type 1 Armor Plate',
    nameKR: 'Type1 방탄삽판',
    nameJP: 'Type1防弾ベスト',
    time: '26',
    rarity: 3,
    type: 'armor',
    recipe: armorSet
  },
  {
    nameEN: 'Type 2 Armor Plate',
    nameKR: 'Type2 방탄판',
    nameJP: 'Type2防弾ベスト',
    time: '41',
    rarity: 4,
    type: 'armor',
    recipe: armorSet
  },
  {
    nameEN: 'Type 3 Armor Plate',
    nameKR: 'Type3 방탄판',
    nameJP: 'Type3防弾ベスト',
    time: '51',
    rarity: 5,
    type: 'armor',
    recipe: armorSet
  },
  {
    nameEN: 'IOP High-Capacity Ammo Box',
    nameKR: 'IOP 대용량 탄약상자',
    nameJP: 'IOP弾帯箱',
    time: '47',
    rarity: 4,
    type: 'ammo box',
    recipe: ammoBoxSet
  },
  {
    nameEN: 'IOP Maximum Ammo Box',
    nameKR: 'IOP대용량 탄약통',
    nameJP: 'IOPEX弾帯箱',
    time: '57',
    rarity: 5,
    type: 'ammo box',
    recipe: ammoBoxSet
  },
  {
    nameEN: 'Ragged Cape',
    nameKR: '낡은 슈트',
    nameJP: 'ぼろぼろのマント',
    time: '16',
    type: 'cape',
    recipe: capeSet
  },
  {
    nameEN: 'Camouflage Cape',
    nameKR: '위장용 슈트',
    nameJP: 'カモフラージュマント',
    time: '31',
    rarity: 3,
    type: 'cape',
    recipe: capeSet
  },
  {
    nameEN: 'Urban Camouflage Cape',
    nameKR: '도시 미채 슈트',
    nameJP: '都市迷彩マント',
    time: '46',
    rarity: 4,
    type: 'cape',
    recipe: capeSet
  },
  {
    nameEN: 'Thermoptic Camouflage Cape',
    nameKR: '열광학 미채 슈트',
    nameJP: '熱光学迷彩マント',
    time: '56',
    rarity: 5,
    type: 'cape',
    recipe: capeSet
  },
  {
    nameEN: 'Experimental Processing Chip',
    nameKR: '시제품 연산칩',
    time: '26',
    rarity: 3,
    type: 'chip',
    recipe: zeroSet,
    availability: CN | KR | TW
  },
  {
    nameEN: '#1 Processing Chip',
    nameKR: '#1 연산칩',
    time: '41',
    rarity: 4,
    type: 'chip',
    recipe: zeroSet,
    availability: CN | KR | TW
  },
  {
    nameEN: '#2 Processing Chip',
    nameKR: '#2 연산칩',
    time: '51',
    rarity: 5,
    type: 'chip',
    recipe: zeroSet,
    availability: CN | KR | TW
  },
  {
    nameEN: 'RMR Red Dot Sight',
    nameKR: 'RMR 레드닷',
    time: '34',
    rarity: 3,
    type: 'rmr',
    recipe: zeroSet,
    availability: CN | KR | TW
  },
  {
    nameEN: 'RMR T2 Red Dot Sight',
    nameKR: 'RMR T2 레드닷',
    time: '49',
    rarity: 4,
    type: 'rmr',
    recipe: zeroSet,
    availability: CN | KR | TW
  },
  {
    nameEN: 'RMR T4 Red Dot Sight',
    nameKR: 'RMR T4 레드닷',
    time: '59',
    rarity: 5,
    type: 'rmr',
    recipe: zeroSet,
    availability: CN | KR | TW
  },
  {
    nameEN: 'Mk900SLAP',
    time: '48',
    rarity: 4,
    type: 'slap ammo',
    recipe: zeroSet,
    availability: CN | KR | TW
  },
  {
    nameEN: 'Mk1000SLAP',
    time: '58',
    rarity: 4,
    type: 'slap ammo',
    recipe: zeroSet,
    availability: CN | KR | TW
  },
  {
    nameEN: 'M1022 Sniper Round',
    nameKR: 'M1022 저격탄',
    time: '50',
    rarity: 5,
    type: 'ap ammo',
    recipe: zeroSet,
    availability: CN | KR | TW
  },
  {
    nameEN: '#7.5 Birdshot',
    nameKR: '#7.5 버드샷',
    time: '55',
    rarity: 5,
    type: 'birdshot',
    recipe: zeroSet,
    availability: CN | KR | TW
  },
  {
    nameEN: 'Shotgun Flashbang',
    nameKR: '산탄총 섬광탄',
    time: '57',
    rarity: 5,
    type: 'sg ammo',
    recipe: zeroSet,
    availability: CN | KR | TW
  },
  {
    nameEN: 'Signal Flare',
    nameKR: '신호탄',
    time: '57',
    rarity: 5,
    type: 'status ammo',
    recipe: zeroSet,
    availability: CN | KR | TW
  }
]