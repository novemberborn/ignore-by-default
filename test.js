'use strict'

const assert = require('assert')
const figures = require('figures')

const actual = require('./').directories()
const expected = actual.slice().sort()

let pass = false
try {
  assert.deepStrictEqual(actual, expected)
  pass = true
} catch {}

console[pass ? 'log' : 'error'](figures[pass ? 'tick' : 'cross'] + ' directories are sorted correctly')
if (!pass) {
  console.error('  got: ' + JSON.stringify(actual, null, 2).split('\n').join('\n  '))
  console.error('  expected: ' + JSON.stringify(expected, null, 2).split('\n').join('\n  '))
  process.exit(1)
}
