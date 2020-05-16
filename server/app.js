const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const Indexrouter = require('./router/index')
const app = express()


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))


app.use('/static', express.static(__dirname+'./static'))
app.use('/', Indexrouter)


const port = 3000
app.listen(port, ()=> {console.log('serve start port:', port)})
