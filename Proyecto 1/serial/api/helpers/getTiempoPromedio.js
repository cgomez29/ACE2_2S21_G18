export default function getTiempoPromedio(rawData, total) {
  const firstDate = rawData[0].fecha
  const lastDate = rawData[rawData.length - 1].fecha

  const days = (lastDate.getTime() - firstDate.getTime()) / (1000 * 3600 * 24)
  return total / Math.ceil(days)
}
