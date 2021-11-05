float valores = 0; int repeticiones = 0, vibradorActivo = 0;
//Para el sensor de luz
#include <Wire.h>
#include <BH1750.h>
BH1750 sensor_lumens;
//Creamos el objeto bascula
#include "HX711.h"
#define DEBUG_HX711
//Variables para la bascula
#define CALIBRACION 21720.0
byte pinData = 3;   //Data en pin 3
byte pinClk = 2;    //Clock en pin 2
HX711 bascula;
//Variables para el ultrasonico
int TRIG = 10;      // trigger en pin 10
int ECO = 9;        // echo en pin 9

//Para medir el tiempo
long Tsensor = 10000;
long Tbas = 30000;

//Para el vibrador
byte vibrador = 5;
long actual = 4000;

void setup() {
  /***************** Para el vibrador **********************/
  pinMode(vibrador, OUTPUT);
  /************** Para el sensor de luz ********************/
  Wire.begin();
  sensor_lumens.begin();
  analogReference(INTERNAL1V1);
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

void loop() {
  long milis1 = millis();
  long result1 = Tsensor - milis1;
  if(result1<=0){
    Serial.println("{\"proximidad\":"+distance()+",\"luz\":"+lumens()+"}");
  }
  long vpr = millis();
  long result = Tbas - vpr;
  if(result<=0){
    Serial.println(peso());
  }
  if(vibradorActivo==1){
    analizarVibrador(actual, millis());
  }
}
