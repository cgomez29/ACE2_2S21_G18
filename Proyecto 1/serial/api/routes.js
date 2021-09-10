import RawData from './models/RawData.js'
import AnalyzedData from './models/AnalyzedData.js'

const appRouter = (app) => {
  app.post('/', (request, response) => {
    const rawData = new RawData(request.body)
    rawData
      .save()
      .then(() => {
        response.status(200).send()
      })
      .catch((error) => {
        response.status(400).send(error)
      })
  })

  app.get('/', (request, response) => {
    RawData.find({}).then((result) => {
      response.send(result)
    })
  })

  app.get('/analyzed', (request, response) => {
    response.send('ok')
  })

  app.get('/analyzed/uso', (request, response) => {
    response.send('ok')
  })

  app.get('/analyzed/:dia', (request, response) => {
    const dia = request.params.dia
    response.send('ok')
  })
}

export default appRouter
