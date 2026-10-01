void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
  pinMode(0, OUTPUT);

  Serial.begin(9600);
  Serial.println("Arduino opgestart");
}

void loop() {
  toggleLed();
  
}

void toggleLed() {
  if(Serial.available()) {
    String incoming = Serial.readStringUntil('\n');
    incoming.trim(); // spaties wissen

    if(incoming == "LED_ON") {
        digitalWrite(0, 1);
    }
    if(incoming == "LED_OFF") {
        digitalWrite(0, 0);
    }
  }
}