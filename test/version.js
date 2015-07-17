'use strict'

var React = require('react/addons')
var Code = require('code')
var Lab = require('lab')

var Version = require('../browser/src/components/version.jsx')
var Package = require('../package.json')

var lab = exports.lab = Lab.script()
var utils = React.addons.TestUtils

global.document = require('jsdom').jsdom()
global.window = global.document.defaultView

lab.experiment('Version', function () {

  lab.test('it renders', function (done) {

    var props = { semver: Package.version }
    var element = React.createElement(Version, props)
    var node = utils.renderIntoDocument(element)

    Code.expect(node.getDOMNode().textContent).to.equal(Package.version)

    delete global.document
    delete global.window
    return done()
  })
})
