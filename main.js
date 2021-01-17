// all javascript code is valid typescript code
//but valid typescript code isnt always valid javascript code
// **lesson 1
// function log(message){
//     console.log(message);
// }
// var message = 'Hello World';
// log(message);
//**lesson 2 -
//catch errors at compile time instead of runtime like js
//use let keyword instead of var to catch more errors at compile time
//i has error but still generates valid js code.
//its just that ts transpiles to es5 js code which doesnt have
//the lets keyword, but if u run main.js everything will still work
//anyhow 
// function doSomething(){
//     for(let i = 0; i < 5; i++){
//         console.log(i);
//     }
//     console.log('Finally: ' + i);
// }
// doSomething();
// **lesson 3 - (variable types and enums)
//hover mouse over variable name to see type
// let a: number; //if you dont know value before hand 
// let b: boolean;
// let c: string;
// let d: any; //js is like this always, dont want to do this in ts...want variables to have only one type
// //any lets you change type that variable has by simply redefining...no type casting needed
// let e: number[] = [1,2,3];
// //enums are for related constants...color in this case
// // better to explicitly define just in case someone adds a new value
// //in the middle 
// enum Color {Red = 0, Green = 1, Blue = 2};
// let backgroundColor = Color.Red;
// **lesson 4 - type assertions 
//type of variable isnt going to be changed in runtime,
//purely just a way to access intelligience that completes 
//code you want to type
// let message;
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');
// **lesson 5 - arrow functions
// let log = function(message){
//     console.log(message);
// }
// let doLog = (message) => console.log(message)
// ** lesson 6 - custom types
//use encapsulation by calling point instead of x y
//inline annotation for point object with data to enter
//if alot of data, use an interface
// interface lets you define your object with the types of data it should
// take in 
// interfaces include declarations, no implementations
// **lesson 7, 8 use classes instead of interfaces so you dont violate the cohesion principle
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + 'Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
