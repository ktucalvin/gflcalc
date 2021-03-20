'use strict'

// use the OR (|) operator to join servers
// use the AND (&) operator to check for availability
// `availability === undefined` implies all servers
const EN = 0b00001
const KR = 0b00010
const CN = 0b00100
const TW = 0b01000
const JP = 0b10000

// Sets: Manpower, Ammo, Rations, Parts, Sum
const HGSet1 = [30, 30, 30, 30, sum => sum <= 920]
const HGSet2 = [130, 130, 130, 30, sum => sum <= 920]
const SMGSet1 = [30, 30, 30, 30]
const SMGSet2 = [400, 400, 30, 30]
const ARSet1 = [30, 30, 30, 30, sum => sum >= 800]
const ARSet2 = [30, 400, 400, 30]
const RFSet1 = [300, 30, 300, 30]
const RFSet2 = [400, 30, 400, 30]
const MGSet1 = [400, 600, 30, 300]
const MGSet2 = [600, 600, 100, 400]
const HeavySet1111 = [1000, 1000, 1000, 1000]
const HeavySet4411 = [4000, 4000, 1000, 1000]
const HeavySet1441 = [1000, 4000, 4000, 1000]
const HeavySet3131 = [3000, 1000, 3000, 1000]
const HeavySet4141 = [4000, 1000, 4000, 1000]
const HeavySet4613 = [4000, 6000, 1000, 3000]
const HeavySet6613 = [6000, 6000, 1000, 3000]
const HeavySet4163 = [4000, 1000, 6000, 3000]
const HeavySet6164 = [6000, 1000, 6000, 4000]

// unsure[0] = standard ; unsure[1] = heavy
// names will default to nameEN

const twoStar = {
  hg: [
    {
      nameEN: 'M1911',
      time: '20:00',
      standard: HGSet1
    },
    {
      nameEN: 'M1895',
      nameCN: '纳甘左轮',
      nameKR: '나강 리볼버',
      nameTW: '納甘左輪',
      time: '20:00',
      standard: HGSet1
    },
    {
      nameEN: 'P38',
      time: '20:00',
      standard: HGSet1
    },
    {
      nameEN: 'PPK',
      time: '22:00',
      standard: HGSet1
    },
    {
      nameEN: 'FF FNP9',
      nameCN: 'FNP-9',
      nameKR: 'FNP-9',
      nameTW: 'FNP-9',
      time: '25:00',
      standard: HGSet1
    },
    {
      nameEN: 'MP-446',
      time: '25:00',
      standard: HGSet1
    },
    {
      nameEN: 'Gr USP Compact',
      nameCN: 'USP Compact',
      nameKR: 'USP Compact',
      nameTW: 'USP Compact',
      nameJP: 'Gr USPコンパクト',
      time: '28:00',
      standard: HGSet1
    },
    {
      nameEN: 'Bren Ten',
      nameJP: 'ブレン・テン',
      time: '28:00',
      standard: HGSet1
    }
  ],
  smg: [
    {
      nameEN: 'IDW',
      time: '1:10:00',
      standard: SMGSet1
    },
    {
      nameEN: 'PP-2000',
      time: '1:10:00',
      standard: SMGSet1
    },
    {
      nameEN: 'm45',
      time: '1:20:00',
      standard: SMGSet1
    },
    {
      nameEN: 'Spectre M4',
      nameJP: 'スペクトラM4',
      time: '1:20:00',
      standard: SMGSet1
    },
    {
      nameEN: 'Type 64',
      nameCN: '64式',
      nameKR: '64식',
      nameTW: '64式',
      nameJP: '64式',
      time: '1:25:00',
      standard: SMGSet1
    },
    {
      nameEN: 'M38',
      nameCN: '伯莱塔38型',
      nameKR: '베레타 38형',
      nameTW: '伯萊塔38型',
      time: '1:30:00',
      standard: SMGSet1
    },
    {
      nameEN: 'M3',
      time: '1:30:00',
      standard: SMGSet1
    },
    {
      nameEN: 'MP40',
      time: '1:30:00',
      standard: SMGSet1
    },
    {
      nameEN: 'PPSh-41',
      time: '1:50:00',
      standard: SMGSet1
    }
  ],
  ar: [
    {
      nameEN: 'Galil',
      nameCN: '加利尔',
      nameKR: '갈릴',
      nameTW: '加利爾',
      nameJP: 'ガリル',
      time: '2:40:00',
      standard: ARSet1
    },
    {
      nameEN: 'SIG-510',
      time: '2:40:00',
      standard: ARSet1
    },
    {
      nameEN: 'FF F2000',
      nameCN: 'F2000',
      nameKR: 'F2000',
      nameTW: 'F2000',
      time: '2:45:00',
      standard: ARSet1
    },
    {
      nameEN: 'Type 63',
      nameCN: '63式',
      nameKR: '63식',
      nameTW: '63式',
      nameJP: '63式',
      time: '2:45:00',
      standard: ARSet1
    },
    {
      nameEN: 'Gr G3',
      nameCN: 'G3',
      nameKR: 'G3',
      nameTW: 'G3',
      time: '2:50:00',
      standard: ARSet1
    },
    {
      nameEN: 'L85A1',
      time: '2:50:00',
      standard: ARSet1
    }
  ],
  rf: [
    {
      nameEN: 'G43',
      time: '3:10:00',
      standard: RFSet1
    },
    {
      nameEN: 'FF FN49',
      nameCN: 'FN-49',
      nameKR: 'FN-49',
      nameTW: 'FN-49',
      time: '3:10:00',
      standard: RFSet1
    },
    {
      nameEN: 'VM59',
      nameCN: 'BM59',
      nameKR: 'BM59',
      nameTW: 'BM59',
      nameJP: 'It BM59',
      time: '3:20:00',
      standard: RFSet1
    },
    {
      nameEN: 'SVT-38',
      time: '3:30:00',
      standard: RFSet1
    },
    {
      nameEN: 'SKS',
      nameCN: '西蒙诺夫',
      nameKR: '시모노프',
      nameTW: '西蒙諾夫',
      time: '3:30:00',
      standard: RFSet1
    }
  ],
  mg: [
    {
      nameEN: 'AAT-52',
      time: '4:50:00',
      standard: MGSet1
    },
    {
      nameEN: 'FG42',
      time: '4:50:00',
      standard: MGSet1
    },
    {
      nameEN: 'MG34',
      time: '5:00:00',
      standard: MGSet1
    },
    {
      nameEN: 'DP28',
      time: '5:00:00',
      standard: MGSet1
    },
    {
      nameEN: 'LWMMG',
      time: '5:10:00',
      standard: MGSet1
    }
  ]
}

