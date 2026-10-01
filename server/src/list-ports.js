import { SerialPort } from "serialport";

async function listPorts() {
    const ports = await SerialPort.list();

    if(ports.length === 0) {
        console.log("No serial ports found.");
        return;
    }

    const portsReadable = ports.map(({
        path, manufacturer, serialNumber, vendorId, productId
    }) => ({
        path,
        manufacturer: manufacturer ?? "--",
        serialNumber: serialNumber ?? "--",
        vendorId: vendorId ?? "--",
        productId: productId ?? "--",
    }));

    console.table(portsReadable);
}

await listPorts();