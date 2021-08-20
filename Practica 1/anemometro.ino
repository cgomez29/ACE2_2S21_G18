//Anemómetro 
float velocidad = 0;
float v1 = 0;
float temp = 0;
int a4 = 4; 

void setup() {
  Serial.begin(9600); //Baudios
  analogReference(INTERNAL1V1);// pone como referencia interna rango 1.1V
}

void loop() {  
  Serial.println(getVelocidad());
  delay(3000);
}

String getVelocidad() {
  v1 = (analogRead(a4)); // lectura de sensor A0
  velocidad= (v1*0.190); // 0.190 pendiente de la curva

  String v = "\"velocidad\":";
  v.concat(velocidad); 
   
  return ("{"+v+"}");  
  /*if (velocidad > temp){
    temp = velocidad;   
    Serial.print(temp);
    Serial.println("Max");
  }*/
}
