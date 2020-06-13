
const pool = require('../mysql/connation')
function findListAt(table, searchInfo = {}, pageInfo = {}) {
  searchInfo = Object.keys(searchInfo).length ? searchInfo : 1
  const limit = pageInfo.limit || 5
  const page = pageInfo.page || 1
  const offset = (page - 1) * limit

  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) throw err; // not connected!
      connection.query('SELECT * FROM ?? WHERE ? ORDER BY(id) LIMIT ?,?', [table, searchInfo, offset, limit], (error, results) => {
        // if (error) throw error
        connection.query('SELECT COUNT(*) total FROM ??', [table], (terr, res) => {
          // if (terr) throw terr
          connection.release();

          return resolve({
            code: error ? 400 : 200,
            page: {
              currpage: +page,
              limit,
              total: res[0].total
            },
            result: results
          })

        })
      })
    })
  })
}

function findAt(table, id) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) throw err; // not connected!
      connection.query('SELECT * FROM ?? WHERE id=?', [table, id], (error, results) => {
        // if (error) throw error
        connection.release();
        return resolve({
          code: error ? 400 : 200,
          data: results[0] || {}
        })
      })
    })
  })
}


function updateAt(table, id, info) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) throw err; // not connected!
      connection.query('UPDATE ?? SET ? WHERE id=?', [table, info, id], (error, results, fields) => {
        connection.release();
        // if (error) throw error
        return resolve({
          code: error ? 400 : 200,
          message: error && error.sqlMessage || 'success'
        })
      })
    })
  })
}


function appendAt(table, info) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) throw err; // not connected!
      connection.query('INSERT INTO ?? SET ? ', [table, info], (error, results, fields) => {
        connection.release();
        // if (error) throw error
        return resolve({
          code: error ? 400 : 200,
          message: error && error.sqlMessage || 'success'
        })
      })
    })
  })
}

function deleteAt(table, id) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) throw err; // not connected!
      connection.query('DELETE FROM ?? WHERE id=?', [table, id], (error, results, fields) => {
        connection.release();
        // if (error) throw error
        return resolve({
          code: error ? 400 : 200,
          message: error && error.sqlMessage || 'success'
        })
      })
    })
  })
}

module.exports = {
  findAt,
  updateAt,
  appendAt,
  deleteAt,
  findListAt,
}
