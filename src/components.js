import React, { Component } from 'react'
import Servers from './server-bitfields.js'

class ProductionCalculator extends Component {
  constructor (props) {
    super(props)
    this.state = this.props.recipe
  }

  render () {
    const dolls = this.props.dolls
    return (
      <>
        {this.props.recipe.sum < 4000
          ? <Rarity rarity={2} dolls={dolls.twoStar} recipe={this.state} />
          : <></>
        }
        <Rarity rarity={3} dolls={dolls.threeStar} recipe={this.state} />
        <Rarity rarity={4} dolls={dolls.fourStar} recipe={this.state} />
        <Rarity rarity={5} dolls={dolls.fiveStar} recipe={this.state} />
      </>
    )
  }
}

const rarityClassNames = {
  '3': 'three-star',
  '4': 'four-star',
  '5': 'five-star'
}

class Rarity extends Component {
  render () {
    const dolls = this.props.dolls
    const recipe = this.props.recipe
    return (
      <tr id={rarityClassNames[this.props.rarity]}>
        <td className='rarity'>{this.props.rarity}★</td>
        { recipe.sum < 4000
          ? <Category dolls={dolls.hg} recipe={this.props.recipe} />
          : <></>
        }
        <Category dolls={dolls.smg} recipe={this.props.recipe} />
        <Category dolls={dolls.ar} recipe={this.props.recipe} />
        <Category dolls={dolls.rf} recipe={this.props.recipe} />
        <Category dolls={dolls.mg} recipe={this.props.recipe} />
        {recipe.sum >= 4000
          ? <Category dolls={dolls.sg} recipe={this.props.recipe} />
          : <></>
        }
      </tr>
    )
  }
}

class Category extends Component {
  render () {
    const recipe = this.props.recipe
    let hidden = 0
    const result = this.props.dolls.map((doll) => {
      let classes = ''
      if (doll.unsure && ((recipe.sum < 4000 ? doll.unsure[0] : doll.unsure[1]))) {
        classes += ' unsure '
      }
      if (verifyRecipe(recipe, doll, doll.availability)) {
        return <Doll key={doll.nameEN} doll={doll} classes={classes} server={recipe.server} />
      } else if (recipe.showAll && verifyRecipe(recipe, doll, undefined)) { // check again against all servers
        classes += ' unavailable '
      } else {
        hidden++
        classes += ' flat '
      }
      return <Doll key={doll.nameEN} doll={doll} classes={classes} server={recipe.server} />
    })

    if (hidden !== this.props.dolls.length) {
      return <td><ul>{result}</ul></td>
    } else {
      return <td><ul><None server={recipe.server} />{result}</ul></td>
    }
  }
}

class Doll extends Component {
  render () {
    const doll = this.props.doll
    let name = doll['name' + this.props.server]
    if (!name) { name = doll.nameEN }
    return (
      <li className={this.props.classes}>
        <span>{name}</span>
        <span>{doll.time}</span>
      </li>
    )
  }
}

class None extends Component {
  render () {
    return (<ul><li><span>NONE</span><span>-:--:--</span></li></ul>)
  }
}

function verifyRecipe (recipe, doll, availability) {
  const requirements = recipe.sum < 4000 ? doll.standard : doll.heavy
  if (!requirements) return false
  return recipe.manpower >= requirements[0] &&
         recipe.ammunition >= requirements[1] &&
         recipe.rations >= requirements[2] &&
         recipe.parts >= requirements[3] &&
         (requirements[4] ? requirements[4](recipe.sum) : true) &&
         (availability === undefined || Servers[recipe.server] & availability)
}

export default ProductionCalculator
