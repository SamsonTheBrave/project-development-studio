/* 
  This sketch monitors if the Bean is connected to a device or not. 
  
  The on-board LED is green when the Bean is connected and red when it's not.
  
  Please note that the LED quickly will drain the battery.
  
  This example code is in the public domain.
*/

bool connected = false;
unsigned long previousMillis = 0;        // will store last time LED was updated

// constants won't change :
const long interval = 1000;;
int ledState = LOW; 

void setup() {
 Bean.enableWakeOnConnect( true ); 
 
}

void loop() {
  connected = Bean.getConnectionState();
  if(connected){
    // Turn the LED green
      unsigned long currentMillis = millis();
 
    if(currentMillis - previousMillis >= interval) {
      // save the last time you blinked the LED 
      previousMillis = currentMillis;   
  
      // if the LED is off turn it on and vice-versa:
      if (ledState == LOW){
        ledState = HIGH;
        Bean.setLed(0, 0, 255);
      }
      else {
        ledState = LOW;
        Bean.setLed(0, 0, 0);
      // set the LED with the ledState of the variable:
      }
    }
    
  }
  else{
    // Turn the LED red
    Bean.setLed(255, 0, 0);
    delay(1000);
    Bean.setLed( 0, 0, 0 );
   // Sleep unless woken
    Bean.sleep( 0xFFFFFFFF );
  }
  Bean.sleep(100);
}
