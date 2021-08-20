import { checkExistence, readFile, writeFile } from './helper.js'
import { DATA_PATH } from './constants.js'

const appRouter = (app) => {
  checkExistence()

  app.get('/', (req, res) => {
    readFile(DATA_PATH, (data) => {
      const keys = Object.keys(data)

      if (!keys.length) return res.status(400).send('No hay datos que retornar')

      const lastKey = keys[keys.length - 1]
      const lastData = data[lastKey]
      res.send(lastData)
    })
  })

  app.post('/', (req, res) => {
    readFile(DATA_PATH, (data) => {
      const id = Date.now().toString()
      data[id] = req.body

      writeFile(DATA_PATH, JSON.stringify(data, null, 2), () => {
        res.status(200).send('Datos cargada con éxito')
      })
    })
  })
}

export default appRouter
