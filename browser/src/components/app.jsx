'use strict'

import React from 'react'
import Feed from './feed.jsx'
import Input from './input.jsx'
import Nav from './nav.jsx'

let App = React.createClass({
  getInitialState () {
    /* dummy data */
    return ({
      feed: [
	{ date: 'Dec 16th 2005', body: 'Make breakfast' },
	{ date: 'Oct 12th 2011', body: 'Sleep on the couch' },
	{ date: 'March 1st 2014', body: 'fix the toaster' },
	{ date: 'March 3rd 2014', body: 'eat all of the shoes' },
	{ date: 'March 14th 2014', body: 'watch a bug\'s life' },
	{ date: 'June 2nd 2015', body: 'Swim to the bahamalamas' },
	{ date: 'March 18th 2016', body: 'fix the toaster (again)' },
	{ date: 'Dec 20th 3030', body: 'build a time machine' },
	{ date: 'June 2nd 2015', body: 'Swim to the bahamalamas' },
	{ date: 'March 18th 2016', body: 'stop breaking the toaster' },
	{ date: 'June 2nd 2015', body: 'Swim to the bahamalamas (again)' },
	{ date: 'March 18th 2016', body: 'stalk Brad Pitt' }],
      input: false
    })
  },
  toggleInput (e) {
    this.setState({
      input: !this.state.input
    })
  },
  render () {
    return (
	<body>
	  <Feed data={this.state.feed} />
	  <Input active={this.state.input} />
	  <Nav toggle={this.toggleInput} />
	</body>
    )
  }
})

document.addEventListener('DOMContentLoaded', e => {
  React.render(<App/>, e.target.body)
})
