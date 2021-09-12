import RawData from './models/RawData.js'
import AnalyzedData from './models/AnalyzedData.js'
import { horarioUso } from './helpers/horarioUso.js'

const appRouter = (app) => {
  app.post('/', (request, response) => {
    const {peso, proximidad} = request.body
    const fecha = new Date()
    const rawData = new RawData({ peso, proximidad, fecha})
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
    const dateI = new Date(dia+', 00:00:00')
    const dateF = new Date(dia+', 23:59:59')
    const rawDate = RawData.find({ "$and" : [{"fecha" : {"$gte" : dateI}}, {"fecha" : {"$lte" : dateF}}] })
    .then(result => {
      response.send(horarioUso(result))
    })
    .catch((error) => {
      response.status(400).send(error)
    })
  })
}

export default appRouter
