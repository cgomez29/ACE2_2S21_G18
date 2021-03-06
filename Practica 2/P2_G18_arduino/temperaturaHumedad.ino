#include <dht.h>
dht DHT;
#define DHT11_PIN 2

String getTemperatureHumidity()
{
    String temperature = "\"temperatura\":";
    String humidity = "\"humedad\":";

    // Lee la informacion que envia el sensor
    DHT.read11(DHT11_PIN);

    // TEMPERATURA
    temperature.concat(DHT.temperature);

    // HUMEDAD RELATIVA
    humidity.concat(DHT.humidity);

    // JSON
    return (temperature + "," + humidity);
}
