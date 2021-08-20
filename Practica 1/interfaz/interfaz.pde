float altura = 50.0;       // VARIABLE PARA MEDIR LA ALTURA DE LAS FLECHAS
float velocidad = 0;       // VARIABLE PARA SIMULAR LA VELOCIDAD DEL VIENTO
int velocidadR = 0;
float radio = 5.0;         // VARIABLE PARA DIBUJAR EL RADIO DE LA ELIPSE
float x = 0;               // VARIABLE QUE MANEJA LA POSICION A PINTAR EN X
float y = 0;               // VARIABLE QUE MANEJA LA POSICION A PINTAR EN Y
int direccionViento = 4;   // VARIABLE PARA DEFINIR LA DIRECCION DEL VIENTO         
int mov = 0;               // VARIABLE PARA MANEJAR EL MOVIMIENTO A REALIZAR
int humedad = 0;
int temperatura = 0;
JSONObject json;           // VARIABLE QUE CONTENDRÁ LOS OBJETOS JSON A CARGAR
int current;
int last;

void setup() {
  size(500, 550);           // TAMAÑO DE LA VENTANA
  noStroke();              // DESHABILITA LOS TRAZOS QUE PUEDAN ESTAR PRESENTES
  ellipseMode(RADIUS);     // INTERFAZ EN MODO GRAFICA ELIPSES
  last = millis();
  current = millis();
}

void draw() {
  textSize(16);
  background(0);           // AL INICIAR COLOCA EL FONDO EN COLOR NEGRO
  current = millis();
  if (current - last >= 5000) {
    getValues();
    current = last = millis();
  }

  renderLines();
  renderTexts();           // CARGA DE LOS TEXTOS EN PANTALLA
  renderViento();          // CARGA DE LA DIRECCION EN PANTALLA
}

void getValues() {
  String[] test = loadStrings("http://localhost:3000/");
  saveStrings("datosAnalizar.json", test);
  json = loadJSONObject("datosAnalizar.json");
  if(json.isNull("velocidad") || json.isNull("humidity") || json.isNull("temperature") || json.isNull("direction")){
    println("No hay datos registrados");
    velocidad = 0;
    direccionViento = 4;
    humedad = 0;
    temperatura = 0;
  } else{
    velocidadR = json.getInt("velocidad");
    velocidad = velocidadR * 2;
    humedad = json.getInt("humidity");  
    temperatura = json.getInt("temperature");  
    direccionViento = json.getInt("direction");
  }  
}

void renderTexts() {
  textSize(16);
  renderTemperatura();
  text("La temperatura ambiental es: " + temperatura + " °C", 10, 20);
  renderHumedad();
  text("La humedad atmosferica es: " + humedad + " %", 10, 40);
}

void renderHumedad() {
  if(humedad == 0){
    fill(139,0,0);
    rect(410.5, 535, 80, 5);
  } else if(humedad > 0 && humedad < 10 ){
    fill(255,0,0);
    rect(410.5, 525, 80, 15);
  } else if(humedad >= 10 && humedad < 20){
    fill(255,140,0);
    rect(410.5, 510, 80, 30);
  } else if(humedad >= 20 && humedad < 30){
    fill(255, 255, 0);
    rect(410.5, 500, 80, 40);
  } else if(humedad >= 30 && humedad < 40){
    fill(173,255,47);
    rect(410.5, 485, 80, 55);
  } else if(humedad >= 40 && humedad < 50){
    fill(0, 255, 0);
    rect(410.5, 470, 80, 70);
  } else if(humedad >= 50 && humedad < 60){
    fill(127,255,212);
    rect(410.5, 455, 80, 85);
  } else if(humedad >= 60 && humedad < 70){
    fill(0, 255, 255);
    rect(410.5, 440, 80, 100);
  } else if(humedad >= 70 && humedad < 80){
    fill(70,130,180);
    rect(410.5, 425, 80, 115);
  } else if(humedad >= 80 && humedad < 90){
    fill(0, 0, 255);
    rect(410.5, 410, 80, 130);
  } else if(humedad >= 90 && humedad < 100){
    fill(0,0,139);
    rect(410.5, 395, 80, 145);
  } else if(humedad >= 100){
    fill(75,0,130);
    rect(410.5, 381, 80, 159);
  }  
}

void renderTemperatura() {
  if(temperatura <= -10){
    fill(135, 206, 250);
    rect(10.5, 515, 80, 25);
  } else if(temperatura > -10 && temperatura <= -5){
    fill(135, 206, 250);
    rect(10.5, 515, 80, 10);
  } else if(temperatura > -5 && temperatura <= 0){
    fill(135, 206, 250);
    rect(10.5, 515, 80, 5);
  } else if(temperatura > 0 && temperatura <= 5){
    fill(0,191,255);
    rect(10.5, 505, 80, 15);
  } else if(temperatura > 5 && temperatura <= 10){
    fill(0, 0, 255);
    rect(10.5, 495, 80, 25);
  } else if(temperatura > 10 && temperatura <= 15){
    fill(32,178,170);
    rect(10.5, 480, 80, 40);
  } else if(temperatura > 15 && temperatura <= 20){
    fill(0, 255, 0);
    rect(10.5, 465, 80, 55);
  } else if(temperatura > 20 && temperatura <= 25){
    fill(255,99,71);
    rect(10.5, 450, 80, 70);
  } else if(temperatura > 25 && temperatura <= 30){
    fill(255, 165, 0);
    rect(10.5, 435, 80, 85);
  } else if(temperatura > 30 && temperatura <= 35){
    fill(255,140,0);
    rect(10.5, 420, 80, 100);
  } else if(temperatura > 35 && temperatura <= 40){
    fill(255,69,0);
    rect(10.5, 405, 80, 115);
  } else if(temperatura > 40){
    fill(255,0,0);
    rect(10.5, 392, 80, 130);
  }
  
  
}

