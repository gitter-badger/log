'use strict'

import React from 'react'

export default React.createClass({
  render () {

    var todos = this.props.data.map(function (todo) {
      return (
	  <article>
	    <date>{todo.date}</date>
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
