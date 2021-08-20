//Anemómetro 
float velocidad = 0;
float v1 = 0;
float temp = 0;
int a4 = 4; 

String getVelocidad() {
  v1 = (analogRead(a4)); // lectura de sensor A0
  velocidad= (v1*0.190); // 0.190 pendiente de la curva

  String v = "\"velocidad\":";
  v.concat(velocidad); 
   
  return (v);
}
