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
      .limit(100)
      .then((result) => {
        console.log(result)

        const analyzedData = new AnalyzedData({
          velocidad: 0.5,
          humedad: 0.5,
          temperatura: 0.5,
          direccion: 0.5,
          luz: 0.5
        })
        response.send(analyzedData)
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
