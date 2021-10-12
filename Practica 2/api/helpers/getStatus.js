export default function getStatus(data) {
  var status = []
  // FECHAS A UTILIZAR
  var dateT = new Date(); // HOY
  var dateY = new Date(); // AYER
  var dateBY = new Date(); // ANTIER
  var day = dateT.getDate();
  dateY.setDate(day - 1);
  dateBY.setDate(day - 2);

  // ARREGLO DATOS
  var valDay1 = [] // HOY
  var valDay2 = [] // AYER
  var valDay3 = [] // ANTIER
  var proms // PROMEDIOS POR DIA
  var values // VALORES DE PRONOSTICO

  data.forEach(dato => {
    var dateA = dato.fecha.toLocaleDateString(); // FECHA BD
    var date1 = dateT.toLocaleDateString(); // HOY
    var date2 = dateY.toLocaleDateString(); // AYER
    var date3 = dateBY.toLocaleDateString(); // ANTIER
    if (dateA == date1) {
      valDay1.push(dato);
    } else if (dateA == date2) {
      valDay2.push(dato);
    } else if (dateA == date3) {
      valDay3.push(dato)
    }
  });
  // VARIABLES DEL PRONOSTICO
  var fecha = new Date();
  var velocidad;
  var visibilidad;
  var lluvia;
  var calor;

  // VARIABLES PROMEDIO
  var velPromT = 0;
  var tempPromT = 0;
  var humPromT = 0;
  var luzPromT = 0;

  // VARIABLES PROMEDIO POR DIA
  var velPromD1 = 0;
  var tempProD1 = 0;
  var humPromD1 = 0;
  var luzPromD1 = 0;

  var velPromD2 = 0;
  var tempProD2 = 0;
  var humPromD2 = 0;
  var luzPromD2 = 0;

  var velPromD3 = 0;
  var tempProD3 = 0;
  var humPromD3 = 0;
  var luzPromD3 = 0;

  if (valDay2.length == 0 && valDay3.length == 0) 
  {
    // PROMEDIO HOY
    proms = getPromedio(valDay1)
    velPromD1 = proms[0]
    tempProD1 = proms[1]
    humPromD1 = proms[2]
    luzPromD1 = proms[3]

    values = setValuesJson(velPromD1, tempProD1, humPromD1, luzPromD1)
    velocidad = values[0]
    visibilidad = values[1]
    lluvia = values[2]
    calor = values[3]

    for (let index = 1; index <= 5; index++) {
      fecha.setDate(dateT.getDate() + index)
      var jsonR = {
        "fecha": fecha.toLocaleDateString(),
        "velocidad": velocidad,
        "visibilidad": visibilidad,
        "lluvia": lluvia,
        "calor": calor
      }
      status.push(jsonR)
    }
  } else if(valDay3.length == 0)
  {
    // PROMEDIO HOY
    proms = getPromedio(valDay1)
    velPromD1 = proms[0]
    tempProD1 = proms[1]
    humPromD1 = proms[2]
    luzPromD1 = proms[3]

    // PROMEDIO AYER
    proms = getPromedio(valDay2)
    velPromD2 = proms[0]
    tempProD2 = proms[1]
    humPromD2 = proms[2]
    luzPromD2 = proms[3]

    velPromT = (velPromD1 + velPromD2) / 2
    tempPromT = (tempProD1 + tempProD2) / 2
    humPromT = (humPromD1 + humPromD2) / 2
    luzPromT = (luzPromD1 + luzPromD2) / 2

    values = setValuesJson(velPromT, tempPromT, humPromT, luzPromT)
    velocidad = values[0]
    visibilidad = values[1]
    lluvia = values[2]
    calor = values[3]

    for (let index = 1; index <= 5; index++) {
      fecha.setDate(dateT.getDate() + index)
      var jsonR = {
        "fecha": fecha.toLocaleDateString(),
        "velocidad": velocidad,
        "visibilidad": visibilidad,
        "lluvia": lluvia,
        "calor": calor
      }
      status.push(jsonR)
      
      // ACTUALIZANDO VALORES DIAS SIGUIENTES
      velPromD3 = velPromD2
      tempProD3 = tempProD2
      humPromD3 = humPromD2
      luzPromD3 = luzPromD2

      velPromD2 = velPromD1
      tempProD2 = tempProD1
      humPromD2 = humPromD1
      luzPromD2 = luzPromD1

      velPromD1 = velPromT
      tempProD1 = tempPromT
      humPromD1 = humPromT
      luzPromD1 = luzPromT

      velPromT = (velPromD1 + velPromD2 + velPromD3) / 3
      tempPromT = (tempProD1 + tempProD2 + tempProD3) / 3
      humPromT = (humPromD1 + humPromD2 + humPromD3) / 3
      luzPromT = (luzPromD1 + luzPromD2 + luzPromD3) / 3

      values = setValuesJson(velPromT, tempPromT, humPromT, luzPromT)
      velocidad = values[0]
      visibilidad = values[1]
      lluvia = values[2]
      calor = values[3]
    }
  } else 
  {
    // PROMEDIO HOY
    proms = getPromedio(valDay1)
    velPromD1 = proms[0]
    tempProD1 = proms[1]
    humPromD1 = proms[2]
    luzPromD1 = proms[3]

    // PROMEDIO AYER
    proms = getPromedio(valDay2)
    velPromD2 = proms[0]
    tempProD2 = proms[1]
    humPromD2 = proms[2]
    luzPromD2 = proms[3]

    // PROMEDIO ANTIER
    proms = getPromedio(valDay3)
    velPromD3 = proms[0]
    tempProD3 = proms[1]
    humPromD3 = proms[2]
    luzPromD3 = proms[3]

    velPromT = (velPromD1 + velPromD2 + velPromD3) / 3
    tempPromT = (tempProD1 + tempProD2 + tempProD3) / 3
    humPromT = (humPromD1 + humPromD2 + humPromD3) / 3
    luzPromT = (luzPromD1 + luzPromD2 + luzPromD3) / 3

    values = setValuesJson(velPromT, tempPromT, humPromT, luzPromT)
    velocidad = values[0]
    visibilidad = values[1]
    lluvia = values[2]
    calor = values[3]

    for (let index = 1; index <= 5; index++) {
      fecha.setDate(dateT.getDate() + index)
      var jsonR = {
        "fecha": fecha.toLocaleDateString(),
        "velocidad": velocidad,
        "visibilidad": visibilidad,
        "lluvia": lluvia,
        "calor": calor
      }
      status.push(jsonR)
      
      // ACTUALIZANDO VALORES DIAS SIGUIENTES
      velPromD3 = velPromD2
      tempProD3 = tempProD2
      humPromD3 = humPromD2
      luzPromD3 = luzPromD2

      velPromD2 = velPromD1
      tempProD2 = tempProD1
      humPromD2 = humPromD1
      luzPromD2 = luzPromD1

      velPromD1 = velPromT
      tempProD1 = tempPromT
      humPromD1 = humPromT
      luzPromD1 = luzPromT

      velPromT = (velPromD1 + velPromD2 + velPromD3) / 3
      tempPromT = (tempProD1 + tempProD2 + tempProD3) / 3
      humPromT = (humPromD1 + humPromD2 + humPromD3) / 3
      luzPromT = (luzPromD1 + luzPromD2 + luzPromD3) / 3

      values = setValuesJson(velPromT, tempPromT, humPromT, luzPromT)
      velocidad = values[0]
      visibilidad = values[1]
      lluvia = values[2]
      calor = values[3]
    }
  }

  return status
}

