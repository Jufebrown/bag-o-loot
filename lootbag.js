#!/usr/bin/env node

`use strict`

// Create a database that is saved on disk.
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('lootbag.sqlite', (err) => console.log('Connected'))

const dropChildren = () => {
  db.run(`DROP TABLE children`)
}

dropChildren()

const dropToys = () => {
  db.run(`DROP TABLE toys`)
}

dropToys()

const dropChildToys = () => {
  db.run(`DROP TABLE child_toys`)
}

dropChildToys()

//creates children table
db.run(`CREATE TABLE IF NOT EXISTS children (
  child_id INTEGER PRIMARY KEY AUTOINCREMENT,
  child_name TEXT
)`)

//creates toys table
db.run(`CREATE TABLE IF NOT EXISTS toys (
  toy_id INTEGER PRIMARY KEY AUTOINCREMENT,
  toy_name TEXT
)`)

//creates child_toys join table
db.run(`CREATE TABLE IF NOT EXISTS child_toys (
  child_toys_id INTEGER PRIMARY KEY AUTOINCREMENT,
  child_id INTEGER,
  toy_id INTEGER,
  delivered INTEGER,
  FOREIGN KEY(child_id) REFERENCES children(child_id),
  FOREIGN KEY(toy_id) REFERENCES toys(toy_id)
)`)
