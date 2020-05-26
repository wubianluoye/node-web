var express = require('express');
var router = express.Router();
const { findListAt, updateAt, appendAt, deleteAt } = require('../controller/common/index')

router.post('/:index', (req, res) => {
  const table = req.params.index
  const info = req.body
  appendAt(table, info).then(r => {
    res.send('success')
  })
})

router.delete('/:index/:id', (req, res) => {
  const table = req.params.index
  const id = req.params.id

  deleteAt(table, id).then(r => {
    res.send('success')
  })
})

router.put('/:index/:id', (req, res) => {
  const table = req.params.index
  const id = req.params.id
  const info = req.body

  updateAt(table, id, info).then(r => {
    res.send('success')
  })
})

router.get('/:index', (req, res) => {
  const table = req.params.index
  const page = req.query.page
  const query = {...req.query}
  delete query.page

  findListAt(table, query, page).then(r => {
    res.send({
      code: 200,
      data: r
    })
  })
})

module.exports = router