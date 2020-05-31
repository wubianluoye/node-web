const jwt = require('jsonwebtoken')
const privateKey = '$(91237&&^gjfhas%FLADJFL0)*(*(+!@@#$%&fkafjfla'

function setToken(req, res, next) {
  const exp = new Date().getTime() + 1000 * 60 * 60
  req.token = jwt.sign(exp, privateKey)
  next()
}

function checkToken(req, res, next) {
  const token = (req.headers.authorization).split('Bearer ').pop() || ''
  const now = new Date().getTime()

  const exp = jwt.verify(token, privateKey).exp
  if (now > exp) {
    return res.status(422).send('token expaire')
  }
  next()
}


module.exports = {
  setToken,
  checkToken
}