'use strict'

var assert = require('assert')
var figures = require('figures')

var actual = require('./').directories()
var expected = actual.slice().sort()

var pass = false
try {
  assert.deepEqual(actual, expected)
  pass = true
} catch (err) {}

console[pass ? 'log' : 'error'](figures[pass ? 'tick' : 'cross'] + ' directories are sorted correctly')
if (!pass) {
  console.error('  got: ' + JSON.stringify(actual, null, 2).split('\n').join('\n  '))
  console.error('  expected: ' + JSON.stringify(expected, null, 2).split('\n').join('\n  '))
  process.exit(1)
}
