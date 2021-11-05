void analizarVibrador(int tfinal,int tactual){
  if(tfinal-tactual<=0){
    digitalWrite(vibrador, LOW);
    vibradorActivo = 0;
  }else{
    digitalWrite(vibrador, HIGH);
  }
}
