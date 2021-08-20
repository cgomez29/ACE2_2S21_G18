import express from 'express'
import appRouter from './routes.js'

import { PORT } from './constants.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

appRouter(app)

const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${server.address().port}`)
})
