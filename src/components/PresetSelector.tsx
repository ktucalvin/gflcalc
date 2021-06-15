import React from 'react'
import type { Preset } from '../common/gflcalc'

const PresetSelector = ({ presets, selected, onChange, line, ignoreRecipe }) => (
  <div id='preset-select' className='selection'>
    <label htmlFor='recipe-preset'>Recipe Preset: </label>
    {/* eslint-disable-next-line jsx-a11y/no-onchange */}
    <select id='recipe-preset' value={selected} onChange={onChange} disabled={ignoreRecipe}>
      {
        presets.map((preset: Preset, index: number) =>
          <option key={`${line}-${preset.text}`} value={index}>{preset.text}</option>
        )
      }
    </select>
    <span className='select-dropdown'>▼</span>
  </div>
)

export default PresetSelector
