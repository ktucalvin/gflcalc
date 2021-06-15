import React from 'react'
import { Dolls } from '../data/dolls'
import { serverToIso, rarityClassNames, Servers } from '../common/constants'
import type { AppState, Doll as DollType, RecipeByRarity } from '../common/gflcalc'

type Recipe = Pick<AppState, 'manpower' | 'ammunition' | 'rations' | 'parts' |
  'productionLine' | 'ignoreRecipe' | 'ignoreServer' | 'server'>

export type DollTableProps = {
  recipe: Recipe
}

const DollTable = ({ recipe }: DollTableProps) => (
  <table>
    <thead>
      <tr>
        <th className='rarity'>Rarity</th>
        {recipe.productionLine !== 'heavy' && <th>HG</th>}
        <th>SMG</th>
        <th>AR</th>
        <th>RF</th>
        <th>MG</th>
        {recipe.productionLine === 'heavy' && <th>SG</th>}
      </tr>
    </thead>
    <tbody>
      {recipe.productionLine !== 'heavy' && <Rarity rarity={2} dolls={Dolls.twoStar} recipe={recipe} />}
      <Rarity rarity={3} dolls={Dolls.threeStar} recipe={recipe} />
      <Rarity rarity={4} dolls={Dolls.fourStar} recipe={recipe} />
      <Rarity rarity={5} dolls={Dolls.fiveStar} recipe={recipe} />
    </tbody>
  </table>
)

type RarityProps = {
  rarity: number,
  dolls: RecipeByRarity,
  recipe: Recipe
}

const Rarity = ({ rarity, dolls, recipe }: RarityProps) => (
  <tr className={rarityClassNames[rarity]}>
    <td className='rarity'>{rarity}★</td>
    {recipe.productionLine !== 'heavy' && <Category dolls={dolls.hg} recipe={recipe} />}
    <Category dolls={dolls.smg} recipe={recipe} />
    <Category dolls={dolls.ar} recipe={recipe} />
    <Category dolls={dolls.rf} recipe={recipe} />
    <Category dolls={dolls.mg} recipe={recipe} />
    {recipe.productionLine === 'heavy' && <Category dolls={dolls.sg} recipe={recipe} />}
  </tr>
)

type CategoryProps = {
  dolls: DollType[],
  recipe: Recipe
}

const Category = ({ dolls, recipe }: CategoryProps) => {
  let hidden = 0
  const result = dolls.map((doll: DollType) => {
    let unsure = false
    let classes = ''
    if (doll.unsure && ((recipe.productionLine !== 'heavy' ? doll.unsure[0] : doll.unsure[1]))) {
      unsure = true
    }
    if (verifyRecipe(recipe, doll, doll.availability)) {
      return <Doll key={doll.nameEN} doll={doll} server={recipe.server} classes={classes} unsure={unsure} />
    } else if (recipe.ignoreServer && verifyRecipe(recipe, doll, undefined)) { // check again against all servers
      classes += 'unavailable '
    } else {
      hidden++
      classes += 'flat' // flat class hides elements but preserves width
    }
    return <Doll key={doll.nameEN} doll={doll} server={recipe.server} classes={classes} unsure={unsure} />
  })

  return (
    <>
      <td>
        <ul>
          <None isHidden={hidden === dolls.length} />
          {result}
        </ul>
      </td>
    </>
  )
}

type DollProps = {
  doll: DollType,
  server: 'EN' | 'CN' | 'KR' | 'TW' | 'JP',
  classes: string,
  unsure: boolean
}

const Doll = ({ doll, server, classes, unsure }: DollProps) => {
  let name = doll['name' + server]
  if (!name) { name = doll.nameEN }
  const lang = name !== doll.nameEN ? serverToIso[server] : 'en'
  return (
    <li className={classes || null}>
      <span lang={lang}>{name}</span>
      <span>{unsure && '(?) '}{doll.time}:00</span>
    </li>
  )
}

type NoneProps = {
  isHidden: boolean
}

const None = ({ isHidden }: NoneProps) => (
  <li className={isHidden ? null : 'flat'}>
    <span>NONE</span>
    <span>-:--:--</span>
  </li>
)

function verifyRecipe (recipe: Recipe, doll: DollType, availability: number) {
  const sum = recipe.manpower + recipe.ammunition + recipe.rations + recipe.parts
  const requirements = sum < 4000 ? doll.standard : doll.heavy
  const meetsRecipe = requirements &&
    recipe.manpower >= requirements[0] &&
    recipe.ammunition >= requirements[1] &&
    recipe.rations >= requirements[2] &&
    recipe.parts >= requirements[3] &&
    (requirements[4] ? requirements[4](sum) : true) // check any recipe sum conditions

  const onProductionLine = (doll.standard && recipe.productionLine === 'doll') ||
    (doll.heavy && recipe.productionLine === 'heavy')

  return (recipe.ignoreRecipe || meetsRecipe) &&
    onProductionLine &&
    (availability === undefined || (Servers[recipe.server] & availability)) // check server availability
}

export default DollTable
