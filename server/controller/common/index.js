
const pool = require('../mysql/connation')
function findAllAt(table) {
  return new Promise((resolve,reject)=> {
    pool.getConnection(function(err, connection) {
      if (err) throw err; // not connected!
      connection.query( 'SELECT * FROM ?? ', [table], (error, results, fields)=> {
        connection.release();
        if (error) throw error
        return resolve(results)
      });
    });
  })
}



function updateAt(table,id,info) {
  return new Promise((resolve,reject)=> {
    pool.getConnection(function(err, connection) {
      if (err) throw err; // not connected!
      connection.query( 'UPDATE ?? SET ? WHERE id=?', [table,info,id], (error, results, fields)=> {
        connection.release();
        if (error) throw error
        return resolve(results)
      });
    });
  })
}


function appendAt(table,info) {
  return new Promise((resolve,reject)=> {
    pool.getConnection(function(err, connection) {
      if (err) throw err; // not connected!
      connection.query( 'INSERT INTO ?? SET ? ', [table,info], (error, results, fields)=> {
        connection.release();
        if (error) throw error
        return resolve(results)
      });
    });
  })
}

function deleteAt(table,id) {
  return new Promise((resolve,reject)=> {
    pool.getConnection(function(err, connection) {
      if (err) throw err; // not connected!
      connection.query( 'DELETE FROM ?? WHERE id=?', [table,id], (error, results, fields)=> {
        connection.release();
        if (error) throw error
        return resolve(results)
      });
    });
  })
}

module.exports = {
  findAllAt,
  updateAt,
  appendAt,
  deleteAt
}