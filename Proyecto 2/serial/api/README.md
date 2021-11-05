# Base de datos
Se utilizará una base de datos de mongoDB en la nube con ayuda de mongoDB Atlas.

# Funcionamiento de la API
La API recibe datos para almacenarla en la base de datos, datos que sirve en crudo y analizados según el endpoint. La API será realizada con el framework Express JS.

## Endpoints

### /
Mediante un POST se almacenan los datos en la base de datos, con el siguiente formato:
```js
{
  "peso": Number, // kg (opcional)
  "proximidad": Number, // cm (opcional)
  "luz": Number, // lm (opcional)
  "fecha": Date
}
```

Mediante un GET se obtienen los últimos 100 datos crudos almacenados en la base de datos, con el formato anterior descrito.

### /analyzed/
Mediante un GET se obtienen los datos analizados, con el siguiente formato:
```js
{
  "tiempo_total": Number, // h
  "tiempo_promedio": Number, // h/d
  "uso_promedio": Number,
  "levantadas_promedio" Number,
  "peso": [
    {
    "fecha": Date,
    "peso": Number // kg
    }
  ],
  "uso": [
    {
    "fecha": Date,
    "uso": Number // h
    }
  ]
}
```

### /analyzed/avg
Mediante un GET se obtiene el promedio de uso de la silla por día de la semana, con el siguiente formato:
```js
{
  "tiempo_promedio": Number,
  "semana": [
    {
      "dia": "lunes",
      "tiempo_promedio": Number // h
    }
  ]
}
```

### /analyzed/back
Mediante un GET se obtiene el uso total de la silla de los ultimos siete días con el siguiente formato:
```js
{
  "tiempo_total": Number,
  "dias": [
    {
      "fecha": Date,
      "tiempo_total": Number // h
    }
  ]
}
```

### /analyzed/actual
Mediante un GET se obtiene el peso actual de la persona y el tiempo de uso, con el siguiente formato:
```js
{
  "peso": Number, // kg
  "inicio": Date,
  "tiempo": Number // h
}
```

### /analyzed/uso
Mediante un GET se obtienen los tiempos de uso totales por semana, con el siguiente formato:
```js
{
  "data": [
    {
      "semana": Number,
      "total": Number // h
    }
  ]
}
```

### /analyzed/{fecha}
Mediante un GET se obtienen los horarios de uso de una fecha específica (mm-dd-yyyy), con el siguiente formato:
```js
{
  "tiempo_total": Number, // h
  "horarios": [
    {
      "inicio": Date,
      "fin": Date
    }
  ]
}
```
