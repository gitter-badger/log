'use strict'

import React from 'react/addons'

let classSet = React.addons.classSet

export default React.createClass({
  render () {

    let plusClass = classSet({
      'plus': true,
      'exit': this.props.editing
    })

    return (
	<nav>
	<svg className={plusClass} onClick={this.props.toggle} version="1.1" width="64" height="64">
	    <g fill="#333" transform="translate(16, 16)">
	      <rect y="12" rx="2" ry="2" width="32" height="8" />
	      <rect x="12" rx="2" ry="2" width="8" height="32" />
	    </g>
          </svg>
        </nav>
    )
  }
})
