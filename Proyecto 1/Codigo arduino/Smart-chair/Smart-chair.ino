#include "HX711.h"
#define DEBUG_HX711
//Variables para la bascula
#define CALIBRACION 21720.0
byte pinData = 3;   //Data en pin 3
byte pinClk = 2;    //Clock en pin 2
float valores = 0, var = 0; int repeticiones = 0;
// Objeto HX711
HX711 bascula;
//Variables para el ultrasonico
int TRIG = 10;      // trigger en pin 10
int ECO = 9;        // echo en pin 9
int DURACION, actualDistancia = 0;
int DISTANCIA, actualPeso = 0;
//Para medir el tiempo
long Tsensor = 10000;
long Tbas = 600000;
void setup(){
  /**************Para el ultrasonico***********************/
  pinMode(TRIG, OUTPUT);  // trigger como salida
  pinMode(ECO, INPUT);    // echo como entrada
  Serial.begin(9600);     // inicializacion de comunicacion serial a 9600 bps
  /****************Para la bascula************************/
  #ifdef DEBUG_HX711
  Serial.begin(9600);
  #endif
  bascula.begin(pinData, pinClk);
  bascula.set_scale(CALIBRACION);
  bascula.tare();
}

void loop(){
  long milis1 = millis();
  long result1 = Tsensor - milis1;
  if(result1<=0){
    Serial.println(distance());
  }
  long vpr = millis();
  long result = Tbas - vpr;
  if(result<=0){
    Serial.println(peso());
  }
}

String distance(){
  float d1;
  digitalWrite(TRIG, HIGH);     // generacion del pulso a enviar
  delay(1);                     // al pin conectado al trigger
  digitalWrite(TRIG, LOW);      // del sensor
  DURACION = pulseIn(ECO, HIGH);// con funcion pulseIn se espera un pulso alto
  d1 = DURACION / 58.2;         // distancia medida en centimetros
  DISTANCIA = d1;
  String resultado = "";
  resultado = "{\"proximidad\":"+String(DISTANCIA)+"}";
  if(DISTANCIA>=50 ){
    resultado = "{\"proximidad\":-1}";
  }else if(DISTANCIA <= 0){
    /*resultado = "{\"proximidad\":"+String(DISTANCIA)+"}";*/
    resultado = "{\"proximidad\":-1}";
  }else{
    resultado = "{\"proximidad\":"+String(DISTANCIA)+"}";
    actualDistancia = DISTANCIA;
  }
  Tsensor = millis()+10000;
  return resultado;
}

String peso(){
  var = bascula.get_units();
  if(var <= 0.5){
    Tbas=millis()+600000;
    return "{\"peso\":-1}";
  }else{
    Tbas=millis()+600000;
    return "{\"peso\":"+String(var)+"}";
  }
}
