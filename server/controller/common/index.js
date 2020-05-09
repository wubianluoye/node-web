
const pool = require('../mysql')


class poolFn {

  constructor(obj){
    this.table = obj.table
    this.query = obj.query
    this.pageInfo = obj.pageInfo
  }

  getInfoById(){
    const sql = `SELECT * FROM ? WHERE id = ?`
    pool.query(sql,this.table,this.id, (err, res)=>{
      pool.release()
      if(err) {
        return err
      }
      return res
    })
  }
}

module.exports = {
  queryBy: new poolFn()
}