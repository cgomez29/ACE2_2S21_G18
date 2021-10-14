const int sensorNorte = 0; //Azul
const int sensorOeste = 1; //Blanco-Azul
const int sensorSur = 2; // Cafe
const int sensorEste = 3; // Blanco-Cafe
int sensorMinNorte = 1023;
int sensorMinOeste = 1023;
int sensorMinSur = 1023;
int sensorMinEste = 1023;
String direccionActual = "\"direccion\":0";

void calibrarFotoresistencias(){
  int valueNorte = 0, valueOeste = 0, valueSur = 0, valueEste = 0;
  while (millis() < 5000) {
    valueNorte = analogRead(sensorNorte);
    valueOeste = analogRead(sensorOeste);
    valueSur = analogRead(sensorSur);
    valueEste = analogRead(sensorEste);
    if (valueNorte < sensorMinNorte) {
      sensorMinNorte = valueNorte;
    }
    if (valueOeste < sensorMinOeste) {
      sensorMinOeste = valueOeste;
    }
    if (valueSur < sensorMinSur) {
      sensorMinSur = valueSur;
    }
    if (valueEste < sensorMinEste) {
      sensorMinEste = valueEste;
    }
  }
}

String getDirection(){
  String dir = "\"direccion\":";
  int valorNorte = analogRead(sensorNorte);
  int valorOeste = analogRead(sensorOeste);
  int valorSur = analogRead(sensorSur);
  int valorEste = analogRead(sensorEste); 
  if(valorNorte<sensorMinNorte){
    dir.concat("0");
    direccionActual = dir;
    return dir;
  }else if(valorOeste<sensorMinOeste){
    dir.concat("1");
    direccionActual = dir;
    return dir;
  }else if(valorSur<sensorMinSur){
    dir.concat("2");
    direccionActual = dir;
    return dir;
  }else if(valorEste<sensorMinEste){
    dir.concat("3");
    direccionActual = dir;
    return dir;
  }else{
    return direccionActual;
  }
}
