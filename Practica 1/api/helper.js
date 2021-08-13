import fs from 'fs'

import {
  dataPath,
  velocidadPath,
  humedadPath,
  temperaturaPath,
  direccionPath
} from './constants.js'

const checkExistence = () => {
  if (!fs.existsSync(dataPath)) {
    console.log(`Carpeta '${dataPath}' creada`)
    fs.mkdirSync(dataPath)
  }

  const filePaths = [velocidadPath, humedadPath, temperaturaPath, direccionPath]

  filePaths.forEach((path) => {
    if (!fs.existsSync(path)) {
      fs.appendFile(path, '{}', (err) => {
        if (err) throw err
        console.log(`Archivo '${path}' creado`)
      })
    }
  })
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
