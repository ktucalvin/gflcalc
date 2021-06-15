import type { Preset } from '../common/gflcalc'

// Manpower, Ammo, Rations, Parts
export const standardPresets: Preset[] = [
  { preset: [30, 30, 30, 30], text: 'HG Set #1' },
  { preset: [130, 130, 130, 130], text: 'HG Set #2' },
  { preset: [430, 430, 430, 130], text: 'Beginner Recommended' },
  { preset: [130, 130, 130, 30], text: 'HG MICA Recommended' },
  { preset: [400, 400, 91, 30], text: 'SMG Cheap' },
  { preset: [400, 400, 100, 200], text: 'SMG MICA Recommended' },
  { preset: [91, 400, 400, 30], text: 'AR Cheap' },
  { preset: [97, 404, 404, 133], text: 'G11 Voodoo' },
  { preset: [100, 400, 400, 200], text: 'AR MICA Recommended' },
  { preset: [400, 91, 400, 30], text: 'RF Cheap' },
  { preset: [400, 100, 400, 200], text: 'RF MICA Recommended' },
  { preset: [400, 600, 30, 300], text: 'MG Set #1' },
  { preset: [600, 600, 100, 400], text: 'MG Set #2' },
  { preset: [730, 630, 130, 430], text: 'MG Voodoo' },
  { preset: [800, 800, 100, 400], text: 'MG MICA Recommended' },
  { preset: [522, 320, 404, 137], text: 'Uncensor Recipe' }
]

export const heavyPresets: Preset[] = [
  { preset: [1000, 1000, 1000, 1000], text: 'G11/Cheap' },
  { preset: [4000, 4000, 1000, 1000], text: 'SMG Minimum' },
  { preset: [1000, 4000, 4000, 1000], text: 'AR Minimum' },
  { preset: [3000, 1000, 3000, 1000], text: 'RF Set #1' },
  { preset: [4000, 1000, 4000, 1000], text: 'RF Set #2' },
  { preset: [4000, 6000, 1000, 3000], text: 'MG Set #1' },
  { preset: [6000, 6000, 1000, 3000], text: 'MG Set #2' },
  { preset: [4000, 1000, 6000, 3000], text: 'SG Set #1' },
  { preset: [6000, 1000, 6000, 4000], text: 'SG Set #2' },
  { preset: [8000, 1000, 8000, 4000], text: 'SG MICA Recommended' },
  { preset: [6000, 2000, 6000, 4000], text: 'SG (Old) Voodoo' },
  { preset: [6000, 6000, 6000, 4000], text: 'All (not recommended!)' }
]
