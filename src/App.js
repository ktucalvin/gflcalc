'use strict'
import { hot } from 'react-hot-loader/root'
import React, { Component } from 'react'
import { standardPresets, heavyPresets } from './data/presets.js'
import Ingredient from './components/Ingredient.js'
import ProductionTable from './components/ProductionTable.js'
import ToggleSwitch from './components/ToggleSwitch.js'
import PresetSelector from './components/PresetSelector'
import ServerSelector from './components/ServerSelector'

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
      selectedPreset: 'hgset1',
      showAll: false,
      presets: standardPresets
    }

    this.updateRecipe = this.updateRecipe.bind(this)
    this.handleServerChange = this.handleServerChange.bind(this)
    this.handlePresetChange = this.handlePresetChange.bind(this)
    this.toggleHeavy = this.toggleHeavy.bind(this)
    this.toggleShowAll = this.toggleShowAll.bind(this)
  }

  updateRecipe (ingredient, delta) {
    const recipe = this.state
    recipe[ingredient] = Math.min(recipe.max, Math.max(recipe.min, recipe[ingredient] + delta))
    recipe.sum = recipe.manpower + recipe.ammunition + recipe.rations + recipe.parts
    this.setState(recipe)
  }

  handleServerChange (event) {
    this.state.server = event.target.value
    this.setState(this.state)
  }

  handlePresetChange (event) {
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
    const recipe = this.state
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
    this.setState(recipe)
  }

  toggleShowAll (event) {
    this.setState({ showAll: event.target.checked })
  }

  render () {
    return (
      <>
        <div id='recipe' className={this.state.sum >= 4000 ? 'heavy-style' : null}>
          <Ingredient name='manpower' updateRecipe={x => this.updateRecipe('manpower', x)} ingredient={this.state.manpower} />
          <Ingredient name='ammunition' updateRecipe={x => this.updateRecipe('ammunition', x)} ingredient={this.state.ammunition} />
          <Ingredient name='rations' updateRecipe={x => this.updateRecipe('rations', x)} ingredient={this.state.rations} />
          <Ingredient name='parts' updateRecipe={x => this.updateRecipe('parts', x)} ingredient={this.state.parts} />
        </div>

        <div className='table-wrapper'>
          <div id='controls'>
            <div className='ctlgroup'>
              <ServerSelector onChange={this.handleServerChange} selected={this.state.server} />
              <PresetSelector onChange={this.handlePresetChange} selected={this.state.selectedPreset} presets={this.state.presets} />
            </div>

            <div className='ctlgroup'>
              <ToggleSwitch name='toggle-heavy' update={this.toggleHeavy}>Toggle Heavy Production</ToggleSwitch>
              <ToggleSwitch name='toggle-unavailable' update={this.toggleShowAll}>Show Dolls in Other Servers</ToggleSwitch>
            </div>

            <p>(?) indicates speculated minimum requirements</p>
          </div>

          <ProductionTable recipe={this.state} />
        </div>
      </>
    )
  }
}

export default hot(App)
