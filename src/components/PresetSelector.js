'use strict'
const PresetSelector = ({ presets, selected, onChange }) => (
  <div id='preset-select' className='selection'>
    <label htmlFor='recipe-preset'>Recipe Preset: </label>
    <select id='recipe-preset' value={selected} onChange={onChange}>
      {
        Object.keys(presets).map(name =>
          <option key={name} value={name}>{presets[name].text}</option>
        )
      }
    </select>
    <span className='select-dropdown'>▼</span>
  </div>
)

export default PresetSelector
