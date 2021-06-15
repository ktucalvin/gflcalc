import React from 'react'
import { Fairies } from '../data/fairies'
import { serverToIso } from '../common/constants'
import type { Fairy as FairyType } from '../data/fairies'
import type { AppState } from '../common/gflcalc'

const toMinutes = (x: string) => 60*Number(x.charAt(0)) + Number(x.slice(-2))
const fairies = Fairies.sort((a,b) => toMinutes(a.time) - toMinutes(b.time))

type Recipe = Pick<AppState, 'manpower' | 'ammunition' | 'rations' | 'parts' |
  'productionLine' | 'ignoreRecipe' | 'ignoreServer' | 'server'>

export type FairyTableProps = {
  recipe: Recipe
}

const FairyTable = ({ recipe }: FairyTableProps) => (
  <table>
    <tbody>
      <tr>
        <td>
          <ul>
          {
            fairies.map(fairy => (
              verifyRecipe(fairy, recipe)
                ? <Fairy
                    key={fairy.nameEN}
                    fairy={fairy}
                    server={recipe.server}
                    classes={fairy.isCombat ? 'combat-fairy' : 'strategy-fairy'}
                  />
                : null
            ))
          }
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
)

type FairyProps = {
  fairy: FairyType,
  server: 'EN' | 'CN' | 'KR' | 'TW' | 'JP',
  classes: string
}

const Fairy = ({ fairy, server, classes }: FairyProps) => {
  const name = fairy['name' + server] || fairy.nameEN
  const lang = name !== fairy.nameEN ? serverToIso[server] : 'en'
  return (
    <li className={classes || null}>
      <span>{fairy.time}:00</span>
      <span lang={lang}>{name}</span>
    </li>
  )
}

function verifyRecipe(fairy: FairyType, recipe: Recipe) {
  const meetsRecipe = !fairy.recipe || (
    recipe.manpower >= fairy.recipe[0] &&
    recipe.ammunition >= fairy.recipe[1] &&
    recipe.rations >= fairy.recipe[2] &&
    recipe.parts >= fairy.recipe[3]
  )
  return recipe.ignoreRecipe || meetsRecipe
}

export default FairyTable
