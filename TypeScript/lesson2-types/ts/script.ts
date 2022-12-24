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


var switchButton:boolean = true;
var firstModel:string[] = ['X5',"X6",'X7'];
var secondModel:string[] = ['S500',"s600",'s700'];

var li = document.querySelectorAll<HTMLUListElement>('li');



const newCarComing=(comingData:string[])=>{
 for(let a:number=0; a<comingData.length ;a++){
        li[a].innerHTML = comingData[a];
 }
    return comingData
}

const carData=(modelOne:string[],accessData:boolean,modelTwo?:string[]):void=>{
    let totalData:string[]= modelOne;
   
    if (accessData) {
        for(let x:number=0;x<3;x++){
            console.log(newCarComing(totalData));
        }
    }else{
       console.log(newCarComing(["no car","no car","no car"]));
       
    }
}

var mybtn:any= document.querySelector<HTMLButtonElement>('button');
mybtn.onclick=():void=>{
switchButton ? switchButton = false : switchButton = true;
carData(firstModel,switchButton);
}



