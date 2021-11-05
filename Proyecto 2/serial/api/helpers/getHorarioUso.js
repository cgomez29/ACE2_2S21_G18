export default function getHorarioUso(datos) {
  let regreso = []
  let pJson
  let totalT = 0
  let inicio
  let final
  let distancia = -1
  datos.forEach((valor) => {
    if (valor.proximidad != undefined) {
      if (distancia == -1 && distancia != valor.proximidad) {
        distancia = valor.proximidad
        inicio = valor.fecha
      } else if (distancia >= 0 && valor.proximidad == -1) {
        distancia = -1
        final = valor.fecha
        totalT += final - inicio
        pJson = {
          inicio: inicio.toLocaleTimeString(),
          fin: final.toLocaleTimeString()
        }
        regreso.push(pJson)
      }
    }
  })
  totalT = parseFloat(totalT / 3600000).toFixed(4)
  return [totalT, regreso]
}
