import serialPort from 'serialport'
import readLine from '@serialport/parser-readline'
import axios from 'axios'

import { PORT } from './api/constants.js'
const URL = `http://localhost:${PORT}`

const serial = new serialPort('COM3', { baudRate: 9600 })
const parser = serial.pipe(new readLine({ delimiter: '\n' }))

serial.on('open', () => {
  console.log('opened')

  axios
    .get(URL)
    .then((res) => {
      console.log(res)
    })
    .catch((error) => console.log('sin datos'))
})

parser.on('data', (data) => {
  let parsed
  try {
    parsed = JSON.parse(data)
  } catch {
    return console.log('No se pudo parsear: ' + data)
  }

  console.log(`Dato recibido con éxito`)

  axios
    .post(URL, parsed)
    .then(({ status }) => {
      console.log(status === 200 ? 'Dato subido con éxito' : 'Resultado: ' + status)
    })
    .catch((error) => console.log(error))
})
