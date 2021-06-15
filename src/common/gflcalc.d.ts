export type Requirements = [number, number, number, number, ((arg0: number) => boolean)?]

export type Preset = {
  preset: number[],
  text: string
}

export type Doll = {
  nameEN: string, // names will default to nameEN
  time: string,
  standard?: Requirements,
  nameCN?: string,
  nameKR?: string,
  nameTW?: string,
  nameJP?: string,
  heavy?: Requirements,
  availability?: number,
  unsure?: [number, number] // unsure[0] = standard ; unsure[1] = heavy
}

export type RecipeByRarity = {
  hg: Doll[],
  smg: Doll[],
  ar: Doll[],
  rf: Doll[],
  mg: Doll[],
  sg?: Doll[]
}

export type Equip = {
  nameEN: string,
  nameCN?: string,
  nameKR?: string,
  nameTW?: string,
  nameJP?: string,
  time: string,
  type: string,
  recipe: number[]
  rarity?: 3 | 4 | 5,
  availability?: number,
}

export type AppState = {
  min: number,
  max: number,
  manpower: number,
  ammunition: number,
  rations: number,
  parts: number,
  productionLine: 'doll' | 'heavy' | 'equip' | 'fairy'
  server: 'EN' | 'KR' | 'TW' | 'CN' | 'JP',
  presets: Preset[],
  selectedPreset: number,
  ignoreRecipe: boolean,
  ignoreServer: boolean
}
