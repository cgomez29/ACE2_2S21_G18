export function horarioUso(datos) {
    var regreso = []
    var pJson
    var inicio
    var final
    var peso = 0
    datos.forEach(valor => {
        if (peso == 0 && peso != valor.peso) {
            peso = valor.peso
            inicio = valor.fecha.toLocaleTimeString()
        } else if (peso > 0 && valor.peso == 0) {
            peso = 0
            final = valor.fecha.toLocaleTimeString()
            pJson = {
                "inicio": inicio,
                "fin": final
            }
            regreso.push(pJson)
        }
    })
    pJson = {
        "data": regreso
    }
    return pJson
}