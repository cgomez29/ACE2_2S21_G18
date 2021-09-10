# Base de datos
Se utilizará una base de datos de mongoDB en la nube con ayuda de mongoDB Atlas.

# Funcionamiento de la API
La API recibe datos para almacenarla en la base de datos, datos que sirve en crudo y analizados según el endpoint. La API será realizada con el framework Express JS.

## Endpoints

### /
Mediante un POST se almacenan los datos en la base de datos, con el siguiente formato:
```js
{
  "peso": ..., // kg
  "proximidad": ... // cm
}
```

Mediante un GET se obtienen los últimos datos crudos almacenados en la base de datos, con el formato anterior descrito.

### /analyzed/
Mediante un GET se obtienen los datos analizados, con el siguiente formato:
```js
{
  "tiempo_total": ..., // h
  "tiempo_promedio": ..., // h/d
  "levantadas_promedio" ...,
  "peso": [
    {
    "fecha": ...,
    "peso": ... // kg
    },
    ...
  ],
  "uso": [
    {
    "fecha": ...,
    "uso": ... // kg
    },
    ...
  ]
}
```

### /analyzed/uso
Mediante un GET se obtienen los tiempos de uso totales por semana, con el siguiente formato:
```js
{
  "data": [
    {
      "semana": ...,
      "total": ... // h
    },
    ...
  ]
}
```

### /analyzed/{dia}
Mediante un GET se obtienen los horarios de uso de un día especifico, con el siguiente formato:
```js
{
  "data": [
    {
      "inicio": ...,
      "fin": ...
    },
    ...
  ]
}
```
