'use strict'

import React from 'react'
import Version from './version.jsx'
import Package from '../../../package.json'

document.addEventListener('DOMContentLoaded', e => {
  React.render(<Version semver={Package.version}/>, e.target.body)
})
