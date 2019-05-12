'use strict'
import React, { Component } from 'react'
import { PresetSelector, standardPresets, heavyPresets } from './presets.js'
import Ingredient from './Ingredient.js'
import ProductionCalculator from './ProductionCalculator.js'

export default
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      min: 30,
      max: 999,
      manpower: 30,
      ammunition: 30,
      rations: 30,
      parts: 30,
      sum: 120,
      server: 'EN',
      showAll: false,
      presets: standardPresets
    }

    this.updateRecipe = this.updateRecipe.bind(this)

    this.changeServer = this.changeServer.bind(this)

    this.changePreset = this.changePreset.bind(this)

    this.toggleHeavy = this.toggleHeavy.bind(this)

    this.toggleShowAll = this.toggleShowAll.bind(this)
  }

  updateRecipe (ingredient, delta) {
    const recipe = this.state
    recipe[ingredient] = Math.min(recipe.max, Math.max(recipe.min, recipe[ingredient] + delta))
    recipe.sum = recipe.manpower + recipe.ammunition + recipe.rations + recipe.parts
    this.setState(recipe)
  }

  changeServer (event) {
    this.state.server = event.target.value
    this.setState(this.state)
  }

  changePreset (event) {
    const { preset } = this.state.presets[event.target.value]
    const recipe = this.state
    recipe.manpower = preset[0]
    recipe.ammunition = preset[1]
    recipe.rations = preset[2]
    recipe.parts = preset[3]
    recipe.sum = recipe.manpower + recipe.ammunition + recipe.rations + recipe.parts
    recipe.selectedPreset = event.target.value
    this.setState(recipe)
  }

  toggleHeavy (event) {
    const isHeavy = event.target.checked
    let recipe = this.state
    if (isHeavy) {
      recipe.max = 9999
      recipe.min = recipe.manpower = recipe.ammunition = recipe.rations = recipe.parts = 1000
      recipe.sum = 4000
      recipe.presets = heavyPresets
      recipe.selectedPreset = 'g11heavy'
    } else {
      recipe.max = 999
      recipe.min = recipe.manpower = recipe.ammunition = recipe.rations = recipe.parts = 30
      recipe.sum = 120
      recipe.presets = standardPresets
      recipe.selectedPreset = 'hgset1'
    }
    this.setState(this.state)
  }

  toggleShowAll (event) {
    this.state.showAll = event.target.checked
    this.setState(this.state)
  }

  render () {
    return (
      <>
        <div class='center'>
          <div id='recipe' class={this.state.sum >= 4000 ? 'heavy-style' : ''} >
            <Ingredient name='manpower' updateRecipe={x => this.updateRecipe('manpower', x)} ingredient={this.state.manpower} />
            <Ingredient name='ammunition' updateRecipe={x => this.updateRecipe('ammunition', x)} ingredient={this.state.ammunition} />
            <Ingredient name='rations' updateRecipe={x => this.updateRecipe('rations', x)} ingredient={this.state.rations} />
            <Ingredient name='parts' updateRecipe={x => this.updateRecipe('parts', x)} ingredient={this.state.parts} />
          </div>
        </div>

        <div class='table-wrapper'>
          <div id='controls'>
            <div class='center'>
              <div class='selection'>
                <label for='server-id'>Server: </label>
                <select id='server-id' value={this.state.server} onChange={this.changeServer}>
                  <option value='EN'>EN</option>
                  <option value='KR'>KR</option>
                  <option value='CN'>CN</option>
                  <option value='TW'>TW</option>
                  <option value='JP'>JP</option>
                </select>
              </div>
            </div>

            <div id='preset-select' class='selection' >
              <PresetSelector changePreset={this.changePreset} presets={this.state.presets} selected={this.state.selectedPreset} />
            </div>

            <div class='toggle'>
              <label class='switch'>
                <input id='toggle-heavy' type='checkbox' onChange={this.toggleHeavy} />
                <span />
              </label>
              <label for='toggle-heavy'>Toggle Heavy Production</label>
            </div>

            <div class='toggle'>
              <label class='switch'>
                <input id='toggle-unavailable' type='checkbox' onChange={this.toggleShowAll} />
                <span />
              </label>
              <label for='toggle-unavailable'>Show Dolls In Other Servers</label>
            </div>

            <p>(?) indicates speculated minimum requirements</p>
          </div>

          <table>
            <tr>
              <th>Rarity</th>
              {this.state.sum < 4000 && <th>HG</th>}
              <th>SMG</th>
              <th>AR</th>
              <th>RF</th>
              <th>MG</th>
              {this.state.sum >= 4000 && <th>SG</th>}
            </tr>
            <tbody >
              <ProductionCalculator recipe={this.state} />
            </tbody>
          </table>
        </div>
      </>
    )
  }
}
