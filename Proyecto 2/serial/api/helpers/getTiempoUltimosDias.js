export default function getTiempoUltimosDias(rawData) {
  const dias = []
  let tiempo_total = 0

  for (let i = 0; i <= 6; i++) {
    const date = new Date()
    date.setDate(date.getDate() - i)

    const dateStart = new Date(date.getTime())
    const dateEnd = new Date(date.getTime())

    dateStart.setHours(0, 0, 0)
    dateEnd.setHours(23, 59, 59)

    const filteredData = rawData.filter(
      ({ fecha, proximidad }) =>
        proximidad !== undefined &&
        proximidad !== -1 &&
        fecha >= dateStart &&
        fecha <= dateEnd
    )

    const totalUsage = filteredData.length * (10 / 3600)
    tiempo_total += totalUsage

    dias.push({
      fecha: date,
      tiempo_total: totalUsage
    })
  }

  return { tiempo_total, dias }
}
