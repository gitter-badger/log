'use strict'

import Moment from 'moment'
import React from 'react'

export default React.createClass({
  render () {

    var todos = this.props.data.map(function (todo) {

      let moment = Moment(todo.when, 'x').format()

      return (
	  <article>
	    <date>{moment}</date>
	    <p>{todo.body}</p>
	  </article>
      )
    })

    return (
    	<main>
	  {todos}
        </main>
    )
  }
})
