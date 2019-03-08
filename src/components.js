import React, { Component } from 'react'

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
      if (recipe.sum < 4000 && doll.standard && verifyRecipe(recipe, doll.standard)) {
        return <Doll key={doll.name} doll={doll} unsure={(doll.unsure && doll.unsure[0]) || ''} />
      } else if (recipe.sum >= 4000 && doll.heavy && verifyRecipe(recipe, doll.heavy)) {
        return <Doll key={doll.name} doll={doll} unsure={(doll.unsure && doll.unsure[1]) || ''} />
      } else {
        hidden++
        return <Doll key={doll.name} doll={doll} flat='flat' />
      }
    })
    if (hidden !== this.props.dolls.length) {
      return <td><ul>{result}</ul></td>
    } else {
      return <td><ul><None />{result}</ul></td>
    }
  }
}

class Doll extends Component {
  render () {
    const doll = this.props.doll
    let classes = `${this.props.flat}`
    if (this.props.unsure) { classes += ' unsure' }
    return (
      <li className={classes}>
        <span>{doll.name}</span>
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

function verifyRecipe (recipe, requirements) {
  return recipe.manpower >= requirements[0] &&
         recipe.ammunition >= requirements[1] &&
         recipe.rations >= requirements[2] &&
         recipe.parts >= requirements[3] &&
         (requirements[4] ? requirements[4](recipe.sum) : true)
}

export default ProductionCalculator
