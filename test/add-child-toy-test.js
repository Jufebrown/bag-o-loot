`use strict`

const {assert: {isFunction, equal}} = require(`chai`)
const add_child_toy = require(`../lib/add-child-toy`)

describe(`add-child-toy`, () => {
  it(`should be a function`, () => {
    isFunction(add_child_toy)
  })

  it(`should take 3 arguments`, () => {
    equal(add_child_toy.length, 3)
  })
})
