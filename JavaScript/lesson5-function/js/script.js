// function name(params){action}

// function info(){
//     console.log("Hello");
// }
// info();

// const info = function(){
//     console.log('info');
// }
// info();

// (function info(){
//     console.log('info');
// })()

// function info(a=10,b=10){
//     let c= a+b;
//     if (c<10) {
//         return c + ":" + "10-";
//     }else if(c>10){
//         return c + ":" + "10+";
//     }else{
//         return c;
//     }
// }

// NaN => Not a Number

// console.log(info(51,1));

// ()=>{}

// const info =(a)=>{
//    return 'arrow func'+a;
// }

// console.log(info('hello'));

// const dataOut = (comingData)=>{
//     return comingData;
// }

// const dataIn =(infoOne,infoTwo)=>{
//     let totalInfo = infoOne + infoTwo;
//     console.log(dataOut(totalInfo));

// }

// dataIn(10,20);
// dataIn(100,200);
// dataIn(140,240);

// const car={
//     title:"BMW",
//     model:"X5",
//     color:"red",
//     speed:function(km,hour){
//         let currentSpeed = km/hour;
//         return car.model+" speed is:"+ currentSpeed +"km/h";
//     }
// }
// console.log(car.speed(100,5));

// import {schoolProduct,officeProduct} from './data.js'

import * as output from "./data.js";

const productList = (comingData) => {
  for (let i = 0; i < comingData.length; i++) {
    // console.log(
    //   `product name: ${comingData[i].title} | product price :${comingData[i].price} manat | product color:${comingData[i].color} | product new: ${comingData[i].newProduct}`,
    // );
    console.log(
        `product name: %c${comingData[i].title}`,
        "background-color:red; color:white"
      );
      console.log(
        `product price: %c${comingData[i].price}manat`,
        "background-color:black; color:green"
      );
      console.log(
        `product color: %c${comingData[i].color}`,
        "background-color:bisque; color:black"
      );
      console.log(
        `product new: %c${comingData[i].newProduct}`,
        "background-color:blue; color:orange"
      );
      console.log("===========================================");
  }
};

console.log(output.officeProduct.length);
productList(output.schoolProduct);
productList(output.officeProduct);
