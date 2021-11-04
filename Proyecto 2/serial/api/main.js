import express from 'express'
import cors from 'cors'
import './mongo.js'

import appRouter from './routes.js'
import { PORT } from './constants.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

appRouter(app)

const server = app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${server.address().port}`)
})
