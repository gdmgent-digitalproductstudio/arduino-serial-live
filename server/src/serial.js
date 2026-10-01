import { ReadlineParser } from "@serialport/parser-readline";
import { SerialPort } from "serialport";

const arduino = new SerialPort({
    path: "/dev/tty.usbmodem1202",
    baudRate: 9600
});

let LED = true;

export function led_on() {
    arduino.write("LED_ON\n");
    LED = true;
}

export function led_off() {
    arduino.write("LED_OFF\n");
    LED = true;
}

export async function toggleLED() {
    arduino.write(LED ? "LED_ON\n" : "LED_OFF\n");
    LED = !LED;
}

