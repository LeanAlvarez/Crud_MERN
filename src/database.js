const mongoose = require('mongoose')

const URI = 'mongodb://localhost/mern-tasks'

mongoose.connect(URI)
  .then(db => console.log('Base de Datos conectada'))
  .catch(error => console.log(error))



module.exports = mongoose