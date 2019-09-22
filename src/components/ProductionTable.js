'use strict'
import React from 'react'
import { Dolls, Servers } from '../data/dolls.js'

const ProductionTable = ({ recipe }) => (
  <table>
    <thead>
      <tr>
        {window.innerWidth >= 360 && <th>Rarity</th>}
        {recipe.sum < 4000 && <th>HG</th>}
        <th>SMG</th>
        <th>AR</th>
        <th>RF</th>
        <th>MG</th>
        {recipe.sum >= 4000 && <th>SG</th>}
      </tr>
    </thead>
    <tbody>
      {recipe.sum < 4000 && <Rarity rarity={2} dolls={Dolls.twoStar} recipe={recipe} />}
      <Rarity rarity={3} dolls={Dolls.threeStar} recipe={recipe} />
      <Rarity rarity={4} dolls={Dolls.fourStar} recipe={recipe} />
      <Rarity rarity={5} dolls={Dolls.fiveStar} recipe={recipe} />
    </tbody>
  </table>
)

const rarityClassNames = {
  3: 'three-star',
  4: 'four-star',
  5: 'five-star'
}

const Rarity = ({ rarity, dolls, recipe }) => (
  <tr id={rarityClassNames[rarity]}>
    {window.innerWidth >= 360 && <td className='rarity'>{rarity}★</td>}
    {recipe.sum < 4000 && <Category dolls={dolls.hg} recipe={recipe} />}
    <Category dolls={dolls.smg} recipe={recipe} />
    <Category dolls={dolls.ar} recipe={recipe} />
    <Category dolls={dolls.rf} recipe={recipe} />
    <Category dolls={dolls.mg} recipe={recipe} />
    {recipe.sum >= 4000 && <Category dolls={dolls.sg} recipe={recipe} />}
  </tr>
)

const Category = ({ dolls, recipe }) => {
  let hidden = 0
  const result = dolls.map(doll => {
    let unsure = false
    let classes = ''
    if (doll.unsure && ((recipe.sum < 4000 ? doll.unsure[0] : doll.unsure[1]))) {
      unsure = true
    }
    if (verifyRecipe(recipe, doll, doll.availability)) {
      return <Doll key={doll.nameEN} doll={doll} server={recipe.server} classes={classes} unsure={unsure} />
    } else if (recipe.showAll && verifyRecipe(recipe, doll, undefined)) { // check again against all servers
      classes += 'unavailable '
    } else {
      hidden++
      classes += 'flat'
    }
    return <Doll key={doll.nameEN} doll={doll} server={recipe.server} classes={classes} unsure={unsure} />
  })

  if (hidden !== dolls.length) {
    return <td><ul>{result}</ul></td>
  } else {
    return <td><ul><None />{result}</ul></td>
  }
}

// Note this method doesn't work if the doll's name is in a different language to its server
const serverToIso = {
  EN: 'en',
  CN: 'zh-CN',
  TW: 'zh-TW',
  KR: 'ko',
  JP: 'ja'
}

const Doll = ({ doll, server, classes, unsure }) => {
  let name = doll['name' + server]
  if (!name) { name = doll.nameEN }
  const lang = name !== doll.nameEN ? serverToIso[server] : 'en'
  return (
    <li className={classes || null}>
      <span lang={lang}>{name}</span>
      <span>{doll.time}{unsure && ' (?)'}</span>
    </li>
  )
}

const None = () => (<li><span>NONE</span><span>-:--:--</span></li>)

function verifyRecipe (recipe, doll, availability) {
  const requirements = recipe.sum < 4000 ? doll.standard : doll.heavy
  return requirements &&
         recipe.manpower >= requirements[0] &&
         recipe.ammunition >= requirements[1] &&
         recipe.rations >= requirements[2] &&
         recipe.parts >= requirements[3] &&
         (requirements[4] ? requirements[4](recipe.sum) : true) && // check any recipe sum conditions
         (availability === undefined || Servers[recipe.server] & availability) // check server availability
}

export default ProductionTable
