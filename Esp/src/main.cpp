#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>
#include <ESP8266HTTPClient.h>
// Set these to run example.
#define FIREBASE_HOST "espdata-7c788.firebaseio.com"
#define FIREBASE_AUTH "rbzvsdonlWYpmQGXwKIeRsIEDo033iL4HUViISvs"
#define WIFI_SSID "Deniver"
#define WIFI_PASSWORD "p4a4s4t8"
void setup()
{
  Serial.begin(115200);
  pinMode(A0, INPUT);
  pinMode(15, OUTPUT);
  // connect to wifi.
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("connecting");
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("connected: ");
  Serial.println(WiFi.localIP());

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
}

void loop()
{

  Firebase.setFloat("Potenciometro", analogRead(A0));
  if (Firebase.failed())
  {
    Serial.print("setting /number failed:");
    Serial.println(Firebase.error());
    return;
  }

  Serial.print("number: ");
  Serial.println(Firebase.getFloat("Potenciometro"));

  Serial.println(Firebase.getBool("Led"));
  if (Firebase.getBool("Led") == 1)
  {
    digitalWrite(15, HIGH);
  }
  else
  {
    digitalWrite(15, LOW);
  }
  delay(1000);
  /*   Firebase.remove("number");
  delay(1000);
  */
}
