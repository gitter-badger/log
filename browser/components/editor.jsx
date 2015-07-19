'use strict'

import Moment from 'moment'
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

    let tasks = node.value.split('\n\n').map(task => {

      knwl.init(task)

      /* only cares about the first instance (for now) */
      let when = dateTime(knwl.get('dates')[0], knwl.get('times')[0])

      return ({
	when: when,
	body: task
      })
    })

    return done(tasks)


  },
  render () {

    let hint = `Please enter a todo. Make sure to include a date (1/12/2016, APR 23rd, etc) and/or time (12:30 PM, 2 AM). This is a WIP / feedback welcome`

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


function dateTime (date, time) {
  let moment = Moment()

  if (date) {

    if (date.year && typeof date.year === 'number') {
      moment.year(date.year)
    }

    /* expects 0-11 */
    moment.month(--date.month)

    moment.date(date.day)
  }

  if (time) {

    let hour = Number(time.hour)

    switch (time.daynight) {
    case 'AM':
      if (hour === 12) {
	hour += 12
      }
      break
    case 'PM':
      if (hour !== 12) {
	hour += 12
      }
      break
    }

    moment.hour(hour)

    moment.minute(Number(time.minute))
  }

  return moment.format('x')
}
