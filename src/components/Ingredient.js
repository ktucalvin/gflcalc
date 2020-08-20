'use strict'
import React from 'react'

const ChevronSvg = () => (
  <svg viewBox='0 0 200 173' width={24} xmlns='http://www.w3.org/2000/svg'>
    {/* <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ --> */}
    <g>
      <path transform='rotate(90 100.25,115.75) ' id='svg_3' d='m111.46891,115.75005l-65.71891,-95.00005l43.28109,0l65.71891,95.00005l-65.71891,94.99997l-43.28109,0l65.71891,-94.99997z' />
      <path transform='rotate(90 160.25,55.75) ' id='svg_4' d='m171.46891,115.75004l-65.71891,-95.00004l43.28109,0l65.71891,95.00004l-65.71891,94.99997l-43.28109,0l65.71891,-94.99997z' />
    </g>
  </svg>
)

const ChangeButton = ({ ingredientProps, direction, delta }) => {
  const { ingredient, name, updateRecipe } = ingredientProps
  return (
    <button
      className={direction}
      aria-label={`${direction === 'up' ? 'Increase' : 'Decrease'} ${name} by ${Math.abs(delta)}. ${name} is currently ${ingredient}.`}
      onClick={() => updateRecipe(delta)}
    >
      <ChevronSvg />
    </button>
  )
}

const Ingredient = (props) => {
  const { ingredient, name } = props
  const gridTemplateColumns = ingredient >= 1000 ? 'repeat(4, 1fr)' : 'repeat(3, 1fr)'
  const isHeavy = ingredient >= 1000
  return (
    <div className='ingredient'>
      <div className='ingredient-name'>
        <img src={`${name}.png`} alt={`${name} icon`} />
        <span>{name}</span>
      </div>
      <div className={`recipe-input ${name}`} style={{ gridTemplateColumns }}>
        {isHeavy && <ChangeButton ingredientProps={props} direction='up' delta={1000} />}
        <ChangeButton ingredientProps={props} direction='up' delta={100} />
        <ChangeButton ingredientProps={props} direction='up' delta={10} />
        <ChangeButton ingredientProps={props} direction='up' delta={1} />

        {isHeavy && <p>{Math.floor(ingredient / 1000 % 10)}</p>}
        <p>{Math.floor(ingredient / 100 % 10)}</p>
        <p>{Math.floor(ingredient / 10 % 10)}</p>
        <p>{Math.floor(ingredient % 10)}</p>

        {isHeavy && <ChangeButton ingredientProps={props} direction='down' delta={-1000} />}
        <ChangeButton ingredientProps={props} direction='down' delta={-100} />
        <ChangeButton ingredientProps={props} direction='down' delta={-10} />
        <ChangeButton ingredientProps={props} direction='down' delta={-1} />
      </div>
    </div>
  )
}

export default Ingredient
