export default function getPesoActual(data){
    var peso = 0
    var hora = '00:00:00'
    var tiempo = 0

    data.forEach(dato => {
        if (dato.peso != undefined){
            if (dato.peso == -1){
                peso = 0
                hora = '00:00:00'
                tiempo = 0
            } else{
                if (peso == 0 && hora == '00:00:00'){
                    peso = dato.peso
                    hora = dato.fecha
                    var final = new Date()
                    var diferencia = (final - hora) / (1000 * 60)
                    tiempo = diferencia
                } else{
                    peso = dato.peso
                    var final = new Date()
                    var diferencia = (final - hora) / (1000 * 60)
                    tiempo = diferencia
                }
            }
        } else{
            if (dato.proximidad == -1){
                peso = 0
                hora = '00:00:00'
                tiempo = 0
            } else{
                if (peso == 0 && hora == '00:00:00'){
                    hora = dato.fecha
                    var final = new Date()
                    var diferencia = (final - hora) / (1000 * 60)
                    tiempo = diferencia
                } else{
                    var final = new Date()
                    var diferencia = (final - hora) / (1000 * 60)
                    tiempo = diferencia
                }
            }
        }
    });

    if (typeof(hora) != 'string'){
        hora = hora.toLocaleTimeString()
    }
    tiempo = convertTime(tiempo.toFixed(2))
    const jsonResult = {
        "peso": peso,
        "inicio": hora,
        "tiempo": tiempo
    }
    return jsonResult
}

function convertTime(tiempo){
    var horas = '00'
    var minutos = '00'
    var segundos = '00'
    var punto = tiempo.toString().indexOf('.')
    if (tiempo >= 60){
        horas = Number(tiempo.toString().substring(0,punto)) / 60
        if (horas < 10){
            horas = '0' + String(horas.toFixed(0))
        } else{
            horas = String(horas.toFixed(0))
        }

        var min = Number(tiempo.toString().substring(0,punto)) - Number(tiempo.toString().substring(0, punto -1) + '0')
        if (min < 10){
            minutos = '0' + String(min)
        } else{
            minutos = String(min)
        }

        var seg = Number(tiempo.toString().substring(punto))
        seg = seg * 60
        if (seg < 10){
            segundos = '0' + String(seg.toFixed(0))
        } else{
            segundos = String(seg.toFixed(0))
        }
    } else{
        var min = Number(tiempo.toString().substring(0,punto))
        if (min < 10){
            minutos = '0' + String(min)
        } else{
            minutos = String(min)
        }
        var seg = Number(tiempo.toString().substring(punto))
        seg = seg * 60
        if (seg < 10){
            segundos = '0' + String(seg.toFixed(0))
        } else{
            segundos = String(seg.toFixed(0))
        }
    }
    return String(horas) + ':' + String(minutos) + ':' + String(segundos)
}