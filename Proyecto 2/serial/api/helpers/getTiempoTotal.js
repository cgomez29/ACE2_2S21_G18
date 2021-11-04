export default function getTiempoTotal(rawData) {
  const filteredData = rawData.filter(({ proximidad }) => {
    return proximidad !== undefined && proximidad !== -1
  })

  return filteredData.length * (10 / 3600)
}
