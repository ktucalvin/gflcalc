'use strict'
import React, { Component } from 'react'

export default
class Ingredient extends Component {
  constructor (props) {
    super(props)
    this.state = ['1', '0', '3', '0']
    this.update = delta => {
      this.props.updateRecipe(delta)
      setTimeout(() => document.activeElement.blur(), 150)
    }
  }

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
          {isHeavy && <button class='up' onClick={this.update.bind(this, 1000)} />}
          <button class='up' onClick={this.update.bind(this, 100)} />
          <button class='up' onClick={this.update.bind(this, 10)} />
          <button class='up' onClick={this.update.bind(this, 1)} />
          {isHeavy && <p>{Math.floor(this.props.ingredient / 1000 % 10)}</p>}
          <p>{Math.floor(this.props.ingredient / 100 % 10)}</p>
          <p>{Math.floor(this.props.ingredient / 10 % 10)}</p>
          <p>{Math.floor(this.props.ingredient % 10)}</p>
          {isHeavy && <button class='down' onClick={this.update.bind(this, -1000)} />}
          <button class='down' onClick={this.update.bind(this, -100)} />
          <button class='down' onClick={this.update.bind(this, -10)} />
          <button class='down' onClick={this.update.bind(this, -1)} />
        </div>
      </div>
    )
  }
}
