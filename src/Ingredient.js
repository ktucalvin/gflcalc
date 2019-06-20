'use strict'
import React, { Component } from 'react'

export default
class Ingredient extends Component {
  render () {
    const gridTemplateColumns = this.props.ingredient >= 1000 ? 'repeat(4, 1fr)' : 'repeat(3, 1fr)'
    const isHeavy = this.props.ingredient >= 1000
    return (
      <div class='ingredient'>
        <div class='ingredient-name'>
          <img src={`${this.props.name}.png`} alt={`${this.props.name} icon`} />
          <span>{this.props.name}</span>
        </div>
        <div class={`recipe-input ${this.props.name}`} style={{ gridTemplateColumns }} >
          {isHeavy && <button class='up' aria-label={`${this.props.name} plus one thousand`} onClick={() => this.props.updateRecipe(1000)} />}
          <button class='up' aria-label={`${this.props.name} plus one hundred`} onClick={() => this.props.updateRecipe(100)} />
          <button class='up' aria-label={`${this.props.name} plus ten`} onClick={() => this.props.updateRecipe(10)} />
          <button class='up' aria-label={`${this.props.name} plus one`} onClick={() => this.props.updateRecipe(1)} />
          {isHeavy && <p>{Math.floor(this.props.ingredient / 1000 % 10)}</p>}
          <p>{Math.floor(this.props.ingredient / 100 % 10)}</p>
          <p>{Math.floor(this.props.ingredient / 10 % 10)}</p>
          <p>{Math.floor(this.props.ingredient % 10)}</p>
          {isHeavy && <button class='down' aria-label={`${this.props.name} minus one thousand`} onClick={() => this.props.updateRecipe(-1000)} />}
          <button class='down' aria-label={`${this.props.name} minus 100`} onClick={() => this.props.updateRecipe(-100)} />
          <button class='down' aria-label={`${this.props.name} minus 10`} onClick={() => this.props.updateRecipe(-10)} />
          <button class='down' aria-label={`${this.props.name} minus 1`} onClick={() => this.props.updateRecipe(-1)} />
        </div>
      </div>
    )
  }
}
