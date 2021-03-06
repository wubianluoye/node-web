
const pool = require('../mysql/connation')

const bcrypt = require('bcrypt')
const saltRounds = 10


function findAllPswAt(searchInfo = {}, pageInfo = {}) {
  searchInfo = Object.keys(searchInfo).length ? searchInfo : 1
  const limit = pageInfo.limit || 5
  const page = pageInfo.page || 1
  const offset = (page - 1) * limit
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) throw err; // not connected!
      connection.query('SELECT id,username FROM login WHERE ? ORDER BY id LIMIT ?,?', [searchInfo, offset, limit], (error, results) => {

        // if (error) throw error
        connection.query('SELECT COUNT(*) total FROM login', (terr, res) => {
          // if (terr) throw terr
          connection.release();
          return resolve({
            code: error ? 400 : 200,
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

function findPswAt(id) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) throw err; // not connected!
      connection.query('SELECT id,username FROM login WHERE id=?', id, (error, results) => {
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


function updatePswAt(id, info) {
  info.password = bcrypt.hashSync(info.password, saltRounds) // 

  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) throw err; // not connected!
      connection.query('UPDATE login SET ? WHERE id=?', [info, id], (error, results, fields) => {
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


function appendPswAt(info) {
  info.password = bcrypt.hashSync(info.password, saltRounds) // 

  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) throw err; // not connected!
      connection.query('INSERT INTO login SET ? ', info, (error, results, fields) => {
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

function deletePswAt(id) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) throw err; // not connected!
      connection.query('DELETE FROM login WHERE id=?', id, (error, results, fields) => {
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


function checkPswAt(userInfo) {
  const { username, password } = userInfo
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) throw err; // not connected!
      connection.query('SELECT * FROM login WHERE username=?', username, (error, results, fields) => {
        connection.release();
        // if (error) throw error
        if (!results.length) {
          return resolve({
            code: 400,
            message: '用户名不存在'
          })
        }

        if (!bcrypt.compareSync(password, results[0].password)) {
          return resolve({
            code: 400,
            message: '密码错误'
          })
        }

        return resolve({
          code: 200,
          message: 'success',
          data: {
            username
          }
        })
      })
    })
  })
}

module.exports = {
  findPswAt,
  updatePswAt,
  appendPswAt,
  deletePswAt,
  findAllPswAt,
  checkPswAt
}