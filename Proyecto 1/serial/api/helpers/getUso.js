export default function getUso(rawData) {
  const firstDate = rawData[0].fecha
  const lastDate = rawData[rawData.length - 1].fecha

  const data = []

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(lastDate)
    currentDate.setDate(currentDate.getDate() - i)
    const previousDate = new Date(currentDate)
    previousDate.setDate(previousDate.getDate() - 1)

    if (currentDate < firstDate) {
      data.push({
        fecha: currentDate.toISOString(),
        uso: 0
      })
      continue
    }

    const filteredData = rawData.filter(({ fecha, proximidad }) => {
      return (
        proximidad !== undefined &&
        proximidad !== -1 &&
        previousDate < fecha &&
        fecha <= currentDate
      )
    })

    const totalUsage = filteredData.length * (10 / 3600)

    data.push({
      fecha: currentDate.toISOString(),
      uso: totalUsage
    })
  }

  return data
}
