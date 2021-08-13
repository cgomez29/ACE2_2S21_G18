import { direccionPath } from '../constants.js'
import { readFile, writeFile } from '../helper.js'

const direccionRouter = (app) => {
  app.get('/direccion', (req, res) => {
    readFile(direccionPath, (data) => {
      res.send(data)
    })
  })

  app.post('/direccion', (req, res) => {
    readFile(direccionPath, (data) => {
      const id = Date.now().toString()
      data[id] = req.body

      writeFile(direccionPath, JSON.stringify(data, null, 2), () => {
        res.status(200).send('direccion cargada con éxito')
      })
    })
  })
}

export default direccionRouter
