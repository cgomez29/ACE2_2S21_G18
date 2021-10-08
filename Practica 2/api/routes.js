import RawData from './models/RawData.js'
import AnalyzedData from './models/AnalyzedData.js'

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
          luz: 0.5,
          status: [
            {
              fecha: new Date(),
              velocidad: 'normal',
              visibilidad: 'despejado',
              lluvia: false,
              calor: false
            },
            {
              fecha: new Date(),
              velocidad: 'normal',
              visibilidad: 'despejado',
              lluvia: false,
              calor: false
            },
            {
              fecha: new Date(),
              velocidad: 'normal',
              visibilidad: 'despejado',
              lluvia: false,
              calor: false
            },
            {
              fecha: new Date(),
              velocidad: 'normal',
              visibilidad: 'despejado',
              lluvia: false,
              calor: false
            },
            {
              fecha: new Date(),
              velocidad: 'normal',
              visibilidad: 'despejado',
              lluvia: false,
              calor: false
            }
          ]
        })
        response.send(analyzedData)
      })
  })
}

export default appRouter
