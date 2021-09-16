#include "HX711.h"
#define DEBUG_HX711
//Variables para la bascula
#define CALIBRACION 20550.0
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
  var = bascula.get_units();
  if(var>=0.5 ){
    valores+=var;
    repeticiones+=1;
  }
}

String distance(){
  float d1, d2, d3;
  digitalWrite(TRIG, HIGH);     // generacion del pulso a enviar
  delay(1);                     // al pin conectado al trigger
  digitalWrite(TRIG, LOW);      // del sensor
  DURACION = pulseIn(ECO, HIGH);// con funcion pulseIn se espera un pulso alto
  d1 = DURACION / 58.2;         // distancia medida en centimetros
  digitalWrite(TRIG, HIGH);
  delay(1);
  digitalWrite(TRIG, LOW);
  DURACION = pulseIn(ECO, HIGH);
  d2 = DURACION / 58.2;
  digitalWrite(TRIG, HIGH);
  delay(1);
  digitalWrite(TRIG, LOW);
  DURACION = pulseIn(ECO, HIGH);
  d3 = DURACION / 58.2;
  DISTANCIA = (d1+d2+d3)/3;
  String resultado = "";
  if(DISTANCIA > 30 && DISTANCIA< 50){
    resultado = "{\"proximidad\":"+String(actualDistancia)+"}";
  }else if(DISTANCIA>=50 ){
    resultado = "{\"proximidad\":-1}";
  }else if(DISTANCIA <= 0){
    resultado = "{\"proximidad\":"+String(actualDistancia)+"}";
  }else{
    resultado = "{\"proximidad\":"+String(DISTANCIA)+"}";
    actualDistancia = DISTANCIA;
  }
  Tsensor = millis()+10000;
  return resultado;
}

String peso(){
  if(repeticiones == 0){
    valores = 0; repeticiones = 0;
    Tbas=millis()+600000;
    return "{\"peso\":-1}";
  }else{
    float pesoFinal = valores/repeticiones;
    valores = 0; repeticiones = 0;
    Tbas=millis()+600000;
    return "{\"peso\":"+String(pesoFinal)+"}";
  }
}
