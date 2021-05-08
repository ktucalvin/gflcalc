import React from 'react'

const PresetSelector = ({ presets, selected, onChange, line, ignoreRecipe }) => (
  <div id='preset-select' className='selection'>
    <label htmlFor='recipe-preset'>Recipe Preset: </label>
    {/* eslint-disable-next-line jsx-a11y/no-onchange */}
    <select id='recipe-preset' value={selected} onChange={onChange} disabled={ignoreRecipe}>
      {
        presets.map((preset,index) =>
          <option key={`${line}-${preset.text}`} value={index}>{preset.text}</option>
        )
      }
    </select>
    <span className='select-dropdown'>▼</span>
  </div>
)

export default PresetSelector
