# Base de datos
Se utilizará una base de datos de MongoDB en la nube con ayuda de MongoDB Atlas.

# Funcionamiento de la API
La API recibe datos para almacenarla en la base de datos, datos que sirve en crudo y analizados según el endpoint. La API será realizada con el framework ExpressJS.

## Endpoints
### POST /
Se reciben los datos para ser almacenados en la base de datos, con el siguiente formato:
```js
{
  "velocidad": Number,
  "humedad": Number,
  "temperatura": Number,
  "direccion": Number,
  "luz": Number
}
```

### GET /
Se recibe el estado del clima, obtenido de los datos analizados, con el siguiente formato:
```js
{
  "velocidad": Number,
  "humedad": Number,
  "temperatura": Number,
  "direccion": Number,
  "luz": Number,
  "status": [                 // 5 datos
    {
      "fecha": Date,
      "velocidad": String,    // normal  | alto
      "visibilidad": String,  // nublado | despejado
      "lluvia": Boolean,
      "Calor": Boolean
    },
    ...
  ]
}
```

### GET /getStatus
Se recibe un pronostico del clima para los siguientes 5 dias con el siguiente formato:
```js
{
  "status": [                 // 5 datos
    {
      "fecha": Date,
      "velocidad": String,    // normal  | alto
      "visibilidad": String,  // nublado | despejado
      "lluvia": Boolean,
      "Calor": Boolean
    },
    ...
  ]
}
```