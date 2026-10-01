import { SerialPort } from "serialport";

const arduino = new SerialPort({
    path: "/dev/tty.usbmodem1202",
    baudRate: 9600
});

arduino.on("open", () => {
    console.log("Arduino is verbonden");

    led_on();
});

arduino.on("error", (error) => {
    console.log("ERROR:", error.message);
});

function led_on() {
    arduino.write("LED_ON\n");
    console.log("LED_ON verstuurd");
}

function led_off() {
    arduino.write("LED_OFF\n");
    console.log("LED_OFF verstuurd");
}