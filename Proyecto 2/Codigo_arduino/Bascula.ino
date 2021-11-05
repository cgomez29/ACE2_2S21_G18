float var = 0;
long int repetidas = 0;

String peso(){
  var = bascula.get_units();
  if(var <= 0.5){
    Tbas=millis()+30000;
    repetidas = 0;
    return "{\"peso\":-1}";
  }else{
    Tbas=millis()+30000;
    repetidas += 1;
    if(repetidas>=240){
      vibradorActivo = 1;
      repetidas = 0;
    }
    return "{\"peso\":"+String(var)+"}";
  }
}
