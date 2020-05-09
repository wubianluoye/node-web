const mysql = require('mysql')

var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : '3306',
  user            : 'root',
  password        : '123456',
  database        : 'mytest'
});
 
pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

// function getConnection(){
//   pool.getConnection(function(err, connection) {
//     if (err) throw err; // not connected!
//     new Promise(rej,res).then(res=>{
//       pool.release()
//       return res
//     }).catch(rej =>{
//       return rej
//     })
//   })
// }

module.exports = pool