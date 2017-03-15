#!/usr/bin/env node

`use strict`

// Create a database that is saved on disk.
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('lootbag.sqlite', (err) => console.log('Connected'))

const addChildToy = (db, toy, child) => {
  db.run(`INSERT INTO children VALUES (
    null,
    '${child}',
  )`)

  let childId = db.run(`SELECT * FROM children ORDER BY child_id DESC LIMIT 1`)

  console.log('childId', childId)

  db.run(`INSERT INTO toys VALUES (
    null,
    'toy'
  )`)

  db.run(`INSERT INTO child_toys VALUES (
    null,

  )`)
}