const threeStar = {
  hg: [
    {
      nameEN: 'C96',
      time: '30:00',
      standard: HGSet1
    },
    {
      nameEN: 'P08',
      time: '30:00',
      standard: HGSet1
    },
    {
      nameEN: 'P99',
      time: '35:00',
      availability: EN | CN | TW | KR,
      standard: HGSet1
    },
    {
      nameEN: 'Type 92',
      nameCN: '92式',
      nameKR: '92식',
      nameTW: '92式',
      nameJP: '92式',
      time: '35:00',
      standard: HGSet1
    },
    {
      nameEN: 'Astra',
      nameCN: '阿斯特拉左轮',
      nameKR: '아스트라 리볼버',
      nameTW: '阿斯特拉左輪',
      nameJP: 'アストラ',
      time: '40:00',
      standard: HGSet1
    },
    {
      nameEN: 'M9',
      time: '40:00',
      standard: HGSet1
    },
    {
      nameEN: 'Makarov',
      nameCN: '马卡洛夫',
      nameKR: '마카로프',
      nameTW: '馬卡洛夫',
      nameJP: 'マカロフ',
      time: '40:00',
      standard: HGSet1
    },
    {
      nameEN: 'Tokarev',
      nameCN: '托卡列夫',
      nameKR: '토카레프',
      nameTW: '托卡列夫',
      nameJP: 'トカレフ',
      time: '45:00',
      standard: HGSet1
    }
  ],
  smg: [
    {
      nameEN: 'Sten MkII',
      nameCN: '司登MkⅡ',
      nameKR: '스텐MkII',
      nameTW: '斯登MkⅡ',
      nameJP: 'ステンMK-Ⅱ',
      time: '1:40:00',
      standard: SMGSet2,
      heavy: HeavySet4411
    },
    {
      nameEN: 'Micro Uzi',
      nameCN: '微型乌兹',
      nameKR: '마이크로 우지',
      nameTW: '微型烏茲',
      time: '1:40:00',
      standard: SMGSet1,
      heavy: HeavySet1111
    },
    {
      nameEN: 'F1',
      time: '1:50:00',
      availability: CN | TW | KR,
      heavy: HeavySet1111
    },
    {
      nameEN: 'Ingram',
      nameCN: 'MAC-10',
      nameKR: 'MAC-10',
      nameTW: 'MAC-10',
      nameJP: 'イングラム',
      time: '2:00:00',
      standard: SMGSet1,
      heavy: HeavySet1111
    },
    {
      nameEN: 'Skorpion',
      nameCN: '蝎式',
      nameKR: '스콜피온',
      nameTW: '蠍式',
      nameJP: 'スコーピオン',
      time: '2:00:00',
      standard: SMGSet1,
      heavy: HeavySet1111
    },
    {
      nameEN: 'Z-62',
      time: '2:05:00',
      availability: EN | CN | TW | KR,
      heavy: HeavySet1111
    },
    {
      nameEN: 'PPS-43',
      time: '2:10:00',
      standard: SMGSet1,
      heavy: HeavySet1111
    }
  ],
  ar: [
    {
      nameEN: 'StG44',
      time: '3:00:00',
      standard: ARSet1,
      heavy: HeavySet1111
    },
    {
      nameEN: 'OTs-12',
      time: '3:10:00',
      standard: ARSet1,
      heavy: HeavySet1111
    },
    {
      nameEN: 'ARX-160',
      time: '3:15:00',
      availability: EN | CN | TW | KR,
      heavy: HeavySet1111
    },
    {
      nameEN: 'AK-47',
      time: '3:20:00',
      standard: ARSet1,
      heavy: HeavySet1111
    },
    {
      nameEN: 'FNC',
      nameJP: 'FF FNC',
      time: '3:20:00',
      standard: ARSet1,
      heavy: HeavySet1111
    }
  ],
  rf: [
    {
      nameEN: 'M14',
      time: '3:40:00',
      standard: RFSet1,
      heavy: HeavySet3131
    },
    {
      nameEN: 'SV-98',
      time: '3:40:00',
      standard: RFSet1,
      heavy: HeavySet3131
    },
    {
      nameEN: 'Type88',
      nameCN: '汉阳造88式',
      nameKR: '한양조 88식',
      nameTW: '漢陽造88式',
      nameJP: '漢陽88式',
      time: '3:50:00',
      standard: RFSet2,
      heavy: HeavySet4141
    },
    {
      nameEN: 'OTs-44',
      time: '3:50:00',
      availability: CN | TW | KR,
      heavy: HeavySet4141
    },
    {
      nameEN: 'M1 Garand',
      nameCN: 'M1加兰德',
      nameKR: 'M1 개런드',
      nameTW: 'M1加蘭德',
      nameJP: 'M1ガーランド',
      time: '4:00:00',
      standard: RFSet1,
      heavy: HeavySet3131
    }
  ],
  mg: [
    {
      nameEN: 'Bren',
      nameCN: '布伦',
      nameKR: '브렌',
      nameTW: '布倫',
      nameJP: 'ブレン',
      time: '5:20:00',
      standard: MGSet1,
      heavy: HeavySet4613
    },
    {
      nameEN: 'M1919A4',
      time: '5:40:00',
      standard: MGSet1,
      heavy: HeavySet4613
    },
    {
      nameEN: 'MG42',
      time: '5:50:00',
      standard: MGSet1,
      heavy: HeavySet4613
    },
    {
      nameEN: 'M2HB',
      time: '6:10:00',
      standard: MGSet1,
      heavy: HeavySet4613
    }
  ],
  sg: [
    {
      nameEN: 'NS2000',
      time: '7:15:00',
      heavy: HeavySet6164
    },
    {
      nameEN: 'M500',
      time: '7:20:00',
      heavy: HeavySet4163
    },
    {
      nameEN: 'KS-23',
      time: '7:25:00',
      heavy: HeavySet4163
    },
    {
      nameEN: 'RMB-93',
      time: '7:30:00',
      heavy: HeavySet6164
    },
    {
      nameEN: 'M1897',
      time: '7:30:00',
      heavy: HeavySet6164
    }
  ]
}

