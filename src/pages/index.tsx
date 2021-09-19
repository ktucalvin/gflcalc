import React, { PureComponent } from 'react'
import type { AppState } from '../common/gflcalc'
import { standardPresets, heavyPresets } from '../data/presets'
import { fairyPresets } from '../data/fairies'
import Ingredient from '../components/Ingredient'
import DollTable from '../components/DollTable'
import EquipTable from '../components/EquipTable'
import FairyTable from '../components/FairyTable'
import ToggleSwitch from '../components/ToggleSwitch'
import PresetSelector from '../components/PresetSelector'
import ServerSelector from '../components/ServerSelector'
import Layout from '../components/Layout'

type Ingredient = 'manpower' | 'ammunition' | 'rations' | 'parts'

class App extends PureComponent<null, AppState> {
  constructor (props: null) {
    super(props)
    this.state = {
      min: 30,
      max: 999,
      manpower: 30,
      ammunition: 30,
      rations: 30,
      parts: 30,
      productionLine: 'doll',
      server: 'EN',
      presets: standardPresets,
      selectedPreset: 0,
      ignoreRecipe: false,
      ignoreServer: false
    }

    this.updateRecipe = this.updateRecipe.bind(this)
    this.handleServerChange = this.handleServerChange.bind(this)
    this.handlePresetChange = this.handlePresetChange.bind(this)
    this.handleProductionChange = this.handleProductionChange.bind(this)
    this.toggleIgnoreRecipe = this.toggleIgnoreRecipe.bind(this)
    this.toggleIgnoreServer = this.toggleIgnoreServer.bind(this)
  }

  updateRecipe (ingredient: Ingredient, delta: number) {
    const recipe = {...this.state}
    recipe[ingredient] = Math.min(recipe.max, Math.max(recipe.min, recipe[ingredient] + delta))
    this.setState(recipe)
  }

  handleServerChange (event) {
    this.setState({
      ...this.state,
      server: event.target.value
    })
  }

  handlePresetChange (event) {
    const { preset } = this.state.presets[event.target.value]
    const recipe = {...this.state}
    recipe.manpower = preset[0]
    recipe.ammunition = preset[1]
    recipe.rations = preset[2]
    recipe.parts = preset[3]
    recipe.selectedPreset = event.target.value
    this.setState(recipe)
  }

  handleProductionChange (productionLine) {
    const recipe = {
      ...this.state,
      productionLine,
      ignoreServer: false,
      ignoreRecipe: false,
      selectedPreset: 0
    }

    if (productionLine === 'heavy') {
      recipe.max = 9999
      recipe.min = recipe.manpower = recipe.ammunition = recipe.rations = recipe.parts = 1000
      recipe.presets = heavyPresets
    } else if (productionLine === 'fairy') {
      recipe.max = 9999
      recipe.min = recipe.manpower = recipe.ammunition = recipe.rations = recipe.parts = 500
      recipe.presets = fairyPresets
    } else if (productionLine === 'equip') {
      recipe.max = 999
      recipe.min = recipe.manpower = recipe.ammunition = recipe.rations = recipe.parts = 10
    } else {
      recipe.max = 999
      recipe.min = recipe.manpower = recipe.ammunition = recipe.rations = recipe.parts = 30
      recipe.presets = standardPresets
    }

    this.setState(recipe)
  }

  toggleIgnoreServer (event: React.ChangeEvent<HTMLInputElement>)  {
    this.setState({
      ...this.state,
      ignoreServer: event.target.checked
    })
  }

  toggleIgnoreRecipe (event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      ...this.state,
      ignoreRecipe: event.target.checked
    })
  }

  render () {
    const isDoll = this.state.productionLine === 'doll' || this.state.productionLine === 'heavy'
    return (
      <Layout>

        <header>
          <ul>
            <li>
              <button
                className={this.state.productionLine === 'doll' ? 'selected-production' : null}
                onClick={this.handleProductionChange.bind(this, 'doll')}
              >Standard</button>
            </li>
            <li>
              <button
                className={this.state.productionLine === 'heavy' ? 'selected-production' : null}
                onClick={this.handleProductionChange.bind(this, 'heavy')}
              >Heavy</button>
            </li>
            <li>
              <button
                className={this.state.productionLine === 'equip' ? 'selected-production' : null}
                onClick={this.handleProductionChange.bind(this, 'equip')}
              >Equipment</button>
            </li>
            <li>
              <button
                className={this.state.productionLine === 'fairy' ? 'selected-production' : null}
                onClick={this.handleProductionChange.bind(this, 'fairy')}
              >Fairy</button>
            </li>
          </ul>
        </header>

      <div id='body-wrapper'>
        <div id='recipe' className={`${this.state.productionLine}-style`}>
          {['manpower', 'ammunition', 'rations', 'parts'].map(resource => (
            <Ingredient
              name={resource}
              key={resource}
              updateRecipe={this.updateRecipe.bind(this, resource)}
              ingredient={this.state[resource]}
              productionLine={this.state.productionLine}
              ignoreRecipe={this.state.ignoreRecipe}
            />
          ))}
        </div>

        <div className={`table-wrapper ${this.state.productionLine}-table`}>
          <div id='controls'>
            <div className='ctlgroup'>
              <ServerSelector onChange={this.handleServerChange} selected={this.state.server} />
              {
                this.state.productionLine !== 'equip' &&
                <PresetSelector
                  onChange={this.handlePresetChange}
                  selected={this.state.selectedPreset}
                  presets={this.state.presets}
                  line={this.state.productionLine}
                  ignoreRecipe={this.state.ignoreRecipe}
                  />
              }
            </div>
            
            <div className='ctlgroup'>
              {
                this.state.productionLine !== 'equip' &&
                <ToggleSwitch
                  name='toggle-ignore-recipe' 
                  update={this.toggleIgnoreRecipe}
                  checked={this.state.ignoreRecipe}
                  >
                  Show All {isDoll ? 'Dolls' : 'Fairies'}
                </ToggleSwitch>
              }
              {
                this.state.productionLine !== 'fairy' &&
                <ToggleSwitch
                  name='toggle-ignore-server' 
                  update={this.toggleIgnoreServer}
                  checked={this.state.ignoreServer}
                  >
                  Show {this.state.productionLine === 'equip' ? 'Equips' : 'Dolls'} in Other Servers
                </ToggleSwitch>
              }
            </div>
            
            {
              this.state.productionLine !== 'equip' &&
              <p>(?) indicates speculated minimum requirements</p>
            }
            <p>Found an inaccuracy or problem? Feel free to open an issue on <a style={{padding: 0}} href='https://github.com/ktucalvin/gflcalc'>GitHub</a>!</p>

            {
              this.state.server !== 'EN' &&
              isDoll &&
              <p className='text-warning'>
                Availability in CN, KR, TW, and JP servers may be inaccurate!
              </p>
            }
          </div>

          <div style={{ overflow: 'auto' }}>
              {this.state.productionLine === 'equip' && <EquipTable server={this.state.server} ignoreServer={this.state.ignoreServer} />}
              {this.state.productionLine === 'fairy' && <FairyTable recipe={this.state} />}
              {isDoll && <DollTable recipe={this.state}/>}
          </div>
        </div>
      </div>
      </Layout>
    )
  }
}

export default App
