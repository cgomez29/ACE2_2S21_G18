export default function getTiempoPromedioDia(rawData) {
  const data = []

  for (let i = 0; i < 7; i++) {
    const filteredData = rawData.filter(({ fecha, proximidad }) => {
      return proximidad !== undefined && proximidad !== -1 && fecha.getDay() === i
    })

    if (filteredData.length === 0) {
      data.push({
        dia: dayOfWeek[i],
        uso: 0
      })
      continue
    }

    const totalUsage = filteredData.length * (10 / 3600)

    const firstDate = filteredData[0].fecha
    const lastDate = filteredData[filteredData.length - 1].fecha

    const days = Math.ceil(
      (lastDate.getTime() - firstDate.getTime()) / (1000 * 3600 * 24)
    )

    const averageUsage = totalUsage / days

    data.push({
      fecha: firstDate,
      dia: dayOfWeek[i],
      uso: averageUsage
    })
  }

  return data
}

const dayOfWeek = {
  0: 'domingo',
  1: 'lunes',
  2: 'martes',
  3: 'miercoles',
  4: 'jueves',
  5: 'viernes',
  6: 'sabado'
}
