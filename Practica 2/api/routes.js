import RawData from './models/RawData.js'
import AnalyzedData from './models/AnalyzedData.js'
import getStatus from './helpers/getStatus.js'

const appRouter = (app) => {
  app.post('/', (request, response) => {
    const data = request.body
    const fecha = new Date()
    const rawData = new RawData({ ...data, fecha })

    rawData
      .save()
      .then(() => {
        response.status(200).send()
      })
      .catch((error) => {
        response.status(500).send(error)
      })
  })

  app.get('/', (request, response) => {
    RawData.find({})
      .sort({ fecha: -1 })
      .limit(1)
      .then((result) => {
        response.send(result)
      })
  })

  app.get('/getStatus', (request, response) => {
    RawData.find({})
    .then((result) => {
      const jsonR = {
        status: getStatus(result)
      }
      response.send(jsonR)
    })
  })
}

export default appRouter
