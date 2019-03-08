'use strict'
import Servers from './server-bitfields.js'

// unpack bitfields into scope
const EN = Servers.EN
const KR = Servers.KR
const CN = Servers.CN
const TW = Servers.TW
const JP = Servers.JP

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

const twoStar = {
  hg: [
    { name: 'M1911', time: '20:00', standard: HGSet1 },
    { name: 'Nagant Revolver', time: '20:00', standard: HGSet1 },
    { name: 'P38', time: '20:00', standard: HGSet1 },
    { name: 'PPK', time: '22:00', standard: HGSet1 },
    { name: 'FNP-9', time: '25:00', standard: HGSet1 },
    { name: 'MP-446', time: '25:00', standard: HGSet1 },
    { name: 'USP Compact', time: '28:00', standard: HGSet1 },
    { name: 'Bren Ten', time: '28:00', standard: HGSet1 }
  ],
  smg: [
    { name: 'IDW', time: '1:10:00', standard: SMGSet1 },
    { name: 'PP-2000', time: '1:10:00', standard: SMGSet1 },
    { name: 'm45', time: '1:20:00', standard: SMGSet1 },
    { name: 'Spectre M4', time: '1:20:00', standard: SMGSet1 },
    { name: 'Type 64', time: '1:25:00', standard: SMGSet1 },
    { name: 'M38', time: '1:30:00', standard: SMGSet1 },
    { name: 'M3', time: '1:30:00', standard: SMGSet1 },
    { name: 'MP40', time: '1:30:00', standard: SMGSet1 },
    { name: 'PPSh-41', time: '1:50:00', standard: SMGSet1 }
  ],
  ar: [
    { name: 'Galil', time: '2:40:00', standard: ARSet1 },
    { name: 'SIG-510', time: '2:40:00', standard: ARSet1 },
    { name: 'F2000', time: '2:45:00', standard: ARSet1 },
    { name: 'Type 63', time: '2:45:00', standard: ARSet1 },
    { name: 'Gr G3', time: '2:50:00', standard: ARSet1 },
    { name: 'L85A1', time: '2:50:00', standard: ARSet1 }
  ],
  rf: [
    { name: 'G43', time: '3:10:00', standard: RFSet1 },
    { name: 'FN-49', time: '3:10:00', standard: RFSet1 },
    { name: 'VM59', time: '3:20:00', standard: RFSet1 },
    { name: 'SVT-38', time: '3:30:00', standard: RFSet1 },
    { name: 'SKS', time: '3:30:00', standard: RFSet1 }
  ],
  mg: [
    { name: 'AAT-52', time: '4:50:00', standard: MGSet1 },
    { name: 'FG42', time: '4:50:00', standard: MGSet1 },
    { name: 'MG34', time: '5:00:00', standard: MGSet1 },
    { name: 'DP28', time: '5:00:00', standard: MGSet1 },
    { name: 'LWMMG', time: '5:10:00', standard: MGSet1 }
  ],
  sg: [{ name: 'NONE', time: '-:--:--' }]
}

