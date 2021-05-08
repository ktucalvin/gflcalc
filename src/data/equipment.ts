// EQ later on

const opticsSet = [0, 150, 0, 150]
const peqSet = [50, 0, 100, 0]
const suppressorSet = [50, 0, 0, 0]
const ammoSet = [0, 150, 0, 50]
const capeSet = [100, 0, 100, 0]
const exoSet = [50, 0, 0, 50]
const ammoBoxSet = [0, 0, 0, 150]
const armorSet = [0, 0, 50, 50]

export const Equipment = [
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
    time: '07',
    type: 'suppressor',
    recipe: suppressorSet
  },
  {
    nameEN: 'AC2 Suppressor',
    time: '22',
    rarity: 3,
    type: 'suppressor',
    recipe: suppressorSet
  },
  {
    nameEN: 'AC3 Suppressor',
    time: '37',
    rarity: 4,
    type: 'suppressor',
    recipe: suppressorSet
  },
  {
    nameEN: 'AC4 Suppressor',
    time: '47',
    rarity: 5,
    type: 'suppressor',
    recipe: suppressorSet
  },
  {
    nameEN: 'M61 Armor-Piercing Ammo',
    time: '15',
    type: 'ap ammo',
    recipe: ammoSet
  },
  {
    nameEN: 'M993 Armor-Piercing Ammo',
    time: '30',
    rarity: 3,
    type: 'ap ammo',
    recipe: ammoSet
  },
  {
    nameEN: 'Mk169 Armor-Piercing Ammo',
    time: '45',
    rarity: 4,
    type: 'ap ammo',
    recipe: ammoSet
  },
  {
    nameEN: 'Mk211 High-Explosive Armor-Piercing Ammo',
    time: '55',
    rarity: 5,
    type: 'ap ammo',
    recipe: ammoSet
  },
  {
    nameEN: 'ILM Hollow Point Ammo',
    time: '13',
    type: 'hp ammo',
    recipe: ammoSet
  },
  {
    nameEN: 'ILM Hollow Point Ammo',
    time: '28',
    rarity: 3,
    type: 'hp ammo',
    recipe: ammoSet
  },
  {
    nameEN: 'ILM Hollow Point Ammo',
    time: '43',
    rarity: 4,
    type: 'hp ammo',
    recipe: ammoSet
  },
  {
    nameEN: 'ILM Hollow Point Ammo',
    time: '53',
    rarity: 5,
    type: 'hp ammo',
    recipe: ammoSet
  },
  {
    nameEN: 'FMJ High-Velocity Ammo',
    time: '18',
    type: 'hv ammo',
    recipe: ammoSet
  },
  {
    nameEN: 'JSP High-Velocity Ammo',
    time: '33',
    rarity: 3,
    type: 'hv ammo',
    recipe: ammoSet
  },
  {
    nameEN: 'JHP High-Velocity Ammo',
    time: '48',
    rarity: 4,
    type: 'hv ammo',
    recipe: ammoSet
  },
  {
    nameEN: 'APCR High-Velocity Ammo',
    time: '58',
    rarity: 5,
    type: 'hv ammo',
    recipe: ammoSet
  },
  {
    nameEN: '#1 Buckshot',
    time: '14',
    type: 'buckshot',
    recipe: ammoSet
  },
  {
    nameEN: 'BK Slug',
    time: '14',
    type: 'slug',
    recipe: ammoSet
  },
  {
    nameEN: '#0 Buckshot',
    time: '29',
    rarity: 3,
    type: 'buckshot',
    recipe: ammoSet
  },
  {
    nameEN: 'FST Slug',
    time: '29',
    rarity: 3,
    type: 'slug',
    recipe: ammoSet
  },
  {
    nameEN: '#00 Buckshot',
    time: '44',
    rarity: 4,
    type: 'buckshot',
    recipe: ammoSet
  },
  {
    nameEN: 'WAD Slug',
    time: '44',
    rarity: 4,
    type: 'slug',
    recipe: ammoSet
  },
  {
    nameEN: '#000 Buckshot',
    time: '54',
    rarity: 5,
    type: 'buckshot',
    recipe: ammoSet
  },
  {
    nameEN: 'SABOT Slug',
    time: '54',
    rarity: 5,
    type: 'slug',
    recipe: ammoSet
  },
  {
    nameEN: 'IOP X1 Exoskeleton',
    time: '12',
    type: 'exo',
    recipe: exoSet
  },
  {
    nameEN: 'IOP T1 Exoskeleton',
    time: '12',
    type: 'exo',
    recipe: exoSet
  },
  {
    nameEN: 'IOP X2 Exoskeleton',
    time: '27',
    rarity: 3,
    type: 'exo',
    recipe: exoSet
  },
  {
    nameEN: 'IOP T2 Exoskeleton',
    time: '27',
    rarity: 3,
    type: 'exo',
    recipe: exoSet
  },
  {
    nameEN: 'IOP X3 Exoskeleton',
    time: '42',
    rarity: 4,
    type: 'exo',
    recipe: exoSet
  },
  {
    nameEN: 'IOP T3 Exoskeleton',
    time: '42',
    rarity: 4,
    type: 'exo',
    recipe: exoSet
  },
  {
    nameEN: 'IOP X4 Exoskeleton',
    time: '52',
    rarity: 5,
    type: 'exo',
    recipe: exoSet
  },
  {
    nameEN: 'IOP T5 Exoskeleton',
    time: '52',
    rarity: 5,
    type: 'exo',
    recipe: exoSet
  },
  {
    nameEN: 'Type 1 Armor Plate',
    time: '26',
    rarity: 3,
    type: 'armor',
    recipe: armorSet
  },
  {
    nameEN: 'Type 2 Armor Plate',
    time: '41',
    rarity: 4,
    type: 'armor',
    recipe: armorSet
  },
  {
    nameEN: 'Type 3 Armor Plate',
    time: '51',
    rarity: 5,
    type: 'armor',
    recipe: armorSet
  },
  {
    nameEN: 'IOP High-Capacity Ammo Box',
    time: '47',
    rarity: 4,
    type: 'ammo box',
    recipe: ammoBoxSet
  },
  {
    nameEN: 'IOP Maximum Ammo Box',
    time: '57',
    rarity: 5,
    type: 'ammo box',
    recipe: ammoBoxSet
  },
  {
    nameEN: 'Ragged Cape',
    time: '16',
    type: 'cape',
    recipe: capeSet
  },
  {
    nameEN: 'Camouflage Cape',
    time: '31',
    rarity: 3,
    type: 'cape',
    recipe: capeSet
  },
  {
    nameEN: 'Urban Camouflage Cape',
    time: '46',
    rarity: 4,
    type: 'cape',
    recipe: capeSet
  },
  {
    nameEN: 'Thermoptic Camouflage Cape',
    time: '56',
    rarity: 5,
    type: 'cape',
    recipe: capeSet
  }
]