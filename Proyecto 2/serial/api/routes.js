import RawData from './models/RawData.js'
import getHorarioUso from './helpers/getHorarioUso.js'
import getTiempoTotal from './helpers/getTiempoTotal.js'
import getTiempoPromedio from './helpers/getTiempoPromedio.js'
import getLevantadasPromedio from './helpers/getLevantadasPromedio.js'
import getPeso from './helpers/getPeso.js'
import getUso from './helpers/getUso.js'
import getUsoSemana from './helpers/getUsoSemana.js'
import getPesoActual from './helpers/getPesoActual.js'
import getTiempoPromedioDia from './helpers/getTiempoPromedioDia.js'
import getTiempoUltimosDias from './helpers/getTiempoUltimosDias.js'
import getUsoPromedio from './helpers/getUsoPromedio.js'

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
        response.send(result)
      })
  })

  app.get('/analyzed', (request, response) => {
    RawData.find({}).then((rawData) => {
      const tiempo_total = getTiempoTotal(rawData)
      const usoL = getUso(rawData)
      const analyzedDate = {
        tiempo_total,
        tiempo_promedio: getTiempoPromedio(rawData, tiempo_total),
        uso_promedio: getUsoPromedio(usoL),
        levantadas_promedio: getLevantadasPromedio(rawData),
        peso: getPeso(rawData),
        uso: usoL
      }

      response.send(analyzedDate)
    })
  })

  app.get('/analyzed/avg', (request, response) => {
    RawData.find({}).then((rawData) => {
      const data = getTiempoPromedioDia(rawData)
      response.send(data)
    })
  })

  app.get('/analyzed/back', (request, response) => {
    RawData.find({}).then((rawData) => {
      const data = getTiempoUltimosDias(rawData)
      response.send(data)
    })
  })

  app.get('/analyzed/actual', (request, response) => {
    const todayDate = new Date()
    const dateStart = new Date(todayDate.toDateString())
    const dateEnd = new Date(`${todayDate.toDateString()}, 23:59:59`)
    RawData.find({
      $and: [{ fecha: { $gte: dateStart } }, { fecha: { $lte: dateEnd } }]
    })
      .then((result) => {
        const peso = getPesoActual(result)
        response.send(peso)
      })
      .catch((error) => {
        response.status(400).send(error)
      })
  })

  app.get('/analyzed/uso', (request, response) => {
    RawData.find({}).then((result) => {
      const uso = {
        data: getUsoSemana(result)
      }
      response.send(uso)
    })
  })

  app.get('/analyzed/exceed', (request, response) => {
    RawData.find({})
      .then((rawData) => {
        const [, horarios] = getHorarioUso(rawData)
        // @ts-ignore
        const data = horarios
          .map(({ inicio, fin }) => {
            const tiempo_total = (fin.getTime() - inicio.getTime()) / (1000 * 60 * 60)
            return {
              inicio,
              fin,
              tiempo_total,
              tiempo_excedido: tiempo_total - 0.5
            }
          })
          .filter(({ tiempo_excedido }) => tiempo_excedido > 0)

        response.send(data)
      })
      .catch((error) => {
        console.log(error)
        response.status(400).send(error)
      })
  })

  app.get('/analyzed/:day', (request, response) => {
    let dateStart
    let dateEnd
    try {
      const day = request.params.day
      dateStart = new Date(`${day}, 00:00:00`)
      dateEnd = new Date(`${day}, 23:59:59`)
    } catch {
      return console.log('Error en el formato de la fecha')
    }

    RawData.find({
      $and: [{ fecha: { $gte: dateStart } }, { fecha: { $lte: dateEnd } }]
    })
      .then((result) => {
        const resultH = getHorarioUso(result)
        const jsonResult = {
          tiempo_total: resultH[0],
          horarios: resultH[1].map(({ inicio, fin }) => ({
            inicio: inicio.toLocaleTimeString(),
            fin: fin.toLocaleTimeString()
          }))
        }
        response.send(jsonResult)
      })
      .catch((error) => {
        response.status(400).send(error)
      })
  })
}

export default appRouter
