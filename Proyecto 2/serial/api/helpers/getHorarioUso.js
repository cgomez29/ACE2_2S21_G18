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
        if (inicio > final) {
          let aux = inicio
          inicio = final
          final = aux
        }
        totalT += final - inicio
        pJson = {
          inicio,
          fin: final
        }
        regreso.push(pJson)
      }
    }
  })
  totalT = parseFloat(totalT / 3600000).toFixed(4)
  return [totalT, regreso]
}
