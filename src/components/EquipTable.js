import React from 'react'
import { Equipment } from '../data/equipment'

const equips = Equipment.sort((a,b) => Number(a.time) - Number(b.time))

const rarityClassNames = {
  3: 'three-star',
  4: 'four-star',
  5: 'five-star'
}

const EquipTable = ({ recipe }) => (
  <table>
    <tbody>
      <tr>
        <td>
          <ul>
          {
            equips.map(eq => (
              verifyRecipe(eq, recipe) && <Equip key={eq.nameEN + eq.rarity} equip={eq} classes={rarityClassNames[eq.rarity]} />
            ))
          }
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
)

const Equip = ({ equip, server, classes }) => {
  // const name = fairy['name' + server] || fairy.nameEN
  // console.log(`server is: ${server}`)
  // const lang = name !== doll.nameEN ? serverToIso[server] : 'en'
  return (
    <li className={classes || null}>
      <span>{equip.nameEN}</span>
      <span>00:{equip.time}:00</span>
    </li>
  )
}

const optics = ['scope', 'holo', 'red dot']
function verifyRecipe(equip, recipe) {
  if(optics.includes(equip.type)) {
    return recipe.ammunition <= equip.recipe[1] &&
    recipe.parts <= equip.recipe[3]
  } else {
    return recipe.manpower >= equip.recipe[0] &&
           recipe.ammunition >= equip.recipe[1] &&
           recipe.rations >= equip.recipe[2] &&
           recipe.parts >= equip.recipe[3]
  }
}

export default EquipTable
