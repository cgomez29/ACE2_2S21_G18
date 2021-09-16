import mongoose from 'mongoose'

const { Schema, model } = mongoose

const RawDataSchema = new Schema(
  {
    peso: Number,
    proximidad: Number,
    fecha: Date
  },
  { _id: false }
)

const RawData = model('rawData', RawDataSchema)

export default RawData
