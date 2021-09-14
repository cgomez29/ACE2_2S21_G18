export default function getHorarioUso(datos) {
  var regreso = []
  var pJson
  var inicio
  var final
  var distancia = -1
  datos.forEach((valor) => {
    if (valor.proximidad != undefined) {
      if (distancia == -1 && distancia != valor.proximidad) {
        distancia = valor.proximidad
        inicio = valor.fecha
      } else if (distancia >= 0 && valor.proximidad == -1) {
        distancia = -1
        final = valor.fecha
        pJson = {
          inicio: inicio.toLocaleTimeString(),
          fin: final.toLocaleTimeString()
        }
        regreso.push(pJson)
      }
    }
  })
  return regreso
}
