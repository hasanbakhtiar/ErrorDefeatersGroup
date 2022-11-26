// ES5
// function Car(brand,model,year){
//     this.ibrand = brand;
//     this.imodel = model;
//     this.iyear = year;
// }
// Car.prototype.color = "blue";
// const infoCar = new Car("BMW","X5",2022);
// console.log(infoCar.color);

// ES6


import {Car} from './Car.js'
import {Moto} from './Moto.js'

Car.prototype.color = "blue";
const infoCar = new Car("BMW","X5",2022);
const infoMoto = new Moto("Yamaha","s500",2020) 
console.log(infoCar.calculateSpeed(100,2));
console.log(infoMoto.calculateSpeed(200,3));
