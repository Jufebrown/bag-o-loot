`use strict`

module.exports = (db, toy, child) => {
  let childId
  let toyId

  db.run(`INSERT INTO children VALUES (
    null,
    '${child}'
  )`)

  db.each(`SELECT * FROM children ORDER BY child_id DESC LIMIT 1`, (err, row) => {
    childId = row.child_id
    console.log('childId:', childId);
  })

  db.run(`INSERT INTO toys VALUES (
    null,
    '${toy}'
  )`)

  db.each(`SELECT * FROM toys ORDER BY toy_id DESC LIMIT 1`, (err, row) => {
    toyId = row.toy_id
    console.log('toyId:', toyId);
  })

  db.run(`INSERT INTO child_toys VALUES (
    null,
    ${childId},
    ${toyId},
    -1
  )`)
}
