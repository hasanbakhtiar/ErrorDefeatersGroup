// const info:number = 5;
// console.log(info);
// const infoArr:string[] = ['php','js','c sharp'];
// const infoArr:Array<string> = ['php','js','c sharp'];
// console.log(infoArr);
// interface carType{
//     brand:string,
//     model:string,
//     year:number
// }
// type carType={
//     brand:string,
//     model:string,
//     year:number
// }
// interface carType{
//     color:string
// }
// const car:carType ={
//     brand:'BMW',
//     model:"x5",
//     year:2022,
//     color:'white'
// }
var switchButton = true;
var firstModel = ['X5', "X6", 'X7'];
var secondModel = ['S500', "s600", 's700'];
var li = document.querySelectorAll('li');
var newCarComing = function (comingData) {
    for (var a = 0; a < comingData.length; a++) {
        li[a].innerHTML = comingData[a];
    }
    return comingData;
};
var carData = function (modelOne, accessData, modelTwo) {
    var totalData = modelOne;
    if (accessData) {
        for (var x = 0; x < 3; x++) {
            console.log(newCarComing(totalData));
        }
    }
    else {
        console.log(newCarComing(["no car", "no car", "no car"]));
    }
};
var mybtn = document.querySelector('button');
mybtn.onclick = function () {
    switchButton ? switchButton = false : switchButton = true;
    carData(firstModel, switchButton);
};
