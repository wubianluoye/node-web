const express = require('express')
const router = express.Router({ mergeParams: true }) // mergeParams 将参数传递下去
const { findAt, findListAt, updateAt, appendAt, deleteAt } = require('../../controller/common/index')

router.post('/', (req, res) => {
  const info = req.body
  appendAt('user', info).then(r => {
    res.send('success')
  })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id

  deleteAt('user', id).then(r => {
    res.send('success')
  })
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  const info = req.body

  updateAt('user', id, info).then(r => {
    res.send('success')
  })
})

router.get('/', (req, res) => {
  const page = req.query.page
  const query = {...req.query}
  delete query.page

  findListAt('user', query, {page}).then(r => {
    res.send({
      code: 200,
      data: r
    })
  })
})

router.get('/:id', (req, res) => {
  findAt('child', req.query.id).then(r => {
    res.send({
      code: 200,
      data: r
    })
  })
})

module.exports = router