import type { RecipeByRarity, Requirements } from '../common/gflcalc'
import { EN, CN, KR, TW, JP } from '../common/constants'

// Sets: Manpower, Ammo, Rations, Parts, Sum
const HGSet1: Requirements = [30, 30, 30, 30, sum => sum <= 920]
const HGSet2: Requirements = [130, 130, 130, 30, sum => sum <= 920]
const SMGSet1: Requirements = [30, 30, 30, 30]
const SMGSet2: Requirements = [400, 400, 30, 30]
const ARSet1: Requirements = [30, 30, 30, 30, sum => sum >= 800]
const ARSet2: Requirements = [30, 400, 400, 30]
const RFSet1: Requirements = [300, 30, 300, 30]
const RFSet2: Requirements = [400, 30, 400, 30]
const MGSet1: Requirements = [400, 600, 30, 300]
const MGSet2: Requirements = [600, 600, 100, 400]
const HeavySet1111: Requirements = [1000, 1000, 1000, 1000]
const HeavySet4411: Requirements = [4000, 4000, 1000, 1000]
const HeavySet1441: Requirements = [1000, 4000, 4000, 1000]
const HeavySet3131: Requirements = [3000, 1000, 3000, 1000]
const HeavySet4141: Requirements = [4000, 1000, 4000, 1000]
const HeavySet4613: Requirements = [4000, 6000, 1000, 3000]
const HeavySet6613: Requirements = [6000, 6000, 1000, 3000]
const HeavySet4163: Requirements = [4000, 1000, 6000, 3000]
const HeavySet6164: Requirements = [6000, 1000, 6000, 4000]

const twoStar: RecipeByRarity = {
  hg: [
    {
      nameEN: 'M1911',
      time: '0:20',
      standard: HGSet1
    },
    {
      nameEN: 'M1895',
      time: '0:20',
      nameCN: '纳甘左轮',
      nameTW: '納甘左輪',
      nameKR: '나강 리볼버',
      standard: HGSet1
    },
    {
      nameEN: 'P38',
      time: '0:20',
      standard: HGSet1
    },
    {
      nameEN: 'PPK',
      time: '0:22',
      standard: HGSet1
    },
    {
      nameEN: 'FF FNP9',
      time: '0:25',
      nameCN: 'FNP-9',
      nameTW: 'FNP-9',
      nameKR: 'FNP-9',
      standard: HGSet1
    },
    {
      nameEN: 'MP-446',
      time: '0:25',
      standard: HGSet1
    },
    {
      nameEN: 'Gr USP Compact',
      time: '0:28',
      nameCN: 'USP Compact',
      nameTW: 'USP Compact',
      nameKR: 'USP Compact',
      nameJP: 'Gr USPコンパクト',
      standard: HGSet1
    },
    {
      nameEN: 'Bren Ten',
      time: '0:28',
      nameJP: 'ブレン・テン',
      standard: HGSet1
    }
  ],
  smg: [
    {
      nameEN: 'IDW',
      time: '1:10',
      standard: SMGSet1
    },
    {
      nameEN: 'PP-2000',
      time: '1:10',
      standard: SMGSet1
    },
    {
      nameEN: 'm45',
      time: '1:20',
      standard: SMGSet1
    },
    {
      nameEN: 'Spectre M4',
      time: '1:20',
      nameJP: 'スペクトラM4',
      standard: SMGSet1
    },
    {
      nameEN: 'Type 64',
      time: '1:25',
      nameCN: '64式',
      nameTW: '64式',
      nameKR: '64식',
      nameJP: '64式',
      standard: SMGSet1
    },
    {
      nameEN: 'M38',
      time: '1:30',
      nameCN: '伯莱塔38型',
      nameTW: '伯萊塔38型',
      nameKR: '베레타 38형',
      standard: SMGSet1
    },
    {
      nameEN: 'M3',
      time: '1:30',
      standard: SMGSet1
    },
    {
      nameEN: 'MP40',
      time: '1:30',
      standard: SMGSet1
    },
    {
      nameEN: 'PPSh-41',
      time: '1:50',
      standard: SMGSet1
    }
  ],
  ar: [
    {
      nameEN: 'Galil',
      time: '2:40',
      nameCN: '加利尔',
      nameTW: '加利爾',
      nameKR: '갈릴',
      nameJP: 'ガリル',
      standard: ARSet1
    },
    {
      nameEN: 'SIG-510',
      time: '2:40',
      standard: ARSet1
    },
    {
      nameEN: 'FF F2000',
      time: '2:45',
      nameCN: 'F2000',
      nameTW: 'F2000',
      nameKR: 'F2000',
      standard: ARSet1
    },
    {
      nameEN: 'Type 63',
      time: '2:45',
      nameCN: '63式',
      nameTW: '63式',
      nameKR: '63식',
      nameJP: '63式',
      standard: ARSet1
    },
    {
      nameEN: 'Gr G3',
      time: '2:50',
      nameCN: 'G3',
      nameTW: 'G3',
      nameKR: 'G3',
      standard: ARSet1
    },
    {
      nameEN: 'L85A1',
      time: '2:50',
      standard: ARSet1
    }
  ],
  rf: [
    {
      nameEN: 'G43',
      time: '3:10',
      standard: RFSet1
    },
    {
      nameEN: 'FF FN49',
      time: '3:10',
      nameCN: 'FN-49',
      nameTW: 'FN-49',
      nameKR: 'FN-49',
      standard: RFSet1
    },
    {
      nameEN: 'VM59',
      time: '3:20',
      nameCN: 'BM59',
      nameTW: 'BM59',
      nameKR: 'BM59',
      nameJP: 'It BM59',
      standard: RFSet1
    },
    {
      nameEN: 'SVT-38',
      time: '3:30',
      standard: RFSet1
    },
    {
      nameEN: 'SKS',
      time: '3:30',
      nameCN: '西蒙诺夫',
      nameTW: '西蒙諾夫',
      nameKR: '시모노프',
      nameJP: 'SKS',
      standard: RFSet1
    }
  ],
  mg: [
    {
      nameEN: 'AAT-52',
      time: '4:50',
      standard: MGSet1
    },
    {
      nameEN: 'FG42',
      time: '4:50',
      standard: MGSet1
    },
    {
      nameEN: 'MG34',
      time: '5:00',
      standard: MGSet1
    },
    {
      nameEN: 'DP28',
      time: '5:00',
      standard: MGSet1
    },
    {
      nameEN: 'LWMMG',
      time: '5:10',
      standard: MGSet1
    }
  ]
}