const fourStar = {
  hg: [
    {
      nameEN: 'Jericho',
      nameCN: '杰里科',
      nameKR: '제리코',
      nameTW: '杰里科',
      nameJP: 'ジェリコ',
      time: '49:00',
      standard: HGSet2
    },
    {
      nameEN: 'SAA',
      nameCN: '柯尔特左轮',
      nameKR: '콜트 리볼버',
      nameTW: '柯爾特左輪',
      nameJP: 'コルトSAA',
      time: '50:00',
      standard: HGSet1
    },
    {
      nameEN: 'Gr Mk23',
      nameCN: 'Mk23',
      nameKR: 'Mk23',
      nameTW: 'Mk23',
      time: '50:00',
      standard: HGSet1
    },
    {
      nameEN: 'Gr P30',
      nameCN: 'P30',
      nameKR: 'P30',
      time: '50:00',
      availability: EN | CN | KR | TW,
      standard: HGSet2
    },
    {
      nameEN: 'Spitfire',
      time: '52:00',
      standard: HGSet2
    },
    {
      nameEN: 'K5',
      time: '53:00',
      standard: HGSet2
    },
    {
      nameEN: 'Stechkin',
      nameCN: '斯捷奇金',
      nameKR: '스테츠킨',
      nameTW: '斯捷奇金',
      nameJP: 'スチェッキン',
      time: '55:00',
      standard: HGSet2
    },
    {
      nameEN: 'P7',
      time: '55:00',
      standard: HGSet1
    }
  ],
  smg: [
    {
      nameEN: 'UMP9',
      time: '2:15:00',
      standard: SMGSet2,
      heavy: HeavySet4411
    },
    {
      nameEN: 'UMP45',
      time: '2:15:00',
      standard: SMGSet2,
      heavy: HeavySet4411
    },
    {
      nameEN: 'Shipka',
      nameCN: '希普卡',
      nameKR: '시프카',
      nameTW: '希普卡',
      nameJP: 'シプカ',
      time: '2:18:00',
      standard: SMGSet2,
      heavy: HeavySet4411
    },
    {
      nameEN: 'PP-19-01',
      time: '2:18:00',
      standard: SMGSet2,
      heavy: HeavySet4411
    },
    {
      nameEN: 'Gr MP5',
      nameCN: 'MP5',
      nameKR: 'MP5',
      nameTW: 'MP5',
      time: '2:20:00',
      standard: SMGSet1,
      heavy: HeavySet1111
    },
    {
      nameEN: 'PP-90',
      time: '2:20:00',
      standard: SMGSet2,
      heavy: HeavySet4411
    },
    {
      nameEN: 'KAC-PDW',
      time: '2:20:00',
      availability: EN | CN | TW | KR,
      standard: SMGSet2
    }
  ],
  ar: [
    {
      nameEN: 'Type56-1',
      nameCN: '56-1式',
      nameKR: '56-1식',
      nameTW: '56-1式',
      nameJP: '56-1式',
      time: '3:25:00',
      standard: ARSet1,
      heavy: HeavySet1111
    },
    {
      nameEN: 'XM8',
      time: '3:25:00',
      standard: ARSet1,
      heavy: HeavySet1111
    },
    {
      nameEN: 'SAR-21',
      time: '3:25:00',
      availability: EN | CN | TW | KR,
      standard: ARSet1,
      heavy: HeavySet1111
    },
    {
      nameEN: 'AS Val',
      time: '3:30:00',
      standard: ARSet1,
      heavy: HeavySet1111
    },
    {
      nameEN: 'FAMAS',
      time: '3:30:00',
      standard: ARSet1,
      heavy: HeavySet1111
    },
    {
      nameEN: 'TAR-21',
      time: '3:30:00',
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: '9A-91',
      time: '3:35:00',
      standard: ARSet1,
      heavy: HeavySet1111
    },
    {
      nameEN: 'EM-2',
      time: '3:35:00',
      availability: ~JP,
      standard: ARSet1,
      heavy: HeavySet1111
    },
    {
      nameEN: 'CR-21',
      time: '3:35:00',
      availability: EN | CN | TW | KR,
      standard: ARSet2
    },
    {
      nameEN: 'G36',
      time: '3:40:00',
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: 'Ribeyrolles',
      nameCN: '利贝罗勒',
      nameKR: '리베롤',
      nameTW: '利貝羅勒',
      nameJP: 'リベロール',
      time: '3:40:00',
      standard: ARSet2,
      heavy: HeavySet1441
    }
  ],
  rf: [
    {
      nameEN: '4 Shiki',
      nameCN: '四式',
      nameKR: '4식',
      nameTW: '四式',
      nameJP: '四式',
      time: '4:04:00',
      availability: EN | CN | KR | TW,
      standard: RFSet2,
      heavy: HeavySet4141
    },
    {
      nameEN: 'Mosin-Nagant',
      nameCN: '莫辛-纳甘',
      nameKR: '모신나강',
      nameTW: '莫辛-納甘',
      nameJP: 'モシン・ナガン',
      time: '4:10:00',
      standard: RFSet1,
      heavy: HeavySet3131
    },
    {
      nameEN: 'T-5000',
      time: '4:10:00',
      standard: RFSet2,
      heavy: HeavySet4141
    },
    {
      nameEN: 'SVD',
      time: '4:15:00',
      standard: RFSet2,
      heavy: HeavySet4141
    },
    {
      nameEN: 'SPR A3G',
      time: '4:15:00',
      standard: RFSet2,
      heavy: HeavySet4141,
      unsure: [0, 1]
    },
    {
      nameEN: 'K31',
      time: '4:15:00',
      standard: RFSet2,
      heavy: HeavySet4141,
      unsure: [0, 1]
    },
    {
      nameEN: 'Gr PSG-1',
      nameCN: 'PSG-1',
      nameKR: 'PSG-1',
      nameTW: 'PSG-1',
      time: '4:10:00',
      availability: EN | CN | TW | KR,
      heavy: HeavySet4141
    },
    {
      nameEN: 'Gr G28',
      nameCN: 'G28',
      nameKR: 'G28',
      nameTW: 'G28',
      time: '4:20:00',
      availability: CN | TW | KR,
      heavy: HeavySet4141
    },
    {
      nameEN: 'Springfield',
      nameCN: '春田',
      nameKR: '스프링필드',
      nameTW: '春田',
      nameJP: 'スプリングフィールド',
      time: '4:25:00',
      standard: RFSet1,
      heavy: HeavySet3131
    },
    {
      nameEN: 'Tabuk',
      nameKR: '타부크 저격소총',
      time: '4:25:00',
      availability: ~JP,
      standard: RFSet2,
      heavy: HeavySet4141
    },
    {
      nameEN: 'PTRD',
      time: '4:30:00',
      standard: RFSet1,
      heavy: HeavySet3131
    },
    {
      nameEN: 'PzB39',
      time: '4:30:00',
      availability: CN | TW | KR,
      heavy: HeavySet4141
    }
  ],
  mg: [
    {
      nameEN: 'M60',
      time: '6:10:00',
      standard: MGSet1,
      heavy: HeavySet4613
    },
    {
      nameEN: 'Type 80',
      nameCN: '80式',
      nameKR: '80식',
      nameTW: '80式',
      nameJP: '80式',
      time: '6:15:00',
      standard: MGSet2,
      heavy: HeavySet6613,
      unsure: [0, 1]
    },
    {
      nameEN: 'Mk48',
      time: '6:20:00',
      standard: MGSet2,
      heavy: HeavySet6613
    },
    {
      nameEN: 'AEK-999',
      time: '6:20:00',
      standard: MGSet2,
      heavy: HeavySet6613
    },
    {
      nameEN: 'M1918',
      time: '6:25:00',
      standard: MGSet1,
      heavy: HeavySet4613
    },
    {
      nameEN: 'Ameli',
      nameCN: '阿梅利',
      nameKR: '아멜리',
      nameTW: '阿梅利',
      time: '6:25:00',
      standard: MGSet2,
      heavy: HeavySet6613
    },
    {
      nameEN: 'Chauchat',
      nameCN: '绍沙',
      nameKR: '쇼샤',
      nameTW: '紹沙',
      nameJP: 'ショーシャ',
      time: '6:25:00',
      standard: MGSet2,
      heavy: HeavySet6613
    },
    {
      nameEN: 'PK',
      time: '6:30:00',
      standard: MGSet2,
      heavy: HeavySet6613
    },
    {
      nameEN: 'MG3',
      time: '6:30:00',
      standard: MGSet1,
      heavy: HeavySet4613
    }
  ],
  sg: [
    {
      nameEN: 'M1014',
      time: '7:14:00',
      heavy: HeavySet6164
    },
    {
      nameEN: 'M590',
      time: '7:40:00',
      heavy: HeavySet4163
    },
    {
      nameEN: 'SPAS-12',
      time: '7:40:00',
      availability: EN | CN | TW | KR,
      heavy: HeavySet4163
    },
    {
      nameEN: 'M37',
      time: '7:45:00',
      heavy: HeavySet6164
    },
    {
      nameEN: 'Liberator',
      time: '7:45:00',
      heavy: HeavySet6164,
      unsure: [0, 1]
    },
    {
      nameEN: 'Super-Shorty',
      time: '7:50:00',
      availability: EN | CN | TW | KR,
      heavy: HeavySet6164
    },
    {
      nameEN: 'USAS-12',
      time: '7:55:00',
      heavy: HeavySet6164
    }
  ]
}

