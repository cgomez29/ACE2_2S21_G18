import { temperaturaPath } from '../constants.js'
import { readFile, writeFile } from '../helper.js'

const temperaturaRouter = (app) => {
  app.get('/temperatura', (req, res) => {
    readFile(temperaturaPath, (data) => {
      res.send(data)
    })
  })

  app.post('/temperatura', (req, res) => {
    readFile(temperaturaPath, (data) => {
      const id = Date.now().toString()
      data[id] = req.body

      writeFile(temperaturaPath, JSON.stringify(data, null, 2), () => {
        res.status(200).send('Temperatura cargada con éxito')
      })
    })
  })
}

export default temperaturaRouter
