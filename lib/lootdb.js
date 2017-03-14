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

// Array for children table population
let childrenArray = [
  {id: 0, childName: 'Billy'},
  {id: 0, childName: 'Shirley'},
  {id: 0, childName: 'Teddy'},
  {id: 0, childName: 'Victor'},
  {id: 0, childName: 'Sally'},
  {id: 0, childName: 'Sue'},
  {id: 0, childName: 'Jim'},
  {id: 0, childName: 'Bob'},
  {id: 0, childName: 'Charley'},
  {id: 0, childName: 'Stan'},
  {id: 0, childName: 'Rosie'},
  {id: 0, childName: 'Patty'},
  {id: 0, childName: 'Peggy'},
  {id: 0, childName: 'Jack'},
  {id: 0, childName: 'Carla'},
]

// Array for toys table population
let toysArray = [
  {id: 0, toyName: 'Tonka Truck'},
  {id: 0, toyName: 'Yoda'},
  {id: 0, toyName: 'Lightsaber'},
  {id: 0, toyName: 'Top'},
  {id: 0, toyName: 'Elmo'},
  {id: 0, toyName: 'Dora'},
  {id: 0, toyName: 'Teddy Bear'},
  {id: 0, toyName: 'Chemistry Set'},
  {id: 0, toyName: 'Microscope'},
  {id: 0, toyName: 'Cabbage Patch Doll'},
  {id: 0, toyName: 'Garbage Pal Kids'},
  {id: 0, toyName: 'Stick and Hoop'},
  {id: 0, toyName: 'Frisbee'},
  {id: 0, toyName: 'Red Rider BB Gun'},
  {id: 0, toyName: 'PS4'},
  {id: 0, toyName: 'Socks'},
  {id: 0, toyName: 'Coal'},
]

// Array for children_toys table population
let childrenToysArray = [
  {id: 0, child_id: 1, toy_id: 1, delivered: -1},
  {id: 0, child_id: 1, toy_id: 2, delivered: -1},
  {id: 0, child_id: 1, toy_id: 3, delivered: -1},
  {id: 0, child_id: 2, toy_id: 4, delivered: -1},
  {id: 0, child_id: 2, toy_id: 5, delivered: -1},
  {id: 0, child_id: 3, toy_id: 6, delivered: -1},
  {id: 0, child_id: 3, toy_id: 7, delivered: -1},
  {id: 0, child_id: 4, toy_id: 8, delivered: -1},
  {id: 0, child_id: 4, toy_id: 9, delivered: -1},
  {id: 0, child_id: 5, toy_id: 10, delivered: -1},
  {id: 0, child_id: 6, toy_id: 11, delivered: -1},
  {id: 0, child_id: 7, toy_id: 12, delivered: -1},
  {id: 0, child_id: 7, toy_id: 13, delivered: -1},
  {id: 0, child_id: 7, toy_id: 14, delivered: -1},
  {id: 0, child_id: 8, toy_id: 15, delivered: -1},
  {id: 0, child_id: 9, toy_id: 16, delivered: -1},
  {id: 0, child_id: 10, toy_id: 17, delivered: -1},
  {id: 0, child_id: 11, toy_id: 1, delivered: -1},
  {id: 0, child_id: 11, toy_id: 2, delivered: -1},
  {id: 0, child_id: 11, toy_id: 3, delivered: -1},
  {id: 0, child_id: 11, toy_id: 4, delivered: -1},
  {id: 0, child_id: 12, toy_id: 5, delivered: -1},
  {id: 0, child_id: 12, toy_id: 6, delivered: -1},
  {id: 0, child_id: 12, toy_id: 7, delivered: -1},
  {id: 0, child_id: 12, toy_id: 8, delivered: -1},
  {id: 0, child_id: 12, toy_id: 9, delivered: -1},
  {id: 0, child_id: 12, toy_id: 10, delivered: -1},
  {id: 0, child_id: 13, toy_id: 11, delivered: -1},
  {id: 0, child_id: 13, toy_id: 12, delivered: -1},
  {id: 0, child_id: 14, toy_id: 13, delivered: -1},
  {id: 0, child_id: 14, toy_id: 14, delivered: -1},
  {id: 0, child_id: 14, toy_id: 15, delivered: -1},
  {id: 0, child_id: 15, toy_id: 17, delivered: -1},
]

// Insert each of the children objects into the database.
const populateChildren = () => {
  childrenArray.forEach(each => {
    db.run(`INSERT INTO children VALUES (
      null,
      "${each.childName}"
    )`)
  })
}
populateChildren()

// Insert each of the toys objects into the database.
const populateToys = () => {
  toysArray.forEach(each => {
    db.run(`INSERT INTO toys VALUES (
      null,
      "${each.toyName}"
    )`)
  })
}
populateToys()

// Insert each of the toys objects into the database.
const populateChildrenToys = () => {
  childrenToysArray.forEach(each => {
    db.run(`INSERT INTO child_toys VALUES (
      null,
      ${each.child_id},
      ${each.toy_id},
      ${each.delivered}
    )`)
  })
}
populateChildrenToys()
