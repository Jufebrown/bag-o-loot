`use strict`

const {assert: {isFunction, equal}} = require(`chai`)
const add_child_toy = require(`../lib/lootbag.js`)

describe(`addChildToy`, () => {
  it(`should be a function`, () => {
    isFunction(addChildToy)
  })

  it(`should take 3 arguments`, () => {
    equal(addChildToy.length, 3)
  })
})
