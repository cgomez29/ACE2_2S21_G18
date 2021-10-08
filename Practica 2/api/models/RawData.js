import mongoose from 'mongoose'

const { Schema, model } = mongoose

const RawDataSchema = new Schema({
  fecha: Date,
  velocidad: Number,
  humedad: Number,
  temperatura: Number,
  direccion: Number,
  luz: Number
})

const RawData = model('rawData', RawDataSchema)

export default RawData
