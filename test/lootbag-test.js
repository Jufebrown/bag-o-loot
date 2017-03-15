`use strict`

const {assert: {isFunction, equal}} = require(`chai`)
const add_child_toy = require(`../lib/add-child-toy`)
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('lootbag.sqlite', (err) => console.log('Connected'))

describe(`add-child-toy`, () => {
  it(`should be a function`, () => {
    isFunction(add_child_toy)
  })

  it(`should take 3 arguments`, () => {
    equal(add_child_toy.length, 3)
  })


  add_child_toy(db, 'BB Gun', 'Sam')
})
