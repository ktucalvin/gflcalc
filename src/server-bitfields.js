'use strict'
// use the OR (|) operator to join servers
// use the AND (&) operator to check for availability
// `availability = undefined` implies all servers
const EN = 0b00001
const KR = 0b00010
const CN = 0b00100
const TW = 0b01000
const JP = 0b10000

export default { EN, KR, CN, TW, JP }
