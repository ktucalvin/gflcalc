import React from 'react'

const ServerSelector = ({ selected, onChange }) => (
  <div className='selection'>
    <label htmlFor='server-id'>Server: </label>
    {/* eslint-disable-next-line jsx-a11y/no-onchange */}
    <select id='server-id' value={selected} onChange={onChange}>
      <option value='EN'>EN (Sunborn)</option>
      <option value='KR'>KR (X.D. Global)</option>
      <option value='CN'>CN (Bilibili/Digital Sky)</option>
      <option value='TW'>TW (Tianxia Game)</option>
      <option value='JP'>JP (Sunborn)</option>
    </select>
    <span className='select-dropdown'>▼</span>
  </div>
)

export default ServerSelector
