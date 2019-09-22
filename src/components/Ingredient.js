'use strict'
import React from 'react'

const Ingredient = ({ ingredient, name, updateRecipe }) => {
  const gridTemplateColumns = ingredient >= 1000 ? 'repeat(4, 1fr)' : 'repeat(3, 1fr)'
  const isHeavy = ingredient >= 1000
  return (
    <div className='ingredient'>
      <div className='ingredient-name'>
        <img src={`${name}.png`} alt={`${name} icon`} />
        <span>{name}</span>
      </div>
      <div className={`recipe-input ${name}`} style={{ gridTemplateColumns }}>
        {isHeavy && <button className='up' aria-label={`${name} plus one thousand`} onClick={() => updateRecipe(1000)} />}
        <button className='up' aria-label={`${name} plus one hundred`} onClick={() => updateRecipe(100)} />
        <button className='up' aria-label={`${name} plus ten`} onClick={() => updateRecipe(10)} />
        <button className='up' aria-label={`${name} plus one`} onClick={() => updateRecipe(1)} />
        {isHeavy && <p>{Math.floor(ingredient / 1000 % 10)}</p>}

        <p>{Math.floor(ingredient / 100 % 10)}</p>
        <p>{Math.floor(ingredient / 10 % 10)}</p>
        <p>{Math.floor(ingredient % 10)}</p>

        {isHeavy && <button className='down' aria-label={`${name} minus one thousand`} onClick={() => updateRecipe(-1000)} />}
        <button className='down' aria-label={`${name} minus 100`} onClick={() => updateRecipe(-100)} />
        <button className='down' aria-label={`${name} minus 10`} onClick={() => updateRecipe(-10)} />
        <button className='down' aria-label={`${name} minus 1`} onClick={() => updateRecipe(-1)} />
      </div>
    </div>
  )
}

export default Ingredient
