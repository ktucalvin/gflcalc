/* eslint-env jquery */
'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import ProductionCalculator from './components.js'
import Dolls from './dolls.js'
import './index.css'

$(function () {
  $('.hidden').hide()
  $('.hidden').removeClass('hidden')

  const recipe = {
    min: 30,
    max: 999,
    manpower: 30,
    ammunition: 30,
    rations: 30,
    parts: 30,
    sum: 120,
    server: 'EN'
  }
  let calculator

  ReactDOM.render(
    <ProductionCalculator dolls={Dolls} recipe={recipe} ref={calc => { calculator = calc }} />,
    document.getElementById('root')
  )

  function updateDisplay (ingredient) {
    let val = recipe[ingredient] + ''
    while (val.length < 4) { val = '0' + val }
    for (let i = 0; i < 4; i++) {
      $(`.${ingredient} p`).eq(i).text(val.charAt(i))
    }
  }

  $('.recipe-input button').click(function () {
    const ingredient = $(this).parent()[0].className.slice('recipe-input '.length)
    let updatedVal = recipe[ingredient] + parseInt($(this).attr('data-value'))
    recipe[ingredient] = Math.min(recipe.max, Math.max(recipe.min, updatedVal))
    updateDisplay(ingredient)
    recipe.sum = recipe.manpower + recipe.ammunition + recipe.rations + recipe.parts
    calculator.setState(recipe)
  })

  $('.recipe-input button').mouseup(function () {
    setTimeout(() => $(this).blur(), 150)
  })

  $('#toggle-heavy').change(function () {
    if (this.checked) {
      $('.heavy').show()
      $('th.HG').hide()
      $('.recipe-input').css('grid-template-columns', 'repeat(4, 1fr)')
      $('#recipe').addClass('heavy-style')
      $('th.HG').hide()
      recipe.min = recipe.manpower = recipe.ammunition = recipe.rations = recipe.parts = 1000
      recipe.max = 9999
    } else {
      $('.heavy').hide()
      $('th.HG').show()
      $('.recipe-input').css('grid-template-columns', 'repeat(3, 1fr)')
      $('#recipe').removeClass('heavy-style')
      recipe.min = recipe.manpower = recipe.ammunition = recipe.rations = recipe.parts = 30
      recipe.max = 999
    }
    ['manpower', 'ammunition', 'rations', 'parts'].map(str => updateDisplay(str))
    recipe.sum = recipe.manpower + recipe.ammunition + recipe.rations + recipe.parts
    calculator.setState(recipe)
  })

  $('#server-id').change(function (e) {
    recipe.server = $(this).find(':selected').val()
    calculator.setState(recipe)
  })

  $('#toggle-unavailable').change(function () {
    recipe.showAll = this.checked
    calculator.setState(recipe)
  })
})