function getPromedio(valDay){
  var velPromD = 0;
  var tempProD = 0;
  var humPromD = 0;
  var luzPromD = 0;

  valDay.forEach(valor => {
    velPromD += valor.velocidad
    tempProD += valor.temperatura
    humPromD += valor.humedad
    if (valor.luz >= 5){
      luzPromD += valor.luz
    }
  })
  velPromD = velPromD / valDay.length
  tempProD = tempProD / valDay.length
  humPromD = humPromD / valDay.length
  luzPromD = luzPromD / valDay.length

  return [velPromD, tempProD, humPromD, luzPromD]
}

function setValuesJson(velPromD, tempProD, humPromD, luzPromD) {
  var velocidad;
  var visibilidad;
  var lluvia;
  var calor;
  // VELOCIDAD DEL VIENTO
  if (velPromD >= 0 && velPromD <= 25) {
    velocidad = "normal";
  } else if (velPromD > 25) {
    velocidad = "alto"
  }
  // CALOR
  if (tempProD >= 0 && tempProD <= 25) {
    calor = false
  } else if (tempProD > 25) {
    calor = true
  }
  // LLUVIA
  if (humPromD >= 0 && humPromD <= 60) {
    lluvia = false
  } else {
    lluvia = true
  }
  // VISIBILIDAD
  if (luzPromD > 250) {
    visibilidad = "despejado"
  } else {
    visibilidad = "nublado"
  }
  return [velocidad, visibilidad, lluvia, calor]
}