export default function getPeso(rawData) {
  const firstDate = rawData[0].fecha
  const lastDate = rawData[rawData.length - 1].fecha

  const days = Math.ceil((lastDate.getTime() - firstDate.getTime()) / (1000 * 3600 * 24))

  const data = []

  for (let i = 0; i < days; i++) {
    const currentDate = new Date(firstDate)
    currentDate.setDate(currentDate.getDate() + i)
    const nextDate = new Date(currentDate)
    nextDate.setDate(nextDate.getDate() + 1)

    const filteredData = rawData.filter(({ fecha, peso }) => {
      return peso !== undefined && peso !== -1 && currentDate <= fecha && fecha < nextDate
    })

    const totalWeight = filteredData.reduce((total, { peso }) => total + peso, 0)

    data.push({
      fecha: currentDate.toISOString(),
      peso: filteredData.length > 0 ? totalWeight / filteredData.length : 0
    })
  }

  return data
}
