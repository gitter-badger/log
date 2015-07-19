'use strict'

import Forage from 'localforage'
import React from 'react'
import Feed from './feed.jsx'
import Editor from './editor.jsx'
import Nav from './nav.jsx'

let App = React.createClass({
  getInitialState () {
    return ({
      data: [],
      editing: false,
      parsing: false
    })
  },
  componentDidMount () {

    /* fetch saved tasks */
    Forage.iterate(task =>  {
      this.setState({
	data: this.state.data.concat([task])
      })
    })
  },
  toggleEditor (e) {
    this.setState({
      editing: !this.state.editing
    })
  },
  parseTask (e) {
    if (!this.state.parsing) {
      this.setState({
	parsing: true
      })
    }
  },
  newTask (tasks) {

    /* push and save */
    this.setState({
      data: this.state.data.concat(tasks),
      editing: false,
      parsing: false
    })

    tasks.forEach(task => Forage.setItem(task.when, task))
  },
  render () {
    return (
	<body>
	  <Feed data={this.state.data} />
	  <Editor parsing={this.state.parsing} editing={this.state.editing} create={this.newTask} />
	  <Nav toggle={this.toggleEditor} parse={this.parseTask} editing={this.state.editing} />
	</body>
    )
  }
})

document.addEventListener('DOMContentLoaded', e => {
  React.render(<App/>, e.target.body)
})
