
const pool = require('../mysql/connation')
function findListAt(table, searchInfo = {}, pageInfo = {}) {
  // 当查询条件没有时怎么处理？？？？？？？？
  // 比如初始化列表时是不带查询过来的 user/list, 
  // 这种是没有查询参数，但还是会返回第一页数据
  // 
  // 2.当查询时user/list?page=1&id=1&name=zhangsan这种是有查询参数
  searchInfo = Object.keys(searchInfo).length ? searchInfo : 1
  const limit = pageInfo.limit || 5
  const page = pageInfo.page || 1
  const offset = (page - 1) * limit

  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) throw err; // not connected!
      connection.query('SELECT * FROM ?? WHERE ? ORDER BY(id) LIMIT ?,?', [table, searchInfo, offset, limit], (error, results) => {
        if (error) throw error
        connection.query('SELECT COUNT(*) total FROM ??', [table], (terr, res) => {
          if (terr) throw terr
          connection.release();

          return resolve({
            page: {
              currpage: page,
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
        if (error) throw error
        connection.release();
        return resolve(results[0])
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
        if (error) throw error
        return resolve(results)
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
        if (error) throw error
        return resolve(results)
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
        if (error) throw error
        return resolve(results)
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