const threeStar: RecipeByRarity = {
  hg: [
    {
      nameEN: 'C96',
      time: '0:30',
      standard: HGSet1
    },
    {
      nameEN: 'P08',
      time: '0:30',
      standard: HGSet1
    },
    {
      nameEN: 'P99',
      time: '0:35',
      standard: HGSet1
    },
    {
      nameEN: 'Type 92',
      time: '0:35',
      nameCN: '92式',
      nameTW: '92式',
      nameKR: '92식',
      nameJP: '92式',
      standard: HGSet1
    },
    {
      nameEN: 'Astra',
      time: '0:40',
      nameCN: '阿斯特拉左轮',
      nameTW: '阿斯特拉左輪',
      nameKR: '아스트라 리볼버',
      nameJP: 'アストラ',
      standard: HGSet1
    },
    {
      nameEN: 'M9',
      time: '0:40',
      standard: HGSet1
    },
    {
      nameEN: 'Makarov',
      time: '0:40',
      nameCN: '马卡洛夫',
      nameTW: '馬卡洛夫',
      nameKR: '마카로프',
      nameJP: 'マカロフ',
      standard: HGSet1
    },
    {
      nameEN: 'Tokarev',
      time: '0:45',
      nameCN: '托卡列夫',
      nameTW: '托卡列夫',
      nameKR: '토카레프',
      nameJP: 'トカレフ',
      standard: HGSet1
    }
  ],
  smg: [
    {
      nameEN: 'Sten MkII',
      time: '1:40',
      nameCN: '司登MkⅡ',
      nameTW: '斯登MkⅡ',
      nameKR: '스텐MkII',
      nameJP: 'ステンMK-Ⅱ',
      standard: SMGSet2,
      heavy: HeavySet4411
    },
    {
      nameEN: 'Micro Uzi',
      time: '1:40',
      nameCN: '微型乌兹',
      nameTW: '微型烏茲',
      nameKR: '마이크로 우지',
      nameJP: 'Micro Uzi',
      standard: SMGSet1,
      heavy: HeavySet1111
    },
    {
      nameEN: 'F1',
      time: '1:50',
      heavy: HeavySet1111
    },
    {
      nameEN: 'Ingram',
      time: '2:00',
      nameCN: 'MAC-10',
      nameTW: 'MAC-10',
      nameKR: 'MAC-10',
      nameJP: 'イングラム',
      standard: SMGSet1,
      heavy: HeavySet1111
    },
    {
      nameEN: 'Skorpion',
      time: '2:00',
      nameCN: '蝎式',
      nameTW: '蠍式',
      nameKR: '스콜피온',
      nameJP: 'スコーピオン',
      standard: SMGSet1,
      heavy: HeavySet1111
    },
    {
      nameEN: 'Z-62',
      time: '2:05',
      heavy: HeavySet1111
    },
    {
      nameEN: 'PPS-43',
      time: '2:10',
      standard: SMGSet1,
      heavy: HeavySet1111
    }
  ],
  ar: [
    {
      nameEN: 'StG44',
      time: '3:00',
      standard: ARSet1,
      heavy: HeavySet1111
    },
    {
      nameEN: 'OTs-12',
      time: '3:10',
      standard: ARSet1,
      heavy: HeavySet1111
    },
    {
      nameEN: 'ARX-160',
      time: '3:15',
      heavy: HeavySet1111
    },
    {
      nameEN: 'AK-47',
      time: '3:20',
      standard: ARSet1,
      heavy: HeavySet1111
    },
    {
      nameEN: 'FF FNC',
      time: '3:20',
      nameCN: 'FNC',
      nameTW: 'FNC',
      nameKR: 'FNC',
      standard: ARSet1,
      heavy: HeavySet1111
    }
  ],
  rf: [
    {
      nameEN: 'M14',
      time: '3:40',
      standard: RFSet1,
      heavy: HeavySet3131
    },
    {
      nameEN: 'SV-98',
      time: '3:40',
      standard: RFSet1,
      heavy: HeavySet3131
    },
    {
      nameEN: 'Type88',
      time: '3:50',
      nameCN: '汉阳造88式',
      nameTW: '漢陽造88式',
      nameKR: '한양조 88식',
      nameJP: '漢陽88式',
      standard: RFSet2,
      heavy: HeavySet4141
    },
    {
      nameEN: 'OTs-44',
      time: '3:50',
      heavy: HeavySet4141
    },
    {
      nameEN: 'M1 Garand',
      time: '4:00',
      nameCN: 'M1加兰德',
      nameTW: 'M1加蘭德',
      nameKR: 'M1 개런드',
      nameJP: 'M1ガーランド',
      standard: RFSet1,
      heavy: HeavySet3131
    }
  ],
  mg: [
    {
      nameEN: 'Bren',
      time: '5:20',
      nameCN: '布伦',
      nameTW: '布倫',
      nameKR: '브렌',
      nameJP: 'ブレン',
      standard: MGSet1,
      heavy: HeavySet4613
    },
    {
      nameEN: 'M1919A4',
      time: '5:40',
      standard: MGSet1,
      heavy: HeavySet4613
    },
    {
      nameEN: 'MG42',
      time: '5:50',
      standard: MGSet1,
      heavy: HeavySet4613
    },
    {
      nameEN: 'M2HB',
      time: '6:10',
      standard: MGSet1,
      heavy: HeavySet4613
    }
  ],
  sg: [
    {
      nameEN: 'NS2000',
      time: '7:15',
      heavy: HeavySet6164
    },
    {
      nameEN: 'M500',
      time: '7:20',
      heavy: HeavySet4163
    },
    {
      nameEN: 'KS-23',
      time: '7:25',
      heavy: HeavySet4163
    },
    {
      nameEN: 'RMB-93',
      time: '7:30',
      heavy: HeavySet6164
    },
    {
      nameEN: 'M1897',
      time: '7:30',
      heavy: HeavySet6164
    }
  ]
}

