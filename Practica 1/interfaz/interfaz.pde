float altura = 50.0;       // VARIABLE PARA MEDIR LA ALTURA DE LAS FLECHAS
float velocidad = 6.0;     // VARIABLE PARA SIMULAR LA VELOCIDAD DEL VIENTO
float radio = 2.0;         // VARIABLE PARA DIBUJAR EL RADIO DE LA ELIPSE
float x = 0;               // VARIABLE QUE MANEJA LA POSICION A PINTAR EN X
float y = 0;               // VARIABLE QUE MANEJA LA POSICION A PINTAR EN Y
int direccionViento = 2;   // VARIABLE PARA DEFINIR LA DIRECCION DEL VIENTO         
int mov = 0;               // VARIABLE PARA MANEJAR EL MOVIMIENTO A REALIZAR
String humedad = "25";
String temperatura = "19";

void setup() {
  size(500, 500);           // TAMAÑO DE LA VENTANA
  textSize(16);            // TAMAÑO DEL TEXTO
  noStroke();              // DESHABILITA LOS TRAZOS QUE PUEDAN ESTAR PRESENTES
  ellipseMode(RADIUS);     // INTERFAZ EN MODO GRAFICA ELIPSES
}

void draw() {
  background(0);           // AL INICIAR COLOCA EL FONDO EN COLOR NEGRO
  
  renderTextos();          // CARGA DE LOS TEXTOS EN PANTALLA
  renderViento();          // CARGA DE LA DIRECCION EN PANTALLA
}

void renderTextos(){
  fill(0,175,252);
  text("La humedad del ambiente es: " + humedad + " °C", 10, 70);
  fill(255,86,86);
  text("La temperatura del ambiente es: " + temperatura + " °C", 10, 50);
}

void renderViento(){
  if (direccionViento == 0)
  {
    norte();
  } else if (direccionViento == 1)
  {
    oeste();
  } else if (direccionViento == 2)
  {
    sur();
  } else if (direccionViento == 3) {
    este();
  }
}

void norte() {
  fill(0, 153, 153);                                // GRAFICO ILUSTRADO
  text("Direccion Viento: Norte", 10, 90);          // |     *     |
  for (int i = 0; i<5; i++) {                       // |   * * *   |
    for (int j = 0; j<5; j++) {                     // | * * * * * |
      if (i == 0 && j==2) {                         // |   * * *   |
        mov = int(random(4));                       // |   * * *   |
        x = (width-90)/2 + j*30 +mov;
        y = height - altura +i*30 + mov;
        ellipse(x, y, radio, radio);
      } else if (i ==1 && j == 1) {
        mov = int(random(4));
        x = (width-90)/2 + j*30 +mov;
        y = height - altura +i*30 + mov;
        ellipse(x, y, radio, radio);
      } else if (i ==1 && j == 2) {
        mov = int(random(4));
        x = (width-90)/2 + j*30 +mov;
        y = height - altura +i*30 + mov;
        ellipse(x, y, radio, radio);
      } else if (i ==1 && j == 3) {
        mov = int(random(4));
        x = (width-90)/2 + j*30 +mov;
        y = height - altura +i*30 + mov;
        ellipse(x, y, radio, radio);
      } else if (i == 2) {
        mov = int(random(4));
        x = (width-90)/2 + j*30 +mov;
        y = height - altura +i*30 + mov;
        ellipse(x, y, radio, radio);
      } else if (i == 3 || i == 4) {
        if (j >= 1 && j<4) {
          mov = int(random(4));
          x = (width-90)/2 + j*30 +mov;
          y = height - altura +i*30 + mov;
          ellipse(x, y, radio, radio);
        }
      }
    }
  }
  altura += velocidad;
  if (height -altura < radio) {
    if (direccionViento == 2) {
      altura = height;
    } else {
      altura = 50.0;
    }
  }
}

void sur() {
  fill(73, 255, 0);
  text("Direccion del Viento: Sur", 10, 90);      // GRAFICO ILUSTRADO
  for (int i = 0; i < 5; i++) {                   // |   * * *   |
    if (i == 2) {                                 // |   * * *   |
      for (int j = 0; j < 5; j++) {               // | * * * * * |
        fill(73, 255, 0);                          // |   * * *   |
        mov = int(random(4));                     // |     *     |
        x = (width -90)/2 + j*30 + mov;
        y = altura+i*30+mov;
        ellipse(x, y, radio, radio);
      }
    } else if (i == 3 || i == 0 || i == 1) {
      for (int j = 1; j < 4; j++) {
        fill(73, 255, 0);
        mov = int(random(4));
        x = (width -90)/2 + j*30 + mov;
        y = altura+i*30+mov;
        ellipse(x, y, radio, radio);
      }
    } else if (i == 4) {
      fill(73, 255, 0);
      mov = int(random(4));
      x = (width -90)/2 + 2*30 + mov;
      y = altura+i*30+mov;
      ellipse(x, y, radio, radio);
    }
  }
  altura += velocidad;
  if (altura > height+radio) {
    fill(255);
    altura = 50.0;
  }
}

void este() {
  fill(255, 255, 0);                            // GRAFICO ILUSTRADO
  text("Direccion Viento: Este", 10, 90);       // |     *     |
  for (int i = 0; i<5; i++) {                   // | * * * *   |
    if (i == 0 || i == 4) {                     // | * * * * * |
      mov = int(random(4));                     // | * * * *   |
      y =(height-90)/2+i*30+mov;                // |     *     |
      x = altura+2*30+mov;
      ellipse(x, y, radio, radio);
    } else if (i == 1 || i == 3) {
      for (int j = 0; j < 4; j++) {
        mov = int(random(4));
        y =(height-90)/2+i*30+mov;
        x = altura+j*30+mov;
        ellipse(x, y, radio, radio);
      }
    } else {
      for (int j = 0; j < 5; j++) {
        mov = int(random(4));
        y =(height-90)/2+i*30+mov;
        x = altura+j*30+mov;
        ellipse(x, y, radio, radio);
      }
    }
  }
  altura += velocidad;
  if (altura > width+radio) {
    fill(255);
    altura = 50.0;
  }
}

void oeste() {
  fill(255, 51, 153);                            // GRAFICO ILUSTRADO
  text("Direccion Viento: Oeste", 10, 90);       // |     *     |
  for (int i = 0; i<5; i++) {                    // |   * * * * |
    if (i == 0) {                                // | * * * * * |
      mov = int(random(4));                      // |   * * * * |
      y = (height -90)/2 + i*30 + mov;           // |     *     |
      x = width-altura + 2*30 + mov;
      ellipse(x, y, radio, radio);
    } else if (i == 1 || i == 3) {
      for (int j = 1; j < 5; j++) {
        mov = int(random(4));
        y = (height -90)/2 + i*30 + mov;
        x = width-altura + j*30 + mov;
        ellipse(x, y, radio, radio);
      }
    } else if (i == 2) {
      for (int j = 0; j < 5; j++) {
        mov = int(random(4));
        y = (height -90)/2 + i*30 + mov;
        x = width-altura + j*30 + mov;
        ellipse(x, y, radio, radio);
      }
    } else if ( i == 4) {
      mov = int(random(4));
      y = (height -90)/2 + i*30 + mov;
      x = width-altura + 2*30 + mov;
      ellipse(x, y, radio, radio);
    }
  }
  altura += velocidad;
  if (width - altura < radio) {
    if (direccionViento == 3) {
      altura = width;
    } else {
      altura = 50.0;
    }
  }
}
