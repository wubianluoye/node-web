const express = require('express')
const router = express.Router({ mergeParams: true })
const { checkPswAt } = require('../../controller/admin/passowrd.js')


router.post('/', (req, res) => {
  const info = req.body
  checkPswAt(info).then(r => {
    res.send({
      success: r,
      token: req.token
    })
  })
})

module.exports = router