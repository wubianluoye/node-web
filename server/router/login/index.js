const express = require('express')
const router = express.Router({ mergeParams: true })
const { checkPswAt } = require('../../controller/admin/passowrd.js')


router.post('/', (req, res) => {
  const info = req.body
  checkPswAt(info).then(r => {
    const msg = { ...r }
    msg.code === 200 && (msg.token = req.token)
    res.send(msg)
  })
})

module.exports = router