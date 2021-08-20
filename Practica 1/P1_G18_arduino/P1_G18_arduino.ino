long actual = 0;
void setup() {
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
  return "{"+getTemperatureHumidity()+","+getDirection()+","+getVelocidad()+"}";
}
