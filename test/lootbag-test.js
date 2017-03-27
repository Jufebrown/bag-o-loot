`use strict`

const {assert: {isFunction, equal}} = require(`chai`)
const {lootbag: {addChildToy}} = require(`../lootbag`)

describe(`addChildToy`, () => {
  it(`should be a function`, () => {
    isFunction(add_child_toy)
  })

  it(`should take 3 arguments`, () => {
    equal(add_child_toy.length, 3)
  })


  addChildToy('BB Gun', 'Sam')
})
