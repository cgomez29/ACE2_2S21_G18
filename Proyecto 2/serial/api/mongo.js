import mongoose from 'mongoose'
import { CONNECTION_STRING } from './constants.js'

mongoose
  .connect(CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Conexión a la base de datos exitosa')
  })
  .catch((error) => console.log('Error al conectar a la base de datos', error))
