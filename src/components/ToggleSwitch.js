'use strict'
import React, { Component } from 'react'

class ToggleSwitch extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inFocus: false
    }
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  // Ensures css style only applies when focus
  // is gained through keyboard, not mouse
  handleKeyUp (e) {
    if (e.key === 'Tab') {
      this.setState({ inFocus: true })
    }
  }

  render () {
    return (
      <div className='toggle'>
        <div>
          <label className='switch' htmlFor={this.props.name}>
            <input
              id={this.props.name}
              type='checkbox'
              onChange={this.props.update.bind(this)}
              onKeyUp={this.handleKeyUp}
              onBlur={() => this.setState({ inFocus: false })}
              aria-label={this.props.children}
            />
            <span className={this.state.inFocus ? 'knobfocus' : null} />
          </label>
          <span>{this.props.children}</span>
        </div>
      </div>
    )
  }
}

export default ToggleSwitch
