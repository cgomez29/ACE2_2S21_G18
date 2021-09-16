export default function getLevantadasPromedio(rawData) {
  const firstDate = rawData[0].fecha
  const lastDate = rawData[rawData.length - 1].fecha

  const days = (lastDate.getTime() - firstDate.getTime()) / (1000 * 3600 * 24)

  let lifts = 0,
    lifted = true

  rawData.forEach((data) => {
    if (data.proximidad === undefined) return

    if (data.proximidad === -1 && !lifted) {
      lifted = true
      lifts++
    } else if (data.proximidad !== -1 && lifted) {
      lifted = false
    }
  })

  return lifts / Math.ceil(days)
}
