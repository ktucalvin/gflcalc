import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const ChevronSvg = () => (
  <svg viewBox='0 0 200 173' width={24} xmlns='http://www.w3.org/2000/svg'>
    {/* <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ --> */}
    <g>
      <path transform='rotate(90 100.25,115.75) ' id='svg_3' d='m111.46891,115.75005l-65.71891,-95.00005l43.28109,0l65.71891,95.00005l-65.71891,94.99997l-43.28109,0l65.71891,-94.99997z' />
      <path transform='rotate(90 160.25,55.75) ' id='svg_4' d='m171.46891,115.75004l-65.71891,-95.00004l43.28109,0l65.71891,95.00004l-65.71891,94.99997l-43.28109,0l65.71891,-94.99997z' />
    </g>
  </svg>
)

const ChangeButton = ({ ingredientProps, direction, delta, isDisabled }) => {
  const { ingredient, name, updateRecipe } = ingredientProps
  return (
    <button
      className={direction}
      aria-label={`${direction === 'up' ? 'Increase' : 'Decrease'} ${name} by ${Math.abs(delta)}. ${name} is currently ${ingredient}.`}
      onClick={() => updateRecipe(delta)}
      disabled={isDisabled}
    >
      <ChevronSvg />
    </button>
  )
}

export type IngredientProps = {
  ingredient: number,
  name: string,
  productionLine: string,
  ignoreRecipe: boolean,
  updateRecipe: (delta: number) => void
}

const Ingredient = (props: IngredientProps) => {
  const { ingredient, name, productionLine, ignoreRecipe } = props
  const isHeavy = productionLine  === 'heavy' || productionLine === 'fairy'
  const isDisabled = ignoreRecipe || productionLine === 'equip'
  const data = useStaticQuery(graphql`
    query IngredientIcons {
      allFile(filter: {absolutePath: {regex: "/png/"}}) {
        nodes {
          id
          name
          publicURL
          childImageSharp {
            gatsbyImageData(
              width: 60
              placeholder: TRACED_SVG
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `)

  const gridTemplateColumns = isHeavy ? 'repeat(4, 1fr)' : 'repeat(3, 1fr)'
  const img = data.allFile.nodes.filter(e => e.name === name)[0].childImageSharp.gatsbyImageData
  return (
    <div className='ingredient'>
      <div className='ingredient-name'>
        <GatsbyImage loading='eager' image={img} alt={`${name} icon`} />
        <span>{name}</span>
      </div>
      <div className={`recipe-input ${name}`} style={{ gridTemplateColumns }}>
        {isHeavy && <ChangeButton isDisabled={isDisabled} ingredientProps={props} direction='up' delta={1000} />}
        <ChangeButton isDisabled={isDisabled} ingredientProps={props} direction='up' delta={100} />
        <ChangeButton isDisabled={isDisabled} ingredientProps={props} direction='up' delta={10} />
        <ChangeButton isDisabled={isDisabled} ingredientProps={props} direction='up' delta={1} />

        {isHeavy && <p>{isDisabled ? '-'  : Math.floor(ingredient / 1000 % 10)}</p>}
        <p>{isDisabled ? '-' : Math.floor(ingredient / 100 % 10)}</p>
        <p>{isDisabled ? '-' : Math.floor(ingredient / 10 % 10)}</p>
        <p>{isDisabled ? '-' : Math.floor(ingredient % 10)}</p>

        {isHeavy && <ChangeButton isDisabled={isDisabled} ingredientProps={props} direction='down' delta={-1000} />}
        <ChangeButton isDisabled={isDisabled} ingredientProps={props} direction='down' delta={-100} />
        <ChangeButton isDisabled={isDisabled} ingredientProps={props} direction='down' delta={-10} />
        <ChangeButton isDisabled={isDisabled} ingredientProps={props} direction='down' delta={-1} />
      </div>
    </div>
  )
}

export default Ingredient
