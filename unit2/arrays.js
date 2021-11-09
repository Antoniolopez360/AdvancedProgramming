//Create an Array

var myArray = [1,2,3,4,5];
// Var myArray2= new Array(1,2,3);
//Longitud de arrys
const ln = myArray.length;
console.log(ln);


 // Show Array;

 console.log(myArray);

 //Iterate Array

 for(let i = 0; i<ln; i++){
     console.log(myArray[i]);
 };
 console.log("---");
 for(let i in myArray[i]){
        console.log(myArray[1]);
};
console.log("---");
 for(let i of myArray){
        console.log(1);
}

//Adding elements;
let data = [];
console.log(data);
const temp = 27;
data.push(temp);
data.push(12);
data.push(60);

//Insert first element
data.unshift(12);
console.log(data);
// insert multiple data
data.splice(2,0,3,4);
console.log(data);

///* Delete elements */
data.pop();
data.shift();
data.splice(1,3,500);
console.log(data);

// Copiar
var friends = ["Luis","Rafael","Carla"];
//quero copiar este array!
var bestFriend = friends.slice();
//bestFriend.shift();

console.log(friends);
console.log(bestFriend);

 //Quiero restar dos unidades a todos los items
var edades = [20, 22, 23, 24];
edades = edades.map(i => i - 2);
//for(let i = 0; i< edades.length; i++){
//    edades[i] = edades[i] - 2;
//
//};
console.log(edades);