void renderLines() {
  stroke(255);
  // TERMOMETRO
  line(10, 540, 90, 540);
  line(10, 390, 90, 390);
  line(10,390, 10, 540);
  line(90, 390, 90, 540);
  
  // HIGROMETRO
  line(410, 540, 490, 540);
  line(410, 380, 490, 380);
  line(410, 380, 410, 540);
  line(490, 380, 490, 540);
  noStroke();

  // TEXTO TERMOMETRO
  textSize(11);
  // -10 a 0
  fill(135, 206, 250);
  text("-10°C", 95, 535);
  text("0°C", 105, 520);
  // 0 a 10
  fill(0, 0, 255);
  text("5°C", 105, 505);
  text("10°C", 105, 490);
  // 10 a 20
  fill(0, 255, 0);
  text("15°C", 105, 475);
  text("20°C", 105, 460);
  // 20 a 30
  fill(255, 165, 0);
  text("25°C", 105, 445);
  text("30°C", 105, 430);
  // 30 +
  fill(255, 0, 0);
  text("35°C", 105, 415);
  text("40°C", 105, 400);
  
  // TEXTO HIGROMETRO
  // 0 a 20
  fill(255, 0, 0);
  text("0 %", 380, 540);
  text("10 %",375, 525);
  // 20 a 40
  fill(255, 255, 0);
  text("20 %", 375, 510);
  text("30 %", 375, 495);
  // 40 a 60
  fill(0, 255, 0);
  text("40 %", 375, 480);
  text("50 %", 375, 465);
  // 60 a 80
  fill(0, 255, 255);
  text("60 %", 375, 450);
  text("70 %", 375, 435);
  // 80 +
  fill(0, 0, 255);
  text("80 %", 375, 420);
  text("90 %", 375, 405);
  fill(75,0,130);
  text("100 %", 370, 390);
  
}

void renderViento() {
  if (direccionViento == 0)
  {
    fill(173, 255, 47);
    text("Velocidad Viento: " + velocidadR + " Km/h", 10, 60);
    text("Direccion Viento: Norte", 10, 80);
    norte();
  } else if (direccionViento == 1)
  {
    fill(30, 144, 255); 
    text("Velocidad Viento: " + velocidadR + " Km/h", 10, 60);
    text("Direccion Viento: Oeste", 10, 80); 
    oeste();
  } else if (direccionViento == 2)
  {
    fill(220, 20, 60);
    text("Velocidad Viento: " + velocidadR + " Km/h", 10, 60);
    text("Direccion del Viento: Sur", 10, 80);
    sur();
  } else if (direccionViento == 3) {
    fill(0, 206, 209);
    text("Velocidad Viento: " + velocidadR + " Km/h", 10, 60);
    text("Direccion Viento: Este", 10, 80); 
    este();
  } else if (direccionViento == 4 && velocidad == 0) {
    fill(255, 255, 255);
    text("Velocidad Viento: " + velocidadR + " Km/h", 10, 60);
    text("Direccion Viento: Neutra", 10, 80);
    norte();
    sur();
    este();
    oeste();
  }
}

//0
void norte() {
  // GRAFICO ILUSTRADO
  // |     *     |
  for (int i = 0; i<5; i++) {                                         // |   * * *   |
    for (int j = 0; j<5; j++) {                                       // | * * * * * |
      if (i == 0 && j==2) {                                           // |   * * *   |
        mov = int(random(4));                                         // |   * * *   |
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

//2
void sur() {
  // GRAFICO ILUSTRADO
  for (int i = 0; i < 5; i++) {                   // |   * * *   |
    if (i == 2) {                                 // |   * * *   |
      for (int j = 0; j < 5; j++) {               // | * * * * * |
        mov = int(random(4));                     // |   * * *   |
        x = (width -90)/2 + j*30 + mov;           // |     *     |
        y = altura+i*30+mov;
        ellipse(x, y, radio, radio);
      }
    } else if (i == 3 || i == 0 || i == 1) {
      for (int j = 1; j < 4; j++) {
        mov = int(random(4));
        x = (width -90)/2 + j*30 + mov;
        y = altura+i*30+mov;
        ellipse(x, y, radio, radio);
      }
    } else if (i == 4) {
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

//1
void este() {
  // GRAFICO ILUSTRADO
  // |     *     |
  for (int i = 0; i<5; i++) {                               // | * * * *   |
    if (i == 0 || i == 4) {                                 // | * * * * * |
      mov = int(random(4));                                 // | * * * *   |
      y =(height-90)/2+i*30+mov;                            // |     *     |
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

//1
void oeste() {
  // GRAFICO ILUSTRADO
  // |     *     |
  for (int i = 0; i<5; i++) {                                // |   * * * * |
    if (i == 0) {                                            // | * * * * * |
      mov = int(random(4));                                  // |   * * * * |
      y = (height -90)/2 + i*30 + mov;                       // |     *     |
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