const threeStar = {
  hg: [
    { name: 'C96', time: '30:00', standard: HGSet1 },
    { name: 'P08', time: '30:00', standard: HGSet1 },
    { name: 'P99', time: '35:00', standard: HGSet1 },
    { name: 'Type92', time: '35:00', standard: HGSet1 },
    { name: 'Astra', time: '40:00', standard: HGSet1 },
    { name: 'M9', time: '40:00', standard: HGSet1 },
    { name: 'Makarov', time: '40:00', standard: HGSet1 },
    { name: 'Tokarev', time: '45:00', standard: HGSet1 }
  ],
  smg: [
    { name: 'Sten MkII', time: '1:40:00', standard: SMGSet2, heavy: HeavySet4411 },
    { name: 'Micro Uzi', time: '1:40:00', standard: SMGSet1, heavy: HeavySet1111 },
    { name: 'F1', time: '1:50:00', availability: CN | TW | KR, heavy: HeavySet1111 },
    { name: 'Ingram', time: '2:00:00', standard: SMGSet1, heavy: HeavySet1111 },
    { name: 'Skorpion', time: '2:00:00', standard: SMGSet1, heavy: HeavySet1111 },
    { name: 'Z-62', time: '2:05:00', availability: CN | TW | KR, heavy: HeavySet1111 },
    { name: 'PPS-43', time: '2:10:00', standard: SMGSet1, heavy: HeavySet1111 }
  ],
  ar: [
    { name: 'StG44', time: '3:00:00', standard: ARSet1, heavy: HeavySet1111 },
    { name: 'OTs-12', time: '3:10:00', standard: ARSet1, heavy: HeavySet1111 },
    { name: 'ARX-160', time: '3:15:00', availability: CN | TW | KR, heavy: HeavySet1111 },
    { name: 'AK-47', time: '3:20:00', standard: ARSet1, heavy: HeavySet1111 },
    { name: 'FNC', time: '3:20:00', standard: ARSet1, heavy: HeavySet1111 }
  ],
  rf: [
    { name: 'M14', time: '3:40:00', standard: RFSet1, heavy: HeavySet3131 },
    { name: 'SV-98', time: '3:40:00', standard: RFSet1, heavy: HeavySet3131 },
    { name: 'Hanyang Type 88', time: '3:50:00', standard: RFSet2, heavy: HeavySet4141 },
    { name: 'OTs-44', time: '3:50:00', availability: CN | TW | KR, heavy: HeavySet4141 },
    { name: 'M1 Garand', time: '4:00:00', standard: RFSet1, heavy: HeavySet3131 }
  ],
  mg: [
    { name: 'Bren', time: '5:20:00', standard: MGSet1, heavy: HeavySet4613 },
    { name: 'M1919A4', time: '5:40:00', standard: MGSet1, heavy: HeavySet4613 },
    { name: 'MG42', time: '5:50:00', standard: MGSet1, heavy: HeavySet4613 },
    { name: 'M2HB', time: '6:10:00', standard: MGSet1, heavy: HeavySet4613 }
  ],
  sg: [
    { name: 'NS2000', time: '7:15:00', availability: EN | CN | TW | KR, heavy: HeavySet6164 },
    { name: 'M500', time: '7:20:00', heavy: HeavySet4163 },
    { name: 'KS-23', time: '7:25:00', heavy: HeavySet4163 },
    { name: 'RMB-93', time: '7:30:00', heavy: HeavySet6164 },
    { name: 'M1897', time: '7:30:00', availability: CN | TW | KR, heavy: HeavySet6164 }
  ]
}

