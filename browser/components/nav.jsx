'use strict'

import React from 'react/addons'

let classSet = React.addons.classSet

export default React.createClass({
  render () {

    let toggleClass = classSet({
      'toggle': true,
      'editing': this.props.editing
    })

    let checkClass = classSet({
      'checkMark': true,
      'editing': this.props.editing
    })

    return (
	<nav>
	  <svg className={toggleClass} onClick={this.props.toggle} version="1.1" width="96" height="96">
	    <g fill="#8A8A8A" transform="translate(32, 32)" >
	      <rect y="12" rx="2" ry="2" width="32" height="8" />
	      <rect x="12" rx="2" ry="2" width="8" height="32" />
	    </g>
          </svg>
	  <svg className={checkClass} onClick={this.props.parse} version="1.1"
             width="96" height="96" >
	    <g fill="#1ABC9C" transform="translate(32, 32)">
	      <rect x="12" rx="2" ry="2" width="8" height="32" transform="rotate(45 16 16)" />
	      <rect y="13" rx="2" ry="2" width="8" height="16" transform="rotate(135 4 21)" />
	    </g>
          </svg>
        </nav>
    )
  }
})