const fourStar: RecipeByRarity = {
  hg: [
    {
      nameEN: 'CZ 100',
      time: '0:48',
      standard: HGSet2,
      availability: ~JP
    },
    {
      nameEN: 'Jericho',
      time: '0:49',
      nameCN: '杰里科',
      nameTW: '杰里科',
      nameKR: '제리코',
      nameJP: 'ジェリコ',
      standard: HGSet2
    },
    {
      nameEN: 'SAA',
      time: '0:50',
      nameCN: '柯尔特左轮',
      nameTW: '柯爾特左輪',
      nameKR: '콜트 리볼버',
      nameJP: 'コルトSAA',
      standard: HGSet1
    },
    {
      nameEN: 'Gr Mk23',
      time: '0:50',
      nameCN: 'Mk23',
      nameTW: 'Mk23',
      nameKR: 'Mk23',
      standard: HGSet1
    },
    {
      nameEN: 'Gr P30',
      time: '0:50',
      nameCN: 'P30',
      nameTW: 'P30',
      nameKR: 'P30',
      standard: HGSet2
    },
    {
      nameEN: 'Spitfire',
      time: '0:52',
      standard: HGSet2
    },
    {
      nameEN: 'K5',
      time: '0:53',
      standard: HGSet2
    },
    {
      nameEN: 'Rex Zero 1',
      time: '0:54',
      standard: HGSet2
    },
    {
      nameEN: 'Stechkin',
      time: '0:55',
      nameCN: '斯捷奇金',
      nameTW: '斯捷奇金',
      nameKR: '스테츠킨',
      nameJP: 'スチェッキン',
      standard: HGSet2
    },
    {
      nameEN: 'P7',
      time: '0:55',
      standard: HGSet1
    }
  ],
  smg: [
    {
      nameEN: 'SAF',
      time: '2:10',
      standard: SMGSet2,
      heavy: HeavySet4411
    },
    {
      nameEN: 'PPD-40',
      time: '2:10',
      availability: ~JP,
      standard: SMGSet2,
      heavy: HeavySet4411
    },
    {
      nameEN: 'UMP9',
      time: '2:15',
      standard: SMGSet2,
      heavy: HeavySet4411
    },
    {
      nameEN: 'UMP45',
      time: '2:15',
      standard: SMGSet2,
      heavy: HeavySet4411
    },
    {
      nameEN: 'AR-57',
      time: '2:16',
      availability: ~JP,
      standard: SMGSet2,
      heavy: HeavySet4411
    },
    {
      nameEN: 'Shipka',
      time: '2:18',
      nameCN: '希普卡',
      nameTW: '希普卡',
      nameKR: '시프카',
      nameJP: 'シプカ',
      standard: SMGSet2,
      heavy: HeavySet4411
    },
    {
      nameEN: 'PP-19-01',
      time: '2:18',
      standard: SMGSet2,
      heavy: HeavySet4411
    },
    {
      nameEN: 'Gr MP5',
      time: '2:20',
      nameCN: 'MP5',
      nameTW: 'MP5',
      nameKR: 'MP5',
      standard: SMGSet1,
      heavy: HeavySet1111
    },
    {
      nameEN: 'PP-90',
      time: '2:20',
      standard: SMGSet2,
      heavy: HeavySet4411
    },
    {
      nameEN: 'K-PDW',
      time: '2:20',
      nameCN: 'KAC-PDW',
      nameTW: 'KAC-PDW',
      nameKR: 'KAC-PDW',
      standard: SMGSet2,
      heavy: HeavySet4411
    }
  ],
  ar: [
    {
      nameEN: 'Type56-1',
      time: '3:25',
      nameCN: '56-1式',
      nameTW: '56-1式',
      nameKR: '56-1식',
      nameJP: '56-1式',
      standard: ARSet1,
      heavy: HeavySet1111
    },
    {
      nameEN: 'XM8',
      time: '3:25',
      standard: ARSet1,
      heavy: HeavySet1111
    },
    {
      nameEN: 'SAR-21',
      time: '3:25',
      standard: ARSet1,
      heavy: HeavySet1111
    },
    {
      nameEN: 'AS Val',
      time: '3:30',
      standard: ARSet1,
      heavy: HeavySet1111
    },
    {
      nameEN: 'FAMAS',
      time: '3:30',
      standard: ARSet1,
      heavy: HeavySet1111
    },
    {
      nameEN: 'TAR-21',
      time: '3:30',
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: '9A-91',
      time: '3:35',
      standard: ARSet1,
      heavy: HeavySet1111
    },
    {
      nameEN: 'EM-2',
      time: '3:35',
      standard: ARSet1,
      heavy: HeavySet1111
    },
    {
      nameEN: 'CR-21',
      time: '3:35',
      standard: ARSet2
    },
    {
      nameEN: 'Gr G36',
      time: '3:40',
      nameCN: 'G36',
      nameTW: 'G36',
      nameKR: 'G36',
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: 'Ribeyrolles',
      time: '3:40',
      nameCN: '利贝罗勒',
      nameTW: '利貝羅勒',
      nameKR: '리베롤',
      nameJP: 'リベロール',
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: 'FX-05',
      time: '3:40',
      availability: ~JP,
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: 'AK-74M',
      nameCN: 'AK74M',
      nameTW: 'AK74M',
      nameKR: 'AK74M',
      time: '3:45',
      availability: ~JP,
      standard: ARSet2,
      heavy: HeavySet1441
    }
  ],
  rf: [
    {
      nameEN: '4 Shiki',
      time: '4:04',
      nameCN: '四式',
      nameTW: '四式',
      nameKR: '4식',
      nameJP: '四式',
      standard: RFSet2,
      heavy: HeavySet4141
    },
    {
      nameEN: 'Mosin-Nagant',
      time: '4:10',
      nameCN: '莫辛-纳甘',
      nameTW: '莫辛-納甘',
      nameKR: '모신나강',
      nameJP: 'モシン・ナガン',
      standard: RFSet1,
      heavy: HeavySet3131
    },
    {
      nameEN: 'T-5000',
      time: '4:10',
      standard: RFSet2,
      heavy: HeavySet4141
    },
    {
      nameEN: 'Gr PSG-1',
      time: '4:10',
      nameCN: 'PSG-1',
      nameTW: 'PSG-1',
      nameKR: 'PSG-1',
      heavy: HeavySet4141
    },
    {
      nameEN: 'SVD',
      time: '4:15',
      standard: RFSet2,
      heavy: HeavySet4141
    },
    {
      nameEN: 'SPR A3G',
      time: '4:15',
      standard: RFSet2,
      heavy: HeavySet4141
    },
    {
      nameEN: 'K31',
      time: '4:15',
      standard: RFSet2,
      heavy: HeavySet4141
    },
    {
      nameEN: 'Gr G28',
      time: '4:20',
      nameCN: 'G28',
      nameTW: 'G28',
      nameKR: 'G28',
      heavy: HeavySet4141
    },
    {
      nameEN: 'Springfield',
      time: '4:25',
      nameCN: '春田',
      nameTW: '春田',
      nameKR: '스프링필드',
      nameJP: 'スプリングフィールド',
      standard: RFSet1,
      heavy: HeavySet3131
    },
    {
      nameEN: 'Tabuk',
      time: '4:25',
      nameKR: '타부크 저격소총',
      nameJP: 'タブク',
      standard: RFSet2,
      heavy: HeavySet4141
    },
    {
      nameEN: 'PTRD',
      time: '4:30',
      standard: RFSet1,
      heavy: HeavySet3131
    },
    {
      nameEN: 'PzB39',
      time: '4:30',
      nameCN: 'PzB 39',
      nameTW: 'PzB 39',
      nameKR: 'PzB 39',
      heavy: HeavySet4141
    }
  ],
  mg: [
    {
      nameEN: 'M60',
      time: '6:10',
      standard: MGSet1,
      heavy: HeavySet4613
    },
    {
      nameEN: 'Type 80',
      time: '6:15',
      nameCN: '80式',
      nameTW: '80式',
      nameKR: '80식',
      nameJP: '80式',
      standard: MGSet2,
      heavy: HeavySet6613
    },
    {
      nameEN: 'Mk48',
      time: '6:20',
      standard: MGSet2,
      heavy: HeavySet6613
    },
    {
      nameEN: 'AEK-999',
      time: '6:20',
      standard: MGSet2,
      heavy: HeavySet6613
    },
    {
      nameEN: 'M1918',
      time: '6:25',
      standard: MGSet1,
      heavy: HeavySet4613
    },
    {
      nameEN: 'Ameli',
      time: '6:25',
      nameCN: '阿梅利',
      nameTW: '阿梅利',
      nameKR: '아멜리',
      standard: MGSet2,
      heavy: HeavySet6613
    },
    {
      nameEN: 'Chauchat',
      time: '6:25',
      nameCN: '绍沙',
      nameTW: '紹沙',
      nameKR: '쇼샤',
      nameJP: 'ショーシャ',
      standard: MGSet2,
      heavy: HeavySet6613
    },
    {
      nameEN: 'PK',
      time: '6:30',
      standard: MGSet2,
      heavy: HeavySet6613
    },
    {
      nameEN: 'MG3',
      time: '6:30',
      standard: MGSet1,
      heavy: HeavySet4613
    }
  ],
  sg: [
    {
      nameEN: 'MAG-7',
      time: '7:10',
      heavy: HeavySet6164,
      availability: ~JP
    },
    {
      nameEN: 'PM5',
      time: '7:11',
      nameCN: 'V-PM5',
      nameTW: 'V-PM5',
      nameKR: 'V-PM5',
      heavy: HeavySet6164
    },
    {
      nameEN: 'M1014',
      time: '7:14',
      heavy: HeavySet6164
    },
    {
      nameEN: 'M590',
      time: '7:40',
      heavy: HeavySet4163
    },
    {
      nameEN: 'SPAS-12',
      time: '7:40',
      heavy: HeavySet4163
    },
    {
      nameEN: 'M37',
      time: '7:45',
      heavy: HeavySet6164
    },
    {
      nameEN: 'Liberator',
      time: '7:45',
      heavy: HeavySet6164
    },
    {
      nameEN: 'Supernova',
      nameCN: '新星',
      time: '7:48',
      heavy: HeavySet6164,
      availability: ~JP
    },
    {
      nameEN: 'Super-Shorty',
      time: '7:50',
      heavy: HeavySet6164
    },
    {
      nameEN: 'USAS-12',
      time: '7:55',
      heavy: HeavySet6164
    },
    {
      nameEN: '512',
      time: '7:56',
      nameCN: 'HK512',
      nameTW: 'HK512',
      nameKR: 'HK512',
      heavy: HeavySet6164
    }
  ]
}

