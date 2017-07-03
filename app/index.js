'use strict'

function requireAll (r) {
  r.keys().forEach(r)
}

require('angular')
window.jQuery = require('jquery')
require('angular-ui-router')
require('angular-ui-bootstrap')
require('ng-infinite-scroll/build/ng-infinite-scroll.js')
require('./scripts/app')
requireAll(require.context('./', true, /\.js$/))
requireAll(require.context('./', true, /\.html$/))
requireAll(require.context('./', true, /\.css$/))
requireAll(require.context('./', true, /\.scss$/))