const fourStar = {
  hg: [
    { name: 'Jericho', time: '49:00', availability: CN | TW | KR, standard: HGSet2 },
    { name: 'SAA', time: '50:00', standard: HGSet1 },
    { name: 'Gr Mk23', time: '50:00', standard: HGSet1 },
    { name: 'Spitfire', time: '52:00', availability: EN | CN | TW | KR, standard: HGSet2 },
    { name: 'K5', time: '53:00', availability: CN | TW | KR | JP, standard: HGSet2 },
    { name: 'Stechkin', time: '55:00', standard: HGSet2 },
    { name: 'P7', time: '55:00', standard: HGSet1 }
  ],
  smg: [
    { name: 'UMP9', time: '2:15:00', standard: SMGSet2, heavy: HeavySet4411 },
    { name: 'UMP45', time: '2:15:00', standard: SMGSet2, heavy: HeavySet4411 },
    { name: 'Shipka', time: '2:18:00', availability: EN | CN | TW | KR, standard: SMGSet2, heavy: HeavySet4411 },
    { name: 'PP-19-01', time: '2:18:00', availability: EN | CN | TW | KR, standard: SMGSet2, heavy: HeavySet4411 },
    { name: 'MP5', time: '2:20:00', standard: SMGSet1, heavy: HeavySet1111 },
    { name: 'PP-90', time: '2:20:00', standard: SMGSet2, heavy: HeavySet4411 }
  ],
  ar: [
    { name: 'Type56-1', time: '3:25:00', standard: ARSet1, heavy: HeavySet1111 },
    { name: 'XM8', time: '3:25:00', availability: CN | TW | KR, standard: ARSet1, heavy: HeavySet1111 },
    { name: 'SAR-21', time: '3:25:00', availability: CN | TW | KR, standard: ARSet1, heavy: HeavySet1111 },
    { name: 'AS Val', time: '3:30:00', standard: ARSet1, heavy: HeavySet1111 },
    { name: 'FAMAS', time: '3:30:00', standard: ARSet1, heavy: HeavySet1111 },
    { name: 'TAR-21', time: '3:30:00', standard: ARSet2, heavy: HeavySet1441 },
    { name: '9A-91', time: '3:35:00', standard: ARSet1, heavy: HeavySet1111 },
    { name: 'G36', time: '3:40:00', standard: ARSet2, heavy: HeavySet1441 },
    { name: 'Ribeyrolles', time: '3:40:00', availability: EN | CN | TW | KR, standard: ARSet2, heavy: HeavySet1441 }
  ],
  rf: [
    { name: 'Mosin-Nagant', time: '4:10:00', standard: RFSet1, heavy: HeavySet3131 },
    { name: 'T-5000', time: '4:10:00', availability: EN | CN | TW | KR, standard: RFSet2, heavy: HeavySet4141 },
    { name: 'SVD', time: '4:15:00', standard: RFSet2, heavy: HeavySet4141 },
    { name: 'SPR A3G', time: '4:15:00', availability: CN | TW | KR, standard: RFSet2, heavy: HeavySet4141, unsure: [0, 1] },
    { name: 'K31', time: '4:15:00', availability: CN | TW | KR, standard: RFSet2, heavy: HeavySet4141, unsure: [1, 1] },
    { name: 'PSG-1', time: '4:10:00', availability: CN | TW | KR, heavy: HeavySet4141 },
    { name: 'G28', time: '4:10:00', availability: CN | TW | KR, heavy: HeavySet4141 },
    { name: 'Springfield', time: '4:25:00', standard: RFSet1, heavy: HeavySet3131 },
    { name: 'PTRD', time: '4:30:00', standard: RFSet1, heavy: HeavySet3131 },
    { name: 'PzB 39', time: '4:30:00', availability: CN | TW | KR, heavy: HeavySet4141 }
  ],
  mg: [
    { name: 'M60', time: '6:10:00', standard: MGSet1, heavy: HeavySet4613 },
    { name: 'Type 80', time: '6:15:00', availability: EN | CN | TW | KR, standard: MGSet2, heavy: HeavySet6613, unsure: [0, 1] },
    { name: 'Mk48', time: '6:20:00', availability: EN | CN | TW | KR, standard: MGSet2, heavy: HeavySet6613 },
    { name: 'AEK-999', time: '6:20:00', standard: MGSet2, heavy: HeavySet6613 },
    { name: 'M1918', time: '6:25:00', standard: MGSet1, heavy: HeavySet4613 },
    { name: 'Ameli', time: '6:25:00', standard: MGSet2, heavy: HeavySet6613 },
    { name: 'PK', time: '6:30:00', standard: MGSet2, heavy: HeavySet6613 },
    { name: 'MG3', time: '6:30:00', standard: MGSet1, heavy: HeavySet4613 }
  ],
  sg: [
    { name: 'M1014', time: '7:14:00', availability: CN | TW | KR | JP, heavy: HeavySet6164 },
    { name: 'M590', time: '7:40:00', heavy: HeavySet4163 },
    { name: 'SPAS-12', time: '7:40:00', availability: CN | TW | KR, heavy: HeavySet4163 },
    { name: 'M37', time: '7:45:00', heavy: HeavySet6164 },
    { name: 'Super-Shorty', time: '7:50:00', availability: EN | CN | TW | KR, heavy: HeavySet6164 },
    { name: 'USAS-12', time: '7:55:00', availability: EN | CN | TW | KR, heavy: HeavySet6164 }
  ]
}

