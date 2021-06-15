// Note this method doesn't work if the doll's name is in a different language to its server
export const serverToIso = {
  EN: 'en',
  CN: 'zh-CN',
  TW: 'zh-TW',
  KR: 'ko',
  JP: 'ja'
}

export const rarityClassNames = {
  3: 'three-star',
  4: 'four-star',
  5: 'five-star'
}

// use the OR (|) operator to join servers
// use the AND (&) operator to check for availability
// `availability === undefined` implies all servers
export const EN = 0b00001
export const KR = 0b00010
export const CN = 0b00100
export const TW = 0b01000
export const JP = 0b10000
export const Servers = { EN, KR, CN, TW, JP }
