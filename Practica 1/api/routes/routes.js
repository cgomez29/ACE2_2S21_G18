import { checkExistence } from '../helper.js'
import { HTML } from '../constants.js'

import velocidadRouter from './velocidadRoutes.js'
import humedadRouter from './humedadRoutes.js'
import temperaturaRouter from './temperaturaRoutes.js'
import direccionRouter from './direccionRoutes.js'

const appRouter = (app) => {
  checkExistence()

  app.get('/', (req, res) => {
    res.send(HTML)
  })

  velocidadRouter(app)
  humedadRouter(app)
  temperaturaRouter(app)
  direccionRouter(app)
}

export default appRouter
