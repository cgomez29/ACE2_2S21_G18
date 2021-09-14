import RawData from './models/RawData.js'
import AnalyzedData from './models/AnalyzedData.js'
import getHorarioUso from './helpers/getHorarioUso.js'
import getTiempoTotal from './helpers/getTiempoTotal.js'
import getTiempoPromedio from './helpers/getTiempoPromedio.js'
import getLevantadasPromedio from './helpers/getLevantadasPromedio.js'
import getPeso from './helpers/getPeso.js'
import getUso from './helpers/getUso.js'

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
        response.status(400).send(error)
      })
  })

  app.get('/', (request, response) => {
    RawData.find({}).then((result) => {
      response.send(result)
    })
  })

  app.get('/analyzed', (request, response) => {
    RawData.find({}).then((rawData) => {
      const tiempo_total = getTiempoTotal(rawData)

      const analyzedDate = new AnalyzedData({
        tiempo_total,
        tiempo_promedio: getTiempoPromedio(rawData, tiempo_total),
        levantadas_promedio: getLevantadasPromedio(rawData),
        peso: getPeso(rawData),
        uso: getUso(rawData)
      })

      response.send(analyzedDate)
    })
  })

  app.get('/analyzed/uso', (request, response) => {
    response.send('ok')
  })

  app.get('/analyzed/:day', (request, response) => {
    let dateStart, dateEnd
    try {
      const day = request.params.day
      dateStart = new Date(day + ', 00:00:00')
      dateEnd = new Date(day + ', 23:59:59')
    } catch {
      return console.log('Error en el formato de la fecha')
    }

    RawData.find({
      $and: [{ fecha: { $gte: dateStart } }, { fecha: { $lte: dateEnd } }]
    })
      .then((result) => {
        response.send(getHorarioUso(result))
      })
      .catch((error) => {
        response.status(400).send(error)
      })
  })
}

export default appRouter
