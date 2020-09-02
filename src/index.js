'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import './index.css'

import './vendor/modernizr-custom'

document.documentElement.classList.remove('no-js')

ReactDOM.render(<App />, document.getElementById('root'))