const fiveStar = {
  hg: [
    { name: 'Welrod MkII', time: '1:00:00', standard: HGSet2 },
    { name: 'Contender', time: '1:02:00', standard: HGSet2 },
    { name: 'Px4 Storm', time: '1:04:00', availability: CN | TW | KR, standard: HGSet1 },
    { name: 'M950A', time: '1:05:00', standard: HGSet2 },
    { name: 'NZ75', time: '1:05:00', standard: HGSet2 },
    { name: 'Grizzly MkV', time: '1:10:00', standard: HGSet2 }
  ],
  smg: [
    { name: 'MP7', time: '2:18:00', availability: CN | TW | KR, standard: SMGSet2, heavy: HeavySet4411, unsure: [1, 1] },
    { name: 'Type 100', time: '2:19:00', availability: CN | TW | KR | JP, standard: SMGSet2, heavy: HeavySet4411, unsure: [1, 1] },
    { name: 'Suomi', time: '2:25:00', standard: SMGSet2, heavy: HeavySet4411 },
    { name: 'C-MS', time: '2:28:00', availability: CN | TW | KR, standard: SMGSet2, HeavySet4411, unsure: [0, 1] },
    { name: 'P90', time: '2:29:00', availability: CN | TW | KR, standard: SMGSet2, heavy: HeavySet4411, unsure: [1, 1] },
    { name: 'G36C', time: '2:30:00', standard: SMGSet2, heavy: HeavySet4411 },
    { name: 'Thompson', time: '2:30:00', standard: SMGSet1, heavy: HeavySet1111 },
    { name: 'SR-3MP', time: '2:33:00', standard: SMGSet2, heavy: HeavySet4411 },
    { name: 'Type 79', time: '2:35:00', availability: EN | CN | TW | KR, standard: SMGSet2, heavy: HeavySet4411 },
    { name: 'Vector', time: '2:35:00', standard: SMGSet2, heavy: HeavySet4411 }
  ],
  ar: [
    { name: 'FAL', time: '3:45:00', standard: ARSet2, heavy: HeavySet1441 },
    { name: 'T91', time: '3:48:00', availability: EN | CN | TW | KR, standard: ARSet2, heavy: HeavySet1441 },
    { name: 'Type 95', time: '3:50:00', standard: ARSet2, heavy: HeavySet1441 },
    { name: 'Type 97', time: '3:50:00', standard: ARSet2, heavy: HeavySet1441 },
    { name: 'K2', time: '3:52:00', availability: CN | TW | KR | JP, standard: ARSet2, heavy: HeavySet1441 },
    { name: 'MDR', time: '3:53:00', availability: CN | TW | KR, standard: ARSet2, heavy: HeavySet1441 },
    { name: 'HK416', time: '3:55:00', standard: ARSet1, heavy: HeavySet1111 },
    { name: 'RFB', time: '3:58:00', standard: ARSet2, heavy: HeavySet1441 },
    { name: 'G11', time: '4:04:00', standard: ARSet1, heavy: HeavySet1111 },
    { name: 'G41', time: '4:05:00', standard: ARSet2, heavy: HeavySet1441 },
    { name: 'Zas M21', time: '4:05:00', availability: EN | CN | TW | KR, standard: ARSet2, heavy: HeavySet1441 },
    { name: 'Howa Type 64', time: '4:06:00', availability: CN | TW | KR | JP, standard: ARSet2, heavy: HeavySet1441, unsure: [1, 1] },
    { name: 'AN-94', time: '4:09:00', availability: CN | TW | KR, standard: ARSet2, heavy: HeavySet1441 },
    { name: 'K11', time: '4:11:00', availability: CN | TW | KR, standard: ARSet2, heavy: HeavySet1441, unsure: [0, 1] },
    { name: 'AK-12', time: '4:12:00', availability: CN | TW | KR, standard: ARSet2, heavy: HeavySet1441 }
  ],
  rf: [
    { name: 'M200', time: '4:32:00', availability: EN, standard: RFSet2, heavy: HeavySet4141, unsure: [1, 1] },
    { name: 'Carcano M1891', time: '4:38:00', standard: RFSet2, heavy: HeavySet4141 },
    { name: 'Kar98k', time: '4:40:00', standard: RFSet2, heavy: HeavySet4141 },
    { name: 'Carcano M91/38', time: '4:42:00', standard: RFSet2, heavy: HeavySet4141 },
    { name: 'NTW-20', time: '4:45:00', standard: RFSet1, heavy: HeavySet3131 },
    { name: 'WA2000', time: '4:50:00', standard: RFSet1, heavy: HeavySet3131 },
    { name: 'IWS 2000', time: '4:52:00', availability: EN | CN | TW | KR, standard: RFSet2, heavy: HeavySet4141 },
    { name: 'M99', time: '4:55:00', standard: RFSet2, heavy: HeavySet4141 },
    { name: 'Lee-Enfield', time: '5:00:00', standard: RFSet2, heavy: HeavySet4141 }
  ],
  mg: [
    { name: 'Type 88', time: '6:28:00', availability: CN | TW | KR, standard: MGSet2, heavy: HeavySet6613 },
    { name: 'Negev', time: '6:35:00', standard: MGSet2, heavy: HeavySet6613 },
    { name: 'MG4', time: '6:40:00', standard: MGSet2, heavy: HeavySet6613 },
    { name: 'MG5', time: '6:45:00', standard: MGSet1, heavy: HeavySet4613 },
    { name: 'PKP', time: '6:50:00', standard: MGSet2, heavy: HeavySet6613 }
  ],
  sg: [
    { name: 'Am KSG', time: '8:00:00', heavy: HeavySet4163 },
    { name: 'Saiga-12', time: '8:05:00', availability: CN | TW | KR, heavy: HeavySet6164 },
    { name: 'FP-6', time: '8:06:00', availability: CN | TW | KR, heavy: HeavySet6164 },
    { name: 'S.A.T.8', time: '8:10:00', availability: EN | CN | TW | KR, heavy: HeavySet6164 },
    { name: 'AA-12', time: '8:12:00', availability: CN | TW | KR, heavy: HeavySet6164 }
  ]
}

export default { twoStar, threeStar, fourStar, fiveStar }
