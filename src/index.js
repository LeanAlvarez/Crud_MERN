const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

const { mongoose } = require('./database')


//settings
app.set('port', process.env.PORT || 3000)

//middlewares
app.use(morgan('dev'))
// app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//routes
app.use('/api/tasks',require('./routes/task.routes'))


//statics files
app.use(express.static(path.join(__dirname, 'public')))


//inicializacion del servidor
app.listen(app.get('port'), () =>{
  console.log(`Servidor funcionando en puerto: ${app.get('port')}`)
})