const fiveStar: RecipeByRarity = {
  hg: [
    {
      nameEN: 'Welrod MkII',
      time: '1:00',
      nameCN: '维尔德MkⅡ',
      nameTW: '維爾德MkⅡ',
      nameKR: '웰로드 MkⅡ',
      nameJP: 'ウェルロッドMKⅡ',
      standard: HGSet2
    },
    {
      nameEN: 'Contender',
      time: '1:02',
      nameCN: '竞争者',
      nameTW: '競爭者',
      nameKR: '컨텐더',
      nameJP: 'コンテンダー',
      standard: HGSet2
    },
    {
      nameEN: 'Px4 Storm',
      time: '1:04',
      nameCN: 'Px4 风暴',
      nameTW: 'Px4 風暴',
      nameKR: 'Px4 스톰',
      nameJP: 'Px4ストーム',
      standard: HGSet1
    },
    {
      nameEN: 'M950A',
      time: '1:05',
      standard: HGSet2
    },
    {
      nameEN: 'NZ75',
      time: '1:05',
      standard: HGSet1
    },
    {
      nameEN: 'C-93',
      time: '1:09',
      standard: HGSet2
    },
    {
      nameEN: 'Grizzly',
      time: '1:10',
      nameCN: '灰熊Mk Ⅴ',
      nameTW: '灰熊MkⅤ',
      nameKR: '그리즐리 MkV',
      nameJP: 'グリズリー',
      standard: HGSet1
    },
    {
      nameEN: 'PA-15',
      time: '1:15',
      standard: HGSet1
    },
    {
      nameEN: 'HP-35',
      time: '1:35',
      standard: HGSet2
    }
  ],
  smg: [
    {
      nameEN: 'MP7',
      time: '2:18',
      heavy: HeavySet4411
    },
    {
      nameEN: '100 Shiki',
      time: '2:19',
      nameCN: '樱花',
      nameTW: '一〇〇式',
      nameKR: '100식',
      nameJP: '一〇〇式',
      standard: SMGSet2,
      heavy: HeavySet4411
    },
    {
      nameEN: 'Suomi',
      time: '2:25',
      nameCN: '索米',
      nameTW: '索米',
      nameKR: '수오미',
      nameJP: 'スオミ',
      standard: SMGSet2,
      heavy: HeavySet4411
    },
    {
      nameEN: 'C-MS',
      time: '2:28',
      standard: SMGSet2,
      heavy: HeavySet4411
    },
    {
      nameEN: 'P90',
      time: '2:29',
      standard: SMGSet2,
      heavy: HeavySet4411
    },
    {
      nameEN: 'Gr G36C',
      time: '2:30',
      nameCN: 'G36C',
      nameTW: 'G36C',
      nameKR: 'G36C',
      standard: SMGSet2,
      heavy: HeavySet4411
    },
    {
      nameEN: 'Thompson',
      time: '2:30',
      nameCN: '汤姆森',
      nameTW: '湯姆森',
      nameKR: '톰슨',
      nameJP: 'トンプソン',
      standard: SMGSet1,
      heavy: HeavySet1111
    },
    {
      nameEN: 'SR-3MP',
      time: '2:33',
      standard: SMGSet2,
      heavy: HeavySet4411
    },
    {
      nameEN: 'SR-2',
      time: '2:33',
      availability: ~JP,
      standard: SMGSet2,
      heavy: HeavySet4411
    },
    {
      nameEN: 'Type 79',
      time: '2:35',
      nameCN: '79式',
      nameTW: '79式',
      nameKR: '79식',
      nameJP: '79式',
      standard: SMGSet2,
      heavy: HeavySet4411
    },
    {
      nameEN: 'Vector',
      time: '2:35',
      standard: SMGSet2,
      heavy: HeavySet4411
    }
  ],
  ar: [
    {
      nameEN: 'FAL',
      time: '3:45',
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: 'T91',
      time: '3:48',
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: 'Type 95',
      time: '3:50',
      nameCN: '95式',
      nameTW: '95式',
      nameKR: '95식',
      nameJP: '95式',
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: 'Type 97',
      time: '3:50',
      nameCN: '97式',
      nameTW: '97式',
      nameKR: '97식',
      nameJP: '97式',
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: 'K2',
      time: '3:52',
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: 'MDR',
      time: '3:53',
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: '416',
      time: '3:55',
      nameCN: 'HK416',
      nameTW: 'HK416',
      nameKR: 'HK416',
      standard: ARSet1,
      heavy: HeavySet1111
    },
    {
      nameEN: 'ADS',
      time: '3:55',
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: 'AK-Alfa',
      time: '3:56',
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: 'SIG-556',
      time: '3:56',
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: 'SIG MCX',
      time: '3:56',
      availability: ~JP,
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: 'Am RFB',
      time: '3:58',
      nameCN: 'RFB',
      nameTW: 'RFB',
      nameKR: 'RFB',
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: 'Gr G11',
      time: '4:04',
      nameCN: 'G11',
      nameTW: 'G11',
      nameKR: 'G11',
      standard: ARSet1,
      heavy: HeavySet1111
    },
    {
      nameEN: 'Gr G41',
      time: '4:05',
      nameCN: 'G41',
      nameTW: 'G41',
      nameKR: 'G41',
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: 'Zas M21',
      time: '4:05',
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: '64 Shiki',
      time: '4:06',
      nameCN: '64式自',
      nameTW: '64式自',
      nameKR: '64식 소총',
      nameJP: '64式自',
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: 'Howa Type 89',
      time: '4:08',
      nameCN: '89式自',
      nameTW: '89式自',
      nameKR: '89식 소총',
      nameJP: '89式',
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: 'Steyr ACR',
      time: '4:08',
      nameCN: 'S-ACR',
      nameTW: 'S-ACR',
      nameKR: 'S-ACR',
      nameJP: 'S-ACR',
      standard: ARSet2,
      heavy: HeavySet1441,
    },
    {
      nameEN: 'AN-94',
      time: '4:09',
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: 'K11',
      time: '4:11',
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: 'AK-12',
      time: '4:12',
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: 'AK-15',
      time: '4:15',
      availability: ~JP,
      standard: ARSet2,
      heavy: HeavySet1441
    }
  ],
  rf: [
    {
      nameEN: 'M200',
      time: '4:32',
      standard: RFSet2,
      heavy: HeavySet4141
    },
    {
      nameEN: 'Carcano M1891',
      time: '4:38',
      nameCN: '卡尔卡诺M1891',
      nameTW: '卡爾卡諾M1891',
      nameKR: '카르카노 M1891',
      nameJP: 'カルカノM1891',
      standard: RFSet2,
      heavy: HeavySet4141
    },
    {
      nameEN: 'Kar98k',
      time: '4:40',
      standard: RFSet2,
      heavy: HeavySet4141
    },
    {
      nameEN: 'Carcano M91/38',
      time: '4:42',
      nameCN: '卡尔卡诺M91/38',
      nameTW: '卡爾卡諾M91/38',
      nameKR: '카르카노 M91/38',
      nameJP: 'カルカノM91/38',
      standard: RFSet2,
      heavy: HeavySet4141
    },
    {
      nameEN: 'VSK-94',
      time: '4:43',
      standard: RFSet2,
      heavy: HeavySet4141
    },
    {
      nameEN: 'NTW-20',
      time: '4:45',
      standard: RFSet1,
      heavy: HeavySet3131
    },
    {
      nameEN: 'SVCh',
      time: '4:47',
      availability: ~JP,
      standard: RFSet2,
      heavy: HeavySet4141
    },
    {
      nameEN: 'QBU-88',
      time: '4:48',
      standard: RFSet2,
      heavy: HeavySet4141
    },
    {
      nameEN: 'HS.50',
      time: '4:49',
      standard: RFSet2,
      heavy: HeavySet4141,
      availability: ~JP
    },
    {
      nameEN: 'WA2000',
      time: '4:50',
      standard: RFSet1,
      heavy: HeavySet3131
    },
    {
      nameEN: 'IWS 2000',
      time: '4:52',
      standard: RFSet2,
      heavy: HeavySet4141
    },
    {
      nameEN: 'M99',
      time: '4:55',
      standard: RFSet2,
      heavy: HeavySet4141
    },
    {
      nameEN: 'Lee Enfield',
      time: '5:00',
      nameCN: '李-恩菲尔德',
      nameTW: '李-恩菲爾德',
      nameKR: '리엔필드',
      nameJP: 'リー・エンフィールド',
      standard: RFSet2,
      heavy: HeavySet4141
    },
    {
      nameEN: 'De Lisle',
      time: '5:00',
      availability: ~JP,
      nameCN: '德利尔',
      nameTW: '德利爾',
      nameKR: '드 라일',
      standard: RFSet2,
      heavy: HeavySet4141
    }
  ],
  mg: [
    {
      nameEN: 'RPK-16',
      time: '6:16',
      availability: ~JP,
      standard: MGSet2,
      heavy: HeavySet6613
    },
    {
      nameEN: 'RPK-203',
      time: '6:16',
      availability: ~JP,
      standard: MGSet2,
      heavy: HeavySet6613,
    },
    {
      nameEN: 'ZB-26',
      time: '6:26',
      standard: MGSet2,
      heavy: HeavySet6613
    },
    {
      nameEN: 'QJY-88',
      time: '6:28',
      nameCN: '88式',
      nameTW: '88式',
      nameKR: '88식',
      nameJP: '88式',
      standard: MGSet2,
      heavy: HeavySet6613
    },
    {
      nameEN: 'Negev',
      time: '6:35',
      nameCN: '内格夫',
      nameTW: '內蓋夫',
      nameKR: '네게브',
      nameJP: 'ネゲヴ',
      standard: MGSet2,
      heavy: HeavySet6613
    },
    {
      nameEN: 'Gr MG36',
      time: '6:36',
      nameCN: 'MG36',
      nameTW: 'MG36',
      nameKR: 'MG36',
      standard: MGSet2,
      heavy: HeavySet6613
    },
    {
      nameEN: 'Gr MG4',
      time: '6:40',
      nameCN: 'MG4',
      nameTW: 'MG4',
      nameKR: 'MG4',
      standard: MGSet2,
      heavy: HeavySet6613
    },
    {
      nameEN: 'Gr MG5',
      time: '6:45',
      nameCN: 'MG5',
      nameTW: 'MG5',
      nameKR: 'MG5',
      standard: MGSet1,
      heavy: HeavySet4613
    },
    {
      nameEN: 'PKP',
      time: '6:50',
      standard: MGSet2,
      heavy: HeavySet6613
    }
  ],
  sg: [
    {
      nameEN: 'Am KSG',
      time: '8:00',
      nameCN: 'KSG',
      nameTW: 'KSG',
      nameKR: 'KSG',
      heavy: HeavySet4163
    },
    {
      nameEN: 'Saiga-12',
      time: '8:05',
      heavy: HeavySet6164
    },
    {
      nameEN: 'FP-6',
      time: '8:06',
      heavy: HeavySet6164
    },
    {
      nameEN: 'M6 ASW',
      time: '8:08',
      heavy: HeavySet6164
    },
    {
      nameEN: 'S.A.T.8',
      time: '8:10',
      heavy: HeavySet6164
    },
    {
      nameEN: 'AA-12',
      time: '8:12',
      heavy: HeavySet6164
    },
    {
      nameEN: 'DP-12',
      time: '8:13',
      heavy: HeavySet6164
    },
    {
      nameEN: 'CAWS',
      time: '8:15',
      heavy: HeavySet6164
    },
    {
      nameEN: 'LTLX7000',
      time: '8:17',
      heavy: HeavySet6164
    },
    {
      nameEN: 'M26-MASS',
      time: '8:18',
      heavy: HeavySet6164,
      availability: ~JP
    },
    {
      nameEN: 'FO-12',
      time: '8:20',
      heavy: HeavySet6164,
      availability: ~JP
    }
  ]
}

export const Dolls = { twoStar, threeStar, fourStar, fiveStar }
