import { velocidadPath } from '../constants.js'
import { readFile, writeFile } from '../helper.js'

const velocidadRouter = (app) => {
  app.get('/velocidad', (req, res) => {
    readFile(velocidadPath, (data) => {
      res.send(data)
    })
  })

  app.post('/velocidad', (req, res) => {
    readFile(velocidadPath, (data) => {
      const id = Date.now().toString()
      data[id] = req.body

      writeFile(velocidadPath, JSON.stringify(data, null, 2), () => {
        res.status(200).send('Velocidad cargada con éxito')
      })
    })
  })
}

export default velocidadRouter
