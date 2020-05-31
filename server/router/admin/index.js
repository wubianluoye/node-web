const express = require('express')
const router = express.Router({ mergeParams: true })
const {
  findPswAt,
  updatePswAt,
  appendPswAt,
  deletePswAt,
  findAllPswAt
} = require('../../controller/admin/passowrd.js')

router.post('/', (req, res) => {
  const info = req.body
  appendPswAt(info).then(r => {
    res.send('success')
  })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id

  deletePswAt(id).then(r => {
    res.send('success')
  })
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  const info = req.body

  updatePswAt(id, info).then(r => {
    res.send('success')
  })
})

router.get('/list', (req, res) => {
  const page = req.query.page
  const query = { ...req.query }
  delete query.page
  findAllPswAt(query, page).then(r => {
    res.send({
      code: 200,
      data: r
    })
  })
})

router.get('/:id', (req, res) => {
  findPswAt(req.query.id).then(r => {
    res.send({
      code: 200,
      data: r
    })
  })
})




module.exports = router