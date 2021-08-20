import fs from 'fs'
import { DATA_PATH, INITIAL_DATA } from './constants.js'

const checkExistence = () => {
  if (!fs.existsSync(DATA_PATH)) {
    fs.appendFile(DATA_PATH, INITIAL_DATA, (err) => {
      if (err) throw err
      console.log(`Archivo '${DATA_PATH}' creado`)
    })
  }
}

const readFile = (filePath, callback, returnJson = true, encoding = 'utf8') => {
  fs.readFile(filePath, encoding, (err, data) => {
    if (err) {
      throw err
    }

    callback(returnJson ? JSON.parse(data) : data)
  })
}

const writeFile = (filePath, fileData, callback, encoding = 'utf8') => {
  fs.writeFile(filePath, fileData, encoding, (err) => {
    if (err) {
      throw err
    }

    callback()
  })
}

export { checkExistence, readFile, writeFile }
