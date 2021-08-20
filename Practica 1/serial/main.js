import serialPort from 'serialport'
import readLine from '@serialport/parser-readline'
import axios from 'axios'

import { PORT } from './api/constants.js'
const URL = `http://localhost:${PORT}`

const serial = new serialPort('COM1', { baudRate: 9600 })
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

serial.on('data', (data) => {
  console.log(`se recibió ${data}`)

  axios
    .post(URL, { data })
    .then((res) => {
      console.log(res)
    })
    .catch((error) => console.log(error))
})
