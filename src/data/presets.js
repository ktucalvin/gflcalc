'use strict'

// Manpower, Ammo, Rations, Parts
const standardPresets = {
  hgset1: { preset: [30, 30, 30, 30], text: 'HG Set #1' },
  hgset2: { preset: [130, 130, 130, 130], text: 'HG Set #2' },
  beginner: { preset: [430, 430, 430, 130], text: 'Beginner Recommended' },
  hgMica: { preset: [130, 130, 130, 30], text: 'HG MICA Recommended' },
  smgCheap: { preset: [400, 400, 91, 30], text: 'SMG Cheap' },
  smgMica: { preset: [400, 400, 100, 200], text: 'SMG MICA Recommended' },
  arCheap: { preset: [91, 400, 400, 30], text: 'AR Cheap' },
  g11Voodoo: { preset: [97, 404, 404, 133], text: 'G11 Voodoo' },
  arMica: { preset: [100, 400, 400, 200], text: 'AR MICA Recommended' },
  rfCheap: { preset: [400, 91, 400, 30], text: 'RF Cheap' },
  rfMica: { preset: [400, 100, 400, 200], text: 'RF MICA Recommended' },
  mgset1: { preset: [400, 600, 30, 300], text: 'MG Set #1' },
  mgset2: { preset: [600, 600, 100, 400], text: 'MG Set #2' },
  mgVoodoo: { preset: [730, 630, 130, 430], text: 'MG Voodoo' },
  mgMica: { preset: [800, 800, 100, 400], text: 'MG MICA Recommended' }
}

const heavyPresets = {
  g11heavy: { preset: [1000, 1000, 1000, 1000], text: 'G11/Cheap' },
  smgMin: { preset: [4000, 4000, 1000, 1000], text: 'SMG Minimum' },
  arMin: { preset: [1000, 4000, 4000, 1000], text: 'AR Minimum' },
  rfset1: { preset: [3000, 1000, 3000, 1000], text: 'RF Set #1' },
  rfset2: { preset: [4000, 1000, 4000, 1000], text: 'RF Set #2' },
  mgset1: { preset: [4000, 6000, 1000, 3000], text: 'MG Set #1' },
  mgset2: { preset: [6000, 6000, 1000, 3000], text: 'MG Set #2' },
  sgset1: { preset: [4000, 1000, 6000, 3000], text: 'SG Set #1' },
  sgset2: { preset: [6000, 1000, 6000, 4000], text: 'SG Set #2' },
  sgMica: { preset: [8000, 1000, 8000, 4000], text: 'SG MICA Recommended' },
  voodoo: { preset: [6000, 2000, 6000, 4000], text: 'SG (Old) Voodoo' },
  all: { preset: [6000, 6000, 6000, 4000], text: 'All (not recommended!)' }
}

export { standardPresets, heavyPresets }
