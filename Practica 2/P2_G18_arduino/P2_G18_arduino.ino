//////// Para el luxometro//////
#include <Wire.h>
#include <BH1750.h>
BH1750 sensor_lumens;
///////////////////////////////

long actual = 0; //Para el tiempo

void setup() {
  Wire.begin();
  sensor_lumens.begin();
  Serial.begin(9600);
  analogReference(INTERNAL1V1);// pone como referencia interna rango 1.1V
  calibrarFotoresistencias();
}

void loop() {
  if(millis()-actual>4000){
    actual = millis();
    Serial.println(getJson());
  }
}

String getJson(){
  return "{"+getTemperatureHumidity()+","+getDirection()+","+getVelocidad()+","+getLumens()+"}";
}
