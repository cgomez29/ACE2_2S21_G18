import mongoose from 'mongoose'

const { Schema, model } = mongoose

const AnalyzedDataSchema = new Schema(
  {
    velocidad: Number,
    humedad: Number,
    temperatura: Number,
    direccion: Number,
    luz: Number,
    status: [
      {
        velocidad: String,
        visibilidad: String,
        lluvia: Boolean,
        calor: Boolean
      }
    ]
  },
  { _id: false }
)

const AnalyzedData = model('analyzedData', AnalyzedDataSchema)

export default AnalyzedData
