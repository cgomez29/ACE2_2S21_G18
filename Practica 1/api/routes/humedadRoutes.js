import { humedadPath } from '../constants.js'
import { readFile, writeFile } from '../helper.js'

const humedadRouter = (app) => {
  app.get('/humedad', (req, res) => {
    readFile(humedadPath, (data) => {
      res.send(data)
    })
  })

  app.post('/humedad', (req, res) => {
    readFile(humedadPath, (data) => {
      const id = Date.now().toString()
      data[id] = req.body

      writeFile(humedadPath, JSON.stringify(data, null, 2), () => {
        res.status(200).send('humedad cargada con éxito')
      })
    })
  })
}

export default humedadRouter