const fiveStar = {
  hg: [
    {
      nameEN: 'Welrod MkII',
      nameCN: '维尔德MkⅡ',
      nameKR: '웰로드 MkⅡ',
      nameTW: '維爾德MkⅡ',
      nameJP: 'ウェルロッドMKⅡ',
      time: '1:00:00',
      standard: HGSet2
    },
    {
      nameEN: 'Contender',
      nameCN: '竞争者',
      nameKR: '컨텐더',
      nameTW: '競爭者',
      nameJP: 'コンテンダー',
      time: '1:02:00',
      standard: HGSet2
    },
    {
      nameEN: 'Px4 Storm',
      nameCN: 'Px4 风暴',
      nameKR: 'Px4 스톰',
      nameTW: 'Px4 風暴',
      nameJP: 'Px4ストーム',
      time: '1:04:00',
      standard: HGSet1
    },
    {
      nameEN: 'M950A',
      time: '1:05:00',
      standard: HGSet2
    },
    {
      nameEN: 'NZ75',
      time: '1:05:00',
      standard: HGSet1
    },
    {
      nameEN: 'C-93',
      time: '1:09:00',
      availability: EN | CN | TW | KR,
      standard: HGSet1
    },
    {
      nameEN: 'Grizzly',
      nameCN: '灰熊Mk Ⅴ',
      nameKR: '그리즐리 MkV',
      nameTW: '灰熊MkⅤ',
      nameJP: 'グリズリー',
      time: '1:10:00',
      standard: HGSet1
    },
    {
      nameEN: 'PA-15',
      time: '1:15:00',
      standard: HGSet1
    }
  ],
  smg: [
    {
      nameEN: 'MP7',
      time: '2:18:00',
      availability: EN | CN | TW | KR,
      heavy: HeavySet4411,
      unsure: [0, 1]
    },
    {
      nameEN: '100 Shiki',
      nameCN: '樱花',
      nameKR: '100식',
      nameTW: '一〇〇式',
      nameJP: '一〇〇式',
      time: '2:19:00',
      standard: SMGSet2,
      heavy: HeavySet4411,
      unsure: [0, 1]
    },
    {
      nameEN: 'Suomi',
      nameCN: '索米',
      nameKR: '수오미',
      nameTW: '索米',
      nameJP: 'スオミ',
      time: '2:25:00',
      standard: SMGSet2,
      heavy: HeavySet4411
    },
    {
      nameEN: 'C-MS',
      time: '2:28:00',
      standard: SMGSet2,
      heavy: HeavySet4411,
      unsure: [0, 1]
    },
    {
      nameEN: 'P90',
      time: '2:29:00',
      standard: SMGSet2,
      heavy: HeavySet4411,
      unsure: [0, 1]
    },
    {
      nameEN: 'Gr G36C',
      nameCN: 'G36C',
      nameKR: 'G36C',
      nameTW: 'G36C',
      time: '2:30:00',
      standard: SMGSet2,
      heavy: HeavySet4411
    },
    {
      nameEN: 'Thompson',
      nameCN: '汤姆森',
      nameKR: '톰슨',
      nameTW: '湯姆森',
      nameJP: 'トンプソン',
      time: '2:30:00',
      standard: SMGSet1,
      heavy: HeavySet1111
    },
    {
      nameEN: 'SR-3MP',
      time: '2:33:00',
      standard: SMGSet2,
      heavy: HeavySet4411
    },
    {
      nameEN: 'Type 79',
      nameCN: '79式',
      nameKR: '79식',
      nameTW: '79式',
      nameJP: '79式',
      time: '2:35:00',
      standard: SMGSet2,
      heavy: HeavySet4411
    },
    {
      nameEN: 'Vector',
      time: '2:35:00',
      standard: SMGSet2,
      heavy: HeavySet4411
    }
  ],
  ar: [
    {
      nameEN: 'FAL',
      time: '3:45:00',
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: 'T91',
      time: '3:48:00',
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: 'Type 95',
      nameCN: '95式',
      nameKR: '95식',
      nameTW: '95式',
      nameJP: '95式',
      time: '3:50:00',
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: 'Type 97',
      nameCN: '97式',
      nameKR: '97식',
      nameTW: '97式',
      nameJP: '97式',
      time: '3:50:00',
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: 'K2',
      time: '3:52:00',
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: 'MDR',
      time: '3:53:00',
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: '416',
      nameCN: 'HK416',
      nameKR: 'HK416',
      nameTW: 'HK416',
      time: '3:55:00',
      standard: ARSet1,
      heavy: HeavySet1111
    },
    {
      nameEN: 'ADS',
      time: '3:55:00',
      availability: EN | CN | KR | TW,
      standard: ARSet2,
      heavy: HeavySet1441,
      unsure: [0, 1]
    },
    {
      nameEN: 'AK-Alfa',
      time: '3:56:00',
      standard: ARSet2,
      availability: ~JP,
      heavy: HeavySet1441,
      unsure: [0, 1]
    },
    {
      nameEN: 'SIG-556',
      time: '3:56:00',
      availability: EN | CN | KR | TW,
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: 'Am RFB',
      nameCN: 'RFB',
      nameKR: 'RFB',
      nameTW: 'RFB',
      time: '3:58:00',
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: 'Gr G11',
      nameCN: 'G11',
      nameKR: 'G11',
      nameTW: 'G11',
      time: '4:04:00',
      standard: ARSet1,
      heavy: HeavySet1111
    },
    {
      nameEN: 'Gr G41',
      nameCN: 'G41',
      nameKR: 'G41',
      nameTW: 'G41',
      time: '4:05:00',
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: 'Zas M21',
      time: '4:05:00',
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: '64 Shiki',
      nameCN: '64式自',
      nameKR: '64식 소총',
      nameTW: '64式自',
      nameJP: '64式自',
      time: '4:06:00',
      standard: ARSet2,
      heavy: HeavySet1441,
      unsure: [0, 1]
    },
    {
      nameEN: 'AN-94',
      time: '4:09:00',
      standard: ARSet2,
      heavy: HeavySet1441
    },
    {
      nameEN: 'K11',
      time: '4:11:00',
      availability: EN | CN | TW | KR,
      standard: ARSet2,
      heavy: HeavySet1441,
      unsure: [0, 1]
    },
    {
      nameEN: 'AK-12',
      time: '4:12:00',
      standard: ARSet2,
      heavy: HeavySet1441
    }
  ],
  rf: [
    {
      nameEN: 'M200',
      time: '4:32:00',
      standard: RFSet2,
      heavy: HeavySet4141,
      unsure: [0, 1]
    },
    {
      nameEN: 'Carcano M1891',
      nameCN: '卡尔卡诺M1891',
      nameKR: '카르카노 M1891',
      nameTW: '卡爾卡諾M1891',
      nameJP: 'カルカノM1891',
      time: '4:38:00',
      standard: RFSet2,
      heavy: HeavySet4141
    },
    {
      nameEN: 'Kar98k',
      time: '4:40:00',
      standard: RFSet2,
      heavy: HeavySet4141
    },
    {
      nameEN: 'Carcano M91/38',
      nameCN: '卡尔卡诺M91/38',
      nameKR: '카르카노 M91/38',
      nameTW: '卡爾卡諾M91/38',
      nameJP: 'カルカノM91/38',
      time: '4:42:00',
      standard: RFSet2,
      heavy: HeavySet4141
    },
    {
      nameEN: 'NTW-20',
      time: '4:45:00',
      standard: RFSet1,
      heavy: HeavySet3131
    },
    {
      nameEN: 'QBU-88',
      time: '4:48:00',
      availability: EN | CN | KR | TW,
      standard: RFSet2,
      heavy: HeavySet4141
    },
    {
      nameEN: 'WA2000',
      time: '4:50:00',
      standard: RFSet1,
      heavy: HeavySet3131
    },
    {
      nameEN: 'IWS 2000',
      time: '4:52:00',
      standard: RFSet2,
      heavy: HeavySet4141
    },
    {
      nameEN: 'M99',
      time: '4:55:00',
      standard: RFSet2,
      heavy: HeavySet4141
    },
    {
      nameEN: 'Lee Enfield',
      nameCN: '李-恩菲尔德',
      nameKR: '리엔필드',
      nameTW: '李-恩菲爾德',
      nameJP: 'リー・エンフィールド',
      time: '5:00:00',
      standard: RFSet2,
      heavy: HeavySet4141
    }
  ],
  mg: [
    {
      nameEN: 'ZB-26',
      time: '6:26:00',
      availability: ~JP,
      standard: MGSet2,
      heavy: HeavySet6613,
      unsure: [0, 1]
    },
    {
      nameEN: 'QJY-88',
      nameCN: '88式',
      nameKR: '88식',
      nameTW: '88式',
      nameJP: '88式',
      time: '6:28:00',
      standard: MGSet2,
      heavy: HeavySet6613
    },
    {
      nameEN: 'Negev',
      nameCN: '内格夫',
      nameKR: '네게브',
      nameTW: '內蓋夫',
      nameJP: 'ネゲヴ',
      time: '6:35:00',
      standard: MGSet2,
      heavy: HeavySet6613
    },
    {
      nameEN: 'Gr MG36',
      nameCN: 'MG36',
      nameKR: 'MG36',
      nameTW: 'MG36',
      time: '6:36:00',
      availability: EN | CN | KR | TW,
      standard: MGSet2,
      heavy: HeavySet6613,
      unsure: [1, 1]
    },
    {
      nameEN: 'MG4',
      time: '6:40:00',
      standard: MGSet2,
      heavy: HeavySet6613
    },
    {
      nameEN: 'MG5',
      time: '6:45:00',
      standard: MGSet1,
      heavy: HeavySet4613
    },
    {
      nameEN: 'PKP',
      time: '6:50:00',
      standard: MGSet2,
      heavy: HeavySet6613
    }
  ],
  sg: [
    {
      nameEN: 'Am KSG',
      nameCN: 'KSG',
      nameKR: 'KSG',
      nameTW: 'KSG',
      time: '8:00:00',
      heavy: HeavySet4163
    },
    {
      nameEN: 'Saiga-12',
      time: '8:05:00',
      heavy: HeavySet6164
    },
    {
      nameEN: 'FP-6',
      time: '8:06:00',
      heavy: HeavySet6164
    },
    {
      nameEN: 'S.A.T.8',
      time: '8:10:00',
      heavy: HeavySet6164
    },
    {
      nameEN: 'AA-12',
      time: '8:12:00',
      availability: EN | CN | TW | KR,
      heavy: HeavySet6164
    },
    {
      nameEN: 'DP-12',
      time: '8:13:00',
      heavy: HeavySet6164,
      unsure: [0, 1]
    },
    {
      nameEN: 'CAWS',
      time: '8:15:00',
      heavy: HeavySet6164,
      unsure: [0, 1]
    }
  ]
}

export const Dolls = { twoStar, threeStar, fourStar, fiveStar }
export const Servers = { EN, KR, CN, TW, JP }
