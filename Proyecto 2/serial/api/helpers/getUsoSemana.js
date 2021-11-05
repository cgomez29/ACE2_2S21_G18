export default function getUso(data) {
    const firstDate = data[0].fecha
    const lastDate = data[data.length - 1].fecha

    let firstDayWeek = setTimeI(firstDate)
    let lastDayWeek = setTimeF(firstDate)

    let inicio
    let final
    let distancia = -1
    let timeWeek = 0
    let contWeek = 1
    let dataReturn = []

    data.forEach(datos => {
        if (datos.fecha >= firstDayWeek && datos.fecha <= lastDayWeek) {
            if (datos.proximidad != undefined){
                if (distancia == -1 && distancia != datos.proximidad) {
                    distancia = datos.proximidad
                    inicio = datos.fecha
                } else if (distancia >= 0 && datos.proximidad == -1) {
                    distancia = -1
                    final = datos.fecha
                    timeWeek += ((final - inicio) / (1000 * 60 * 60))
                }
            }            
        } else {
            timeWeek = Number(timeWeek.toFixed(4))
            const saveJson = {
                semana: contWeek,
                total: timeWeek
            }
            dataReturn.push(saveJson)
            contWeek += 1
            timeWeek = 0
            firstDayWeek = setTimeI(datos.fecha)

            lastDayWeek = setTimeF(datos.fecha)
        }
        if (datos.fecha == lastDate) {
            timeWeek = Number(timeWeek.toFixed(4))
            const saveJson = {
                semana: contWeek,
                total: timeWeek
            }
            dataReturn.push(saveJson)
        }
    });

    return dataReturn
}

function setTimeI(date) {
    let firstDayWeek = new Date(date)
    firstDayWeek.setHours(0)
    firstDayWeek.setMinutes(0)
    firstDayWeek.setSeconds(0)
    return firstDayWeek
}

function setTimeF(date) {
    let lastDayWeek = new Date(date)
    lastDayWeek.setDate(lastDayWeek.getDate() + 7)
    lastDayWeek.setHours(23)
    lastDayWeek.setMinutes(59)
    lastDayWeek.setSeconds(59)
    return lastDayWeek
}
