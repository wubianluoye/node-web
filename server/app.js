const express = require('express')
const cors = require('cors')
const app = express()


const { checkToken, setToken } = require('./middleware/checkJwt')
const userRouter = require('./router/user')
const adminRouter = require('./router/admin')
const loginRouter = require('./router/login')

app.use(cors()) // 跨域
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.use('/api/user', checkToken, userRouter)
app.use('/api/admin', checkToken, adminRouter)
app.use('/api/login', setToken, loginRouter)


app.use('/static', express.static(__dirname + './static')) // 静态文件夹


const port = 3000
app.listen(port, () => { console.log('serve start port:', port) })
