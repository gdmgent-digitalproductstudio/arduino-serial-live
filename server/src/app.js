import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { led_on, toggleLED } from "./serial.js";

// directories
const curDir = path.dirname(fileURLToPath(import.meta.url));
const clientDir = path.resolve(curDir, "../../client");

const app = express();

app.use(express.json());
app.use(express.static(clientDir));

const server = app.listen('9041', () => {
    console.log('Server actief op poort 9041 #UUSTAKKER');
    console.log("http://127.0.0.1:9041");
});

led_on();
