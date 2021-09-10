import mongoose from 'mongoose'

const { Schema, model } = mongoose

const RawDataSchema = new Schema({
  peso: Number,
  proximidad: Number
})

const RawData = model('rawData', RawDataSchema)

export default RawData
