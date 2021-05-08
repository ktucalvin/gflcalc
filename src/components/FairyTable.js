import React from 'react'
import { Fairies } from '../data/fairies'

const toMinutes = x => 60*Number(x.charAt(0)) + Number(x.slice(-2))
const fairies = [
    ...Fairies.combat.map(fairy => ({
      ...fairy,
      type: 'combat'
    })),
    ...Fairies.strategy.map(fairy => ({
      ...fairy,
      type: 'strategy'
    }))
  ]
  .sort((a,b) => toMinutes(a.time) - toMinutes(b.time))

const FairyTable = ({ recipe }) => (
  <table>
    <tbody>
      <tr>
        <td>
          <ul>
          {
            fairies.map(fairy => (
              verifyRecipe(fairy, recipe) ? <Fairy key={fairy.nameEN} fairy={fairy} server={recipe.server} classes={`${fairy.type}-fairy`} /> : null
            ))
          }
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
)

const Fairy = ({ fairy, server, classes }) => {
  const name = fairy['name' + server] || fairy.nameEN
  // const lang = name !== doll.nameEN ? serverToIso[server] : 'en'
  return (
    <li className={classes || null}>
      <span>{name}</span>
      <span>{fairy.time}:00</span>
    </li>
  )
}

function verifyRecipe(fairy, recipe) {
  const meetsRecipe = !fairy.recipe || (
    recipe.manpower >= fairy.recipe[0] &&
    recipe.ammunition >= fairy.recipe[1] &&
    recipe.rations >= fairy.recipe[2] &&
    recipe.parts >= fairy.recipe[3]
  )
  return recipe.ignoreRecipe || meetsRecipe
}

export default FairyTable
