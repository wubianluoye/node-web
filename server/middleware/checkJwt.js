const jwt = require('jsonwebtoken')
const privateKey = '$(91237&&^gjfhas%FLADJFL0)*(*(+!@@#$%&fkafjfla'

function setToken(req, res, next) {
  const exp = new Date().getTime() + 1000 * 60 * 60
  req.token = jwt.sign({ exp: exp }, privateKey)
  next()
}

function checkToken(req, res, next) {
  const now = new Date().getTime()

  const token = req.headers.authorization && (req.headers.authorization).split('Bearer ').pop() || ''
  const exp = jwt.verify(token, privateKey).exp

  console.log(now,exp)
  if (now > exp) {
    return res.status(422).send({
      code: 422,
      message: 'token expaire'
    })
  }
  next()
}


module.exports = {
  setToken,
  checkToken
}