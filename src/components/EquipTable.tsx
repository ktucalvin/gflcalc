import React from 'react'
import { Equipment } from '../data/equipment'
import { serverToIso, Servers, rarityClassNames } from '../common/constants'
import type { Equip as EquipType } from '../common/gflcalc'

const equips = Equipment.sort((a,b) => Number(a.time) - Number(b.time))

export type EquipTableProps = {
  server: 'EN' | 'CN' | 'KR' | 'TW' | 'JP'
}

const EquipTable = ({ server, ignoreServer }) => {
  console.log(`ignore server is ${ignoreServer}`)
  const result = equips.map((equip: EquipType) => {
    let classes = rarityClassNames[equip.rarity] || ''
    if (verifyRecipe(equip, server, equip.availability)) {
      return <Equip key={equip.nameEN + equip.rarity} equip={equip} server={server} classes={classes} />
    } else if (ignoreServer && verifyRecipe(equip, server, undefined)) {
      classes += ' unavailable '
    } else {
      classes += ' flat '
    }
    return <Equip key={equip.nameEN + equip.rarity} equip={equip} server={server} classes={classes} />
  })

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <ul>
              {result}
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

const Equip = ({ equip, classes, server }) => {
  let name = equip['name' + server]
  if (!name) { name = equip.nameEN }
  const lang = name !== equip.nameEN ? serverToIso[server] : 'en'

  return (
    <li className={classes || null}>
      <span>{equip.time}:00</span>
      <span lang={lang}>{name}</span>
    </li>
  )
}

function verifyRecipe (equip: EquipType, server: number, availability: number) {
  // ignore crafting recipe, just consider availability
  return (availability === undefined || (Servers[server] & availability)) // check server availability
}

export default EquipTable
