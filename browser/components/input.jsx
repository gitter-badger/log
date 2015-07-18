'use strict'

import React from 'react'

export default React.createClass({
  componentDidUpdate () {
    if (this.props.active) {
      this.refs.textArea.getDOMNode().focus()
    }
  },
  render () {
    return (
	<form style={{display: this.props.active ? 'block' : 'none'}}>
	  <textarea ref='textArea' />
	</form>
    )
  }
})
