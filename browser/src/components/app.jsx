'use strict'

import React from 'react'
import Feed from './feed.jsx'
import Nav from './nav.jsx'

let App = React.createClass({
  render () {
    return (
	<body>
	  <Feed />
	  <Nav />
	</body>
    )
  }
})

document.addEventListener('DOMContentLoaded', e => {
  React.render(<App/>, e.target.body)
})
