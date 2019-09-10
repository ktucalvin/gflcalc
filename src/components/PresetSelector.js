'use strict'
import React, { Component } from 'react'

class PresetSelector extends Component {
  constructor (props) {
    super(props)
    this.updatePreset = this.updatePreset.bind(this)
  }

  updatePreset (event) {
    this.props.changePreset(event)
  }

  render () {
    let options = []
    for (const preset in this.props.presets) {
      options.push(<option key={preset} value={preset}>{this.props.presets[preset].text}</option>)
    }
    return (
      <>
        <label htmlFor='recipe-preset'>Recipe Preset: </label>
        <select id='recipe-preset' value={this.props.selected} onChange={this.updatePreset}>
          {options}
        </select>
      </>)
  }
}

export default PresetSelector
