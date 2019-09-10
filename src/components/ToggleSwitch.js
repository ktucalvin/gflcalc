'use strict'
import React, { Component } from 'react'

class ToggleSwitch extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inFocus: false
    }
    this.focus = this.focus.bind(this)
  }

  // Ensures css style only applies when focus
  // is gained through keyboard, not mouse
  focus (e) {
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
              onKeyUp={this.focus}
              onBlur={() => this.setState({ inFocus: false })}
              aria-label={this.props.children}
            />
            <span className={this.state.inFocus ? 'knobfocus' : ''} />
          </label>
          <span>{this.props.children}</span>
        </div>
      </div>
    )
  }
}

export default ToggleSwitch
