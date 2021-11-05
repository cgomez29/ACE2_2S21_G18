int DURACION, actualDistancia = 0;
int DISTANCIA, actualPeso = 0;

String distance(){
  float d1;
  digitalWrite(TRIG, HIGH);     // generacion del pulso a enviar
  delay(1);                     // al pin conectado al trigger
  digitalWrite(TRIG, LOW);      // del sensor
  DURACION = pulseIn(ECO, HIGH);// con funcion pulseIn se espera un pulso alto
  d1 = DURACION / 58.2;         // distancia medida en centimetros
  DISTANCIA = d1;
  String resultado = "";
  resultado = String(DISTANCIA);
  if(DISTANCIA>=50 ){
    resultado = "-1";
  }else if(DISTANCIA <= 0){
    resultado = "-1";
  }else{
    resultado = String(DISTANCIA);
    actualDistancia = DISTANCIA;
  }
  Tsensor = millis()+10000;
  return resultado;
}
