const device = {
     sensorModel: "HC04",
    count: 0,
    date: new Date(),
};


console.log(device.date.getFullYear());

const deviceJSON = JSON.stringify(device);
console.log(deviceJSON, typeof deviceJSON);
// Crear un JSON desde code//

const myJson = '{"name": "Antonio", "edad": 20, "friends": ["Miguel", "Metri"],"isMannager": false}'
console.log(myJSON, typeof myJson);

//Manipular JSON format.7
//convertir un JSON a un objeto de JS;
const myObject = JSON.parse(myJson);
console.log(myObj.name);