export default function getTiempoTotal(rawData) {
  const summary = rawData.reduce(
    ({ total, previousDate }, data) => {
      if (data.proximidad === -1) return { total, previousDate: data.fecha }

      const time = (data.fecha.getTime() - previousDate.getTime()) / (1000 * 3600)
      return { total: total + time, previousDate: data.fecha }
    },
    { total: 0, previousDate: rawData[0].fecha }
  )
  return summary.total
}
