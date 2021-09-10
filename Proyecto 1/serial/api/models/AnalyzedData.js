import mongoose from 'mongoose'

const { Schema, model } = mongoose

const AnalyzedDataSchema = new Schema({
  tiempo_total: Number,
  tiempo_promedio: Number,
  levantadas_promedio: Number,
  peso: [
    {
      fecha: String,
      peso: Number
    }
  ],
  uso: [
    {
      fecha: String,
      uso: Number
    }
  ]
})

const AnalyzedData = model('analyzedData', AnalyzedDataSchema)

export default AnalyzedData
