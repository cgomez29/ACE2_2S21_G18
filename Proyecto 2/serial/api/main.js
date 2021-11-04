import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import './mongo.js'

import appRouter from './routes.js'
import { PORT } from './constants.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))

appRouter(app)

const server = app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})

server.on('error', (err) => {
  console.error(err)
})

process.on('SIGINT', () => {
  server.close(() => {
    console.log('Servidor detenido')
    process.exit(0)
  })
})

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Servidor detenido')
    process.exit(0)
  })
})
