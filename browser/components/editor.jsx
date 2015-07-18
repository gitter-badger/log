'use strict'

import React from 'react/addons'
import Knwl from 'knwl.js'


let classSet = React.addons.classSet

let knwl = new Knwl('english')

export default React.createClass({
  componentDidUpdate () {

    if (this.props.editing) {
      this.refs.textArea.getDOMNode().focus()
    }

    if (this.props.parsing) {

      let node = React.findDOMNode(this.refs.textArea)

      this.parseTask(node, task => {

	node.value = ''

	this.props.create(task)

      })

    }
  },
  parseTask (node, done) {

    //knwl.init(node.value)

    let task = {date: Date.now(), body: node.value}

    return done(task)
  },
  render () {

    let hint = ` enter a todo `

    let formClass = classSet({
      'editing': this.props.editing
    })

    return (
	<form className={formClass}>
	  <textarea ref='textArea' placeholder={hint} />
	</form>
    )
  }
})
